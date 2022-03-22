import React from "react";
import CheckboxButton from "../components/CheckboxButton/CheckboxButton.react";

export default {
  title: "Design System/CheckBoxButton/Checkbox",
  component: CheckboxButton,
  argTypes: {
    content: "",
    asEmphasis: {
      control: "select",
      options: ["text", "outlined", "contained"],
      table: {
        category: "as-Flags",
      },
    },
    isCircular: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
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
          width: "100%",
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a Checkbox Component",
    a11y: { disable: true },
    docs: { iframeHeight: 300 },

  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CheckboxButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: "Primary Checkbox",
  asEmphasis: "contained",
  isCircular: false,

  asVariant: "warning",
  asFloated: "none",

  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
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
    description: {
      story: "Default component shows features like selected ,not selected , animation in the component",
    },
    source: {
      code: `<CheckboxButton {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

