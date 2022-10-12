import React from "react";
import Anagram from "../../components/Templates/Anagram/Anagram.react";
const dictionary = JSON.stringify({
  hi: {
    anagram: {
      label: "इनपुट नाम",
      quizLabel: "उत्तर जांचें",
      nonQuizLabel: "उत्तर दें",
    },
  },
});
export default {
  title: "Design System/Templates/Anagram",
  component: Anagram,
  argTypes: {
    data: {
      title: "",
      subtitle: "",
      image: {},
      backgroundImage: {},
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
    componentSubtitle:
      "Displays a Anagram with a question and jumbled answer, the user need to submit the correct word as answer, we can switch between the image and SlideHeader by adding or removing the image prop",
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
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    backgroundImage: {
      id: "background-image",
      extention: "",
    },
    image: {
      id: "header-image",
      extention: "",
    },
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Answer",
    purpose: "",
  },
  imageLibrary: [
    {
      id: "background-image",
      image: "",
    },
    {
      id: "header-image",
      image:
        "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
    },
  ],
  slideId: 0,
  asVariant: "warning",
  withColor: {
    questionColor: "#000000",
    answerColor: "#000000",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    inputFieldTextColor: "",
    inputFieldAccentColor: "#FFBF00",
    inputFieldBackgroundColor: "",
    buttonTextColor: "",
    buttonBackgroundColor: "#FFBF00",
    buttonHoverBackgroundColor: "#FFBF00",
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
    tgt: "anagram",
    dictionary: dictionary,
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
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Answer",
    purpose: "",
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
    inputFieldAccentColor: "#FFBF00",
    inputFieldBackgroundColor: "",
    buttonTextColor: "",
    buttonBackgroundColor: "#FFBF00",
    buttonHoverBackgroundColor: "#FFBF00",
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
    tgt: "anagram",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
AnagramWithSlideHeader.parameters = {
  docs: {
    source: {
      code: `<Anagram {...${JSON.stringify(
        AnagramWithSlideHeader.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// TranslatedAnagramWithSlideHeader
// -------------------------------------------------------------
export const TranslatedAnagramWithSlideHeader = Template.bind({});
TranslatedAnagramWithSlideHeader.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Answer",
    purpose: "",
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
    inputFieldAccentColor: "#FFBF00",
    inputFieldBackgroundColor: "",
    buttonTextColor: "",
    buttonBackgroundColor: "#FFBF00",
    buttonHoverBackgroundColor: "#FFBF00",
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
    tgt: "anagram",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
TranslatedAnagramWithSlideHeader.parameters = {
  docs: {
    source: {
      code: `<Anagram {...${JSON.stringify(
        TranslatedAnagramWithSlideHeader.args,
        null,
        2
      )}}/>`,
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
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    backgroundImage: {
      id: "background-image",
      extention: "",
    },
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Answer",
    purpose: "",
  },
  imageLibrary: [
    {
      id: "background-image",
      image:
        "https://i.pinimg.com/564x/76/69/37/766937c25ef31dbe9e62a74c91108594.jpg",
    },
  ],
  slideId: 0,
  asVariant: "warning",
  withColor: {
    questionColor: "#fff",
    answerColor: "#fff",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    inputFieldTextColor: "",
    inputFieldAccentColor: "#FFBF00",
    inputFieldBackgroundColor: "#918686",
    buttonTextColor: "",
    buttonBackgroundColor: "#FFBF00",
    buttonHoverBackgroundColor: "#FFBF00",
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
    tgt: "anagram",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
AnagramWithSlideHeaderAndBackgroundImage.parameters = {
  docs: {
    source: {
      code: `<Anagram {...${JSON.stringify(
        AnagramWithSlideHeaderAndBackgroundImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
