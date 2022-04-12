import React from "react";
import MultiSelect from "../components/MultiSelect/MultiSelect.react";

export default {
  title: "Design System/MultiSelect/MultiSelect",
  component: MultiSelect,
  argTypes: {
    content: [
      {
        name: "Primary Button",
        isSelected: false,
      },
      {
        name: "Primary Button",
        isSelected: false,
      },
      {
        name: "Primary Button",
        isSelected: false,
      },
      {
        name: "Primary Button",
        isSelected: false,
      },
    ],
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
    componentSubtitle: "Displays a MultiSelect Component",
    a11y: { disable: true },
    docs: { iframeHeight: 300 },

  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <MultiSelect {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: [
    {
      name: "Primary Button",
      isSelected: false,
    },
    {
      name: "Primary Button",
      isSelected: false,
    },
    {
      name: "Primary Button",
      isSelected: false,
    },
    {
      name: "Primary Button",
      isSelected: false,
    },
  ],
  asEmphasis: "contained",
  isCircular: false,

  asVariant: "warning",
  asFloated: "none",

  withColor: {
    backgroundColor: "",
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
      code: `<MultiSelect {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};


// -------------------------------------------------------------
// All Variants
// -------------------------------------------------------------
const AllVariantTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args),
  };
  return (
    <div className="qui-allvariants-container">
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
          ],
          asVariant: "primary",
          withAnimation: {
            animation: "slideDown",
            duration: 0.5,
            delay: 0.2,
          },
        })}
      />
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
          ],
          asVariant: "secondary",
          withAnimation: {
            animation: "slideDown",
            duration: 0.5,
            delay: 0.4,
          },
        })}
      />
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
          ],
          asVariant: "success",
          withAnimation: {
            animation: "slideDown",
            duration: 0.5,
            delay: 0.6,
          },
        })}
      />
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
          ],
          asVariant: "warning",
          withAnimation: {
            animation: "slideDown",
            duration: 0.5,
            delay: 0.8,
          },
        })}
      />
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
          ],
          asVariant: "error",
          withAnimation: {
            animation: "slideDown",
            duration: 0.5,
            delay: 1,
          },
        })}
      />
    </div>
  );
};
export const AllVariants = AllVariantTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story:
        "5 variants  is supported. Use as per purpose noted here.",
    },
  },
};
