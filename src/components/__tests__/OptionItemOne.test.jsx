//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemOne from "../OptionItem/OptionItemOne/OptionItemOne.react";

describe("Option Item One", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: OptionItemOne,
    required: {
      onInput: () => {},
      onClick: () => {},
    },
    translations: {
      tgt: "optionItemOne",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          optionItemOne: {
            placeholder: "प्रश्नोत्तरी परिणाम के लिए संदेश",
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

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemOne
        content={{
          targetName: "name",
          value: "",
          placeholder: "placeholder",
          maxLength: 300,
        }}
        onInput={() => {}}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error when written in input field", () => {
    component.find("InputField").simulate("submit");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
    expect(component.exists()).toBe(true);
  });
});
