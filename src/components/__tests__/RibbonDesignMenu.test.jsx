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
import RibbonDesignMenu from "../RibbonMenu/designMenu/RibbonDesignMenu.react";

describe("RibbonDesignMenu", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: RibbonDesignMenu,
    translations: {
      tgt: "ribbonDesignMenu",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        en: {
          ribbonDesignMenu: {
            overlayBackground: "Overlay Background",
            slideBackground: "Slide Background",
            setBackground: "Set",
            removeBackground: "Remove",
            settings: "Settings",
            pageColor: "Page Color",
            primaryColor: "Primary Color",
            accentColor: "Accent Color",
            secondaryColor: "Secondary Color",
          },
        },
        hi: {
          ribbonDesignMenu: {
            overlayBackground: "उपरिशायी पृष्ठभूमि",
            slideBackground: "स्लाइड पृष्ठभूमि",
            setBackground: "सेट",
            removeBackground: "निकाले",
            settings: "समायोजन",
            pageColor: "पृष्ठ रंग",
            primaryColor: "प्राथमिक रंग",
            accentColor: "स्वरोंका रंग",
            secondaryColor: "द्वितीयक रंग",
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

  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <RibbonDesignMenu
        asFloated="left"
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={jest.fn()}
      />
    );
  });
});
