import React from "react";
import InputField from "../components/InputField/InputField.react";

export default {
  title: "Design System/InputField/InputField",
  component: InputField,
  argTypes: {
    name: "",
    content: {
      table: {
        defaultValue: {
          label: "Input Name",
          value: "Please input your text here",
          placeholder: "Options",
          maxLength: 1,
        },
      },
    },
    asEmphasis: {
      control: "select",
      options: ["filled", "charLimited", "listInput", "shortField"],
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
          textColor: "",
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
    onClick: {
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
      "Default InputField for general purpose use",
    a11y: { disable: true },
    docs: { iframeHeight: 100 },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <InputField {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    label: "Input Name",
    value: "Please input your text here",
    placeholder: "Options",
    maxLength: 300,
  },
  name: "testing_id",
  asEmphasis: "filled",
  asFloated: "none",
  withColor: {
    textColor: "#666666",
    accentColor: "#ffab00",
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
      code: `<InputField {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// charLimited InputField
// -------------------------------------------------------------
export const charLimitedField = Template.bind({});
charLimitedField.args = {
  ...Default.args,
  asEmphasis: "charLimited",
};
charLimitedField.parameters = {
  docs: {
    description: {
      story:
        "Use to show the charLimited editing state for the InputField.",
    },
    source: {
      code: `<charLimitedField {...${JSON.stringify(
        charLimitedField.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// listInput InputField
// -------------------------------------------------------------
export const listInputField = Template.bind({});
listInputField.args = {
  ...Default.args,
  content: {
    value: "",
    placeholder: "Options",
    maxLength: 300,
  },
  asEmphasis: "listInput",
};
listInputField.parameters = {
  docs: {
    description: {
      story:
        "Use to show the listInput editing state for the InputField.",
    },
    source: {
      code: `<listInputField {...${JSON.stringify(
        listInputField.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// shortField InputField
// -------------------------------------------------------------
export const ShortFieldField = Template.bind({});
ShortFieldField.args = {
  ...Default.args,
  content: {
    value: "0",
  },
  asEmphasis: "shortField",
};
ShortFieldField.parameters = {
  docs: {
    description: {
      story:
        "Use to show the shortField editing state for the InputField.",
    },
    source: {
      code: `<ShortFieldField {...${JSON.stringify(
        ShortFieldField.args,
        null,
        2
      )}}/>`,
    },
  },
};
