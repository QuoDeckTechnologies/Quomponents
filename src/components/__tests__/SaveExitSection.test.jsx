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
import SaveExitSection from "../RibbonMenu/htmlMenu/sections/SaveExitSection.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("SaveExitSection", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: SaveExitSection,
    translations: {
      tgt: "saveExitSection",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
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
      }),
    },
  };

  hasValid("defaults", args);

  hasValid("positions", args);
  hasValid("translations", args);

  hasValid("disabled", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
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

  it("should save & exit the deck", () => {
    component.find(IconLink).simulate("click");
    expect(component.exists()).toBe(true);
  });
});
