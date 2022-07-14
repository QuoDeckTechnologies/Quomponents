import React, { useState, useEffect } from "react";
import OptionItemOne from "../components/OptionItem/OptionItemOne/OptionItemOne.react";

const dictionary = JSON.stringify({
  hi: {
    optionItemOne: {
      placeholder: "प्रश्नोत्तरी परिणाम के लिए संदेश",
    },
  },
});

export default {
  title: "Design System/OptionItem/OptionItemOne",
  component: OptionItemOne,
  argTypes: {
    targetName: "",
    value: "",
    placeholder: "",
    maxLength: 300,
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
    onInput: {
      table: {
        category: "Events",
        defaultValue: null,
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
    componentSubtitle:
      "Displays a OptionItem component with an InputField component.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 250,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
  return <OptionItemOne {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  targetName: "Target Name",
  value: "",
  placeholder: "Option Item One",
  maxLength: 300,
  withColor: {
    backgroundColor: "#ffab000d",
    textColor: "",
    accentColor: "#FFBF00",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
  withTranslation: {
    lang: "en",
    tgt: "optionItemOne",
    dictionary: dictionary,
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionItemOne {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored OptionItem One
// -------------------------------------------------------------
export const ColoredOptionItemOne = Template.bind({});
ColoredOptionItemOne.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    accentColor: "#597387",
    textColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
};
ColoredOptionItemOne.parameters = {
  docs: {
    source: {
      code: `<OptionItemOne {...${JSON.stringify(
        ColoredOptionItemOne.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated OptionItem One
// -------------------------------------------------------------
export const TranslatedOptionItemOne = Template.bind({});
TranslatedOptionItemOne.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "optionItemOne",
    dictionary: dictionary,
  },
};
TranslatedOptionItemOne.parameters = {
  docs: {
    source: {
      code: `<OptionItemOne {...${JSON.stringify(
        TranslatedOptionItemOne.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Multiple OptionItem One
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  const [contentArr, setContentArr] = useState([
    {
      targetName: "TargetNameOne",
      value: "",
      placeholder: "Placeholder One",
    },
    {
      targetName: "TargetNameTwo",
      value: "",
      placeholder: "Placeholder Two",
    },
    {
      targetName: "TargetNameThree",
      value: "Default Value",
      placeholder: "Placeholder Three",
    },
  ]);
  // -------------------------------------------------------------
  // Hook to return modified content object
  // -------------------------------------------------------------
  useEffect(() => {
    args.onInput(contentArr);
  });
  // -------------------------------------------------------------
  // Temporary variables for operations
  // -------------------------------------------------------------
  let tmp_state = contentArr;
  let tmp_arr = [];
  let tmp_obj = {};
  // -------------------------------------------------------------
  // Function to remove an object from the array
  // -------------------------------------------------------------
  const handleRemove = (dataID) => {
    tmp_state = contentArr;
    tmp_arr = [];
    tmp_state.forEach((dataObj) => {
      tmp_arr.push({ ...dataObj });
    });
    tmp_arr = tmp_state.filter((dataObj) => dataObj.targetName !== dataID);
    setContentArr([...tmp_arr]);
  };
  // -------------------------------------------------------------
  // Function to put value in the array of objects
  // -------------------------------------------------------------
  const handleInput = (targetName, value) => {
    tmp_state = contentArr;
    tmp_arr = [];
    tmp_obj = {};

    tmp_state.forEach((dataObj) => {
      if (dataObj.targetName === targetName) {
        tmp_obj = { ...dataObj };
        tmp_obj.value = value;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_arr.push(tmp_obj);
      }
    });
    setContentArr([...tmp_arr]);
  };
  return (
    <div>
      {contentArr?.map((content, index) => {
        return (
          <div style={{ marginBottom: "1em" }} key={index}>
            <OptionItemOne
              {...args}
              targetName={content.targetName}
              value={content.value}
              placeholder={content.placeholder}
              maxLength={300}
              onInput={(targetName, value) => handleInput(targetName, value)}
              onClick={handleRemove}
            />
          </div>
        );
      })}
    </div>
  );
};
export const MultipleOptionItemOne = MultipleTemplate.bind({});
MultipleOptionItemOne.args = {
  ...Default.args,
};
MultipleOptionItemOne.parameters = {
  docs: {
    source: {
      code: `<OptionItemOne {...${JSON.stringify(
        MultipleOptionItemOne.args,
        null,
        2
      )}}/>`,
    },
  },
};
