import React from "react";
import CaptionedBulletList from "../components/CaptionedBulletList/CaptionedBulletList.react";

export default {
  title: "Design System/CaptionedBulletList/CaptionedBulletList",
  component: CaptionedBulletList,
  argTypes: {
    data: {},
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
      },
    },
    asFloated: {
      control: "select",
      options: ["left", "right", "inline"],
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
          bulletBlockTextdColor: "",
          bulletBlockBackgroundColor: "",
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
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    textBlockTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
    blockBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Quisque sed turpis vel lectus suscipit auctor",
      "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
    ]
  },
  asVariant: "warning",
  asFloated: "inline",

  withColor: {
    slideHeaderTextColor: "#FFFFFF",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    textBlockBackgroundColor: "#ff000000",
    bulletBlockTextColor: "#ffffff",
    bulletBlockBackgroundColor: "#ad292980",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
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
          data: ["Primary"],
          asVariant: "primary",
        })}
      />
      <CaptionedBulletList
        {...Object.assign({}, baseObj, {
          data: ["Secondary"],
          asVariant: "secondary",
        })}
      />
      <CaptionedBulletList
        {...Object.assign({}, baseObj, {
          data: ["Success"],
          asVariant: "success",
        })}
      />
      <CaptionedBulletList
        {...Object.assign({}, baseObj, {
          data: ["Warning"],
          asVariant: "warning",
        })}
      />
      <CaptionedBulletList
        {...Object.assign({}, baseObj, {
          data: ["Error"],
          asVariant: "error",
        })}
      />
      <CaptionedBulletList
        {...Object.assign({}, baseObj, {
          data: ["Hover"],
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
