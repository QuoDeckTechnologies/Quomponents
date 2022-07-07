import React from "react";
import CheckBox from "../components/CheckBox/CheckBox.react";

const dictionary = JSON.stringify({
  hi: {
    checkBox: {
      label: "डिफ़ॉल्ट चेकबॉक्स",
    },
  },
});

export default {
  title: "Design System/CheckBox/CheckBox",
  component: CheckBox,
  argTypes: {
    content: {
      table: {
        defaultValue: {
          name: "",
          label: "",
          checked: false,
        },
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
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
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
    withTranslation: {
      table: {
        category: "with-Params",
        defaultValue: {
          lang: "",
          tgt: "",
          dictionary: "",
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
    onClick: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle: "Displays a CheckBox component",
    a11y: { disable: true },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CheckBox {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    name: "checkbox",
    label: "Default Checkbox",
    checked: false,
  },
  asSize: "normal",
  asFloated: "left",
  withColor: {
    accentColor: "",
    textColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "checkBox",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
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
  ...Default.args,
  content: {
    name: "checkbox",
    label: "Read Only Checkbox",
    checked: true,
  },
  isDisabled: true,
  isHidden: false,
};
ReadOnlyCheckBox.parameters = {
  docs: {
    description: {
      story:
        "Read Only checkbox can be created by making `isDisabled` prop set to `true` and `checked` state can be as required",
    },
    source: {
      code: `<CheckBox {...${JSON.stringify(
        ReadOnlyCheckBox.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Disabled checkbox
// -------------------------------------------------------------
export const DisabledCheckBox = Template.bind({});
DisabledCheckBox.args = {
  ...Default.args,
  content: {
    name: "checkbox",
    label: "Disabled Checkbox",
    checked: false,
  },
  isDisabled: true,
  isHidden: false,
};
DisabledCheckBox.parameters = {
  docs: {
    description: {
      story:
        "Disabled checkbox can be created with `isDisabled` prop set to `true`",
    },
    source: {
      code: `<CheckBox {...${JSON.stringify(
        DisabledCheckBox.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Multiple CheckBox
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  return (
    <div>
      <CheckBox
        {...args}
        content={{ name: "checkbox A", label: args.label[0], checked: true }}
        asFloated="none"
      />
      <CheckBox
        {...args}
        content={{ name: "checkbox B", label: args.label[1], checked: false }}
        asFloated="none"
      />
    </div>
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
    <div>
      <CheckBox
        {...args}
        content={{ name: "checkbox A", label: args.label[0], checked: true }}
        asFloated="inline"
      />
      <CheckBox
        {...args}
        content={{ name: "checkbox B", label: args.label[1], checked: false }}
        asFloated="inline"
      />
    </div>
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
      story: "Multiple inline checkboxes can be created when needed",
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
// -------------------------------------------------------------
// Colored checkbox
// -------------------------------------------------------------
export const ColoredCheckBox = Template.bind({});
ColoredCheckBox.args = {
  ...Default.args,
  content: {
    name: "checkbox",
    label: "Colored Checkbox",
    checked: false,
  },
  withColor: {
    accentColor: "#14213d",
    textColor: "#14213d",
  },
};
ColoredCheckBox.parameters = {
  docs: {
    description: {
      story: "Colored checkbox can be created by using withColor props",
    },
    source: {
      code: `<CheckBox {...${JSON.stringify(ColoredCheckBox.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated checkbox
// -------------------------------------------------------------
export const TranslatedCheckBox = Template.bind({});
TranslatedCheckBox.args = {
  ...Default.args,
  content: {
    name: "checkbox",
    label: "Translated Checkbox",
    checked: false,
  },
  withTranslation: {
    lang: "hi",
    tgt: "checkBox",
    dictionary: dictionary,
  },
};
TranslatedCheckBox.parameters = {
  docs: {
    description: {
      story:
        "Translated checkbox can be created by using withTranslation props",
    },
    source: {
      code: `<CheckBox {...${JSON.stringify(
        TranslatedCheckBox.args,
        null,
        2
      )}}/>`,
    },
  },
};
