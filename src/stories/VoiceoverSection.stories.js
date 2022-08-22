import React from "react";
import VoiceoverSection from "../components/RibbonMenu/toolsMenu/sections/VoiceoverSection.react";

const dictionary = JSON.stringify({
  en: {
    voiceoverSection: {
      voiceover: "Voiceover",
      upload: "Upload",
      copySlidesToScript: "Copy Slides to Script",
      downloadScript: "Download Script",
    },
  },
  hi: {
    voiceoverSection: {
      voiceover: "पार्श्व स्वर",
      upload: "अपलोड",
      copySlidesToScript: "स्लाइड को स्क्रिप्ट में कॉपी करें",
      downloadScript: "स्क्रिप्ट डाउनलोड करें",
    },
  },
});
export default {
  title: "Design System/RibbonMenu/RibbonToolsMenu/VoiceoverSection",
  component: VoiceoverSection,
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
    componentSubtitle: "Displays a VoiceoverSection for general-purpose use",
    a11y: { disable: true },
    docs: {
      iframeHeight: 300,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <VoiceoverSection {...args} />;
export const Default = Template.bind({});
Default.args = {
  asFloated: "left",
  withTranslation: {
    lang: "en",
    tgt: "voiceoverSection",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<VoiceoverSection {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Translated VoiceoverSection
// -------------------------------------------------------------
export const TranslatedVoiceoverSection = Template.bind({});
TranslatedVoiceoverSection.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "voiceoverSection",
    dictionary: dictionary,
  },
};
TranslatedVoiceoverSection.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the VoiceoverSection, add a VoiceoverSection:{} value to the dictionary.",
    },
    source: {
      code: `<VoiceoverSection {...${JSON.stringify(
        TranslatedVoiceoverSection.args,
        null,
        2
      )}}/>`,
    },
  },
};
