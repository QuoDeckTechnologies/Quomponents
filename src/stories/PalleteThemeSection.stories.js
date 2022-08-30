import React from "react";
import PalleteThemeSection from "../components/RibbonMenu/designMenu/sections/PalleteThemeSection.react";

const dictionary = JSON.stringify({
  en: {
    palleteThemeSection: {
      settings: "Settings",
      pageColor: "Page Color",
      primaryColor: "Primary Color",
      accentColor: "Accent Color",
      secondaryColor: "Secondary Color",
    },
  },
  hi: {
    palleteThemeSection: {
      settings: "समायोजन",
      pageColor: "पृष्ठ रंग",
      primaryColor: "प्राथमिक रंग",
      accentColor: "स्वरोंका रंग",
      secondaryColor: "द्वितीयक रंग",
    },
  },
});
export default {
  title: "Design System/RibbonMenu/RibbonDesignMenu/PalleteThemeSection",
  component: PalleteThemeSection,
  argTypes: {
    actions: {},
    asFloated: {
      control: "select",
      options: ["left", "right", "none", "inline"],
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
    componentSubtitle: "Displays a PalleteThemeSection for general-purpose use",
    a11y: { disable: true },
    docs: {
      iframeHeight: 300,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <PalleteThemeSection {...args} />;
export const Default = Template.bind({});
Default.args = {
  actions: {
    updateDeck: (value) => {
      return () => {};
    },
  },
  asFloated: "left",
  withTranslation: {
    lang: "en",
    tgt: "palleteThemeSection",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<PalleteThemeSection {...${JSON.stringify(
        Default.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Translated PalleteThemeSection
// -------------------------------------------------------------
export const TranslatedPalleteThemeSection = Template.bind({});
TranslatedPalleteThemeSection.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "palleteThemeSection",
    dictionary: dictionary,
  },
};
TranslatedPalleteThemeSection.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the PalleteThemeSection, add a PalleteThemeSection:{} value to the dictionary.",
    },
    source: {
      code: `<PalleteThemeSection {...${JSON.stringify(
        TranslatedPalleteThemeSection.args,
        null,
        2
      )}}/>`,
    },
  },
};
