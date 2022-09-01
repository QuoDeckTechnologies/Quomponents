import React from "react";
import MultiSelect from "../components/MultiSelect/MultiSelect.react";

const dictionary = JSON.stringify({
  en: {
    templateActions: {
      checkAnswer: 'Check Answer',
      submitAnswer: 'Submit Answer',
      thanks: 'Thanks for your response',
      go: 'Go',
    }
  },
  hi: {
    templateActions: {
      checkAnswer: 'अपना उत्तर जाँच लें',
      submitAnswer: 'अपना जवाब सबमिट करें',
      thanks: 'आपके उत्तर के लिए धन्यवाद',
      go: 'आगे बढ़ें',
    }
  }
});

export default {
  title: "Design System/MultiSelect",
  component: MultiSelect,
  argTypes: {
    content: [
      {
        name: "Primary Button",
        isSelected: false,
      },
      {
        name: "Primary Button",
        isSelected: false,
      },
      {
        name: "Primary Button",
        isSelected: false,
      },
      {
        name: "Primary Button",
        isSelected: false,
      },
    ],
    purpose: "",
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
    asPadded: {
      control: "select",
      options: ["fitted", "compact", "normal", "relaxed", "zero","zero"],
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
    componentSubtitle: "Displays a MultiSelect Component",
    a11y: { disable: true },
    docs: { iframeHeight: 300 },

  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <MultiSelect {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: [
    {
      name: "Primary Button",
      isSelected: false,
    },
    {
      name: "Primary Button",
      isSelected: false,
    },
    {
      name: "Primary Button",
      isSelected: false,
    },
    {
      name: "Primary Button",
      isSelected: false,
    },
  ],
  purpose: "quiz",
  asEmphasis: "contained",

  asVariant: "warning",
  asPadded: "normal",
  asFloated: "none",

  withColor: {
    backgroundColor: "",
    textColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
  withTranslation: {
    lang: "en",
    tgt: "templateActions",
    dictionary: dictionary,
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isDisabled: false,
  isHidden: false
};
Default.parameters = {
  docs: {
    description: {
      story: "Default component shows features like selected ,not selected , animation in the component",
    },
    source: {
      code: `<MultiSelect {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// All Variants
// -------------------------------------------------------------
const AllVariantTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args),
  };
  return (
    <div className="qui-allvariants-container">
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
          ],
          purpose: "",
          asVariant: "primary",
          withTranslation: {
            lang: "en",
            tgt: "templateActions",
            dictionary: dictionary,
          },
          withAnimation: {
            animation: "slideDown",
            duration: 0.5,
            delay: 0.2,
          },
        })}
      />
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
          ],
          purpose: "",
          asVariant: "secondary",
          withTranslation: {
            lang: "en",
            tgt: "templateActions",
            dictionary: dictionary,
          },
          withAnimation: {
            animation: "slideDown",
            duration: 0.5,
            delay: 0.4,
          },
        })}
      />
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
          ],
          purpose: "",
          asVariant: "success",
          withTranslation: {
            lang: "en",
            tgt: "templateActions",
            dictionary: dictionary,
          },
          withAnimation: {
            animation: "slideDown",
            duration: 0.5,
            delay: 0.6,
          },
        })}
      />
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
          ],
          purpose: "",
          asVariant: "warning",
          withTranslation: {
            lang: "en",
            tgt: "templateActions",
            dictionary: dictionary,
          },
          withAnimation: {
            animation: "slideDown",
            duration: 0.5,
            delay: 0.8,
          },
        })}
      />
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
            {
              name: "Primary Button",
              isSelected: false,
            },
          ],
          purpose: "",
          asVariant: "error",
          withTranslation: {
            lang: "en",
            tgt: "templateActions",
            dictionary: dictionary,
          },
          withAnimation: {
            animation: "slideDown",
            duration: 0.5,
            delay: 1,
          },
        })}
      />
    </div>
  );
};
export const AllVariants = AllVariantTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story:
        "5 variants  is supported. Use as per purpose noted here.",
    },
  },
};

// -------------------------------------------------------------
// Translated MultiSelect
// -------------------------------------------------------------
export const TranslatedMultiSelect = Template.bind({});
TranslatedMultiSelect.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "templateActions",
    dictionary: dictionary
  },
};
TranslatedMultiSelect.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the MultiSelect, add a templateActions:{} value to the dictionary.",
    },
    source: {
      code: `<MultiSelect {...${JSON.stringify(
        TranslatedMultiSelect.args,
        null,
        2
      )}}/>`,
    },
  },
};