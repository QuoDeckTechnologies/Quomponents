//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import CheckBox from "../CheckBox/CheckBox.react";

describe("CheckBox", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: CheckBox,
    required: {
      label: "Default Label",
      checked: false,
      onClick: () => {},
    },
    translations: {
      tgt: "checkBox",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          checkBox: {
            label: "डिफ़ॉल्ट चेकबॉक्स",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("positions", args);
  hasValid("sizes", args);
  hasValid("padding", args);
  hasValid("alignment", args);
  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <CheckBox label="Default Label" checked={false} onClick={() => {}} />
    );
  });
  it("should render correctly without throwing error", () => {
    component.setProps({
      label: "default-name",
    });
    component.find("#qui-check-box-element-default-name").simulate("change", {
      target: { value: "Enable Checkbox", checked: true },
    });
    expect(component.exists()).toBe(true);
  });
});
