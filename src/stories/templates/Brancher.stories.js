import React from "react";
import Brancher from "../../components/Templates/Brancher/Brancher.react";

export default {
  title: "Design System/Templates/Brancher",
  component: Brancher,
  argTypes: {
    data: {
      defaultValue: {
        title: "",
        subtitle: "",
        paragraph: "",
        brancher: [],
        image: "",
        backgroundImage: "",
      },
    },
    imageLibrary: [],
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
          slideHeaderBackgroundColor: "",
          slideHeaderAccentColor: "",
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
  parameters: {
    componentSubtitle: "Displays a Brancher Component",
    a11y: { disable: true },
    docs: {
      iframeHeight: 650,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Brancher {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: {
    image: { id: "header-image", extention: "" },
    title: "Lorem ipsum dolor sit amet",
    subtitle: "",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    brancher: [
      { slideLink: 1, text: "Slide 1" },
      { slideLink: 1, text: "Slide 2" },
      { slideLink: 1, text: "Slide 3" },
      { slideLink: 1, text: "Slide 4" },
    ],
  },
  imageLibrary: [
    {
      id: "header-image",
      image:
        "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    },
  ],
  slideId: 0,
  isCircular: false,
  asVariant: "warning",
  asFloated: "none",
  withColor: {
    backgroundColor: "",
    textColor: "",
    slideHeaderBackgroundColor: "#ad292980",
    slideHeaderAccentColor: "#AD2929",
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
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<Brancher {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Brancher with Slide header
// -------------------------------------------------------------
export const BrancherWithSlideHeader = Template.bind({});
BrancherWithSlideHeader.args = {
  ...Default.args,
  data: {
    title: "Neque porro quisquam est qui dolorem qui",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    brancher: [
      { slideLink: 1, text: "Slide 1" },
      { slideLink: 1, text: "Slide 2" },
      { slideLink: 1, text: "Slide 3" },
      { slideLink: 1, text: "Slide 4" },
    ],
  },
};
BrancherWithSlideHeader.parameters = {
  docs: {
    description: {
      story: "Displays a Brancher component with Slide header",
    },
    source: {
      code: `<BrancherWithSlideHeader {...${JSON.stringify(
        BrancherWithSlideHeader.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Brancher with background image
// -------------------------------------------------------------
export const BrancherWithBackgroundImage = Template.bind({});
BrancherWithBackgroundImage.args = {
  ...Default.args,
  data: {
    image: { id: "header-image", extention: "" },
    backgroundImage: { id: "background-image", extention: "" },
    title: "Neque porro quisquam est qui dolorem qui",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    brancher: [
      { slideLink: 1, text: "Slide 1" },
      { slideLink: 1, text: "Slide 2" },
      { slideLink: 1, text: "Slide 3" },
      { slideLink: 1, text: "Slide 4" },
    ],
  },
  imageLibrary: [
    {
      id: "header-image",
      image:
        "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    },
    {
      id: "background-image",
      image:
        "https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ],
};
BrancherWithBackgroundImage.parameters = {
  docs: {
    description: {
      story: "Displays a Brancher component with background image",
    },
    source: {
      code: `<BrancherWithBackgroundImage {...${JSON.stringify(
        BrancherWithBackgroundImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Brancher
// -------------------------------------------------------------
export const ColoredBrancher = Template.bind({});
ColoredBrancher.args = {
  ...Default.args,
  data: {
    title: "Neque porro quisquam est qui dolorem qui",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    brancher: [
      { slideLink: 1, text: "Slide 1" },
      { slideLink: 1, text: "Slide 2" },
      { slideLink: 1, text: "Slide 3" },
      { slideLink: 1, text: "Slide 4" },
    ],
  },
  withColor: {
    backgroundColor: "#fffcf2",
    textColor: "#403d39",
    slideHeaderBackgroundColor: "#ccc5b9",
    slideHeaderAccentColor: "#eb5e28",
    slideHeaderTextColor: "#ffffff",
    buttonBackgroundColor: "#403d39",
    buttonTextColor: "#ffffff",
    buttonHoverBackgroundColor: "#eb5e28",
    buttonHoverTextColor: "",
  },
};
ColoredBrancher.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<ColoredBrancher {...${JSON.stringify(
        ColoredBrancher.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated Brancher
// -------------------------------------------------------------
export const AnimatedBrancher = Template.bind({});
AnimatedBrancher.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedBrancher.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of Brancher component",
    },
    source: {
      code: `<AnimatedBrancher {...${JSON.stringify(
        AnimatedBrancher.args,
        null,
        2
      )}}/>`,
    },
  },
};
