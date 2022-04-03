import React from "react";
import CheckBox from "../components/CheckBox/CheckBox.react";

export default {
  title: "Design System/CheckBox/CheckBox",
  component: CheckBox,
  argTypes: {
    label: "CheckBox",
    checked: {
      table: {
        defaultValue: false,
      },
    },
    asSize: {
      control: "select",
      options: ["tiny", "normal", "huge"],
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
  label: "Default Checkbox",
  checked: false,
  asSize: "normal",
  asFloated: "left",
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
// Read only checkbox
// -------------------------------------------------------------
export const ReadOnlyCheckBox = Template.bind({});
ReadOnlyCheckBox.args = {
  label: "Read Only Checkbox",
  checked: true,
  asSize: "normal",
  asFloated: "left",
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isDisabled: true,
  isHidden: false,
  isFluid: false,
};
ReadOnlyCheckBox.parameters = {
  docs: {
    source: {
      code: `<CheckBox {...${JSON.stringify(ReadOnlyCheckBox.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Disabled checkbox
// -------------------------------------------------------------
export const DisabledCheckBox = Template.bind({});
DisabledCheckBox.args = {
  label: "Disabled Checkbox",
  checked: false,
  asSize: "normal",
  asFloated: "left",
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isDisabled: true,
  isHidden: false,
  isFluid: false,
};
DisabledCheckBox.parameters = {
  docs: {
    source: {
      code: `<CheckBox {...${JSON.stringify(DisabledCheckBox.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Multiple CheckBox
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  return (
    <>
      <CheckBox
        {...args}
        label={args.label[0]}
        checked={true}
        asFloated="none"
      />
      <CheckBox
        {...args}
        label={args.label[1]}
        checked={false}
        asFloated="none"
      />
    </>
  );
};
export const MultipleCheckBox = MultipleTemplate.bind({});
MultipleCheckBox.args = {
  ...Default.args,
  label: ["Option One", "Option Two"],
};
MultipleCheckBox.parameters = {
  docs: {
    description: {
      story:
        "Multiple checkboxes can be used which outputs their status and label text to `onClick` prop",
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
// -------------------------------------------------------------
// Multiple CheckBox
// -------------------------------------------------------------
const MultipleTemplateInline = (args) => {
  return (
    <>
      <CheckBox
        {...args}
        label={args.label[0]}
        checked={true}
        asFloated="inline"
      />
      <CheckBox
        {...args}
        label={args.label[1]}
        checked={false}
        asFloated="inline"
      />
    </>
  );
};
export const InlineMultipleCheckBox = MultipleTemplateInline.bind({});
InlineMultipleCheckBox.args = {
  ...Default.args,
  label: ["Option One", "Option Two"],
};
InlineMultipleCheckBox.parameters = {
  docs: {
    description: {
      story:
        "Multiple checkboxes can be used which outputs their status and label text to `onClick` prop",
    },
    source: {
      code: `<CheckBox {...${JSON.stringify(
        InlineMultipleCheckBox.args,
        null,
        2
      )}}/>`,
    },
  },
};