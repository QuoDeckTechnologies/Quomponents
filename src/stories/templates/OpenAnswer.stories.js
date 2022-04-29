import React from "react";
import OpenAnswer from "../../components/Templates/OpenAnswer/OpenAnswer.react";

export default {
  title: "Design System/Templates/OpenAnswer/OpenAnswer",
  component: OpenAnswer,
  argTypes: {
    data: {},
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
          slideHeaderBackgroundColor: "",
          textBlockBackgroundColor: "",
          textBlockTextColor: "",
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
    componentSubtitle: "Displays a OpenAnswer slide with slide header and an input field , user can submit text by clicking on submit button, we can switch between slideHeader and header Image by giving image prop",
    a11y: { disable: true },
    docs: {
      iframeHeight: 600,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <OpenAnswer {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    image: "",
    backgroundImage: "",
  },
  slideId: 0,
  asVariant: "warning",
  withColor: {
    questionColor: "#000000",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    textBlockBackgroundColor: "#a0979700",
    textBlockTextColor: "#000000",
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
  isHidden: false,
  isDisabled: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<OpenAnswer {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// OpenAnswerWithImage
// -------------------------------------------------------------
export const OpenAnswerWithImage = Template.bind({});
OpenAnswerWithImage.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    backgroundImage: "",
  },
  asVariant: "warning",
  withColor: {
    questionColor: "#000000",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    textBlockBackgroundColor: "#a0979700",
    textBlockTextColor: "#000000",
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
  isHidden: false,
  isDisabled: false,
};
OpenAnswerWithImage.parameters = {
  docs: {
    source: {
      code: `<OpenAnswer {...${JSON.stringify(OpenAnswerWithImage.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// OpenAnswerWithBackgroundImage
// -------------------------------------------------------------
export const OpenAnswerWithBackgroundImage = Template.bind({});
OpenAnswerWithBackgroundImage.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    backgroundImage: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
  },
  asVariant: "warning",
  withColor: {
    questionColor: "#000000",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    textBlockBackgroundColor: "#a0979700",
    textBlockTextColor: "#000000",
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
  isHidden: false,
  isDisabled: false,
};
OpenAnswerWithBackgroundImage.parameters = {
  docs: {
    source: {
      code: `<OpenAnswer {...${JSON.stringify(OpenAnswerWithBackgroundImage.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// MultipleOpenAnswer
// -------------------------------------------------------------
const MultipleOpenAnswerTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
    }),
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
      <div style={{ margin: "1em", width: "25em" }}>
        <OpenAnswer
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
        <OpenAnswer
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
        <OpenAnswer
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
export const MultipleOpenAnswer = MultipleOpenAnswerTemplate.bind({});
MultipleOpenAnswer.parameters = {
  docs: {
    description: {
      story: "Multiple OpenAnswer.",
    },
    source: {
      code: `<OpenAnswer data={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      title: "Neque porro quisquam est qui dolorem",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem", ,}/>`,
    },
  },
};
