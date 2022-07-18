//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemSeven from "../OptionItem/OptionItemSeven/OptionItemSeven.react";

describe("Option Item Seven", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: OptionItemSeven,
    required: {
      targetName: "name",
      value: "value",
      image: {},
      placeholder: "placeholder",
      checked: false,
      maxLength: 300,
      onInput: () => {},
      onSelect: () => {},
      onUpload: () => {},
      onClick: () => {},
    },
  };

  hasValid("defaults", args);
  hasValid("colors", args);
  hasValid("animations", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------

  let component;

  const dictionary = JSON.stringify({
    hi: {
      optionItemSeven: {
        placeholder: "प्रश्नोत्तरी परिणाम के लिए संदेश",
        correct: "सही",
        incorrect: "ग़लत",
        uploadButton: "अपलोड",
      },
    },
  });

  const pauseFor = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemSeven
        targetName=""
        value=""
        image={null}
        placeholder="placeholder"
        checked={false}
        maxLength={300}
        withColor={{
          backgroundColor: "",
          accentColor: "",
          textColor: "",
        }}
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isDisabled={false}
        isHidden={false}
        onInput={() => {}}
        onSelect={() => {}}
        onUpload={() => {}}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    let component = mount(
      <OptionItemSeven
        targetName=""
        value=""
        image={null}
        placeholder="placeholder"
        checked={false}
        onInput={() => {}}
        onSelect={() => {}}
        onUpload={() => {}}
        onClick={() => {}}
      />
    );
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withTranslation prop is passed and radio button is used", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "optionItemSeven",
        dictionary: dictionary,
      },
    });
    component
      .find(".qui-option-item-radio")
      .simulate("change", { target: { checked: true } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when wriiten in input field", () => {
    component.find("InputField").simulate("submit");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when radio button is used", () => {
    component
      .find(".qui-option-item-radio")
      .simulate("change", { target: { checked: true } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when file is uploaded", async () => {
    component.find("OptionalImageField").simulate("upload", {});
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });
});
