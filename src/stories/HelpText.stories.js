import React from "react";
import HelpText from "../components/HelpText/HelpText.react";

const dictionary = JSON.stringify({
  hi: {
    helpText: { content: "आपके शिक्षार्थी यही देखते हैं" },
  },
});

export default {
  title: "Design System/HelpText/HelpText",
  component: HelpText,
  argTypes: {
    content: "This is what your learners see",
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
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          textColor: "",
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
    componentSubtitle: "Displays a basic HelpText for general-purpose use",
    a11y: { disable: true },
    docs: {
      iframeHeight: 500,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <HelpText {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: "This is what your learners see",
  asSize: "normal",
  asPadded: "normal",
  withColor: {
    backgroundColor: "",
    textColor: "",
  },
  withTranslation: {
    lang: "en",
    tgt: "helpText",
    dictionary: dictionary,
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<HelpText {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored HelpText
// -------------------------------------------------------------
export const ColoredHelpText = Template.bind({});
ColoredHelpText.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#edf2f4",
    textColor: "#fca311",
  },
};
ColoredHelpText.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<HelpText {...${JSON.stringify(ColoredHelpText.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated HelpText
// -------------------------------------------------------------
export const TranslatedHelpText = Template.bind({});
TranslatedHelpText.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "helpText",
    dictionary: dictionary,
  },
};
TranslatedHelpText.parameters = {
  docs: {
    description: {
      story: "Use to change the language that the text appears in.",
    },
    source: {
      code: `<HelpText {...${JSON.stringify(
        TranslatedHelpText.args,
        null,
        2
      )}}/>`,
    },
  },
};
