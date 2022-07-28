import React from "react";
import InputField from "../components/InputField/InputField.react";

const dictionary = JSON.stringify({
  hi: {
    inputField: {
      label: "इनपुट नाम",
      placeholder: "विकल्प",
    }
  },
  en: {
    inputField: {
      label: "Input Name",
      placeholder: "Options",
    }
  }
});

export default {
  title: "Design System/InputField",
  component: InputField,
  argTypes: {
    name: "",
    label: "",
    value: "",
    placeholder: "",
    maxLength: 0,
    type: "text",
    isMultiline: false,
    asEmphasis: {
      control: "select",
      options: ["filled", "charLimited", "listInput", "shortField"],
      table: {
        category: "as-Flags",
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          textColor: "",
          accentColor: "",
          backgroundColor: "",
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
    onBlur: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onSubmit: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  decorators: [
    (story) => (
      <div>
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle:
      "Default InputField for general purpose use",
    a11y: { disable: true },
    docs: { iframeHeight: 100 },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <InputField {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "Input Name",
  value: "Please input your text here",
  placeholder: "Options",
  maxLength: 300,
  type: "text",
  isMultiline: false,
  name: "testing_id",
  asEmphasis: "filled",
  withColor: {
    textColor: "#666666",
    accentColor: "#ffab00",
    backgroundColor: "#ffab000d",
    hoverTextColor: "",
  },
  withAnimation: {
    animation: "collapse",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "inputField",
    dictionary: dictionary,
  },
  isHidden: false,
  isDisabled: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<InputField
      label="Input Name"
      value="Please input your text here"
      placeholder="Options"
      maxLength={300}
      type="text"
      isMultiline={false}
      name="testing_id"
      asEmphasis="filled"
      withColor={{
        textColor: "#666666",
        accentColor: "#ffab00",
        backgroundColo: "#ffab000d",
        hoverTextColor: ""
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0
      }}
      withTranslation={{
        "lang": "en",
        "tgt": "inputField",
        "dictionary": "dictionary"
      }}
      isHidden={false}
      isDisabled={false} />`,
    },
  },
};
// -------------------------------------------------------------
// charLimited InputField
// -------------------------------------------------------------
export const charLimitedField = Template.bind({});
charLimitedField.args = {
  ...Default.args,
  asEmphasis: "charLimited",
};
charLimitedField.parameters = {
  docs: {
    description: {
      story:
        "Use to show the charLimited editing state for the InputField.",
    },
    source: {
      code: `<InputField
      label="Input Name"
      value="Please input your text here"
      placeholder="Options"
      maxLength={300}
      type="text"
      isMultiline={false}
      name="testing_id"
      asEmphasis="charLimited"
      withColor={{
        textColor: "#666666",
        accentColor: "#ffab00",
        backgroundColo: "#ffab000d",
        hoverTextColor: ""
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0
      }}
      withTranslation={{
        "lang": "en",
        "tgt": "inputField",
        "dictionary": "dictionary"
      }}
      isHidden={false}
      isDisabled={false} />`,
    },
  },
};
// -------------------------------------------------------------
// listInput InputField
// -------------------------------------------------------------
export const listInputField = Template.bind({});
listInputField.args = {
  ...Default.args,
  value: "",
  placeholder: "Options",
  maxLength: 300,
  type: "text",
  isMultiline: false,
  asEmphasis: "listInput",
};
listInputField.parameters = {
  docs: {
    description: {
      story:
        "Use to show the listInput editing state for the InputField.",
    },
    source: {
      code: `<InputField
      label="Input Name"
      value=""
      placeholder="Options"
      maxLength={300}
      type="text"
      isMultiline={false}
      name="testing_id"
      asEmphasis="listInput"
      withColor={{
        textColor: "#666666",
        accentColor: "#ffab00",
        backgroundColo: "#ffab000d",
        hoverTextColor: ""
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0
      }}
      withTranslation={{
        "lang": "en",
        "tgt": "inputField",
        "dictionary": "dictionary"
      }}
      isHidden={false}
      isDisabled={false} />`,
    },
  },
};
// -------------------------------------------------------------
// shortField InputField
// -------------------------------------------------------------
export const ShortFieldField = Template.bind({});
ShortFieldField.args = {
  ...Default.args,
  value: "0",
  asEmphasis: "shortField",
};
ShortFieldField.parameters = {
  docs: {
    description: {
      story:
        "Use to show the shortField editing state for the InputField.",
    },
    source: {
      code: `<InputField
      label="Input Name"
      value="0"
      placeholder="Options"
      maxLength={300}
      type="text"
      isMultiline={false}
      name="testing_id"
      asEmphasis="shortField"
      withColor={{
        textColor: "#666666",
        accentColor: "#ffab00",
        backgroundColo: "#ffab000d",
        hoverTextColor: ""
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0
      }}
      withTranslation={{
        "lang": "en",
        "tgt": "inputField",
        "dictionary": "dictionary"
      }}
      isHidden={false}
      isDisabled={false} />`,
    },
  },
};
// -------------------------------------------------------------
// Default Translated InputField
// -------------------------------------------------------------
export const TranslatedInputField = Template.bind({});
TranslatedInputField.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "inputField",
    dictionary: dictionary,
  },
};
TranslatedInputField.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in InputField.",
    },
    source: {
      code: `<InputField
      label="Input Name"
      value="Please input your text here"
      placeholder="Options"
      maxLength={300}
      type="text"
      isMultiline={false}
      name="testing_id"
      asEmphasis="filled"
      withColor={{
        textColor: "#666666",
        accentColor: "#ffab00",
        backgroundColo: "#ffab000d",
        hoverTextColor: ""
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0
      }}
      withTranslation={{
        "lang": "hi",
        "tgt": "inputField",
        "dictionary": "dictionary"
      }}
      isHidden={false}
      isDisabled={false} />`,
    },
  },
};
// -------------------------------------------------------------
// charLimited Translated InputField
// -------------------------------------------------------------
export const TranslatedCharLimited = Template.bind({});
TranslatedCharLimited.args = {
  ...Default.args,
  asEmphasis: "charLimited",
  withTranslation: {
    lang: "hi",
    tgt: "inputField",
    dictionary: dictionary,
  },
};
TranslatedCharLimited.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in charLimited InputField.",
    },
    source: {
      code: `<InputField
      label="Input Name"
      value="Please input your text here"
      placeholder="Options"
      maxLength={300}
      type="text"
      isMultiline={false}
      name="testing_id"
      asEmphasis="charLimited"
      withColor={{
        textColor: "#666666",
        accentColor: "#ffab00",
        backgroundColo: "#ffab000d",
        hoverTextColor: ""
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0
      }}
      withTranslation={{
        "lang": "hi",
        "tgt": "inputField",
        "dictionary": "dictionary"
      }}
      isHidden={false}
      isDisabled={false} />`,
    },
  },
};
// -------------------------------------------------------------
// listInput Translated InputField
// -------------------------------------------------------------
export const TranslatedListInput = Template.bind({});
TranslatedListInput.args = {
  ...Default.args,
  label: "",
  value: "",
  asEmphasis: "listInput",
  withTranslation: {
    lang: "hi",
    tgt: "inputField",
    dictionary: dictionary,
  },
};
TranslatedListInput.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in listInput InputField.",
    },
    source: {
      code: `<InputField
      label="Input Name"
      value="Please input your text here"
      placeholder="Options"
      maxLength={300}
      type="text"
      isMultiline={false}
      name="testing_id"
      asEmphasis="listInput"
      withColor={{
        textColor: "#666666",
        accentColor: "#ffab00",
        backgroundColo: "#ffab000d",
        hoverTextColor: ""
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0
      }}
      withTranslation={{
        "lang": "hi",
        "tgt": "inputField",
        "dictionary": "dictionary"
      }}
      isHidden={false}
      isDisabled={false} />`,
    }
  },
};