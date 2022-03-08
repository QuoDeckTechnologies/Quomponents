import React from "react";
import DeckAnalysis from "../components/DeckAnalysisBlock/DeckAnalysis.react";
import slideImage from "../assets/icons8_layout_60px.png";
const dictionary = JSON.stringify({
    hi: {
        deckanalysis: {
            title: "स्लाइड्स",
            description: "डेक में 10 से 40 स्लाइड होनी चाहिए",
            digit:"१८",
        },
    },
});
export default {
    title: "Design System/DeckAnalysis/DeckAnalysis",
    component: DeckAnalysis,
    argTypes: {
        content: {
            table: {
                defaultValue: {
                    title: "",
                    description: "",
                    icon: "",
                    image: "",
                    digit: "",
                },
            },
        },
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
            table: {
                category: "as-Flags",
            },
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
            table: {
                category: "as-Flags",
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
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
                    textAlign: "left",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a DeckAnalysis with BannerCard, text and icon.",
        a11y: { disable: true },
        docs: {
            iframeHeight: 600,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
    return <DeckAnalysis {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    content: {
        title: "SLIDES",
        description:
            "Deck Should have 10 to 40 slides",
        icon: "fas fa-ellipsis-h",
        image: slideImage,
        digit: "18",
    },
    asVariant: "primary",
    asSize: "normal",
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "#b60d17",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "hi",
        tgt: "deckanalysis",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<DeckAnalysis {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Colored DeckAnalysis
// -------------------------------------------------------------
export const ColoredDeckAnalysis = Template.bind({});
ColoredDeckAnalysis.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "",
    textColor: "teal",
    accentColor: "tomato",
  },
};
ColoredDeckAnalysis.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the Icon.",
    },
    source: {
      code: `<DeckAnalysis withColor={{backgroundColor: "orange", textColor: "gray",hoverBackgroundColor: "gray", hoverTextColor: "orange"}}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Animated DeckAnalysis
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
    description: {
      story: "We can animate the appearance of DeckAnalysis",
    },
    source: {
      code: `<DeckAnalysis {...${JSON.stringify(
        AnimatedDeckAnalysis.args,
        null,
        2
      )}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Translated DeckAnalysis
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
    description: {
      story:
        "We can translate the language of DeckAnalysis if dictionary is provided",
    },
    source: {
      code: `<DeckAnalysis {...${JSON.stringify(TranslatedDeck.args, null, 2)}}/>`,
    },
  },
};
