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
import RibbonToolsMenu from "../RibbonMenu/toolsMenu/RibbonToolsMenu.react";

describe("RibbonToolsMenu", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: RibbonToolsMenu,
    translations: {
      tgt: "ribbonToolsMenu",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        en: {
          ribbonToolsMenu: {
            questionBank: "Question Bank",
            upload: "Upload",
            copySlidesToScript: "Copy Slides to Script",
            downloadScript: "Download Script",
            settings: "Settings",
            enableNavigation: "Enable Navigation",
            enableSlideList: "Enable Slide List",
            enableVoiceovers: "Enable Voiceovers",
            analysis: "Analysis",
          },
        },
        hi: {
          ribbonToolsMenu: {
            questionBank: "प्रश्न बैंक",
            voiceover: "पार्श्व स्वर",
            upload: "अपलोड",
            copySlidesToScript: "स्लाइड को स्क्रिप्ट में कॉपी करें",
            downloadScript: "स्क्रिप्ट डाउनलोड करें",
            settings: "समायोजन",
            enableNavigation: "पथ प्रदर्शन सक्षम करें",
            enableSlideList: "स्लाइड सूची सक्षम करें",
            enableVoiceovers: "वॉयस ओवर सक्षम करें",
            analysis: "विश्लेषण",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);

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
      <RibbonToolsMenu withTranslation={null} onClick={jest.fn()} />
    );
  });
});
