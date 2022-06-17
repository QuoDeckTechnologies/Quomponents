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
        content={{ name: "Default Label", checked: false }}
        onClick={() => {}}
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

  it("should render correctly when asFloated is left", () => {
    component.setProps({
      asFloated: "left",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asFloated is right", () => {
    component.setProps({
      asFloated: "right",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asFloated is none", () => {
    component.setProps({
      asFloated: "none",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asFloated is inline", () => {
    component.setProps({
      asFloated: "inline",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props is false", () => {
    component.setProps({
      isDisabled: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props is true", () => {
    component.setProps({
      isDisabled: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error", () => {
    component.setProps({
      content: {
        name: "default-name",
      },
    });
    component.find("#qui-check-box-element-default-name").simulate("change", {
      target: { value: "Enable Checkbox", checked: true },
    });
  });

  it("should render correctly without throwing error", () => {
    let wrapper = mount(
      <CheckBox
        content={{ name: "Default Label", checked: false }}
        onClick={() => {}}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
