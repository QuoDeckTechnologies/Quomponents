//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import { fireEvent, render, screen } from "@testing-library/react";

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
      content: { name: "Default Label", checked: false },
      onClick: () => { },
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
      })
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("positions", args);
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
      <CheckBox
        content={{ name: "Default Label", checked: false }}
        onClick={() => { }}
      />
    );
  });

  it("should render correctly when passed withColor", () => {
    component.setProps({
      withColor: {
        accentColor: "#ffffff",
        textColor: "#ffffff",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asSize is tiny", () => {
    component.setProps({
      asSize: "tiny",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asSize is normal", () => {
    component.setProps({
      asSize: "normal",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asSize is huge", () => {
    component.setProps({
      asSize: "huge",
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error", () => {
    component.setProps({
      name: "default-name",
    });
    component.find("#qui-check-box-element-default-name").simulate("change", {
      target: { value: "Enable Checkbox", checked: true },
    });
  });

  it("should render correctly without throwing error", () => {
    let wrapper = mount(
<<<<<<< HEAD
      <CheckBox
        content={{ name: "Default Label", checked: false }}
        onClick={() => { }}
      />
=======
      <CheckBox name="Default Label" checked={false} onClick={() => {}} />
>>>>>>> 2ebbd60935aaf38fd18d7b8a6e465e229144ad3e
    );
    expect(wrapper.exists()).toBe(true);
  });
});
