import React from "react";
import EarnCard from "../components/EarnCard/EarnCard.react";

const dictionary = JSON.stringify({
  hi: {
    loading: "बस एक मिनट...",
    bannercard: { header: "", content: "" },
    ribbon: {
      new: "नया",
      restricted: "प्रतिबंधित",
      premium: "अधिमूल्य",
      free: "नि: शुल्क",
    },
    earncard: {
      dates: {
        end_date: "3 मई",
        start_date: "28 फरवरी",
      },
    },
  },
});

export default {
  title: "Design System/EarnCard",
  component: EarnCard,
  argTypes: {
    content: {
      table: {
        defaultValue: {
          image: "",
          tag: "",
          title: "",
          description: "",
          icon: "",
          dates: {
            end_date: "",
            start_date: "",
          },
          topics: [],
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
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a EarnCard with BannerCard, text and icon.",
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
  return <EarnCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    image: "static/media/Image.62bfb45a.png",
    tag: "restricted",
    title: "QuoDeck Emerging Leadership Program",
    description:
      "Win a chance to apply for this exclusive opportunity for taking your career to the stars",
    icon: "fas fa-square",
    dates: {
      end_date: "3rd May",
      start_date: "28th Feb",
    },
    topics: [
      {
        name: "Name One",
        contentList: [],
        checked: true,
      },
      {
        name: "Name Two",
        contentList: [],
        checked: false,
      },
      {
        name: "Name Three",
        contentList: [],
        checked: false,
      },
      {
        name: "Name Four",
        contentList: [],
        checked: false,
      },
      {
        name: "Name Five",
        contentList: [],
        checked: true,
      },
      {
        name: "Name Six",
        contentList: [],
        checked: false,
      },
    ],
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
    lang: "en",
    tgt: "earncard",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<EarnCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Colored EarnCard
// -------------------------------------------------------------
export const ColoredEarnCard = Template.bind({});
ColoredEarnCard.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "",
    textColor: "teal",
    accentColor: "tomato",
  },
};
ColoredEarnCard.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the Icon.",
    },
    source: {
      code: `<EarnCard withColor={{backgroundColor: "orange", textColor: "gray",hoverBackgroundColor: "gray", hoverTextColor: "orange"}}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Animated EarnCard
// -------------------------------------------------------------
export const AnimatedEarnCard = Template.bind({});
AnimatedEarnCard.args = {
  ...Default.args,
  withAnimation: {
    animation: "collapse",
    duration: 1,
    delay: 0,
  },
};
AnimatedEarnCard.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of EarnCard",
    },
    source: {
      code: `<EarnCard {...${JSON.stringify(
        AnimatedEarnCard.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Translated EarnCard
// -------------------------------------------------------------
export const TranslatedCard = Template.bind({});
TranslatedCard.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "earncard",
    dictionary: dictionary,
  },
};
TranslatedCard.parameters = {
  docs: {
    description: {
      story:
        "We can translate the language of EarnCard if dictionary is provided",
    },
    source: {
      code: `<EarnCard {...${JSON.stringify(TranslatedCard.args, null, 2)}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Without dates EarnCard
// -------------------------------------------------------------
export const withoutDates = Template.bind({});
withoutDates.args = {
  ...Default.args,
  content: {
    image: "static/media/Image.62bfb45a.png",
    tag: "restricted",
    title: "QuoDeck Emerging Leadership Program",
    description:
      "Win a chance to apply for this exclusive opportunity for taking your career to the stars",
    icon: "fas fa-square",
    dates: {
      end_date: "",
      start_date: "",
    },
    topics: [
      {
        name: "Name One",
        contentList: [],
        checked: true,
      },
      {
        name: "Name Two",
        contentList: [],
        checked: false,
      },
      {
        name: "Name Three",
        contentList: [],
        checked: false,
      },
      {
        name: "Name Four",
        contentList: [],
        checked: false,
      },
      {
        name: "Name Five",
        contentList: [],
        checked: true,
      },
      {
        name: "Name Six",
        contentList: [],
        checked: false,
      },
    ],
  },

};
withoutDates.parameters = {
  docs: {
    description: {
      story:
        "We can displays the EarnCard without dates",
    },
    source: {
      code: `<EarnCard {...${JSON.stringify(withoutDates.args, null, 2)}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Without Description EarnCard
// -------------------------------------------------------------
export const withoutDescription = Template.bind({});
withoutDescription.args = {
  ...Default.args,
  content: {
    image: "static/media/Image.62bfb45a.png",
    tag: "new",
    title: "QuoDeck Emerging Leadership Program",
    description:
      "",
    icon: "fas fa-square",
    dates: {
      end_date: "3rd May",
      start_date: "28th Feb",
    },
    topics: [
      {
        name: "Name One",
        contentList: [],
        checked: true,
      },
      {
        name: "Name Two",
        contentList: [],
        checked: false,
      },
      {
        name: "Name Three",
        contentList: [],
        checked: false,
      },
      {
        name: "Name Four",
        contentList: [],
        checked: false,
      },
      {
        name: "Name Five",
        contentList: [],
        checked: true,
      },
      {
        name: "Name Six",
        contentList: [],
        checked: false,
      },
    ],
  },

};
withoutDescription.parameters = {
  docs: {
    description: {
      story:
        "We can displays the EarnCard without description",
    },
    source: {
      code: `<EarnCard {...${JSON.stringify(withoutDescription.args, null, 2)}}/>`,
    },
  },
};
