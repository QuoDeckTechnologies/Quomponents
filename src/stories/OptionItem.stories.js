import React from "react";
import OptionItem from "../components/OptionItem/OptionItem.react";

export default {
  title: "Design System/OptionItem/OptionItem",
  component: OptionItem,
  argTypes: {
    content: [],
    optionType: {
      control: "select",
      options: [
        "title",
        "single-select",
        "picture-select",
        "multiple-select",
        "picture-title",
      ],
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
    onClick: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle: "Displays a OptionItem.",
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
  return <OptionItem {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      name: "name one",
      value: "option one",
      placeholder: "Placeholder One",
      checked: false,
      image: {},
    },
    {
      name: "name two",
      value: "option two",
      placeholder: "Placeholder Two",
      checked: true,
      image: {},
    },
    {
      name: "name three",
      value: "option three",
      placeholder: "Placeholder Three",
      checked: false,
      image: {},
    },
  ],
  optionType: "single-select",
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
//-------------------------------------------------------------
// Colored OptionItem
// -------------------------------------------------------------
export const ColoredContentTableRow = Template.bind({});
ColoredContentTableRow.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
    accentColor: "#597387",
  },
};
ColoredContentTableRow.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<OptionItem {...${JSON.stringify(
        ColoredContentTableRow.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Animated OptionItem
// -------------------------------------------------------------
export const AnimatedOptionItem = Template.bind({});
AnimatedOptionItem.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#BBBBBB",
    textColor: "",
    accentColor: "#ffb703",
  },
  withAnimation: {
    animation: "fade",
    duration: 1,
    delay: 0,
  },
};
AnimatedOptionItem.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of OptionItem",
    },
    source: {
      code: `<OptionItem {...${JSON.stringify(
        AnimatedOptionItem.args,
        null,
        2
      )}}/>`,
    },
  },
};
