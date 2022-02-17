import React from "react";
import InlineEdit from "../components/InlineEdit/InlineEdit.react";

export default {
  title: "Design System/InlineEdit/InlineEdit",
  component: InlineEdit,
  argTypes: {
    content: "Please input your text here",
    asSize: {
      control: "select",
      options: ["tiny", "small", "normal", "big", "huge", "massive"],
      table: {
        category: "as-Flags",
      },
    },
    asPadded: {
      control: "select",
      options: ["fitted", "compact", "normal", "relaxed"],
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
    asAligned: {
      control: "select",
      options: ["left", "right", "center"],
      table: {
        category: "as-Flags",
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          accentColor: "",
          textColor: "",
          backgroundColor: "",
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
    isHidden: {
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
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle:
      "Default InlineEdit for general purpose use",
    a11y: { disable: true },
    docs: { iframeHeight: 100 },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <InlineEdit {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: "Please input your text here",
  asSize: "normal",
  asFloated: "none",
  asPadded: "normal",
  asAligned: "left",
  withColor: {
    accentColor: "#FFAB00",
    textColor: "",
    backgroundColor: "#E5E5E5",

  },
  withAnimation: {
    animation: "collapse",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<InlineEdit {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated InlineEdit
// -------------------------------------------------------------
export const AnimatedInlineEdit = Template.bind({});
AnimatedInlineEdit.args = {
  ...Default.args,
  withAnimation: {
    animation: "slideRight",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedInlineEdit.parameters = {
  docs: {
    description: {
      story:
        "Use to animate the entry of the InlineEdit with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
    },
    source: {
      code: `<AnimatedInlineEdit {...${JSON.stringify(
        AnimatedInlineEdit.args,
        null,
        2
      )}}/>`,
    },
  },
};