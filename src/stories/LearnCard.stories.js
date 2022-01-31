import React from "react";
import LearnCard from "../components/LearnCard/LearnCard.react";

const dictionary = JSON.stringify({
  hi: {
    ribbon: {
      new: "नया",
      restricted: "प्रतिबंधित",
      premium: "अधिमूल्य",
      free: "नि: शुल्क",
    },
    learncard: {
      heading: "बातचीत का खेल",
      description:
        "बातचीत कौशल की अपनी समझ को बेहतर बनाने के लिए इस गेम को खेलें",
      tags: ["संचार", "बिक्री"],
    },
  },
});

export default {
  title: "Design System/LearnCard/LearnCard",
  component: LearnCard,
  argTypes: {
    content: {
      defaultValue: {
        heading: "",
        points: "",
        description: "",
        tags: [],
        icon: "",
      },
    },
    isHiddenRibbon: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
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
    asEmphasis: {
      control: "select",
      options: ["new", "premium", "restricted", "free"],
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
          accentColor: "",
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
  parameters: {
    componentSubtitle: "Display a LearnCard Component",
    a11y: { disable: true },
    docs: {
      iframeHeight: 300,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <LearnCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    heading: "The Negotiation Game",
    points: "100",
    description:
      "Play this game to improve your understanding of negotiation skills",
    tags: ["Communication", "Sales"],
    icon: "fas fa-gamepad",
    image:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
  },
  isHiddenRibbon: false,
  asEmphasis: "premium",
  asVariant: "primary",
  asSize: "normal",
  withColor: {
    backgroundColor: "",
    textColor: "",
    accentColor: "#1A5982",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "learncard",
    dictionary: dictionary,
  },

  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<LearnCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Colored LearnCard
// -------------------------------------------------------------
export const ColoredLearnCard = Template.bind({});
ColoredLearnCard.args = {
  ...Default.args,
  asVariant: "warning",
  withColor: {
    backgroundColor: "steelblue",
    textColor: "",
    accentColor: "steelblue",
  },
};
ColoredLearnCard.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the LearnCard.",
    },
    source: {
      code: `<LearnCard {...${JSON.stringify(
        ColoredLearnCard.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Animated EarnCard
// -------------------------------------------------------------
export const AnimatedLearnCard = Template.bind({});
AnimatedLearnCard.args = {
  ...Default.args,
  asEmphasis: "free",
  asVariant:'secondary',
  withAnimation: {
    animation: "collapse",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedLearnCard.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of LearnCard",
    },
    source: {
      code: `<LearnCard {...${JSON.stringify(
        AnimatedLearnCard.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated LearnCard
// -------------------------------------------------------------
export const TranslatedLearnCard = Template.bind({});
TranslatedLearnCard.args = {
  ...Default.args,
  asEmphasis: "new",
  withTranslation: {
    lang: "hi",
    tgt: "learncard",
    dictionary: dictionary,
  },
};
TranslatedLearnCard.parameters = {
  docs: {
    description: {
      story: "Use to change the LearnCard language.",
    },
    source: {
      code: `<LearnCard {...${JSON.stringify(
        TranslatedLearnCard.args,
        null,
        2
      )}}/>`,
    },
  },
};
