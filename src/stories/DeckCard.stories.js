import React from "react";
import DeckCard from "../components/DeckCard/DeckCard.react";
import image from "../assets/balloon_burst.png";
import icon from "../assets/icons8_nintendo_gamecube_controller_96px.png";
import image1 from "../assets/play_backdrop.png";
import icon1 from "../assets/icons8_course_96px.png";

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
          title: "",
          description: "",
          image: "",
          icon: "",
          tag: "",
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
    componentSubtitle: "Displays a DeckCard with ribbon, images and icon for general-purpose use",
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
    title: "The Negotiation Game",
    description:
      "Play this game to improve your understanding of negotiation skills",
    image: image,
    icon: icon,
    tag: "restricted",
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
    textColor: "#3A8080",
    accentColor: "#F2A52D"
  },
  asVariant: "warning",
};
ColoredDeckcard.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the content.",
    },
    source: {
      code: `<DeckCard withColor={{backgroundColor: "", textColor: "#3A8080",accentColor: "#F2A52D"}}}/>`,
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
export const WithtagAndUncheckedDeckcard = Template.bind({});
WithtagAndUncheckedDeckcard.args = {
  ...Default.args,
  content: {
    title: "Negotiation Skills 101",
    description:
      "Study this course to improve your understanding of negotiation skills",
    image: image1,
    icon: icon1,
    tag: "premium",
    topics: [
      {
        name: "Name One",
        checked: false,
      },
    ],
  },
};
WithtagAndUncheckedDeckcard.parameters = {
  docs: {
    description: {
      story:
        "We can displays the DeckCard with tag and unchecked topic of DeckCard",
    },
    source: {
      code: `<DeckCard {...${JSON.stringify(WithtagAndUncheckedDeckcard.args, null, 2)}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Translated DeckCard
// -------------------------------------------------------------
export const TranslatedDeckcard = Template.bind({});
TranslatedDeckcard.args = {
  ...Default.args,
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

// -------------------------------------------------------------
// AllVariants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
    }),
  };
  return (
    <div>
      <DeckCard
        {...Object.assign({}, baseObj, {
          content: {
            title: "The Negotiation Game",
            description:
              "Play this game to improve your understanding of negotiation skills",
            image: image,
            icon: icon,
            tag: "restricted",
            topics: [
              {
                name: "Name One",
                checked: true,
              },
            ],
          },
          asVariant: "primary",
        })}
      />
      <DeckCard
        {...Object.assign({}, baseObj, {
          content: {
            title: "Negotiation Skills 101",
            description:
              "Study this course to improve your understanding of negotiation skills",
            image: image1,
            icon: icon1,
            tag: "premium",
            topics: [
              {
                name: "Name One",
                checked: false,
              },
            ],
          },
          asVariant: "secondary",
        })}
      />
    </div>
  );
};
export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story: " all variants are supported in DeckCard",
    },
    source: {
      code: `<DeckCard content:{}, asVariant:""/>`,
    },
  },
};

