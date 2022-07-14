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
import OptionItemThree from "../OptionItem/OptionItemThree/OptionItemThree.react";

describe("Option Item Three", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: OptionItemThree,
    required: {
      onSelect: () => {},
      onUpload: () => {},
      onClick: () => {},
    },
    translations: {
      tgt: "optionItemThree",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          optionItemThree: {
            correct: "सही",
            incorrect: "ग़लत",
            uploadButton: "अपलोड",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("colors", args);
  hasValid("translations", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------

  let component;

  const dictionary = JSON.stringify({
    hi: {
      optionItemThree: {
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
      <OptionItemThree
        targetName="name"
        image={null}
        checked={false}
        withColor={null}
        withAnimation={null}
        isDisabled={false}
        isHidden={false}
        onSelect={() => {}}
        onUpload={() => {}}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    let component = mount(
      <OptionItemThree
        targetName="name"
        checked={false}
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
        tgt: "optionItemThree",
        dictionary: dictionary,
      },
    });
    component
      .find(".qui-option-item-three-radio")
      .simulate("change", { target: { checked: true } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when radio button is used", () => {
    component.setProps({
      targetName: null,
    });
    component
      .find(".qui-option-item-three-radio")
      .simulate("change", { target: { checked: true } });
  });

  it("should render correctly without throwing error when radio and upload button is used and target name is not provided", async () => {
    component.setProps({
      targetName: null,
      checked: false,
    });
    component
      .find(".qui-option-item-three-radio")
      .simulate("change", { target: { checked: true } });
    component.find("OptionalImageField").simulate("upload", {});
    await pauseFor(100);
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
  });

  it("should render correctly when file is uploaded", async () => {
    component.find("OptionalImageField").simulate("upload", {});
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });
});
