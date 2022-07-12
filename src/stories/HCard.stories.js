import React from "react";
import HCard from "../components/HCard/HCard.react";

const dictionary = JSON.stringify({
  hi: {
    hCard: {
      buttonText: "प्रयत्न करें",
      name: "बेलून बस्ट",
      description:
        "सितारों को इकट्ठा करने के लिए उन गुब्बारों को पॉप करें और इसे करने के लिए अधिक समय प्राप्त करने के लिए सवालों के जवाब दें।",
    },
  },
});

export default {
  title: "Design System/HCard/HCard",
  component: HCard,
  argTypes: {
    id: "",
    name: "",
    description: "",
    buttonText: "",
    checked: true,
    image: {},
    showButton: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
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
    componentSubtitle: "Displays a basic HCard for general-purpose use.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 500,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <HCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  id: "default-id",
  name: "BALLOON BURST",
  description:
    "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
  buttonText: "try game",
  checked: true,
  image: { id: "background-image", extention: "" },
  imageLibrary: [
    {
      id: "background-image",
      image:
        "https://images.unsplash.com/photo-1653844124305-6606b561dee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ],
  showButton: true,
  asFloated: "none",
  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "hCard",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<HCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// HCard with default image
// -------------------------------------------------------------
export const HcardWithDefaultImage = Template.bind({});
HcardWithDefaultImage.args = {
  ...Default.args,
  id: "",
  name: "BALLOON BURST",
  description:
    "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
  buttonText: "try game",
  checked: true,
  image: { id: "", extention: "" },
};
HcardWithDefaultImage.parameters = {
  docs: {
    description: {
      story:
        "Displays a HCard with default image when image is not provided in image library",
    },
    source: {
      code: `<HCard {...${JSON.stringify(
        HcardWithDefaultImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Unchecked HCard
// -------------------------------------------------------------
export const UncheckedHcard = Template.bind({});
UncheckedHcard.args = {
  ...Default.args,
  id: "",
  name: "BALLOON BURST",
  description:
    "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
  buttonText: "try game",
  checked: false,
  image: { id: "background-", extention: "" },
};
UncheckedHcard.parameters = {
  docs: {
    description: {
      story: "Displays a HCard with checked props set as false",
    },
    source: {
      code: `<HCard {...${JSON.stringify(UncheckedHcard.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored HCard
// -------------------------------------------------------------
export const ColoredHcard = Template.bind({});
ColoredHcard.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#fefae0",
    accentColor: "#606c38",
    textColor: "#bc6c25",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
};
ColoredHcard.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<HCard {...${JSON.stringify(ColoredHcard.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated HCard
// -------------------------------------------------------------
export const TranslatedHcard = Template.bind({});
TranslatedHcard.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "hCard",
    dictionary: dictionary,
  },
};
TranslatedHcard.parameters = {
  docs: {
    description: {
      story: "Use to change the language that the text appears in.",
    },
    source: {
      code: `<HCard {...${JSON.stringify(TranslatedHcard.args, null, 2)}}/>`,
    },
  },
};
