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
      seeMore : 'और देखें..',
      seeLess : 'कम देखें..'
    },
  },
});

export default {
  title: "Design System/LearnCard/LearnCard",
  component: LearnCard,
  argTypes: {
    content: {
      defaultValue: {
        title: "",
        description: "",
        image : '',
        icon: "",
        points: "",
        tag : '',
        tags: [],
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
    onClick : {
      table : {
        category : 'Events',
        defaultValue : null
      }
    }
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
    title: "The Negotiation Game",
    description:
    "Play this game to improve your understanding of negotiation skills",
    image:"",
    icon: "fas fa-desktop",
    points: "100",
    tag : 'premium',
    tags: ["Communication", "Sales", "Technology", "Business", "Miscellaneous"],
  },
  asVariant: "primary",
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
    backgroundColor: "#4682b4",
    textColor: "",
    accentColor: "#4682b4",
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
// Animated LearnCard
// -------------------------------------------------------------
export const AnimatedLearnCard = Template.bind({});
AnimatedLearnCard.args = {
  ...Default.args,
  asVariant: "secondary",
  withAnimation: {
    animation: "collapse",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedLearnCard.parameters = {
  docs: {
    description: {
      story: "We can animate the entrance of LearnCard",
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
// -------------------------------------------------------------
// Variants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
  const baseObj = {
    ...Object.assign({},args, Default.args)
  };
  return (
    <div className="qui-all-variants">
      <LearnCard
        {...Object.assign({}, baseObj, {
          isHiddenRibbon: true,
        })}
      />
      <LearnCard
        {...Object.assign({}, baseObj, {
          asVariant: "warning",
          withColor: {
            backgroundColor: "steelblue",
            textColor: "",
            accentColor: "steelblue",
          },
        })}
      />
      <LearnCard
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
        })}
      />
      <LearnCard
        {...Object.assign({}, baseObj, {
          withTranslation: {
            lang: "hi",
            tgt: "learncard",
            dictionary: dictionary,
          },
        })}
      />
    </div>
  );
};
export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story:
        "Some of variants are shown here by changing some of the props. Use as per purpose noted here.",
    },
  },
};
