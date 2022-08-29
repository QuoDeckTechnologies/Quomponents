import React from "react";
import RibbonToolsMenu from "../components/RibbonMenu/toolsMenu/RibbonToolsMenu.react";

const dictionary = JSON.stringify({
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
});
export default {
  title: "Design System/RibbonMenu/RibbonToolsMenu",
  component: RibbonToolsMenu,
  argTypes: {
    actions: {},
    deck: {},
    asFloated: {
      control: "select",
      options: ["left", "right", "inline"],
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
    componentSubtitle: "Displays a RibbonToolsMenu for general-purpose use",
    a11y: { disable: true },
    docs: {
      iframeHeight: 300,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RibbonToolsMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
  actions: {
    updateDeck: (settingsObj) => {
      return settingsObj;
    },
  },
  deck: {
    navEnabled: false,
    snEnabled: false,
    voEnabled: false,
  },
  asFloated: "left",
  withTranslation: {
    lang: "en",
    tgt: "ribbonToolsMenu",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<RibbonToolsMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Translated RibbonToolsMenu
// -------------------------------------------------------------
export const TranslatedRibbonToolsMenu = Template.bind({});
TranslatedRibbonToolsMenu.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "ribbonToolsMenu",
    dictionary: dictionary,
  },
};
TranslatedRibbonToolsMenu.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the RibbonToolsMenu, add a RibbonToolsMenu:{} value to the dictionary.",
    },
    source: {
      code: `<RibbonToolsMenu {...${JSON.stringify(
        TranslatedRibbonToolsMenu.args,
        null,
        2
      )}}/>`,
    },
  },
};
