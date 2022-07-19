//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import RadioButton from "../RadioButton/RadioButton.react";
import { Radio } from "@mui/material";

describe("RadioButton", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: RadioButton,
    required: {
      onClick: () => {},
    },
    translations: {
      tgt: "radioButton",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          radioButton: { label: "डिफ़ॉल्ट रेडियो" },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("sizes", args);
  hasValid("positions", args);
  hasValid("padding", args);
  hasValid("alignment", args);
  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------

  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <RadioButton targetName="target" label="label" onClick={() => {}} />
    );
  });

  it("should render correctly when clicked", () => {
    let wrapper = mount(
      <RadioButton targetName="target" label="label" onClick={() => {}} />
    );
    wrapper
      .find(Radio)
      .props()
      .onChange({ target: { value: "value", checked: true } });
    expect(wrapper.exists()).toBe(true);
  });
});
