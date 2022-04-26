import React from "react";
import SlideChoice from "../components/Templates/Choice/SlideChoice.react";

export default {
  title: "Design System/Templates/SlideChoice/SlideChoice",
  component: SlideChoice,
  argTypes: {
    data: {
      title: "",
      subtitle: "",
      image: "",
      question: "",
      choice:[{
        choice: "",
        text:""
    },
    {
        choice: "",
        text:""
    }]
    },
    slideId: 0,
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
          questionColor: "",
          slideHeaderTextColor: "",
          slideHeaderAccentColor: "",
          slideHeaderBackgroundColor: ""
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
    isDisabled: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
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
    componentSubtitle: "Displays a SlideChoice with a question and jumbled answer, the user need to submit the correct word as answer, we can switch between the image and SlideHeader by adding or removing the image prop",
    a11y: { disable: true },
    docs: {
      iframeHeight: 650,
    },
  },
};
const Template = (args) => <SlideChoice {...args} />;
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    choice:[{
        choice: "checked",
        text:"Item1"
    },
    {
        choice: "",
        text:"Item2"
    }]
  },
  slideId: 0,
  asVariant: "warning",
  withColor: {
    questionColor: "#000000",
    answerColor: "#000000",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
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
      code: `<SlideChoice {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// SlideChoiceWithSlideHeader
// -------------------------------------------------------------
export const SlideChoiceWithSlideHeader = Template.bind({});
SlideChoiceWithSlideHeader.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    image: "",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    choice:[{
        choice: "checked",
        text:"Item1"
    },
    {
        choice: "",
        text:"Item2"
    }]
  },
  slideId: 0,
  asVariant: "warning",
  withColor: {
    questionColor: "#000000",
    answerColor: "#000000",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isDisabled: false,
  isHidden: false,
};
SlideChoiceWithSlideHeader.parameters = {
  docs: {
    source: {
      code: `<SlideChoice {...${JSON.stringify(SlideChoiceWithSlideHeader.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// MultipleSlideChoice
// -------------------------------------------------------------
const MultipleSlideChoiceTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
    }),
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
      <div style={{ margin: "1em", width: "25em" }}>
        <SlideChoice
          {...Object.assign({}, baseObj, {
            asVariant: 'warning',
            withAnimation: {
              animation: "slideRight",
              duration: 0.5,
              delay: 0,
            },
          })}
        />
      </div>
      <div style={{ margin: "1em", width: "25em" }}>
        <SlideChoice
          {...Object.assign({}, baseObj, {
            asVariant: 'warning',
            withAnimation: {
              animation: "slideUp",
              duration: 0.5,
              delay: 0.8,
            },
          })}
        />
      </div>
      <div style={{ margin: "1em", width: "25em" }}>
        <SlideChoice
          {...Object.assign({}, baseObj, {
            asVariant: 'warning',
            withAnimation: {
              animation: "slideLeft",
              duration: 0.5,
              delay: 0.5,
            },
          })}
        />
      </div>
    </div>
  );
};
export const MultipleSlideChoice = MultipleSlideChoiceTemplate.bind({});
MultipleSlideChoice.parameters = {
  docs: {
    description: {
      story: "Multiple SlideChoice.",
    },
    source: {
      code: `<SlideChoice content={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      label: "RAWNES",}/>`,
    },
  },
};
// -------------------------------------------------------------
// ColoredSlideChoice
// -------------------------------------------------------------
const ColoredSlideChoiceTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
    }),
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
      <div style={{ margin: "1em", width: "25em" }}>
        <SlideChoice
          {...Object.assign({}, baseObj, {
            asVariant: 'warning',
            withColor: {
              questionColor: "#5072a4",
              answerColor: "#ff0000",
              slideHeaderTextColor: "#ffffff",
              slideHeaderAccentColor: "#AD2929",
              slideHeaderBackgroundColor: "#AD292980",
              inputFieldTextColor: "#12ff00",
              inputFieldAccentColor: "#00ff17",
              inputFieldBackgroundColor: "#000000",
              buttonTextColor: "#00ffa4",
              buttonBackgroundColor: "#000000",
              buttonHoverBackgroundColor: "#FF0000",
              buttonHoverTextColor: "#0000ff",
            },
            withAnimation: {
              animation: "slideRight",
              duration: 0.5,
              delay: 0,
            },
          })}
        />
      </div>
      <div style={{ margin: "1em", width: "25em" }}>
        <SlideChoice
          {...Object.assign({}, baseObj, {
            asVariant: 'warning',
            withColor: {
              questionColor: "#FFFF00",
              answerColor: "#000000",
              slideHeaderTextColor: "#ffffff",
              slideHeaderAccentColor: "#AD2929",
              slideHeaderBackgroundColor: "#AD292980",
              inputFieldTextColor: "#0000ff",
              inputFieldAccentColor: "#FF0000",
              inputFieldBackgroundColor: "#FF00FF",
              buttonTextColor: "#ffff17",
              buttonBackgroundColor: "#12ff00",
              buttonHoverBackgroundColor: "#ff0000",
              buttonHoverTextColor: "#5072a4",
            },
            withAnimation: {
              animation: "slideUp",
              duration: 0.5,
              delay: 0.8,
            },
          })}
        />
      </div>
      <div style={{ margin: "1em", width: "25em" }}>
        <SlideChoice
          {...Object.assign({}, baseObj, {
            asVariant: 'warning',
            withColor: {
              questionColor: "#ffff00",
              answerColor: "#0f00f0",
              slideHeaderTextColor: "#ffffff",
              slideHeaderAccentColor: "#AD2929",
              slideHeaderBackgroundColor: "#AD292980",
              inputFieldTextColor: "",
              inputFieldAccentColor: "",
              inputFieldBackgroundColor: "",
              buttonTextColor: "",
              buttonBackgroundColor: "",
              buttonHoverBackgroundColor: "",
              buttonHoverTextColor: "",
            },
            withAnimation: {
              animation: "slideLeft",
              duration: 0.5,
              delay: 0.5,
            },
          })}
        />
      </div>
    </div>
  );
};
export const ColoredSlideChoice = ColoredSlideChoiceTemplate.bind({});
ColoredSlideChoice.parameters = {
  docs: {
    description: {
      story: "displays Colored SlideChoice.",
    },
    source: {
      code: `<SlideChoice content={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      label: "RAWNES",}
      withColor: {
        questionColor: "#FFFF00",
        answerColor: "#000000",
        inputFieldTextColor: "#0000ff",
        inputFieldAccentColor: "#FF0000",
        inputFieldBackgroundColor: "#FF00FF",
        buttonTextColor: "#ffff17",
        buttonBackgroundColor: "#12ff00",
        buttonHoverBackgroundColor: "#ff0000",
        buttonHoverTextColor: "#5072a4",
      },/>`,
    },
  },
};