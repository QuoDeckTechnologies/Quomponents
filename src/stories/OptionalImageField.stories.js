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
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          textColor: "",
          accentColor: "",
          hoverBackgroundColor: "",
          hoverTextColor: "",
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
  withColor: {
    backgroundColor: "",
    textColor: "",
    accentColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
  isDisabled: false,
  isHidden: false,
  isFluid: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionalImageField
          title="Upload"
          icon="fas fa-image"
          actionButton={true}
          type="image/*"
          capture=""
          multiple={false}
          withColor={{
            backgroundColor: "",
            textColor: "",
            accentColor: "",
            hoverBackgroundColor: "",
            hoverTextColor: "",
          }}
          isDisabled={false}
          isHidden={false}
          isFluid={false}
          onUpload={()=>{}}
        />`,
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
      code: `<OptionalImageField
          title=""
          icon="fas fa-image"
          actionButton={false}
          type="image/*"
          capture=""
          multiple={false}
          withColor={{
            backgroundColor: "",
            textColor: "",
            accentColor: "",
            hoverBackgroundColor: "",
            hoverTextColor: "",
          }}
          isDisabled={false}
          isHidden={false}
          isFluid={false}
          onUpload={()=>{}}
        />`,
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
      code: `<OptionalImageField
          title="Upload"
          actionButton={true}
          icon="fas fa-image"
          type="image/*"
          capture=""
          multiple={false}
          withColor={{
            backgroundColor: "",
            textColor: "",
            accentColor: "",
            hoverBackgroundColor: "",
            hoverTextColor: "",
          }}
          isDisabled={false}
          isHidden={false}
          isFluid={false}
          onUpload={()=>{}}
        />`,
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
      code: `<OptionalImageField
          title="Upload new file"
          icon="fas fa-camera-retro"
          actionButton={true}
          type="image/*"
          capture=""
          multiple={false}
          withColor={{
            backgroundColor: "",
            textColor: "",
            accentColor: "",
            hoverBackgroundColor: "",
            hoverTextColor: "",
          }}
          isDisabled={false}
          isHidden={false}
          isFluid={false}
          onUpload={()=>{}}
        />`,
    },
  },
};
