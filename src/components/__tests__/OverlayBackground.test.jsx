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
import OverlayBackground from "../RibbonMenu/designMenu/sections/OverlayBackground.react";
import ImageUploadModal from "../ImageUploadModal/ImageUploadModal.react";

describe("OverlayBackground", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: OverlayBackground,
    required: {

      onClick: () => { },
    },
    translations: {
      tgt: "overlayBackground",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        en: {
          overlayBackground: {
            overlayBackground: "Overlay Background",
            setBackground: "Set",
            removeBackground: "Remove",
          },
        },
        hi: {
          overlayBackground: {
            overlayBackground: "उपरिशायी पृष्ठभूमि",
            setBackground: "सेट",
            removeBackground: "निकाले",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);

  hasValid("positions", args);

  hasValid("translations", args);

  hasValid("hidden", args);
  hasValid("disabled", args);

  // -------------------------------------
  // Run component specific tests
  // -------------------------------------

  let component, actions, deck;
  actions = {
    updateDeck: jest.fn(),
  };
  deck = {
    backgroundImage: "",
  };
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OverlayBackground
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

  it("should open image modal when clicked on set button", () => {
    component.find(".qui-ribbon-menu-label-set").simulate("click");
    expect(component.find(ImageUploadModal).exists()).toBe(true);
  });

  it("should set image when clicked on save button", () => {
    component.find(".qui-ribbon-menu-label-set").simulate("click");
    expect(component.find(ImageUploadModal).exists()).toBe(true);
    component.find(ImageUploadModal).simulate("click");
  });

  it("should remove image when click on remove button", () => {
    component.find(".qui-ribbon-menu-label-remove").simulate("click");
  });

  it("should close the modal when clicked on close button", () => {
    component.find(".qui-ribbon-menu-label-set").simulate("click");
    expect(component.find(ImageUploadModal).exists()).toBe(true);
    component.find(ImageUploadModal).simulate("close");
    expect(component.find(ImageUploadModal).exists()).toBe(false);
  });
});
