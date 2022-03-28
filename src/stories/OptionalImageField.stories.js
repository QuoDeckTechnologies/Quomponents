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
// -------------------------------------------------------------
// Without ActionButton
// -------------------------------------------------------------
export const WithoutActionButton = Template.bind({});
WithoutActionButton.args = {
  ...Default.args,
  isActionButton: false,
};
WithoutActionButton.parameters = {
  docs: {
    source: {
      code: `<OptionalImageField {...${JSON.stringify(
        WithoutActionButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// With Custom Icon
// -------------------------------------------------------------
export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  ...Default.args,
  content: {
    text: "Upload new file",
    icon: "fas fa-camera-retro",
  },
};
WithCustomIcon.parameters = {
  docs: {
    source: {
      code: `<OptionalImageField {...${JSON.stringify(
        WithCustomIcon.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored OptionalImageField
// -------------------------------------------------------------
export const ColoredOptionalImageField = Template.bind({});
ColoredOptionalImageField.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#2a9d8f09",
    accentColor: "#264653",
    textColor: "#023047",
  },
};
ColoredOptionalImageField.parameters = {
  docs: {
    source: {
      code: `<OptionalImageField {...${JSON.stringify(
        ColoredOptionalImageField.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated OptionalImageField
// -------------------------------------------------------------
export const AnimatedOptionalImageField = Template.bind({});
AnimatedOptionalImageField.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionalImageField.parameters = {
  docs: {
    source: {
      code: `<OptionalImageField {...${JSON.stringify(
        AnimatedOptionalImageField.args,
        null,
        2
      )}}/>`,
    },
  },
};
