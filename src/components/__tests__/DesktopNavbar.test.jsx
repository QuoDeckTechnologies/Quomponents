//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import React from "react";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import DesktopNavbar from "../DesktopNavbar/DesktopNavbar.react";
import LinkIcon from "../LinkIcon/LinkIcon.react";
import Slider from "react-slick";
import SearchBar from "../SearchBar/SearchBar.react";

describe("DesktopNavbar", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: DesktopNavbar,
    required: {
      onClick: () => {},
      onSearch: () => {},
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("colors", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <DesktopNavbar
        links={[
          {
            icon: "fas fa-home",
            text: "home",
          },
          {
            icon: "fas fa-award",
            text: "my profile",
          },
          {
            icon: "fas fa-home",
            text: "home",
          },
          {
            icon: "fas fa-award",
            text: "my profile",
          },
          {
            icon: "fas fa-home",
            text: "home",
          },
          {
            icon: "fas fa-award",
            text: "my profile",
          },
          {
            icon: "fas fa-home",
            text: "home",
          },
          {
            icon: "fas fa-award",
            text: "my profile",
          },
        ]}
        user={{
          name: "Anita Majithia",
          icon: "https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg",
          menu: [
            {
              icon: "fa fa-home",
              label: "Home",
              onClick: () => {},
            },
            {
              icon: "fa fa-archive",
              label: "Archives",
              onClick: () => {},
            },
            {
              icon: "divider",
              label: "",
              onClick: () => {},
            },
            {
              icon: "fa fa-power-off",
              label: "Logout",
              onClick: () => {},
            },
          ],
        }}
        onClick={() => {}}
        onSearch={() => {}}
      />
    );
  });

  it("should render when clicked on LinkIcon", () => {
    component.find(LinkIcon).at(1).simulate("click", { label: "my profile" });
    expect(component.exists()).toBe(true);
  });

  it("should render when searched on search component", () => {
    component.find(SearchBar).simulate("click", "search");
    expect(component.exists()).toBe(true);
  });

  it("should render when clicked on left navigation button", () => {
    component.find(".qui-desktop-navigation-left-navigation").simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render when clicked on right navigation button", () => {
    component
      .find(".qui-desktop-navigation-right-navigation")
      .simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render when slide is changed", () => {
    component.find(Slider).props().beforeChange(1, 4);
    expect(component.exists()).toBe(true);
  });
});
