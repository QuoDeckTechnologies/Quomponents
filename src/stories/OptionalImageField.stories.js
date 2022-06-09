import React from "react";
import OptionalImageField from "../components/OptionalImageField/OptionalImageField.react";

export default {
  title: "Design System/OptionalImageField/OptionalImageField",
  component: OptionalImageField,
  argTypes: {
    content: {
      defaultValue: {
        title: "Upload",
        icon: "fas fa-image",
        actionButton: true,
      },
    },
    withFile: {
      defaultValue: {
        type: "image/*",
        capture: "",
      },
    },
    isMultiple: {
      table: {
        defaultValue: false,
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
    title: "Upload",
    icon: "fas fa-image",
    actionButton: true,
  },
  withFile: {
    type: "image/*",
    capture: "",
  },
  isMultiple: false,
  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "",
  },
  isDisabled: false,
  isHidden: false,
  isFluid: false,
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
  content: {
    title: "",
    icon: "fas fa-image",
    actionButton: false,
  },
};
WithoutActionButton.parameters = {
  docs: {
    description: {
      story: "Displays a OptionalImageField without action button",
    },
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
// Without Icon
// -------------------------------------------------------------
export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  ...Default.args,
  content: {
    title: "Upload",
    actionButton: true,
  },
};
WithoutIcon.parameters = {
  docs: {
    description: {
      story: "Displays a OptionalImageField without icon button",
    },
    source: {
      code: `<OptionalImageField {...${JSON.stringify(
        WithoutIcon.args,
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
    title: "Upload new file",
    icon: "fas fa-camera-retro",
    actionButton: true,
  },
};
WithCustomIcon.parameters = {
  docs: {
    description: {
      story: "Displays a OptionalImageField with custom icon button",
    },
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
    description: {
      story: "Use to override the standard colors of the component.",
    },
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
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionalImageField.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of OptionalImageField",
    },
    source: {
      code: `<OptionalImageField {...${JSON.stringify(
        AnimatedOptionalImageField.args,
        null,
        2
      )}}/>`,
    },
  },
};
