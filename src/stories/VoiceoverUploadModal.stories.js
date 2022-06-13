import React from "react";
import VoiceoverUploadModal from "../components/VoiceoverUploadModal/VoiceoverUploadModal.react";

const dictionary = JSON.stringify({
  hi: {
    voiceoveruploadmodal: {
      header: "वॉयसओवर अपलोड करें",
      text:
        "प्रत्येक स्लाइड के लिए अलग-अलग एमपी3 फाइलें बनाएं और उन्हें उन स्लाइड नंबरों के रूप में नाम दें जिनसे वे मेल खाते हैं। जैसे 1.mp3, 2.mp3, आदि। आप कर सकते हैं इस तरह से एक या अधिक स्लाइड के लिए वॉयसओवर अपलोड करें...",
      buttons: {
        chooseFile: "फाइलें चुनें",
        cancel: "रद्द करें",
        save: "स्वीकार",
      },
    },
  },
});

export default {
  title: "Design System/VoiceoverUploadModal/VoiceoverUploadModal",
  component: VoiceoverUploadModal,
  argTypes: {
    isOpen: {
      defaultValue: true,
    },
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          accentColor: "",
          textColor: "",
          hoverBackgroundColor: "",
          hoverTextColor: "",
        },
      },
    },
    withAnimation: {
      table: {
        category: "with-Params",
        defaultValue: {
          animation: "",
          duration: 0,
          delay: 0,
        },
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
    isDisabled: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    isHidden: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    onClose: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onClick: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle: "Displays a Voiceover Upload Modal Component.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 500,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
  return <VoiceoverUploadModal {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  asVariant: "warning",
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withColor: {
    backgroundColor: "",
    textColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
  withTranslation: {
    lang: "en",
    tgt: "voiceoveruploadmodal",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<VoiceoverUploadModal {...${JSON.stringify(
        Default.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Voiceover Upload Modal
// -------------------------------------------------------------
export const ColoredVoiceoverUploadModal = Template.bind({});
ColoredVoiceoverUploadModal.args = {
  ...Default.args,
  asVariant: "secondary",
  withColor: {
    backgroundColor: "#2a9d8f",
    textColor: "#a8dadc",
    hoverBackgroundColor: "#1d3557",
    hoverTextColor: "#ffffff",
  },
};
ColoredVoiceoverUploadModal.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<VoiceoverUploadModal {...${JSON.stringify(
        ColoredVoiceoverUploadModal.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated Voiceover Upload Modal
// -------------------------------------------------------------
export const TranslatedVoiceoverUploadModal = Template.bind({});
TranslatedVoiceoverUploadModal.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "voiceoveruploadmodal",
    dictionary: dictionary,
  },
};
TranslatedVoiceoverUploadModal.parameters = {
  docs: {
    description: {
      story: "Use to change the language that the text appears in.",
    },
    source: {
      code: `<VoiceoverUploadModal {...${JSON.stringify(
        TranslatedVoiceoverUploadModal.args,
        null,
        2
      )}}/>`,
    },
  },
};
