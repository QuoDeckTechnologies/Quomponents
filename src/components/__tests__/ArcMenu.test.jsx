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
import ArcMenu from "../ArcMenu/ArcMenu.react";
import ActionMenu from "../ActionMenu/ActionMenu.react";

describe("ArcMenu", () => {
  const args = {
    target: ArcMenu,
    required: {
      onClick: () => {},
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("icons", args);
  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ArcMenu menuPosition="top-right" onClick={() => {}}>
        <ActionMenu
          content={[
            {
              title: "Unpublish Deck",
              icon: "fas fa-eye-slash",
              popover: "Unpublish Deck...",
              onClick: () => {},
            },
            {
              title: "Delete Deck",
              icon: "fas fa-trash-alt",
              popover: "Delete Deck...",
              onClick: () => {},
            },
          ]}
          asPadded="normal"
          asAligned="left"
          withColor={{
            backgroundColor: "#fff",
            textColor: "",
            accentColor: "",
          }}
          withAnimation={{
            animation: "zoom",
            duration: 0.5,
            delay: 0,
          }}
          isHidden={false}
        />
      </ArcMenu>
    );
  });

  it("should render correctly whith top-left position", () => {
    component.setProps({
      menuPosition: "top-left",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with bottom-left position", () => {
    component.setProps({
      menuPosition: "bottom-left",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with bottom-right position", () => {
    component.setProps({
      menuPosition: "bottom-right",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when position not specified", () => {
    component.setProps({
      menuPosition: null,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when clicked on button", () => {
    component.find("button").simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when hovered on button", () => {
    component.find("button").simulate("mouseenter");
    component.find("button").simulate("mouseleave");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when clicked on button", () => {
    let wrapper = shallow(
      <ArcMenu menuPosition="top-right" onClick={() => {}} />
    );
    wrapper.find("button").simulate("click");
    wrapper.find(".qui-arc-menu-backdrop").simulate("click");
    expect(component.exists()).toBe(true);
  });
});
