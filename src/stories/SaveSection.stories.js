import React from "react";
import SaveSection from "../components/RibbonMenu/htmlMenu/sections/SaveSection.react";

const dictionary = JSON.stringify({
  en: {
    saveSection: {
      upload: "Upload",
      download: "Download",
      save: "Save",
      file: "File",
    },
  },
  hi: {
    saveSection: {
      upload: "अपलोड",
      download: "डाउनलोड",
      save: "सहेजें",
      file: "फ़ाइल",
    },
  },
});
export default {
  title: "Design System/RibbonMenu/RibbonHtmlMenu/SaveSection",
  component: SaveSection,
  argTypes: {
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
    componentSubtitle: "Displays a SaveSection for general-purpose use",
    a11y: { disable: true },
    docs: {
      iframeHeight: 300,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SaveSection {...args} />;
export const Default = Template.bind({});
Default.args = {
  asFloated: "left",
  withTranslation: {
    lang: "en",
    tgt: "saveSection",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<SaveSection {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Translated SaveSection
// -------------------------------------------------------------
export const TranslatedSaveSection = Template.bind({});
TranslatedSaveSection.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "saveSection",
    dictionary: dictionary,
  },
};
TranslatedSaveSection.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the SaveSection, add a SaveSection:{} value to the dictionary.",
    },
    source: {
      code: `<SaveSection {...${JSON.stringify(
        TranslatedSaveSection.args,
        null,
        2
      )}}/>`,
    },
  },
};
