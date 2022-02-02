import React from "react";
import DeckCard from "../components/DeckCard/DeckCard.react";

const dictionary = JSON.stringify({
  hi: {
    loading: "बस एक मिनट...",
    ribbon: {
      new: "नया",
      restricted: "प्रतिबंधित",
      premium: "अधिमूल्य",
      free: "नि: शुल्क",
    },
    DeckCard: {
      title: "बातचीत का खेल",
      description:
        "बातचीत कौशल की अपनी समझ को बेहतर बनाने के लिए इस गेम को खेलें",
    },
  },
});

export default {
  title: "Design System/DeckCard/DeckCard",
  component: DeckCard,
  argTypes: {
    content: {
      table: {
        defaultValue: {
          image: "",
          tag: "",
          title: "",
          description: "",
          icon: "",
        },
        topics: [],
      },
    },
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
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a DeckCard with BannerCard, text and icon.",
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
  return <DeckCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    image: "static/media/Image.62bfb45a.png",
    tag: "",
    title: "The Negotiation Game",
    description:
      "Play this game to improve your understanding of negotiation skills",
    icon: "fas fa-gamepad",
    topics: [
      {
        name: "Name One",
        checked: true,
      },
    ],
  },
  asVariant: "primary",
  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "#1A5982",
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
      code: `<DeckCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Colored DeckCard
// -------------------------------------------------------------
export const ColoredDeckcard = Template.bind({});
ColoredDeckcard.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "",
    textColor: "teal",
    accentColor:"orange"
  },
  asVariant: "warning",
};
ColoredDeckcard.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the Icon.",
    },
    source: {
      code: `<DeckCard withColor={{backgroundColor: "orange", textColor: "gray",hoverBackgroundColor: "gray", hoverTextColor: "orange"}}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Animated DeckCard
// -------------------------------------------------------------
export const AnimatedDeckcard = Template.bind({});
AnimatedDeckcard.args = {
  ...Default.args,
  withAnimation: {
    animation: "collapse",
    duration: 1,
    delay: 0,
  },
};
AnimatedDeckcard.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of DeckCard",
    },
    source: {
      code: `<DeckCard {...${JSON.stringify(
        AnimatedDeckcard.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// With Tag and Uncomplete DeckCard
// -------------------------------------------------------------
export const WithtagAndUncompleteDeckcard = Template.bind({});
WithtagAndUncompleteDeckcard.args = {
  ...Default.args,
  content: {
    image: "data:image/jpeg;base64,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",
    tag: "premium",
    title: "Negotiation Skills 101",
    description:
      "Study this course to improve your understanding of negotiation skills",
    icon: "fas fa-gamepad",
    topics: [
      {
        name: "Name One",
        checked: false,
      },
    ],
  },

};
WithtagAndUncompleteDeckcard.parameters = {
  docs: {
    description: {
      story:
        "We can displays the DeckCard with tag and unchecked topic of DeckCard",
    },
    source: {
      code: `<DeckCard {...${JSON.stringify(WithtagAndUncompleteDeckcard.args, null, 2)}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Translated DeckCard
// -------------------------------------------------------------
export const TranslatedDeckcard = Template.bind({});
TranslatedDeckcard.args = {
  ...Default.args,
  content: {
    image: "data:image/jpeg;base64,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",
    tag: "premium",
    title: "Negotiation Skills 101",
    description:
      "Study this course to improve your understanding of negotiation skills",
    icon: "fas fa-gamepad",
    topics: [
      {
        name: "Name One",
        checked: true,
      },
    ],
  },

  withTranslation: {
    lang: "hi",
    tgt: "DeckCard",
    dictionary: dictionary,
  },
};
TranslatedDeckcard.parameters = {
  docs: {
    description: {
      story:
        "We can translate the language of DeckCard if dictionary is provided",
    },
    source: {
      code: `<DeckCard {...${JSON.stringify(TranslatedDeckcard.args, null, 2)}}/>`,
    },
  },
};