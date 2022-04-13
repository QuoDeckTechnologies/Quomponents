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
        "picture-select-with-caption",
        "single-select-picture-title",
        "title-outline-button",
        "short-field-title",
        "option-picture-with-message",
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
      value: "",
      placeholder: "Placeholder One",
      checked: false,
      image: {},
      captionName: "caption name one",
      captionValue: "",
      captionPlaceholder: "Caption Placeholder One",
      shortFieldName_1: "short field one first",
      shortFieldName_2: "short field one second",
      shortFieldValue_1: "1",
      shortFieldValue_2: "2",
      optionName: "Option A",
      optionPlaceholder: "Option A",
      optionValue: "Option A",
      headerName: "Name of Header for Option A",
      headerValue: "",
      headerPlaceholder: "Header for Option A",
      messageName: "Name of Message for Option A",
      messagePlaceholder: "Message for Option A",
      messageValue: "",
    },
    {
      name: "name two",
      value: "",
      placeholder: "Placeholder Two",
      checked: true,
      image: {},
      captionName: "caption name two",
      captionValue: "",
      captionPlaceholder: "Caption Placeholder Two",
      shortFieldName_1: "short field two first",
      shortFieldName_2: "short field two second",
      shortFieldValue_1: "3",
      shortFieldValue_2: "4",
      optionName: "Option B",
      optionPlaceholder: "Option B",
      optionValue: "Option B",
      headerName: "Name of Header for Option B",
      headerValue: "",
      headerPlaceholder: "Header for Option B",
      messageName: "Name of Message for Option B",
      messagePlaceholder: "Message for Option B",
      messageValue: "",
    },
    {
      name: "name three",
      value: "",
      placeholder: "Placeholder Three",
      checked: false,
      image: {},
      captionName: "caption name three",
      captionValue: "",
      captionPlaceholder: "Caption Placeholder Three",
      shortFieldName_1: "short field three first",
      shortFieldName_2: "short field three second",
      shortFieldValue_1: "5",
      shortFieldValue_2: "6",
      optionName: "Option C",
      optionPlaceholder: "Option C",
      optionValue: "Option C",
      headerName: "Name of Header for Option C",
      headerValue: "",
      headerPlaceholder: "Header for Option C",
      messageName: "Name of Message for Option C",
      messagePlaceholder: "Message for Option C",
      messageValue: "",
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
