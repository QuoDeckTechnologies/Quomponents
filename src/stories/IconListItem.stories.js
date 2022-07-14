import React from "react";
import IconListItem from "../components/IconListItem/IconListItem/IconListItem.react";

export default {
  title: "Design System/IconListItem",
  component: IconListItem,
  argTypes: {
    content: [],
    imageLibrary: [],
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
    docs: { iframeHeight: 600 },
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
      image: { id: "iconlist-image", extention: "" },
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      image: { id: "iconlistitem", extention: "" },
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      image: { id: "iconlist-image", extention: "" },
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      image: { id: "iconlistitem", extention: "" },
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      image: { id: "iconlist-image", extention: "" },
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      image: { id: "iconlistitem", extention: "" },
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      image: { id: "iconlist-image", extention: "" },
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    }
  ],
  imageLibrary: [
    {
      id: "iconlist-image",
      image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      id: "iconlistitem",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
    }],
  asEmphasis: "conversation",
  asVariant: "primary",
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
// MultiLine InlineEdit
// -------------------------------------------------------------
export const IconListItemAsList = Template.bind({});
IconListItemAsList.args = {
  ...Default.args,
  asEmphasis: "list",
};
IconListItemAsList.parameters = {
  docs: {
    description: {
      story:
        "Use to show the list state for the IconListItem.",
    },
    source: {
      code: `<IconListItemAsList {...${JSON.stringify(
        IconListItemAsList.args,
        null,
        2
      )}}/>`,
    },
  },
};