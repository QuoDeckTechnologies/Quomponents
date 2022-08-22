import React from "react";
import InlineEdit from "../components/InlineEdit/InlineEdit.react";

export default {
  title: "Design System/InlineEdit",
  component: InlineEdit,
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
        category: "Events",
        defaultValue: null,
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
  decorators: [(story) => <div>{story()}</div>],
  parameters: {
    componentSubtitle: "Default InlineEdit for general purpose use",
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
  value: "Please input your text here",
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
};
Default.parameters = {
  docs: {
    source: {
      code: `<InlineEdit
      value="Please input your text here"
      name="testing_id"
      asEmphasis="singleLine"
      withColor={{
        accentColor: "#FFAB00",
        backgroundColor: "#ffab000d",
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0,
      }}
      isHidden={false}
      isDisabled={false}/>`,
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
      story: "Use to show the multiLine editing state for the InlineEdit.",
    },
    source: {
      code: `<InlineEdit
      value="Please input your text here"
      name="testing_id"
      asEmphasis="multiLine"
      withColor={{
        accentColor: "#FFAB00",
        backgroundColor: "#ffab000d",
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0,
      }}
      isHidden={false}
      isDisabled={false}/>`,
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
      code: `<InlineEdit
      value="Please input your text here"
      name="testing_id"
      asEmphasis="singleLine"
      withColor={{
        accentColor: "#FFAB00",
        backgroundColor: "#ffab000d",
      }}
      withAnimation={{
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
      }}
      isHidden={false}
      isDisabled={false}/>`,
    },
  },
};
// -------------------------------------------------------------
// Variants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {}),
  };
  return (
    <div>
      <InlineEdit
        {...Object.assign({}, baseObj, {
          withColor: {
            accentColor: "#ffbf00",
            backgroundColor: "#666666",
          },
        })}
      />{" "}
      <br />
      <InlineEdit
        {...Object.assign({}, baseObj, {
          asEmphasis: "multiLine",
          withColor: {
            accentColor: "#589C48",
            backgroundColor: "#733381",
          },
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
      code: `<InlineEdit
      asEmphasis="multiLine"
      withColor={{
        accentColor: "#589C48",
        backgroundColor: "#733381",
      }}/>`,
    },
  },
};
