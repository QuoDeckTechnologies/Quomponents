import React from "react";
import OptionItemTen from "../components/OptionItem/OptionItemTen/OptionItemTen.react";

export default {
  title:
    "Design System/OptionItem/OptionItemTen",
  component: OptionItemTen,
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
  return <OptionItemTen {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    targetName: "name one",
    value: "",
    placeholder: "Ops10",
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
// Colored OptionItem Ten
// -------------------------------------------------------------
export const ColoredOptionitemTen = Template.bind({});
ColoredOptionitemTen.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
    accentColor: "#597387",
  },
};
ColoredOptionitemTen.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        ColoredOptionitemTen.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated OptionItem Ten
// -------------------------------------------------------------
export const AnimatedOptionitemTen = Template.bind({});
AnimatedOptionitemTen.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionitemTen.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        AnimatedOptionitemTen.args,
        null,
        2
      )}}/>`,
    },
  },
};

