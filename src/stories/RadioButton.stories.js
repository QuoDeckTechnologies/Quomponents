import React from "react";
import RadioButton from "../components/RadioButton/RadioButton.react";

const dictionary = JSON.stringify({
  hi: {
    radioButton: { label: "डिफ़ॉल्ट रेडियो" },
  },
});

export default {
  title: "Design System/RadioButton",
  component: RadioButton,
  argTypes: {
    targetName: "target-one",
    label: "",
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
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          textColor: "",
          accentColor: "",
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
  parameters: {
    componentSubtitle: "Displays a basic radio button for general-purpose use",
    a11y: { disable: true },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RadioButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  targetName: "target-one",
  label: "Default Radio",
  asSize: "normal",
  asFloated: "none",
  asPadded: "fitted",
  asAligned: "left",
  withColor: {
    textColor: "#303030",
    accentColor: "#FFBF00",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "radioButton",
    dictionary: dictionary,
  },
  isHidden: false,
  isDisabled: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<RadioButton {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Radio Button
// -------------------------------------------------------------
export const ColoredRadioButton = Template.bind({});
ColoredRadioButton.args = {
  ...Default.args,
  withColor: {
    textColor: "#303030AA",
    accentColor: "#86BC25",
  },
};
ColoredRadioButton.parameters = {
  docs: {
    source: {
      code: `<RadioButton {...${JSON.stringify(
        ColoredRadioButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Aligned Radio Button
// -------------------------------------------------------------
export const AlignedRadioButton = Template.bind({});
AlignedRadioButton.args = {
  ...Default.args,
  asAligned: "center",
};
AlignedRadioButton.parameters = {
  docs: {
    source: {
      code: `<RadioButton {...${JSON.stringify(
        AlignedRadioButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated Radio Button
// -------------------------------------------------------------
export const TranslatedRadioButton = Template.bind({});
TranslatedRadioButton.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "radioButton",
    dictionary: dictionary,
  },
};
TranslatedRadioButton.parameters = {
  docs: {
    source: {
      code: `<RadioButton {...${JSON.stringify(
        TranslatedRadioButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
