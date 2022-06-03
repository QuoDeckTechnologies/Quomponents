import React from "react";
import Helptext from "../components/Helptext/Helptext.react";

const dictionary = JSON.stringify({
  hi: {
    helptext: { content: "आपके शिक्षार्थी यही देखते हैं" },
  },
});

export default {
  title: "Design System/Helptext/Helptext",
  component: Helptext,
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
  parameters: {
    componentSubtitle: "Displays a basic Helptext for general-purpose use",
    a11y: { disable: true },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Helptext {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: "This is what your learners see",
  asSize: "normal",
  asPadded: "normal",
  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "helptext",
    dictionary: dictionary,
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<Helptext {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Helptext
// -------------------------------------------------------------
export const ColoredHelptext = Template.bind({});
ColoredHelptext.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#edf2f4",
    accentColor: "#540b0e",
    textColor: "#fca311",
  },
};
ColoredHelptext.parameters = {
  docs: {
    source: {
      code: `<Helptext {...${JSON.stringify(ColoredHelptext.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated Helptext
// -------------------------------------------------------------
export const TranslatedHelptext = Template.bind({});
TranslatedHelptext.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "helptext",
    dictionary: dictionary,
  },
};
TranslatedHelptext.parameters = {
  docs: {
    source: {
      code: `<Helptext {...${JSON.stringify(
        TranslatedHelptext.args,
        null,
        2
      )}}/>`,
    },
  },
};
