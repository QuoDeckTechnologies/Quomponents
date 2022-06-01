import React from "react";
import OpenAnswer from "../../components/Templates/OpenAnswer/OpenAnswer.react";

const dictionary = JSON.stringify({
  hi: {
    openAnswer: { button: "उत्तर सबमिट करें" },
  },
});

export default {
  title: "Design System/Templates/OpenAnswer/OpenAnswer",
  component: OpenAnswer,
  argTypes: {
    data: {},
    slideId: 0,
    imageLibrary: [{}],
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
          slideHeaderTextColor: "",
          slideHeaderAccentColor: "",
          slideHeaderBackgroundColor: "",
          questionBackgroundColor: "",
          questionTextColor: "",
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
    componentSubtitle:
      "Displays a OpenAnswer slide with slide header and an input field , user can submit text by clicking on submit button, we can switch between slideHeader and header Image by giving image prop",
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
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  },
  imageLibrary: [
    {
      id: "background-image",
      image:
        "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
    },
  ],
  slideId: 0,
  asVariant: "warning",
  withColor: {
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    questionBackgroundColor: "#a0979700",
    questionTextColor: "#000000",
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
  withTranslation: {
    lang: "en",
    tgt: "openAnswer",
    dictionary: dictionary,
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
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    image: {
      id: "header-image",
      extention: "",
    },
  },
  imageLibrary: [
    {
      id: "header-image",
      image:
        "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    },
  ],
  asVariant: "warning",
  withColor: {
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    questionBackgroundColor: "#a0979700",
    questionTextColor: "#000000",
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
      code: `<OpenAnswer {...${JSON.stringify(
        OpenAnswerWithImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// OpenAnswerWithTranslation
// -------------------------------------------------------------
export const OpenAnswerWithTranslation = Template.bind({});
OpenAnswerWithTranslation.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  },
  imageLibrary: [
    {
      id: "background-image",
      image:
        "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
    },
  ],
  slideId: 0,
  asVariant: "warning",
  withColor: {
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    questionBackgroundColor: "#a0979700",
    questionTextColor: "#000000",
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
  withTranslation: {
    lang: "hi",
    tgt: "openAnswer",
    dictionary: dictionary,
  },
  isHidden: false,
  isDisabled: false,
};
OpenAnswerWithTranslation.parameters = {
  docs: {
    source: {
      code: `<OpenAnswer {...${JSON.stringify(
        OpenAnswerWithTranslation.args,
        null,
        2
      )}}/>`,
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
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    backgroundImage: {
      id: "background-image",
      extention: "",
    },
  },
  imageLibrary: [
    {
      id: "background-image",
      image:
        "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
    },
  ],
  asVariant: "warning",
  withColor: {
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    questionBackgroundColor: "#a0979700",
    questionTextColor: "#000000",
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
      code: `<OpenAnswer {...${JSON.stringify(
        OpenAnswerWithBackgroundImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
