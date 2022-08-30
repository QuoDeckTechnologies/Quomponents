import React from "react";
import LinkIcon from "../components/LinkIcon/LinkIcon.react";

const dictionary = JSON.stringify({
  en: {
    icon: { label: "Home" },
  },
  hi: {
    icon: { label: "होम" },
  },
});

export default {
  title: "Design System/LinkIcon",
  component: LinkIcon,
  argTypes: {
    icon: "",
    label: "",
    active: false,
    asSize: {
      control: "select",
      options: ["tiny", "small", "normal", "big", "huge", "massive"],
      table: {
        category: "as-Flags",
      },
    },
    asPadded: {
      control: "select",
      options: ["fitted", "compact", "normal", "relaxed"],
      table: {
        category: "as-Flags",
      },
    },
    asFloated: {
      control: "select",
      options: ["left", "right", "none", "inline"],
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
          hoverBackgroundColor: "",
          hoverTextColor: "",
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
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a square block icon with a link",
    a11y: { disable: true },
    // controls: { expanded: true }
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <LinkIcon {...args} />;
export const Default = Template.bind({});
Default.args = {
  icon: "fa fa-home",
  label: "Home",
  active: false,

  asSize: "normal",
  asFloated: "inline",
  asPadded: "normal",

  withColor: {
    backgroundColor: "",
    textColor: "",
    accentColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "icon",
    dictionary: dictionary,
  },

  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<LinkIcon {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Colored LinkIcon
// -------------------------------------------------------------
export const ColoredIconlink = Template.bind({});
ColoredIconlink.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "orange",
    textColor: "gray",
    accentColor: "",
    hoverBackgroundColor: "gray",
    hoverTextColor: "orange",
  },
};
ColoredIconlink.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the Icon.",
    },
    source: {
      code: `<LinkIcon withColor={{backgroundColor: "orange", textColor: "gray",hoverBackgroundColor: "gray", hoverTextColor: "orange"}}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Animated LinkIcon
// -------------------------------------------------------------
export const AnimatedIconlink = Template.bind({});
AnimatedIconlink.args = {
  ...Default.args,
  withAnimation: {
    animation: "collapse",
    duration: 0.8,
    delay: 0,
  },
};
AnimatedIconlink.parameters = {
  docs: {
    description: {
      story:
        "Use to animate the entry of the Icon with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
    },
    source: {
      code: `<LinkIcon withAnimation={{animation: "collapse", duration: 0.8, delay: 0}}}/>`,
    },
  },
};

// -------------------------------------------------------------
// TranslatedIconlink
// -------------------------------------------------------------
export const TranslatedIconlink = Template.bind({});
TranslatedIconlink.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "icon",
    dictionary: dictionary,
  },
};
TranslatedIconlink.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in iconlink. To make this work for the iconlink, add a icon:{label} value to the dictionary.",
    },
    source: {
      code: `<TranslatedIconlink {...${JSON.stringify(
        TranslatedIconlink.args,
        null,
        2
      )}}/>`,
    },
  },
};
