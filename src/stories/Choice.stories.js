import React from "react";
import Choice from "../components/Buttons/Choice/Choice.react";

const dictionary = JSON.stringify({
  en: {
    options: [{
      correct: "checked",
      text: "Item 1",
    }, {
      correct: "",
      text: "Item 2",
    }]
  },
  hi: {
    options: [{
      correct: "checked",
      text: "वस्तु 1",
    }, {
      correct: "",
      text: "वस्तु 2",
    }]
  },
});
export default {
  title: "Design System/Buttons/Choice",
  component: Choice,
  argTypes: {
    options: [{
      correct: "checked",
      text: "Item 1",
    }, {
      correct: "",
      text: "Item 2",
    }],
    isChoice: {
      table: {
        category: "is-Toggles",
        defaultValue: true,
      },
    },
    asEmphasis: {
      control: "select",
      options: ["text", "outlined", "contained"],
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
    asFloated: {
      control: "select",
      options: ["left", "right", "inline"],
      table: {
        category: "as-Flags",
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          primaryBackgroundColor: "",
          secondaryBackgroundColor: "",
          accentColor: "",
          primaryTextColor: "",
          secondaryTextColor: ""
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
          width: "100%",
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a Choice Component",
    a11y: { disable: true },
    docs: { iframeHeight: 300 },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Choice {...args} />;
export const Default = Template.bind({});
Default.args = {
  options: [{
    correct: "checked",
    text: "Item 1",
  }, {
    correct: "",
    text: "Item 2",
  }],
  asEmphasis: "contained",
  asSize: "normal",
  asFloated: "inline",
  withColor: {
    primaryBackgroundColor: "",
    secondaryBackgroundColor: "",
    accentColor: "",
    primaryTextColor: "",
    secondaryTextColor: ""
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "options",
    dictionary: dictionary,
  },
  isDisabled: false,
  isChoice: true,
  isHidden: false,
};
Default.parameters = {
  docs: {
    description: {
      story: "Default component shows features like selected ,not selected , animation in the component",
    },
    source: {
      code: `<Choice {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated Button
// -------------------------------------------------------------
export const TranslatedChoice = Template.bind({});
TranslatedChoice.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "options",
    dictionary: dictionary,
  },
};
TranslatedChoice.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the Choice Button, add a Choice:{Choice1,Choice2} value to the dictionary.",
    },
    source: {
      code: `<Choice {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};