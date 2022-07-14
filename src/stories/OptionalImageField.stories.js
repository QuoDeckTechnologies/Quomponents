import React from "react";
import OptionalImageField from "../components/OptionalImageField/OptionalImageField.react";

export default {
  title: "Design System/OptionalImageField",
  component: OptionalImageField,
  argTypes: {
    title: "",
    icon: "",
    actionButton: true,
    type: "image/*",
    capture: "",
    multiple: {
      table: {
        defaultValue: false,
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
    onUpload: {
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
  title: "Upload",
  icon: "fas fa-image",
  actionButton: true,
  type: "image/*",
  capture: "",
  multiple: false,
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
  title: "",
  icon: "fas fa-image",
  actionButton: false,
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
  title: "Upload",
  actionButton: true,
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
  title: "Upload new file",
  icon: "fas fa-camera-retro",
  actionButton: true,
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
