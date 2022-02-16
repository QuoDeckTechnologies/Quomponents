import React from "react";
import MultiSelect from "../components/MultiSelect/MultiSelect.react";

const dictionary = JSON.stringify({
  hi: {
    MultiSelect: {
      content: [
        { text:"प्राथमिक बटन",selected:true},
        { text:"प्राथमिक बटन",selected:false},
        { text:"प्राथमिक बटन",selected:true},
        { text:"प्राथमिक बटन",selected:false},
      ],
    },
  },
});

export default {
  title: "Design System/MultiSelect/MultiSelect",
  component: MultiSelect,
  argTypes: {
    content: [],
    asEmphasis: {
      control: "select",
      options: ["text", "outlined", "contained"],
      table: {
        category: "as-Flags",
      },
    },
    isCircular: {
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
      text: "Primary Button",
      selected: true,
    },
    {
      text: "Primary Button",
      selected: false,
    },
    {
      text: "Primary Button",
      selected: true,
    },
    {
      text: "Primary Button",
      selected: false,
    }
  ],
  asEmphasis: "contained",
  isCircular: false,

  asVariant: "warning",
  asSize: "normal",
  asFloated: "none",

  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "",
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
    tgt: "button",
    dictionary: dictionary,
  },

  isDisabled: false,
  isHidden: false,

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

//--------------------------------------------------------------
// AnimationUnchecked Buttons
//--------------------------------------------------------------

export const AnimationUnchecked = Template.bind({});
AnimationUnchecked.args = {
  content: [
    {
      text: "Primary Button",
      selected: false,
    },
    {
      text: "Primary Button",
      selected: false,
    },
    {
      text: "Primary Button",
      selected: false,
    },
    {
      text: "Primary Button",
      selected: false,
    }
  ],
  asEmphasis: "contained",
  isCircular: false,

  asVariant: "warning",
  asSize: "normal",
  asFloated: "none",

  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "",
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
    tgt: "button",
    dictionary: dictionary,
  },

  isDisabled: false,
  isHidden: false,

};
AnimationUnchecked.parameters = {
  docs: {
    description: {
        story: "Show the animation of the Unchecked component can change with the props",
    },
    source: {
      code: `<MultiSelect {...${JSON.stringify(AnimationUnchecked.args, null, 2)}}/>`,
    },
  },
};

//--------------------------------------------------------------
// Animationchecked Buttons
//--------------------------------------------------------------

export const AnimationChecked = Template.bind({});
AnimationChecked.args = {
  content: [
    {
      text: "Primary Button",
      selected: true,
    },
    {
      text: "Primary Button",
      selected: true,
    },
    {
      text: "Primary Button",
      selected: true,
    },
    {
      text: "Primary Button",
      selected: true,
    }
  ],
  asEmphasis: "contained",
  isCircular: false,

  asVariant: "warning",
  asSize: "normal",
  asFloated: "none",

  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "",
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
    tgt: "button",
    dictionary: dictionary,
  },

  isDisabled: false,
  isHidden: false,

};
AnimationChecked.parameters = {
  docs: {
    description: {
        story: "Animation Checked shows the buttons with animation and all variants as selected",
    },
    source: {
      code: `<MultiSelect {...${JSON.stringify(AnimationChecked.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated Button
// -------------------------------------------------------------
export const TranslatedMultiSelect = Template.bind({});
TranslatedMultiSelect.args = {
  ...Default.args,
  asVariant: "primary",
  withTranslation: {
    lang: "hi",
    tgt: "MultiSelect",
    dictionary: dictionary,
  },
};
TranslatedMultiSelect.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language of that the text appears in the component.",
    },
    source: {
      code: `<MultiSelect withTranslation={{lang: "hi", tgt: "MultiSelect", dictionary: ${JSON.stringify(
        dictionary
      )}}}}/>`,
    },
  },
};
// -------------------------------------------------------------
// All Variants
// -------------------------------------------------------------
const AllVariantTemplate = () => {
  const baseObj = {
    ...Object.assign({}, Default.args),
  };

  return (
    <div className="qui-allvariants-container">
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [{
            text:"Primary Button", selected:true
          }],
          asVariant: "primary",
        })}
      />
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [{
            text:"secondary Button", selected:false
          }],
          asVariant: "secondary",
        })}
      />
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [{
            text:"warning Button", selected:true
          }],
          asVariant: "warning",
        })}
      />
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [{
            text:"Error Button", selected:false
          }],
          asVariant: "error",
        })}
      />
      <MultiSelect
        {...Object.assign({}, baseObj, {
          content: [{
            text:"success Button", selected:true
          }],
          asVariant: "success",
        })}
      />
    </div>
  );
};
export const AllVariants = AllVariantTemplate.bind({});
