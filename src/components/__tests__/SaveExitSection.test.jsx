import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import SaveExitSection from "../RibbonMenu/htmlMenu/sections/SaveExitSection.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("SaveExitSection", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    en: {
      saveExitSection: {
        saveExit: "Save & Exit",
      },
    },
    hi: {
      saveExitSection: {
        saveExit: "सेहेजे & बाहर निकले",
      },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <SaveExitSection
        asFloated="left"
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={jest.fn()}
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
        tgt: "saveExitSection",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if translation is not defined", () => {
		component.setProps({
			withTranslation: {
				lang: "mr",
				tgt: "saveExitSection",
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

  it("should save & exit the deck", () => {
    component.find(IconLink).simulate("click");
    expect(component.exists()).toBe(true);
  });
});
