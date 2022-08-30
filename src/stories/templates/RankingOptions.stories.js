import React from "react";
import RankingOptions from "../../components/Templates/RankingOptions/RankingOptions.react";

const dictionary = JSON.stringify({
  en: {
    templateActions: {
      checkAnswer: "Check Answer",
      submitAnswer: "Submit Answer",
      thanks: "Thanks for your response",
      go: "Go",
    },
  },
  hi: {
    templateActions: {
      checkAnswer: "अपना उत्तर जाँच लें",
      submitAnswer: "अपना जवाब सबमिट करें",
      thanks: "आपके उत्तर के लिए धन्यवाद",
      go: "आगे बढ़ें",
    },
  },
});
export default {
  title: "Design System/Templates/RankingOptions",
  component: RankingOptions,
  argTypes: {
    data: {
      defaultValue: {
        title: "",
        subtitle: "",
        image: {},
        backgroundImage: {},
        question: "",
        purpose: "",
        bullets: [],
      },
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
          slideHeaderBackgroundColor: "",
          buttonTextColor: "",
          buttonBackgroundColor: "",
          buttonHoverBackgroundColor: "",
          buttonHoverTextColor: "",
          backgroundColor: "#fff",
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
    trackInteraction: {
      action: "trackInteraction",
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
      "Displays a RankingOptions component with options, the user need to submit the answer by arranging elements using up down buttons, we can switch between the image and SlideHeader by adding or removing the image prop",
    a11y: { disable: true },
    docs: {
      iframeHeight: 650,
    },
  },
};
const Template = (args) => <RankingOptions {...args} />;
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    image: {
      id: "header-image",
      extention: "",
    },
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    purpose: "",
    bullets: ["Item 1", "Item 2", "Item 3"],
  },
  imageLibrary: [
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
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    buttonTextColor: "",
    buttonBackgroundColor: "",
    buttonHoverBackgroundColor: "",
    buttonHoverTextColor: "",
    backgroundColor: "#fff",
  },
  withTranslation: {
    lang: "en",
    tgt: "templateActions",
    dictionary: dictionary,
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
      code: `<RankingOptions {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// RankingOptionsWithSlideHeader
// -------------------------------------------------------------
export const RankingOptionsWithSlideHeader = Template.bind({});
RankingOptionsWithSlideHeader.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    purpose: "",
    bullets: ["Item 1", "Item 2", "Item 3"],
  },
  slideId: 0,
  asVariant: "warning",
  withColor: {
    questionColor: "#000000",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    buttonTextColor: "",
    buttonBackgroundColor: "",
    buttonHoverBackgroundColor: "",
    buttonHoverTextColor: "",
    backgroundColor: "#ffffff",
  },
  withTranslation: {
    lang: "en",
    tgt: "templateActions",
    dictionary: dictionary,
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isDisabled: false,
  isHidden: false,
};
RankingOptionsWithSlideHeader.parameters = {
  docs: {
    source: {
      code: `<RankingOptions {...${JSON.stringify(
        RankingOptionsWithSlideHeader.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// RankingOptionsWithSlideHeaderAndBackgroundImage
// -------------------------------------------------------------
export const RankingOptionsWithSlideHeaderAndBackgroundImage = Template.bind(
  {}
);
RankingOptionsWithSlideHeaderAndBackgroundImage.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    backgroundImage: {
      id: "background-image",
      extention: "",
    },
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    purpose: "",
    bullets: ["Item 1", "Item 2", "Item 3"],
  },
  imageLibrary: [
    {
      id: "background-image",
      image:
        "https://media.istockphoto.com/vectors/question-mark-3d-seamless-wallpaper-pattern-vector-id494094966?k=20&m=494094966&s=612x612&w=0&h=tXbLXNlUjL-jLsZOm7VBjDKY-Pp4yXJRwKv2pmi3TII=",
    },
  ],
  slideId: 0,
  asVariant: "primary",
  withColor: {
    questionColor: "#000000",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    buttonTextColor: "",
    buttonBackgroundColor: "",
    buttonHoverBackgroundColor: "",
    buttonHoverTextColor: "",
    backgroundColor: "#ffffff",
  },
  withTranslation: {
    lang: "en",
    tgt: "templateActions",
    dictionary: dictionary,
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isDisabled: false,
  isHidden: false,
};
RankingOptionsWithSlideHeaderAndBackgroundImage.parameters = {
  docs: {
    source: {
      code: `<RankingOptions {...${JSON.stringify(
        RankingOptionsWithSlideHeaderAndBackgroundImage.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Translated RankingOptions
// -------------------------------------------------------------
export const TranslatedRankingOptions = Template.bind({});
TranslatedRankingOptions.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "templateActions",
    dictionary: dictionary,
  },
};
TranslatedRankingOptions.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the RankingOptions, add a templateActions:{} value to the dictionary.",
    },
    source: {
      code: `<RankingOptions {...${JSON.stringify(
        TranslatedRankingOptions.args,
        null,
        2
      )}}/>`,
    },
  },
};
