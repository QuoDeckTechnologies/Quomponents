import React from "react";
import AmplayfierDateBlock from "../components/AmplayfierDateBlock/AmplayfierDateBlock.react";

const dictionary = JSON.stringify({
  hi: {
    amplayfierdateblock: {
      months: {
        Jan: "जनवरी",
        Feb: "फ़रवरी",
        Mar: "मार्च",
        Apr: "अप्रैल",
        May: "मई",
        Jun: "जून",
        Jul: "जुलाई",
        Aug: "अगस्त",
        Sep: "सितम्बर",
        Oct: "अक्टूबर",
        Nov: "नवम्बर",
        Dec: "दिसम्बर",
      },
    },
  },
});

export default {
  title: "Design System/AmplayfierDateBlock",
  component: AmplayfierDateBlock,
  argTypes: {
    content: "",
    isCircular: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    asPadded: {
      control: "select",
      options: ["fitted", "compact", "normal", "relaxed"],
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
    isFluid: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
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
    componentSubtitle:
      "Displays a basic AmplayfierDateBlock for general-purpose use",
    a11y: { disable: true },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <AmplayfierDateBlock {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: "1 Jan 2002",
  isCircular: false,
  asPadded: "normal",
  asSize: "normal",
  asFloated: "left",
  withColor: {
    backgroundColor: "",
    textColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "amplayfierdateblock",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
  isFluid: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<Button {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored AmplayfierDateBlock
// -------------------------------------------------------------
export const ColoredAmplayfierDateBlock = Template.bind({});
ColoredAmplayfierDateBlock.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#ffc857",
    textColor: "#00509d",
  },
};
ColoredAmplayfierDateBlock.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<ColoredAmplayfierDateBlock {...${JSON.stringify(
        ColoredAmplayfierDateBlock.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Floated AmplayfierDateBlock
// -------------------------------------------------------------
export const FloatedAmplayfierDateBlock = Template.bind({});
FloatedAmplayfierDateBlock.args = {
  ...Default.args,
  asFloated: "inline",
};
FloatedAmplayfierDateBlock.parameters = {
  docs: {
    description: {
      story: "Use to float a component left, right, inline or none.",
    },
    source: {
      code: `<FloatedAmplayfierDateBlock {...${JSON.stringify(
        FloatedAmplayfierDateBlock.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Custom AmplayfierDateBlock
// -------------------------------------------------------------
export const CustomAmplayfierDateBlock = Template.bind({});
CustomAmplayfierDateBlock.args = {
  ...Default.args,
  content: "2021-05-10T12:55:18.154Z",
};
CustomAmplayfierDateBlock.parameters = {
  docs: {
    description: {
      story: "Use to provide date to component.",
    },
    source: {
      code: `<CustomAmplayfierDateBlock {...${JSON.stringify(
        CustomAmplayfierDateBlock.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated AmplayfierDateBlock
// -------------------------------------------------------------
export const AnimatedAmplayfierDateBlock = Template.bind({});
AnimatedAmplayfierDateBlock.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedAmplayfierDateBlock.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of AmplayfierDateBlock",
    },
    source: {
      code: `<AnimatedAmplayfierDateBlock {...${JSON.stringify(
        AnimatedAmplayfierDateBlock.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated AmplayfierDateBlock
// -------------------------------------------------------------
export const TranslatedAmplayfierDateBlock = Template.bind({});
TranslatedAmplayfierDateBlock.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "amplayfierdateblock",
    dictionary: dictionary,
  },
};
TranslatedAmplayfierDateBlock.parameters = {
  docs: {
    description: {
      story: "Use to change the language that the text appears in.",
    },
    source: {
      code: `<TranslatedAmplayfierDateBlock {...${JSON.stringify(
        TranslatedAmplayfierDateBlock.args,
        null,
        2
      )}}/>`,
    },
  },
};
