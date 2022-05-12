import React from "react";
import LinkwithSlide from "../../components/Templates/LinkwithSlide/LinkwithSlide.react";

export default {
  title: "Design System/Templates/LinkwithSlide/LinkwithSlide",
  component: LinkwithSlide,
  argTypes: {
    data: {
      defaultValue: {
        title: "",
        subtitle: "",
        paragraph: "",
        image: {},
        backgroundImage: {},
      },
    },
    imageLibrary: [],
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
          slideHeaderAccentColor: "",
          slideHeaderBackgroundColor: "",
          slideHeaderTextColor: "",
          textBlockBackgroundColor: "",
          textBlockTextColor: "",
          iconBlockBackgroundColor: "",
          iconBlockAccentColor: "",
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
  parameters: {
    componentSubtitle: "Displays a LinkwithSlide component",
    a11y: { disable: true },
    docs: {
      iframeHeight: 650,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <LinkwithSlide {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl, ut aliquet orci. Mauris id sapien felis. Nullam elementum enim tincidunt, facilisis lacus vitae, volutpat ligula. ",
  },
  imageLibrary: [
    {
      id: "header-image",
      image:
        "https://images.unsplash.com/photo-1650958287606-a0c5d2fda0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
  ],
  asFloated: "none",
  withColor: {
    backgroundColor: "",
    textColor: "",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    slideHeaderTextColor: "#ffffff",
    textBlockBackgroundColor: "",
    textBlockTextColor: "#ffffff",
    iconBlockBackgroundColor: "",
    iconBlockAccentColor: "",
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
      code: `<LinkwithSlide {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// LinkwithSlide
// -------------------------------------------------------------
export const DefaultLinkwithSlide = Template.bind({});
DefaultLinkwithSlide.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    icon: "fas fa-book-open",
  },
  imageLibrary: [{}],
  asFloated: "none",
  withColor: {
    backgroundColor: "",
    textColor: "",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    slideHeaderTextColor: "#ffffff",
    textBlockBackgroundColor: "",
    textBlockTextColor: "#ffffff",
    iconBlockBackgroundColor: "",
    iconBlockAccentColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
};
DefaultLinkwithSlide.parameters = {
  docs: {
    source: {
      code: `<LinkwithSlide {...${JSON.stringify(
        DefaultLinkwithSlide.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored LinkwithSlide
// -------------------------------------------------------------
export const ColoredLinkwithSlide = Template.bind({});
ColoredLinkwithSlide.args = {
  ...Default.args,
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    icon: "fas fa-book-open",
  },
  withColor: {
    backgroundColor: "#14213d",
    textColor: "#ced4da",
    slideHeaderAccentColor: "#ffba08",
    slideHeaderBackgroundColor: "#8c9ea3",
    slideHeaderTextColor: "#ffffff",
    textBlockBackgroundColor: "#ee9b00",
    textBlockTextColor: "#ffffff",
    iconBlockBackgroundColor: "#e5e5e5",
    iconBlockAccentColor: "#14213d",
  },
};
ColoredLinkwithSlide.parameters = {
  docs: {
    source: {
      code: `<LinkwithSlide {...${JSON.stringify(
        ColoredLinkwithSlide.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated LinkwithSlide
// -------------------------------------------------------------
export const AnimatedLinkwithSlide = Template.bind({});
AnimatedLinkwithSlide.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedLinkwithSlide.parameters = {
  docs: {
    source: {
      code: `<LinkwithSlide {...${JSON.stringify(
        AnimatedLinkwithSlide.args,
        null,
        2
      )}}/>`,
    },
  },
};
