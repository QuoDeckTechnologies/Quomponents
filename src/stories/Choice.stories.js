import React from "react";
import Choice from "../components/Buttons/Choice/Choice.react";

const dictionary = JSON.stringify({
  hi: {
    options: {
      text1: "वस्तु 1",
      text2: "वस्तु 2",
    },
    loading: "लोड हो रहा है...",
  }
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
    textSeparator: {
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
    asAligned: {
      control: "select",
      options: ["left", "right", "center"],
      table: {
        category: "as-Flags",
      },
    },
    withLabel: {
      table: {
        category: "with-Params",
        defaultValue: {
          format: "label",
          contentOne: "",
          contentTwo: "",
          textColor: "",
        },
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
    isFluid: {
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
    isLoading: {
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
  textSeparator: true,
  asVariant: "primary",
  asEmphasis: "contained",
  asSize: "normal",
  asFloated: "inline",
  asPadded: "normal",
  asAligned: "center",
  withLabel: {
    format: "caption",
    contentOne: "Item1",
    contentTwo: "Item2",
    textColor: "#000000",
  },
  withColor: {
    backgroundColor: "#FFBF00",
    textColor: "#ffffff",
    accentColor: "#333333",
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
    tgt: "options",
    dictionary: dictionary,
  },
  isDisabled: false,
  isFluid: false,
  isHidden: false,
  isLoading: false,
};
Default.parameters = {
  docs: {
    description: {
      story: "Default component shows features like selected ,not selected , animation in the component",
    },
    source: {
      code: `<Choice 
      options= [{
        correct: "checked",
        text: "Item 1",
      }, {
        correct: "",
        text: "Item 2",
      }]
      textSeparator= {true}
      asVariant: "primary",
      asEmphasis= "contained"
      asSize= "normal"
      asFloated= "inline"
      asAligned:"center",
      asPadded= "normal"
      withColor= {{
        backgroundColor= "#FFBF00",
        textColor= "#ffffff",
        accentColor= "#333333",
        hoverBackgroundColor= "",
        hoverTextColor= "",
      }}
      withAnimation= {{
        animation= "zoom",
        duration= 0.5,
        delay= 0,
      }}
      withTranslation= {{
        lang= "en",
        tgt= "options",
        dictionary= dictionary,
      }}
      isDisabled= {false}
      isFluid= {false}
      isHidden= {false}
      isLoading= {false}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated Choice
// -------------------------------------------------------------
export const TranslatedChoice = Template.bind({});
TranslatedChoice.args = {
  ...Default.args,
  textSeparator: true,
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
        "Use to change the language that the text appears in. To make this work for the Choice Button, add a Choice:{text1,text2} value to the dictionary.",
    },
    source: {
      code: `<Choice 
      options= [{
        correct: "checked",
        text: "Item 1",
      }, {
        correct: "",
        text: "Item 2",
      }]
      textSeparator= {true}
      asVariant: "primary",
      asEmphasis= "contained"
      asSize= "normal"
      asFloated= "inline"
      asAligned:"center",
      asPadded= "normal"
      withColor= {{
        backgroundColor= "#FFBF00",
        textColor= "#ffffff",
        accentColor= "#333333",
        hoverBackgroundColor= "",
        hoverTextColor= "",
      }}
      withAnimation= {{
        animation= "zoom",
        duration= 0.5,
        delay= 0,
      }}
      withTranslation= {{
        lang= "hi",
        tgt= "options",
        dictionary= dictionary,
      }}
      isDisabled= {false}
      isFluid= {false}
      isHidden= {false}
      isLoading= {false}/>`,
    },
  },
};
// -------------------------------------------------------------
// Without Text Separator
// -------------------------------------------------------------
export const withoutTextSeparator = Template.bind({});
withoutTextSeparator.args = {
  ...Default.args,
  textSeparator: false,
};
withoutTextSeparator.parameters = {
  docs: {
    description: {
      story:
        "can remove the textSeparator from the component",
    },
    source: {
      code: `<Choice 
      options= [{
        correct: "checked",
        text: "Item 1",
      }, {
        correct: "",
        text: "Item 2",
      }]
      textSeparator= {false}
      asVariant: "primary",
      asEmphasis= "contained"
      asSize= "normal"
      asFloated= "inline"
      asAligned:"center",
      asPadded= "normal"
      withColor= {{
        backgroundColor= "#FFBF00",
        textColor= "#ffffff",
        accentColor= "#333333",
        hoverBackgroundColor= "",
        hoverTextColor= "",
      }}
      withAnimation= {{
        animation= "zoom",
        duration= 0.5,
        delay= 0,
      }}
      withTranslation= {{
        lang= "en",
        tgt= "options",
        dictionary= dictionary,
      }}
      isDisabled= {false}
      isFluid= {false}
      isHidden= {false}
      isLoading= {false}/>`,
    },
  },
};