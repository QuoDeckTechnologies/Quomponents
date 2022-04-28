import React from "react";
import Anagram from "../../components/Templates/Anagram/Anagram.react";

export default {
  title: "Design System/Templates/Anagram/Anagram",
  component: Anagram,
  argTypes: {
    data: {
      title: "",
      subtitle: "",
      image: "",
      backgroundImage: "",
      question: "",
      answer: "",
      purpose: "",
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
          answerColor: "",
          slideHeaderTextColor: "",
          slideHeaderAccentColor: "",
          slideHeaderBackgroundColor: "",
          inputFieldTextColor: "",
          inputFieldAccentColor: "",
          inputFieldBackgroundColor: "",
          buttonTextColor: "",
          buttonBackgroundColor: "",
          buttonHoverBackgroundColor: "",
          buttonHoverTextColor: "",
          backgroundColor: "#fff",
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
    componentSubtitle: "Displays a Anagram with a question and jumbled answer, the user need to submit the correct word as answer, we can switch between the image and SlideHeader by adding or removing the image prop",
    a11y: { disable: true },
    docs: {
      iframeHeight: 650,
    },
  },
};
const Template = (args) => <Anagram {...args} />;
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    backgroundImage: "",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Answer",
    purpose: ""
  },
  slideId: 0,
  asVariant: "warning",
  withColor: {
    questionColor: "#000000",
    answerColor: "#000000",
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
    backgroundColor: "#fff",
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
      code: `<Anagram {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// AnagramWithSlideHeader
// -------------------------------------------------------------
export const AnagramWithSlideHeader = Template.bind({});
AnagramWithSlideHeader.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    image: "",
    backgroundImage: "",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Answer",
    purpose: ""
  },
  slideId: 0,
  asVariant: "warning",
  withColor: {
    questionColor: "#000000",
    answerColor: "#000000",
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
    backgroundColor: "#fff",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isDisabled: false,
  isHidden: false,
};
AnagramWithSlideHeader.parameters = {
  docs: {
    source: {
      code: `<Anagram {...${JSON.stringify(AnagramWithSlideHeader.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// AnagramWithSlideHeaderAndBackgroundImage
// -------------------------------------------------------------
export const AnagramWithSlideHeaderAndBackgroundImage = Template.bind({});
AnagramWithSlideHeaderAndBackgroundImage.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    image: "",
    backgroundImage: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Answer",
    purpose: ""
  },
  slideId: 0,
  asVariant: "warning",
  withColor: {
    questionColor: "#000000",
    answerColor: "#000000",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    inputFieldTextColor: "",
    inputFieldAccentColor: "",
    inputFieldBackgroundColor: "#918686",
    buttonTextColor: "",
    buttonBackgroundColor: "",
    buttonHoverBackgroundColor: "",
    buttonHoverTextColor: "",
    backgroundColor: "#fff",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isDisabled: false,
  isHidden: false,
};
AnagramWithSlideHeaderAndBackgroundImage.parameters = {
  docs: {
    source: {
      code: `<Anagram {...${JSON.stringify(AnagramWithSlideHeaderAndBackgroundImage.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// MultipleAnagram
// -------------------------------------------------------------
const MultipleAnagramTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
    }),
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
      <div style={{ margin: "1em", width: "25em" }}>
        <Anagram
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
        <Anagram
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
        <Anagram
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
export const MultipleAnagram = MultipleAnagramTemplate.bind({});
MultipleAnagram.parameters = {
  docs: {
    description: {
      story: "Multiple Anagram.",
    },
    source: {
      code: `<Anagram content={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      label: "RAWNES",}/>`,
    },
  },
};
// -------------------------------------------------------------
// ColoredAnagram
// -------------------------------------------------------------
const ColoredAnagramTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
    }),
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
      <div style={{ margin: "1em", width: "25em" }}>
        <Anagram
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
        <Anagram
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
        <Anagram
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
export const ColoredAnagram = ColoredAnagramTemplate.bind({});
ColoredAnagram.parameters = {
  docs: {
    description: {
      story: "displays Colored Anagram.",
    },
    source: {
      code: `<Anagram content={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
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