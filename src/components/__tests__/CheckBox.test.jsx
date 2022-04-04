//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import CheckBox from "../CheckBox/CheckBox.react";

describe("CheckBox", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------

  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <CheckBox
        content={{ label: "Default Label", checked: false }}
        onClick={(e) => {
          console.log(e);
        }}
      />
    );
  });

  it("should render correctly without throwing error", () => {
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
    component
      .find("#qui-check-box-element")
      .at(0)
      .simulate("change", {
        target: { value: "Enable Checkbox", checked: true },
      });
  });

  it("should render correctly without throwing error", () => {
    let wrapper = mount(
      <CheckBox
        content={{ label: "Default Label", checked: false }}
        onClick={(e) => {
          console.log(e);
        }}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
