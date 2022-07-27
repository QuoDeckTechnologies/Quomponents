//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import renderer, { act } from "react-test-renderer";
import { render } from "@testing-library/react";
import React, { useEffect, useRef } from "react";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import DesktopNavbar from "../DesktopNavbar/DesktopNavbar.react";
import LinkIcon from "../LinkIcon/LinkIcon.react";

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
    // jest.spyOn(DesktopNavbar.prototype, "getRef").mockImplementation(() => {
    //   ref = { offsetHeight: 100 };
    // });
    component = mount(
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
    component.find(LinkIcon).at(0).simulate("click", { label: "home" });
    expect(component.exists()).toBe(true);
  });
  it("should render when clicked on LinkIcon", () => {
    component.find('.qui-desktop-navbar-link-icon-wrapper').clientWidth(2000);
    expect(component.exists()).toBe(true);
  });
  it("should render when scrolled to left", () => {
    component
      .find(".qui-desktop-navbar-link-icon-wrapper")
      .simulate("scroll", { target: { scrollLeft: 0 } });
    expect(component.exists()).toBe(true);
  });
  it("should render when scrolled to right", () => {
    component
      .find(".qui-desktop-navbar-link-icon-wrapper")
      .simulate("scroll", { target: { scrollLeft: 200 } });
    expect(component.exists()).toBe(true);
  });
});
