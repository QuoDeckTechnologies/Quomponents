import React from "react";
import ButtonBank from "../components/ButtonBank/ButtonBank.react";

const dictionary = JSON.stringify({
  hi: {
    buttonbank: {
      content: ["प्राथमिक बटन", "प्राथमिक बटन", "प्राथमिक बटन", "प्राथमिक बटन"],
    },
  },
});

export default {
  title: "Design System/ButtonBank/ButtonBank",
  component: ButtonBank,
  argTypes: {
    content: [],
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
    asSize: {
      control: "select",
      options: ["tiny", "small", "normal", "big", "huge", "massive"],
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
          textColor: "",
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
    componentSubtitle: "Displays a ButtonBank Component",
    a11y: { disable: true },
    docs: {
      iframeHeight: 400,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ButtonBank {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: [
    "Primary Button",
    "Primary Button",
    "Primary Button",
    "Primary Button",
  ],
  asEmphasis: "contained",
  isCircular: false,

  asVariant: "warning",
  asSize: "normal",
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
    tgt: "buttonbank",
    dictionary: dictionary,
  },

  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<ButtonBank {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Button
// -------------------------------------------------------------
export const ColoredButtonBank = Template.bind({});
ColoredButtonBank.args = {
  ...Default.args,
  content: [
    "Colored button",
    "Colored button",
    "Colored button",
    "Colored button",
  ],
  withColor: {
    backgroundColor: "#00296b",
    textColor: "#fdc500",
    accentColor: "",
    hoverBackgroundColor: "#fdc500",
    hoverTextColor: "#00296b",
  },
};
ColoredButtonBank.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the button bank.",
    },
    source: {
      code: `<ButtonBank {...${JSON.stringify(
        ColoredButtonBank.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated Button
// -------------------------------------------------------------
export const TranslatedButtonBank = Template.bind({});
TranslatedButtonBank.args = {
  ...Default.args,
  asVariant: "success",
  withTranslation: {
    lang: "hi",
    tgt: "buttonbank",
    dictionary: dictionary,
  },
};
TranslatedButtonBank.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language of that the text appears in the component.",
    },
    source: {
      code: `<ButtonBank withTranslation={{lang: "hi", tgt: "buttonbank", dictionary: ${JSON.stringify(
        dictionary
      )}}}}/>`,
    },
  },
};
// -------------------------------------------------------------
// All Variants
// -------------------------------------------------------------
const AllVariantTemplate = () => {
  const baseObj = {
    ...Object.assign({}, Default.args),
  };

  return (
    <div className="qui-allvariants-container">
      <ButtonBank
        {...Object.assign({}, baseObj, {
          content: ["Primary"],
          asVariant: "primary",
        })}
      />
      <ButtonBank
        {...Object.assign({}, baseObj, {
          content: ["Secondary"],
          asVariant: "secondary",
        })}
      />
      <ButtonBank
        {...Object.assign({}, baseObj, {
          content: ["Success"],
          asVariant: "success",
        })}
      />
      <ButtonBank
        {...Object.assign({}, baseObj, {
          content: ["Warning"],
          asVariant: "warning",
        })}
      />
      <ButtonBank
        {...Object.assign({}, baseObj, {
          content: ["Error"],
          asVariant: "error",
        })}
      />
      <ButtonBank
        {...Object.assign({}, baseObj, {
          content: ["Hover"],
          withColor: {
            backgroundColor: "#00296b",
            textColor: "#fdc500",
            accentColor: "",
            hoverBackgroundColor: "#fdc500",
            hoverTextColor: "#00296b",
          },
        })}
      />
    </div>
  );
};
export const AllVariants = AllVariantTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story:
        "5 variants and a custom withColor prop is supported. Use as per purpose noted here.",
    },
  },
};
