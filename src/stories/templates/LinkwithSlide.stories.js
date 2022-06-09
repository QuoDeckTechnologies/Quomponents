import React from "react";
import LinkwithSlide from "../../components/Templates/LinkwithSlide/LinkwithSlide.react";

const dictionary = JSON.stringify({
  hi: {
    linkwithslide: { button: "जाएँ" },
  },
});

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
          slideHeaderAccentColor: "",
          slideHeaderBackgroundColor: "",
          slideHeaderTextColor: "",
          buttonBackgroundColor: "",
          buttonTextColor: "",
          buttonHoverBackgroundColor: "",
          buttonHoverTextColor: "",
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
    withTranslation: {
      table: {
        category: "with-Params",
        defaultValue: {
          lang: "",
          tgt: "",
          dictionary: "",
        },
      },
    },
    isHidden: {
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
    title: "Neque porro quisquam est qui dolorem est",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipisl?",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl, ut aliquet orci. Mauris id sapien felis. Nullam elementum enim tincidunt, facilisis lacus vitae, volutpat ligula ligula ligula ligula.",
    gotoSlide: 0,
  },
  imageLibrary: [{}],
  asVariant: "warning",
  asFloated: "none",
  withColor: {
    backgroundColor: "",
    textColor: "",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    slideHeaderTextColor: "#ffffff",
    buttonBackgroundColor: "",
    buttonTextColor: "",
    buttonHoverBackgroundColor: "",
    buttonHoverTextColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "linkwithslide",
    dictionary: dictionary,
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
// LinkwithSlide and header image
// -------------------------------------------------------------
export const LinkWithSlideHeaderImage = Template.bind({});
LinkWithSlideHeaderImage.args = {
  ...Default.args,
  data: {
    title: "Neque porro quisquam est qui dolorem est",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipisl?",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl, ut aliquet orci. Mauris id sapien felis. Nullam elementum enim tincidunt, facilisis lacus vitae, volutpat ligula ligula ligula ligula.",
    image: {
      id: "header-image",
      extention: "",
    },
    gotoSlide: 0,
  },
  imageLibrary: [
    {
      id: "header-image",
      image:
        "https://images.unsplash.com/photo-1650958287606-a0c5d2fda0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
  ],
};
LinkWithSlideHeaderImage.parameters = {
  docs: {
    description: {
      story: "Displays LinkWithSlide component with header image",
    },
    source: {
      code: `<LinkwithSlide {...${JSON.stringify(
        LinkWithSlideHeaderImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// LinkwithSlide and background image
// -------------------------------------------------------------
export const LinkWithSlideBackgroundImage = Template.bind({});
LinkWithSlideBackgroundImage.args = {
  ...Default.args,
  data: {
    title: "Neque porro quisquam est qui dolorem est",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipisl?",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl, ut aliquet orci. Mauris id sapien felis. Nullam elementum enim tincidunt, facilisis lacus vitae, volutpat ligula ligula ligula ligula.",
    backgroundImage: {
      id: "background-image",
      extention: "",
    },
    gotoSlide: 0,
  },
  imageLibrary: [
    {
      id: "background-image",
      image:
        "https://images.unsplash.com/photo-1652229914166-44733f7d06d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ],
  withColor: {
    backgroundColor: "",
    textColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    slideHeaderTextColor: "#ffffff",
    buttonBackgroundColor: "",
    buttonTextColor: "",
    buttonHoverBackgroundColor: "",
    buttonHoverTextColor: "",
  },
};
LinkWithSlideBackgroundImage.parameters = {
  docs: {
    description: {
      story: "Displays LinkWithSlide component with background image",
    },
    source: {
      code: `<LinkwithSlide {...${JSON.stringify(
        LinkWithSlideBackgroundImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored LinkwithSlide
// -------------------------------------------------------------
export const ColoredLinkWithSlide = Template.bind({});
ColoredLinkWithSlide.args = {
  ...Default.args,
  withColor: {
    textColor: "#ced4da",
    slideHeaderAccentColor: "#ffba08",
    backgroundColor: "#14213d",
    slideHeaderBackgroundColor: "#8c9ea3",
    slideHeaderTextColor: "#ffffff",
    buttonBackgroundColor: "#8c9ea3",
    buttonTextColor: "#ffba08",
    buttonHoverBackgroundColor: "#14213d",
    buttonHoverTextColor: "#ffffff",
  },
};
ColoredLinkWithSlide.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<LinkwithSlide {...${JSON.stringify(
        ColoredLinkWithSlide.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated LinkwithSlide
// -------------------------------------------------------------
export const AnimatedLinkWithSlide = Template.bind({});
AnimatedLinkWithSlide.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedLinkWithSlide.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of AmplayfierDateBlock",
    },
    source: {
      code: `<LinkwithSlide {...${JSON.stringify(
        AnimatedLinkWithSlide.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated LinkwithSlide
// -------------------------------------------------------------
export const TranslatedLinkWithSlide = Template.bind({});
TranslatedLinkWithSlide.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "linkwithslide",
    dictionary: dictionary,
  },
};
TranslatedLinkWithSlide.parameters = {
  docs: {
    description: {
      story: "Use to change the language that the text appears in.",
    },
    source: {
      code: `<LinkwithSlide {...${JSON.stringify(
        TranslatedLinkWithSlide.args,
        null,
        2
      )}}/>`,
    },
  },
};
