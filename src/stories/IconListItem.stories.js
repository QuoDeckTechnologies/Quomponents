import React from "react";
import IconListItem from "../components/IconListItem/IconListItem/IconListItem.react";

export default {
  title: "Design System/IconListItem/IconListItem",
  component: IconListItem,
  argTypes: {
    content: [
      {
        text: "",
        image: "",
      },
    ],
    asEmphasis: {
      control: "select",
      options: ["conversation", "list"],
      table: {
        category: "as-Flags",
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
  },
  decorators: [
    (story) => (
      <div
        style={{
          width: "100%",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle:
      "Displays a basic image and title for general-purpose use",
    a11y: { disable: true },
    docs: { iframeHeight: 700 },
  },
};

const Template = (args) => <IconListItem {...args} />;
//----------------------------------------------------------
// Default
//---------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
  content: [
    {
      image:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    }
  ],
  asEmphasis: "conversation",
  asVariant: "primary",
  asFloated: "none",
  withColor: {
    textColor: "#666666",
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
    description: {
      story:
        "Displays a basic image and title for general-purpose use or change it for content image and title by giving a link of image and title in content prop",
    },
    source: {
      code: `<IconListItem {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Floated Variants
// -------------------------------------------------------------
const FloatedVariantsTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {}),
  };
  return (
    <div>
      <IconListItem
        {...Object.assign({}, baseObj, {
          asSize: "small",
          asFloated: "none",
        })}
      />
      <IconListItem
        {...Object.assign({}, baseObj, {
          asSize: "small",
          asFloated: "left",
        })}
      />
      <IconListItem
        {...Object.assign({}, baseObj, {
          asSize: "small",
          asFloated: "right",
        })}
      />
    </div>
  );
};

export const FloatedVariants = FloatedVariantsTemplate.bind({});
FloatedVariants.parameters = {
  docs: {
    description: {
      story: "5 variants are supported. Use as per purpose noted here.",
    },
    source: {
      code: `<IconListItem asVariant="primary"/>`,
    },
  },
};
