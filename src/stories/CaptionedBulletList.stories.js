import React from "react";
import CaptionedBulletList from "../components/CaptionedBulletList/CaptionedBulletList.react";

export default {
  title: "Design System/CaptionedBulletList/CaptionedBulletList",
  component: CaptionedBulletList,
  argTypes: {
    content: {},
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
          slideHeaderTextColor: "",
          slideHeaderAccentColor: "",
          slideHeaderBackgroundColor: "",
          textBlockBackgroundColor: "",
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
    componentSubtitle: "Displays a CaptionedBulletList Component",
    a11y: { disable: true },
    docs: {
      iframeHeight: 400,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CaptionedBulletList {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    slideHeaderTitle: "Neque porro quisquam est qui dolorem",
    slideHeaderSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    textBlockTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
  },
  isCircular: false,
  asVariant: "warning",
  asFloated: "none",

  withColor: {
    slideHeaderTextColor: "#FFFFFF",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    textBlockBackgroundColor: "#ff000000",
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
      code: `<CaptionedBulletList {...${JSON.stringify(Default.args, null, 2)}}/>`,
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
      <CaptionedBulletList
        {...Object.assign({}, baseObj, {
          content: ["Primary"],
          asVariant: "primary",
        })}
      />
      <CaptionedBulletList
        {...Object.assign({}, baseObj, {
          content: ["Secondary"],
          asVariant: "secondary",
        })}
      />
      <CaptionedBulletList
        {...Object.assign({}, baseObj, {
          content: ["Success"],
          asVariant: "success",
        })}
      />
      <CaptionedBulletList
        {...Object.assign({}, baseObj, {
          content: ["Warning"],
          asVariant: "warning",
        })}
      />
      <CaptionedBulletList
        {...Object.assign({}, baseObj, {
          content: ["Error"],
          asVariant: "error",
        })}
      />
      <CaptionedBulletList
        {...Object.assign({}, baseObj, {
          content: ["Hover"],
          withColor: {
            backgroundColor: "#00296b",
            textColor: "#fdc500",
            hoverBackgroundColor: "#fdc500",
            hoverTextColor: "#00296b",
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
        "5 variants and a custom withColor prop is supported. Use as per purpose noted here.",
    },
  },
};
