import React from "react";
import VCardWithButton from "../components/VCardWithButton/VCardWithButton.react";

const dictionary = JSON.stringify({
  hi: {
    vCardWithButton: {
      buttonText: "प्रयत्न करें",
    },
  },
});

export default {
  title: "Design System/VCardWithButton/VCardWithButton",
  component: VCardWithButton,
  argTypes: {
    content: {},
    asEmphasis: {
      control: "select",
      options: ["text", "outlined", "contained"],
      table: {
        category: "as-Flags",
      },
    },
    isCircular: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
      },
    },
    asFloated: {
      control: "select",
      options: ["left", "right", "none", "inline"],
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
          accentBackgroundColor: "",
          textColor: "",
          buttonBackgroundColor: "",
          buttonTextColor: "",
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
  parameters: {
    componentSubtitle:
      "Displays a basic VCardWithButton for general-purpose use.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 500,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <VCardWithButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    id: "default-id",
    name: "BALLOON BURST",
    description:
      "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
    buttonText: "try game",
    checked: true,
    image: { id: "background-image", extention: "" },
  },
  imageLibrary: [
    {
      id: "background-image",
      image:
        "https://images.unsplash.com/photo-1653844124305-6606b561dee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ],
  asEmphasis: "contained",
  isCircular: false,
  asVariant: "warning",
  asFloated: "none",
  withColor: {
    backgroundColor: "",
    accentColor: "",
    accentBackgroundColor: "",
    textColor: "",
    buttonBackgroundColor: "",
    buttonTextColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "vCardWithButton",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<VCardWithButton {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// VCard with default image
// -------------------------------------------------------------
export const VCardWithDefaultImage = Template.bind({});
VCardWithDefaultImage.args = {
  ...Default.args,
  content: {
    id: "",
    name: "BALLOON BURST",
    description:
      "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
    buttonText: "try game",
    checked: true,
    image: { id: "background-", extention: "" },
  },
};
VCardWithDefaultImage.parameters = {
  docs: {
    description: {
      story:
        "Displays a VCardWithButton with default image when image is not provided in image library",
    },
    source: {
      code: `<VCardWithButton {...${JSON.stringify(
        VCardWithDefaultImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Unchecked VCardWithButton
// -------------------------------------------------------------
export const UncheckedVCardWithButton = Template.bind({});
UncheckedVCardWithButton.args = {
  ...Default.args,
  content: {
    id: "",
    name: "BALLOON BURST",
    description:
      "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
    buttonText: "try game",
    checked: false,
    image: { id: "background-image", extention: "" },
  },
};
UncheckedVCardWithButton.parameters = {
  docs: {
    description: {
      story: "Displays a VCardWithButton with checked props set as false",
    },
    source: {
      code: `<VCardWithButton {...${JSON.stringify(
        UncheckedVCardWithButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored VCardWithButton
// -------------------------------------------------------------
export const ColoredVCardWithButton = Template.bind({});
ColoredVCardWithButton.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#fefae0",
    accentColor: "#606c38",
    accentBackgroundColor: "#fefae0",
    textColor: "#bc6c25",
    buttonBackgroundColor: "#606c38",
    buttonTextColor: "#dda15e",
  },
};
ColoredVCardWithButton.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<VCardWithButton {...${JSON.stringify(
        ColoredVCardWithButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated VCardWithButton
// -------------------------------------------------------------
export const TranslatedVCardWithButton = Template.bind({});
TranslatedVCardWithButton.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "vCardWithButton",
    dictionary: dictionary,
  },
};
TranslatedVCardWithButton.parameters = {
  docs: {
    description: {
      story: "Use to change the language that the text appears in.",
    },
    source: {
      code: `<VCardWithButton {...${JSON.stringify(
        TranslatedVCardWithButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated VCardWithButton
// -------------------------------------------------------------
export const AnimatedVCardWithButton = Template.bind({});
AnimatedVCardWithButton.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedVCardWithButton.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of VCardWithButton component",
    },
    source: {
      code: `<VCardWithButton {...${JSON.stringify(
        AnimatedVCardWithButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
