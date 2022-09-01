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
import AnalysisSection from "../RibbonMenu/toolsMenu/sections/AnalysisSection.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("AnalysisSection", () => {
  const args = {
    target: AnalysisSection,
    required: {
      onClick: () => {},
    },
    translations: {
      tgt: "analysisSection",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        en: {
          analysisSection: {
            analysis: "Check Answer",
          },
        },
        hi: {
          analysisSection: {
            analysis: "अपना उत्तर जाँच लें",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
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
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(<AnalysisSection onClick={jest.fn()} />);
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should open and close Deck Analysis Modal", () => {
    component.find(IconLink).simulate("click");
  });
});
