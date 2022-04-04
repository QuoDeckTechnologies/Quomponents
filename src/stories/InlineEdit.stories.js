import React from "react";
import InlineEdit from "../components/InlineEdit/InlineEdit.react";

export default {
  title: "Design System/InlineEdit/InlineEdit",
  component: InlineEdit,
  argTypes: {
    content: "Please input your text here",
    name: "",
    asEmphasis: {
      control: "select",
      options: ["singleLine", "multiLine"],
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
    isDisabled: {
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
    docs: { iframeHeight: 150 },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <InlineEdit {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: "Please input your text here",
  name: "testing_id",
  asEmphasis: "singleLine",
  asSize: "normal",
  asFloated: "none",
  asAligned: "left",
  withColor: {
    accentColor: "#FFAB00",
    backgroundColor: "#ffab000d",
  },
  withAnimation: {
    animation: "collapse",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
  isDisabled: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<InlineEdit {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// MultiLine InlineEdit
// -------------------------------------------------------------
export const MultiLineEdit = Template.bind({});
MultiLineEdit.args = {
  ...Default.args,
  asEmphasis: "multiLine",
};
MultiLineEdit.parameters = {
  docs: {
    description: {
      story:
        "Use to show the multiLine editing state for the InlineEdit.",
    },
    source: {
      code: `<MultiLineEdit {...${JSON.stringify(
        MultiLineEdit.args,
        null,
        2
      )}}/>`,
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
// -------------------------------------------------------------
// Variants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
    }),
  };
  return (
    <div>
      <InlineEdit
        {...Object.assign({}, baseObj, {
          withColor: {
            accentColor: "#ffbf00",
            backgroundColor: "#666666",
          }
        })}
      />{" "}
      <br />
      <InlineEdit
        {...Object.assign({}, baseObj, {
          asEmphasis: "multiLine",
          withColor: {
            accentColor: "#589C48",
            backgroundColor: "#733381",
          }
        })}
      />{" "}
    </div>
  );
};
export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story: "variants are supported. Use as per purpose noted here.",
    },
    source: {
      code: `<InlineEdit asEmphasis: "multiLine", withColor: { accentColor: "#589C48", backgroundColor: "#733381"}/>`,
    },
  },
};
