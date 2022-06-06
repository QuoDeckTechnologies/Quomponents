import React from "react";
import HCardWithButton from "../components/HCardWithButton/HCardWithButton.react";

const dictionary = JSON.stringify({
  hi: {
    hCardWithButton: {
      title: "बेलून बर्स्ट",
      description:
        "सितारों को इकट्ठा करने के लिए उन गुब्बारों को पॉप करें और इसे करने के लिए अधिक समय प्राप्त करने के लिए सवालों के जवाब दें।",
      buttonText: "प्रयत्न करें",
    },
  },
});

export default {
  title: "Design System/HCardWithButton/HCardWithButton",
  component: HCardWithButton,
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
      "Displays a basic HCardWithButton for general-purpose use",
    a11y: { disable: true },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <HCardWithButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    title: "BALLOON BURST",
    description:
      "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
    buttonText: "try game",
    checked: true,
    backgroundImage: { id: "background-image", extention: "" },
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
    tgt: "hCardWithButton",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<HCardWithButton {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// HCard without background image 
// -------------------------------------------------------------
export const HCardWithoutBackgroundImage = Template.bind({});
HCardWithoutBackgroundImage.args = {
  ...Default.args,
  content: {
    title: "BALLOON BURST",
    description:
      "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
    buttonText: "try game",
    checked: true,
    backgroundImage: { id: "background-", extention: "" },
  },
};
HCardWithoutBackgroundImage.parameters = {
  docs: {
    source: {
      code: `<HCardWithButton {...${JSON.stringify(
        HCardWithoutBackgroundImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Unchecked HCardwithButton
// -------------------------------------------------------------
export const UncheckedHCardWithButton = Template.bind({});
UncheckedHCardWithButton.args = {
  ...Default.args,
  content: {
    title: "BALLOON BURST",
    description:
      "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
    buttonText: "try game",
    checked: false,
    backgroundImage: { id: "background-", extention: "" },
  },
};
UncheckedHCardWithButton.parameters = {
  docs: {
    source: {
      code: `<HCardWithButton {...${JSON.stringify(
        UncheckedHCardWithButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored HCardWithButton
// -------------------------------------------------------------
export const ColoredHCardWithButton = Template.bind({});
ColoredHCardWithButton.args = {
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
ColoredHCardWithButton.parameters = {
  docs: {
    source: {
      code: `<HCardWithButton {...${JSON.stringify(
        ColoredHCardWithButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated HCardWithButton
// -------------------------------------------------------------
export const TranslatedHCardWithButton = Template.bind({});
TranslatedHCardWithButton.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "hCardWithButton",
    dictionary: dictionary,
  },
};
TranslatedHCardWithButton.parameters = {
  docs: {
    source: {
      code: `<HCardWithButton {...${JSON.stringify(
        TranslatedHCardWithButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
