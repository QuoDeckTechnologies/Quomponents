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
import OptionItemFive from "../OptionItem/OptionItemFive/OptionItemFive.react";

describe("Option Item Five", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: OptionItemFive,
    required: {
      onInput: () => { },
      onClick: () => { },
      onUpload: () => { },
    },
    translations: {
      tgt: "optionItemFive",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          optionItemFive: {
            placeholder: "विकल्प आइटम पांच",
            uploadButton: "अपलोड",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("hidden", args);
    hasValid("disabled", args);

  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;

  const pauseFor = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemFive
        content={{
          targetName: "name",
          value: "",
          placeholder: "placeholder",
          image: {},
          maxLength: 300,
        }}
        onInput={() => { }}
        onUpload={() => { }}
        onClick={() => { }}
      />
    );
  });


  it("should render correctly without throwing error", () => {
    let component = mount(
      <OptionItemFive
        content={{
          targetName: "name",
          value: "",
          placeholder: "placeholder",
          image: {},
        }}
        onInput={() => { }}
        onUpload={() => { }}
        onClick={() => { }}
      />
    );
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when wriiten in input field", () => {
    component.find("InputField").simulate("submit");
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
  });

  it("should render correctly when file is uploaded", async () => {
    component.find("ImageField").simulate("click", {});
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });
});
