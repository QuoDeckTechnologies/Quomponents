import React, { useState } from "react";
import RadioButton from "../components/RadioButton/RadioButton.react";
import RadioGroup from "@mui/material/RadioGroup";
import _ from "lodash";

const dictionary = JSON.stringify({
  hi: {
    radioButton: { content: "डिफ़ॉल्ट रेडियो" },
  },
});

export default {
  title: "Design System/RadioButton",
  component: RadioButton,
  argTypes: {
    targetName: "target-one",
    content: "",
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
  content: "Default Radio",
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
// -------------------------------------------------------------
// Multiple Radio Button
// -------------------------------------------------------------
const MultipleRadioButtonTemplate = (args) => {
  const defaultProps = {
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
    isHidden: false,
    isDisabled: false,
  };
  const [value, setValue] = useState(args.initialValue);
  return (
    <div style={{ display: "inline-block" }}>
      <RadioGroup value={value}>
        {_.map(args.radioContent, (radio, index) => {
          return (
            <RadioButton
              key={index}
              {...defaultProps}
              targetName={radio.targetName}
              content={radio.content}
              onClick={(value, checked) => setValue(value)}
            />
          );
        })}
      </RadioGroup>
    </div>
  );
};
export const MultipleRadioButton = MultipleRadioButtonTemplate.bind({});
MultipleRadioButton.args = {
  ...Default.args,
  initialValue: "target-one",
  radioContent: [
    { targetName: "target-one", content: "Option A" },
    { targetName: "target-two", content: "Option B" },
  ],
};
MultipleRadioButton.parameters = {
  docs: {
    source: {
      code: `<RadioButton {...${JSON.stringify(
        MultipleRadioButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
