import React from "react";
import ImageUploadModal from "../components/ImageUploadModal/ImageUploadModal.react";

const dictionary = JSON.stringify({
  hi: {
    imageuploadmodal: {
      header: "तस्वीर अपलोड करें",
      buttons: {
        chooseFile: "फाइलें चुनें",
        cancel: "रद्द करें",
        save: "स्वीकार",
      },
    },
  },
});

export default {
  title: "Design System/ImageUploadModal/ImageUploadModal",
  component: ImageUploadModal,
  argTypes: {
    isOpen: {
      defaultValue: true,
    },
    aspectRatio: {
      defaultValue: 1,
    },
    image: {
      defaultValue: null,
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          arcButtonColor: "",
          arcIconColor: "",
          arcColor: "",
          textColor: "",
          buttonColor: "",
          hoverButtonColor: "",
          sliderColor: "",
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
    isHidden: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    isFluid: {
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
    onChange: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle: "Displays a Image Upload Modal Component.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 1000,
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
  isOpen: true,
  aspectRatio: 1,
  image: "",
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
  withColor: {
    arcButtonColor: "",
    arcIconColor: "",
    arcColor: "",
    textColor: "",
    buttonColor: "",
    hoverButtonColor: "",
    sliderColor: "",
  },
  isHidden: false,
  isFluid: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<ImageUploadModal {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// ImageUploadModal with initial image
// -------------------------------------------------------------
export const ImageUploadModalWithInitialImage = Template.bind({});
ImageUploadModalWithInitialImage.args = {
  ...Default.args,
  image:
    "https://images.unsplash.com/photo-1655910299073-9efb4ae052f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
};
ImageUploadModalWithInitialImage.parameters = {
  docs: {
    source: {
      code: `<ImageUploadModal {...${JSON.stringify(
        ImageUploadModalWithInitialImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// ImageUploadModal with custom aspect ratio
// -------------------------------------------------------------
export const ImageUploadModalWithCustomAspectRatio = Template.bind({});
ImageUploadModalWithCustomAspectRatio.args = {
  ...Default.args,
  aspectRatio: 0.66,
  image:
    "https://images.unsplash.com/photo-1655910299073-9efb4ae052f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
};
ImageUploadModalWithCustomAspectRatio.parameters = {
  docs: {
    source: {
      code: `<ImageUploadModal {...${JSON.stringify(
        ImageUploadModalWithCustomAspectRatio.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Translated ImageUploadModal
// -------------------------------------------------------------
export const TranslatedImageUploadModal = Template.bind({});
TranslatedImageUploadModal.args = {
  ...Default.args,
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
