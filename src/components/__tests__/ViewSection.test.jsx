import React from "react";
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
import ViewSection from "../RibbonMenu/homeMenu/sections/ViewSection.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("ViewSection", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: ViewSection,
    required: {
      actions: {
        setUserOptions: jest.fn(),
      },
      onClick: () => {},
    },
    translations: {
      tgt: "viewSection",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          viewSection: {
            view: "दृश्य",
            sorter: "छँटाईकर्ता",
            mobile: "मोबाइल",
            desktop: "डेस्कटॉप",
            comments: "टिप्पणियाँ",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("translations", args);
  hasValid("toggles", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component, actions, onClick;
  actions = {
    setUserOptions: jest.fn(),
  };
  onClick = jest.fn();
  const dictionary = JSON.stringify({
    en: {
      viewSection: {
        view: "View",
        sorter: "Sorter",
        mobile: "Mobile",
        desktop: "Desktop",
        comments: "Comments",
      },
    },
    hi: {
      viewSection: {
        view: "दृश्य",
        sorter: "छँटाईकर्ता",
        mobile: "मोबाइल",
        desktop: "डेस्कटॉप",
        comments: "टिप्पणियाँ",
      },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ViewSection
        actions={actions}
        asFloated="left"
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={onClick}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated prop as left", () => {
    component.setProps({ asFloated: "left" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated prop as right", () => {
    component.setProps({ asFloated: "right" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated prop as inline", () => {
    component.setProps({ asFloated: "inline" });
    expect(component.exists()).toBe(true);
  });

  it("should render translation of component in hindi", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "viewSection",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if translation is not defined", () => {
    component.setProps({
      withTranslation: {
        lang: "mr",
        tgt: "viewSection",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props as false", () => {
    component.setProps({ isHidden: false });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props as true", () => {
    component.setProps({ isHidden: true });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props as false", () => {
    component.setProps({ isDisabled: false });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isDisabled: true });
    expect(component.exists()).toBe(true);
  });

  it("should pass the sorter value when click on sorter icon", () => {
    component.find(IconLink).at(0).simulate("click");
    expect(actions.setUserOptions).toBeCalledWith({ preferredView: "sorter" });
  });

  it("should pass the sorter value when click on sorter text", () => {
    component.find(".qui-ribbon-menu-label").at(0).simulate("click");
    expect(actions.setUserOptions).toBeCalledWith({ preferredView: "sorter" });
  });

  it("should pass the mobile value when click on mobile icon", () => {
    component.find(IconLink).at(1).simulate("click");
    expect(actions.setUserOptions).toBeCalledWith({ preferredView: "mobile" });
  });

  it("should pass the mobile value when click on mobile text", () => {
    component.find(".qui-ribbon-menu-label").at(1).simulate("click");
    expect(actions.setUserOptions).toBeCalledWith({ preferredView: "mobile" });
  });

  it("should pass the desktop value when click on desktop icon", () => {
    component.find(IconLink).at(2).simulate("click");
    expect(actions.setUserOptions).toBeCalledWith({ preferredView: "desktop" });
  });

  it("should pass the desktop value when click on desktop text", () => {
    component.find(".qui-ribbon-menu-label").at(2).simulate("click");
    expect(actions.setUserOptions).toBeCalledWith({ preferredView: "desktop" });
  });

  it("should pass the comments value when click on comments icon", () => {
    component.find(IconLink).at(3).simulate("click");
    expect(actions.setUserOptions).toBeCalledWith({
      preferredView: "comments",
    });
  });

  it("should pass the comments value when click on comments text", () => {
    component.find(".qui-ribbon-menu-label").at(3).simulate("click");
    expect(actions.setUserOptions).toBeCalledWith({
      preferredView: "comments",
    });
  });
});
