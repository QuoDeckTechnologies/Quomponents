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
import OptionItemSix from "../OptionItem/OptionItemSix/OptionItemSix.react";

describe("Option Item Six", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: OptionItemSix,
    required: {
      onInput: () => {},
      onCaption: () => {},
      onUpload: () => {},
      onClick: () => {},
    },
    translations: {
      tgt: "optionItemSix",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          optionItemSix: {
            placeholder: "यह विकल्प ए है",
            captionPlaceholder: "विकल्प ए के लिए कैप्शन",
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
  const pauseFor = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemSix
        targetName="target"
        value=""
        placeholder="This is option A"
        captionName="caption"
        captionValue=""
        captionPlaceholder="Caption For Option A"
        image={null}
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
        onCaption={() => {}}
        onUpload={() => {}}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    let component = mount(
      <OptionItemSix
        targetName="target"
        value=""
        placeholder="This is option A"
        onInput={() => {}}
        onCaption={() => {}}
        onUpload={() => {}}
        onClick={() => {}}
      />
    );
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when wriiten in input field", () => {
    component.find("InputField").at(0).simulate("submit");
    component.find("InputField").at(1).simulate("submit");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when file is uploaded", async () => {
    component.find("OptionalImageField").simulate("upload", {});
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
    expect(component.exists()).toBe(true);
  });
});
