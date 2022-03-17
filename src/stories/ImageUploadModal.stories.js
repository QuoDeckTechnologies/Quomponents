import React from "react";
import ImageUploadModal from "../components/ImageUploadModal/ImageUploadModal.react";

const dictionary = JSON.stringify({
  hi: {
    imageuploadmodal: {
      header: "तस्वीर अपलोड करें",
      buttons: ["फाइलें चुनें", "रद्द करें", "स्वीकार"],
    },
  },
});

export default {
  title: "Design System/ImageUploadModal/ImageUploadModal",
  component: ImageUploadModal,
  argTypes: {
    content: {
      table: {
        defaultValue: {
          header: "Upload Image",
        },
      },
    },
    isOpen: {
      defaultValue: true,
    },
    imageQuality: {
      defaultValue : 50
    },
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
      },
    },
    asSize: {
      control: "select",
      options: ["tiny", "small", "normal", "big", "huge", "massive"],
      table: {
        category: "as-Flags",
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
    onSave: {
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
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a Image Upload Modal Component.",
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
  return <ImageUploadModal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    header: "Upload Image",
    buttons: ["choose file", "cancel", "save"],
  },
  isOpen: true,
  imageQuality: 50,
  asVariant: "warning",
  asSize: "tiny",
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "imageuploadmodal",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<ImageUploadModal {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Translated ImageUploadModal
// -------------------------------------------------------------
export const TranslatedImageUploadModal = Template.bind({});
TranslatedImageUploadModal.args = {
  ...Default.args,
  asVariant: "primary",
  withTranslation: {
    lang: "hi",
    tgt: "imageuploadmodal",
    dictionary: dictionary,
  },
};
TranslatedImageUploadModal.parameters = {
  docs: {
    description: {
      story:
        "We can translate the language of Image Upload Modal if dictionary is provided",
    },
    source: {
      code: `<ImageUploadModal {...${JSON.stringify(
        TranslatedImageUploadModal.args,
        null,
        2
      )}}/>`,
    },
  },
};
