import React from "react";
import MCQwithFeedback from "../../components/Templates/MCQwithFeedback/MCQwithFeedback.react";

export default {
  title: "Design System/Templates/MCQwithFeedback",
  component: MCQwithFeedback,
  argTypes: {
    data: {
      defaultValue: {
        backgroundImage: "",
        title: "",
        subtitle: "",
        icon: "",
        question: "",
        options: [],
      },
    },
    imageLibrary: [],
    isCircular: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
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
    componentSubtitle: "Displays a MCQ with Feedback Component",
    a11y: { disable: true },
    docs: {
      iframeHeight: 650,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <MCQwithFeedback {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: {
    image: { id: "header-image", extention: "" },
    title: "Lorem ipsum dolor sit amet",
    subtitle: "",
    icon: "",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    options: [
      { correct: "checked", text: "Item 1" },
      { correct: "", text: "Item 2" },
      { correct: "", text: "Item 3" },
      { correct: "", text: "Item 4" },
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
      code: `<MCQwithFeedback {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Slide header MCQ with Feedback
// -------------------------------------------------------------
export const SlideHeaderMcqWithFeedback = Template.bind({});
SlideHeaderMcqWithFeedback.args = {
  ...Default.args,
  data: {
    title: "Lorem ipsum dolor sit amet",
    subtitle: "Lorem ipsum dolor ",
    icon: "",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    options: [
      { correct: "checked", text: "Item 1" },
      { correct: "", text: "Item 2" },
      { correct: "", text: "Item 3" },
      { correct: "", text: "Item 4" },
    ],
  },
  withColor: {
    backgroundColor: "",
    textColor: "",
    slideHeaderBackgroundColor: "#ad292980",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderTextColor: "#ffffff",
    buttonBackgroundColor: "#ad292980",
    buttonTextColor: "",
    buttonHoverBackgroundColor: "#AD2929",
    buttonHoverTextColor: "",
  },
};
SlideHeaderMcqWithFeedback.parameters = {
  docs: {
    description: {
      story: "Displays MCQ with Feedback component with Slide header",
    },
    source: {
      code: `<SlideHeaderMcqWithFeedback {...${JSON.stringify(
        SlideHeaderMcqWithFeedback.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// MCQ with Feedback and background image
// -------------------------------------------------------------
export const McqWithFeedbackAndBackgroundImage = Template.bind({});
McqWithFeedbackAndBackgroundImage.args = {
  ...Default.args,
  data: {
    image: { id: "header-image", extention: "" },
    backgroundImage: { id: "background-image", extention: "" },
    title: "Lorem ipsum dolor sit amet",
    subtitle: "",
    icon: "",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    options: [
      { correct: "checked", text: "Item 1" },
      { correct: "", text: "Item 2" },
      { correct: "", text: "Item 3" },
      { correct: "", text: "Item 4" },
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
McqWithFeedbackAndBackgroundImage.parameters = {
  docs: {
    description: {
      story: "Displays MCQ with Feedback component with background image",
    },
    source: {
      code: `<MCQwithFeedback {...${JSON.stringify(
        McqWithFeedbackAndBackgroundImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored MCQ with Feedback
// -------------------------------------------------------------
export const ColoredMcqWithFeedback = Template.bind({});
ColoredMcqWithFeedback.args = {
  ...Default.args,
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
ColoredMcqWithFeedback.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<ColoredMcqWithFeedback {...${JSON.stringify(
        ColoredMcqWithFeedback.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated MCQ with Feedback
// -------------------------------------------------------------
export const AnimatedMcqWithFeedback = Template.bind({});
AnimatedMcqWithFeedback.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedMcqWithFeedback.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of AmplayfierDateBlock",
    },
    source: {
      code: `<AnimatedMcqWithFeedback {...${JSON.stringify(
        AnimatedMcqWithFeedback.args,
        null,
        2
      )}}/>`,
    },
  },
};
