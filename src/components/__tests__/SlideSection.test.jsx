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
import SlideSection from "../RibbonMenu/homeMenu/sections/SlideSection.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("SlideSection", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: SlideSection,
    required: {
      actions: {
        addSlide: jest.fn(),
        duplicateSlide: jest.fn(),
        deleteSlide: jest.fn(),
      },
    },
    translations: {
      tgt: "slideSection",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        en: {
          slideSection: {
            slide: "Slide",
            newSlide: "New Slide",
            duplicateSlide: "Duplicate Slide",
            deleteSlide: "Delete Slide",
          },
        },
        hi: {
          slideSection: {
            slide: "स्लाइड",
            newSlide: "नई स्लाइड",
            duplicateSlide: "स्लाइड प्रतिलिपि करे",
            deleteSlide: "स्लाइड हटाए",
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

  let component, actions, deck;
  actions = {
    addSlide: jest.fn(),
    duplicateSlide: jest.fn(),
    deleteSlide: jest.fn(),
  };
  deck = {
    content: [{}, {}],
  };
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <SlideSection
        actions={actions}
        deck={deck}
        asFloated="left"
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={jest.fn()}
      />
    );
  });

  it("should add new slide", () => {
    component.find(IconLink).at(0).simulate("click");
  });

  it("should duplicate slide", () => {
    component.find(IconLink).at(1).simulate("click");
  });

  it("should delete slide", () => {
    component.find(IconLink).at(2).simulate("click");
  });

  it("should disable the delete button if there is only 1 slide in the deck", () => {
    expect(component.find(IconLink).at(2).props().isDisabled).toBe(false);
    let deck = {
      content: [{}],
    };
    component.setProps({ deck: deck });
    expect(component.find(IconLink).at(2).props().isDisabled).toBe(true);
  });
});
