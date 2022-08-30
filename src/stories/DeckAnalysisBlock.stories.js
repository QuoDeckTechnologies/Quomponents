import React from "react";
import DeckAnalysisBlock from "../components/DeckAnalysisBlock/DeckAnalysisBlock.react";
const dictionary = JSON.stringify({
  hi: {
    deckanalysis: {
      header: "स्लाइड्स",
      fheader: "स्लाइड्स",
      message: "डेक में 10 से 40 स्लाइड होनी चाहिए",
      checkSlide: "स्लाइड चेक करें :",
    },
  },
});
export default {
  title: "Design System/DeckAnalysisBlock",
  component: DeckAnalysisBlock,
  argTypes: {
    header: "",
    fheader: "",
    message: "",
    icon: "",
    slideCount: 10,
    status: false,
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
          accentColor: "",
          textColor: "",
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
  },
  decorators: [(story) => <div style={{}}>{story()}</div>],
  parameters: {
    componentSubtitle:
      "Displays a DeckAnalysisBlock with image, icon and text content.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 500,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
  return <DeckAnalysisBlock {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "SLIDES",
  fheader: "SLIDES",
  message: "Deck Should have 10 to 40 slides",
  icon: " fa fa-desktop",
  slideCount: 18,
  status: true,
  asVariant: "success",
  withColor: {
    textColor: "",
    accentColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "deckanalysis",
    dictionary: dictionary,
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<DeckAnalysisBlock {...${JSON.stringify(
        Default.args,
        null,
        2
      )}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Colored DeckAnalysisBlock
// -------------------------------------------------------------
export const ColoredDeckAnalysis = Template.bind({});
ColoredDeckAnalysis.args = {
  ...Default.args,
  withColor: {
    textColor: "#3A8080",
    accentColor: "#EB6346",
  },
};
ColoredDeckAnalysis.parameters = {
  docs: {
    message: {
      story: "Use to override the standard colors of the Icon.",
    },
    source: {
      code: `<DeckAnalysisBlock withColor: {backgroundColor: "",textColor: "teal",accentColor: "tomato",
      }/>`,
    },
  },
};

//-------------------------------------------------------------
// Animated DeckAnalysisBlock
// -------------------------------------------------------------
export const AnimatedDeckAnalysis = Template.bind({});
AnimatedDeckAnalysis.args = {
  ...Default.args,
  withAnimation: {
    animation: "collapse",
    duration: 1,
    delay: 0,
  },
};
AnimatedDeckAnalysis.parameters = {
  docs: {
    message: {
      story: "We can animate the appearance of DeckAnalysisBlock",
    },
    source: {
      code: `<DeckAnalysisBlock {...${JSON.stringify(
        AnimatedDeckAnalysis.args,
        null,
        2
      )}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Translated DeckAnalysisBlock
// -------------------------------------------------------------
export const TranslatedDeck = Template.bind({});
TranslatedDeck.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "deckanalysis",
    dictionary: dictionary,
  },
};
TranslatedDeck.parameters = {
  docs: {
    message: {
      story:
        "We can translate the language of DeckAnalysisBlock if dictionary is provided",
    },
    source: {
      code: `<DeckAnalysisBlock {...${JSON.stringify(
        TranslatedDeck.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// AllVariants
// -------------------------------------------------------------
const AllVariantBlocks = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {}),
  };
  return (
    <div>
      <DeckAnalysisBlock
        {...Object.assign({}, baseObj, {
          asVariant: "primary",
        })}
      />
      <DeckAnalysisBlock
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
        })}
      />
      <DeckAnalysisBlock
        {...Object.assign({}, baseObj, {
          asVariant: "warning",
        })}
      />
      <DeckAnalysisBlock
        {...Object.assign({}, baseObj, {
          header: "VOICEOVERS",
          fheader: "Vo's",
          message: "Deck Should have 10 to 40 slides",
          icon: " fa fa-desktop",
          slideCount: 5,
          status: false,
          withAnimation: {
            animation: "collapse",
            duration: 1,
            delay: 0,
          },
        })}
      />
    </div>
  );
};
export const AllVariantsBlocks = AllVariantBlocks.bind({});
AllVariantsBlocks.parameters = {
  docs: {
    description: {
      story: "All variants are supported in DeckAnalysisBlock.",
    },
    source: {
      code: `<DeckAnalysisBlock {...${JSON.stringify(
        TranslatedDeck.args,
        null,
        2
      )}}/>`,
    },
  },
};
