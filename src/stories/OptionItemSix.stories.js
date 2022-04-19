import React from "react";
import OptionItemSix from "../components/OptionItem/OptionItemSix/OptionItemSix.react";

export default {
  title:
    "Design System/OptionItem/OptionItemSix",
  component: OptionItemSix,
  argTypes: {
    content: {},
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          accentColor: "",
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
    onInput: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onClose: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle: "Displays a InlineEdit with remove button.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 250,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
  return <OptionItemSix {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    targetName: "name one",
    value: "",
    placeholder: "Ops6",
  },
  withColor: {
    backgroundColor: "#ffab000d",
    accentColor: "",
    textColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Colored OptionItem Six
// -------------------------------------------------------------
export const ColoredOptionitemSix = Template.bind({});
ColoredOptionitemSix.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
    accentColor: "#597387",
  },
};
ColoredOptionitemSix.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        ColoredOptionitemSix.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated OptionItem Six
// -------------------------------------------------------------
export const AnimatedOptionitemSix = Template.bind({});
AnimatedOptionitemSix.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionitemSix.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        AnimatedOptionitemSix.args,
        null,
        2
      )}}/>`,
    },
  },
};
