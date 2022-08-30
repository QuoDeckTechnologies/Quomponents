import React from "react";
import RibbonMenu from "../components/RibbonMenu/RibbonMenu.react";

const dictionary = JSON.stringify({
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
});
export default {
  title: "Design System/RibbonMenu",
  component: RibbonMenu,
  argTypes: {
    actions: {},
    deck: {},
    asEmphasis: {
      control: "select",
      options: ["html", "home", "tools", "design"],
      table: {
        category: "as-Flags",
      },
    },
    withTranslation: {
      table: {
        category: "with-Params",
        defaultValue: {
          lang: "",
          tgt: "",
          dictionary: "",
        },
      },
    },
    isHidden: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    isDisabled: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    onClick: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  decorators: [
    (story) => (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "1.25em",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a RibbonMenu for general-purpose use",
    a11y: { disable: true },
    docs: {
      iframeHeight: 300,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RibbonMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
  asEmphasis: "html",
  actions: {
    updateDeck: (settingsObj) => {
      return settingsObj;
    },
    addSlide: (value) => {
      return value;
    },
    duplicateSlide: (value) => {
      return value;
    },
    deleteSlide: (value) => {
      return () => {};
    },
    changeSlideNav: (navObj) => {
      return navObj;
    },
    setUserOptions: (view) => {
      return view;
    },
  },
  deck: {
    navEnabled: false,
    snEnabled: false,
    voEnabled: false,
    content: [{}, {}, {}],
    currentSlide: 1,
  },
  withTranslation: {
    lang: "en",
    tgt: "ribbonMenu",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<RibbonMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Translated RibbonMenu
// -------------------------------------------------------------
export const TranslatedRibbonMenu = Template.bind({});
TranslatedRibbonMenu.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "ribbonMenu",
    dictionary: dictionary,
  },
};
TranslatedRibbonMenu.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the RibbonMenu, add a RibbonMenu:{} value to the dictionary.",
    },
    source: {
      code: `<RibbonMenu {...${JSON.stringify(
        TranslatedRibbonMenu.args,
        null,
        2
      )}}/>`,
    },
  },
};
