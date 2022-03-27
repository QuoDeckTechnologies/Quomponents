import React from "react";
import OptionalImageField from "../components/OptionalImageField/OptionalImageField.react";

export default {
  title: "Design System/OptionalImageField/OptionalImageField",
  component: OptionalImageField,
  argTypes: {
    content: {
      defaultValue: {
        text: "Upload",
        icon: "fas fa-image",
      },
    },
    isActionButton: true,
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
    onClick: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle: "Displays a OptionalImageField Component",
    a11y: { disable: true },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <OptionalImageField {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    text: "Upload",
    icon: "fas fa-image",
  },
  isActionButton: true,
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
      code: `<OptionalImageField {...${JSON.stringify(
        Default.args,
        null,
        2
      )}}/>`,
    },
  },
};
