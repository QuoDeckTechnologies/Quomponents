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
import RibbonMenu from "../RibbonMenu/RibbonMenu.react";
import RibbonDesignMenu from "../RibbonMenu/designMenu/RibbonDesignMenu.react";
import RibbonHomeMenu from "../RibbonMenu//homeMenu/RibbonHomeMenu.react";
import RibbonHtmlMenu from "../RibbonMenu/htmlMenu/RibbonHtmlMenu.react";
import RibbonToolsMenu from "../RibbonMenu/toolsMenu/RibbonToolsMenu.react";

describe("RibbonMenu", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: RibbonMenu,
    translations: {
      tgt: "button",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        en: {
          ribbonMenu: {
            questionBank: "Question Bank",
            upload: "Upload",
            copySlidesToScript: "Copy Slides to Script",
            downloadScript: "Download Script",
            settings: "Settings",
            enableNavigation: "Enable Navigation",
            enableSlideList: "Enable Slide List",
            enableVoiceovers: "Enable Voiceovers",
            analysis: "Analysis",
            overlayBackground: "Overlay Background",
            slideBackground: "Slide Background",
            setBackground: "Set",
            removeBackground: "Remove",
            pageColor: "Page Color",
            primaryColor: "Primary Color",
            accentColor: "Accent Color",
            secondaryColor: "Secondary Color",
            saveExit: "Save & Exit",
            download: "Download",
            save: "Save",
            file: "File",
            slide: "Slide",
            newSlide: "New Slide",
            duplicateSlide: "Duplicate Slide",
            deleteSlide: "Delete Slide",
            view: "View",
            sorter: "Sorter",
            mobile: "Mobile",
            desktop: "Desktop",
            comments: "Comments",
            enableBackArrow: "Enable Back Arrow",
            enableNextArrow: "Enable Next Arrow",
          },
        },
        hi: {
          ribbonMenu: {
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
            overlayBackground: "उपरिशायी पृष्ठभूमि",
            slideBackground: "स्लाइड पृष्ठभूमि",
            setBackground: "सेट",
            removeBackground: "निकाले",
            pageColor: "पृष्ठ रंग",
            primaryColor: "प्राथमिक रंग",
            accentColor: "स्वरोंका रंग",
            secondaryColor: "द्वितीयक रंग",
            saveExit: "सेहेजे & बाहर निकले",
            download: "डाउनलोड",
            save: "सहेजें",
            file: "फ़ाइल",
            slide: "स्लाइड",
            newSlide: "नई स्लाइड",
            duplicateSlide: "स्लाइड प्रतिलिपि करे",
            deleteSlide: "स्लाइड हटाए",
            view: "दृश्य",
            sorter: "छँटाईकर्ता",
            mobile: "मोबाइल",
            desktop: "डेस्कटॉप",
            comments: "टिप्पणियाँ",
            enableBackArrow: "वापस तीर सक्षम करें",
            enableNextArrow: "अगला तीर सक्षम करें",
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
      <RibbonMenu
        asEmphasis="html"
        actions={{
          updateDeck: jest.fn(),
          addSlide: jest.fn(),
          duplicateSlide: jest.fn(),
          deleteSlide: jest.fn(),
          changeSlideNav: jest.fn(),
          setUserOptions: jest.fn(),
        }}
        deck={{
          navEnabled: false,
          snEnabled: false,
          voEnabled: false,
          content: [{}, {}, {}],
          currentSlide: 1,
        }}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={jest.fn()}
      />
    );
  });

  it("should render HTML Menu when passed html in the tab props", () => {
    expect(component.find(RibbonHtmlMenu).exists()).toBe(true);
  });

  it("should render Design Menu when passed design in the tab props", () => {
    expect(component.find(RibbonDesignMenu).exists()).toBe(false);
    component.setProps({ asEmphasis: "design" });
    expect(component.find(RibbonDesignMenu).exists()).toBe(true);
  });

  it("should render Tools Menu when passed tools in the tab props", () => {
    expect(component.find(RibbonToolsMenu).exists()).toBe(false);
    component.setProps({ asEmphasis: "tools" });
    expect(component.find(RibbonToolsMenu).exists()).toBe(true);
  });

  it("should render Home Menu when passed home in the tab props", () => {
    expect(component.find(RibbonHomeMenu).exists()).toBe(false);
    component.setProps({ asEmphasis: "home" });
    expect(component.find(RibbonHomeMenu).exists()).toBe(true);
  });
});
