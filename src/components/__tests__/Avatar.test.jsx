import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import Avatar from "../AppMenu/Avatar/Avatar.react";

describe("Avatar", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Avatar
        withIcon={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => console.log("Avatar testing")}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if user image link is passed to the prop", () => {
    component.setProps({
      withIcon: {
        icon:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if asVariantProp get selected to Secondary", () => {
    component.setProps({ asVariant: "secondary" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if asVariantProp get selected to Success", () => {
    component.setProps({ asVariant: "success" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if asFloatedProp get selected to Inline", () => {
    component.setProps({ asFloated: "inline" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if withColor set to any color prop", () => {
    component.setProps({ withColor: { backgroundColor: "purple" } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if withColor set to any color prop", () => {
    component.setProps({ withColor: { textColor: "red" } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if withIcon set to any other icon from font-awesome", () => {
    component.setProps({ withIcon: { icon: "fas fa-home" } });
    component.update();
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if isHidden toggled as true", () => {
    component.setProps({ isHidden: true });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if isDisabled toggled as true", () => {
    component.setProps({ isDisabled: true });
    expect(component.exists()).toBe(true);
  });
});
