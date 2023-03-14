import React from "react";
import EditableInput from "../components/EditableInput/EditableInput.react";

export default {
  title: "Design System/EditableInput",
  component: EditableInput,
  argTypes: {
    value: "Please input your text here",
    name: "",
    asEmphasis: {
      control: "select",
      options: ["singleLine", "multiLine"],
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
    onFocus: {
      table: {
        category: "is-Toggles",
        defaultValue: true,
      },
    },
    onBlur: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onSubmit: {
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
const Template = (args) => <EditableInput {...args} />;
export const Default = Template.bind({});
Default.args = {
  value: "My Training App",
  name: "testing_id",
  asEmphasis: "singleLine",
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
  isFocused:true,
};
Default.parameters = {
  docs: {
    source: {
      code: `<EditableInput {...${JSON.stringify(Default.args, null, 2)}}/>`,
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
      <EditableInput
        {...Object.assign({}, baseObj, {
          withColor: {
            accentColor: "#ffbf00",
            backgroundColor: "#666666",
          }
        })}
      />{" "}
      <br />
      <EditableInput
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
      code: `<EditableInput asEmphasis: "multiLine", withColor: { accentColor: "#589C48", backgroundColor: "#733381"}/>`,
    },
  },
};
