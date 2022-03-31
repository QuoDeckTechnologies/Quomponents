import React from "react";
import CheckBox from "../components/CheckBox/CheckBox.react";

export default {
  title: "Design System/CheckBox/CheckBox",
  component: CheckBox,
  argTypes: {
    content: "CheckBox",
    isChecked: {
      table: {
        defaultValue: false,
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
    onClick: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle: "Displays a basic button for general-purpose use",
    a11y: { disable: true },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CheckBox {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: "Enable Checkbox",
  isChecked: false,
  asSize: "normal",
  asFloated: "none",
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
  isFluid: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<CheckBox {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  return (
    <>
      <CheckBox {...args} content={args.content[0]} isChecked={true} />
      <CheckBox {...args} content={args.content[1]} isChecked={false} />
    </>
  );
};
export const MultipleCheckBox = MultipleTemplate.bind({});
MultipleCheckBox.args = {
  ...Default.args,
  content: ["Option One", "Option Two"],
};
MultipleCheckBox.parameters = {
  docs: {
    description: {
      story:
        "Multiple checkboxes can be used which outputs their status and content text to `onClick` prop",
    },
    source: {
      code: `<CheckBox {...${JSON.stringify(
        MultipleCheckBox.args,
        null,
        2
      )}}/>`,
    },
  },
};
