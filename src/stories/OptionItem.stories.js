import React from "react";
import OptionItem from "../components/OptionItem/OptionItem/OptionItem.react";

export default {
  title: "Design System/OptionItem/OptionItem",
  component: OptionItem,

    content: {
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
  content: {
    },
  withColor: {
    backgroundColor: "",
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
      code: `<OptionItem {...${JSON.stringify(
        Default.args,
        null,
        2
      )}}/>`,
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
