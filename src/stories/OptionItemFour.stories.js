import React, { useState, useEffect } from "react";
import OptionItemFour from "../components/OptionItem/OptionItemFour/OptionItemFour.react";

const dictionary = JSON.stringify({
  hi: {
    optionItemFour: {
      placeholder: "विकल्प आइटम पांच",
      correct: "सही",
      incorrect: "ग़लत",
    },
  },
});

export default {
  title: "Design System/OptionItem/OptionItemFour",
  component: OptionItemFour,
  argTypes: {
    content: {},
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
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
    isDisabled: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    isHidden: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    onSelect: {
      table: {
        category: "Events",
        defaultValue: null,
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
      "Displays an OptionItem component with CheckBox and an InputField component.",
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
  return <OptionItemFour {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  content: {
    targetName: "Target Name",
    value: "",
    placeholder: "Option Item Four",
    checked: true,
    maxLength: 300,
  },
  withColor: {
    backgroundColor: "#ffab000d",
    accentColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "optionItemFour",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionItemFour {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored OptionItem Four
// -------------------------------------------------------------
export const ColoredOptionItemFour = Template.bind({});
ColoredOptionItemFour.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    accentColor: "#597387",
  },
};
ColoredOptionItemFour.parameters = {
  docs: {
    source: {
      code: `<OptionItemFour {...${JSON.stringify(
        ColoredOptionItemFour.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated OptionItem Four
// -------------------------------------------------------------
export const AnimatedOptionItemFour = Template.bind({});
AnimatedOptionItemFour.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionItemFour.parameters = {
  docs: {
    source: {
      code: `<OptionItemFour {...${JSON.stringify(
        AnimatedOptionItemFour.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated OptionItem Four
// -------------------------------------------------------------
export const TranslatedOptionItemFour = Template.bind({});
TranslatedOptionItemFour.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "optionItemFour",
    dictionary: dictionary,
  },
};
TranslatedOptionItemFour.parameters = {
  docs: {
    source: {
      code: `<OptionItemFour {...${JSON.stringify(
        TranslatedOptionItemFour.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Multiple OptionItem Four
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  const [contentArr, setContentArr] = useState([
    {
      targetName: "TargetNameOne",
      value: "",
      placeholder: "Placeholder One",
      checked: false,
    },
    {
      targetName: "TargetNameTwo",
      value: "",
      placeholder: "Placeholder Two",
      checked: true,
    },
    {
      targetName: "TargetNameThree",
      value: "Default Value",
      placeholder: "Placeholder Three",
      checked: false,
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
  // Function to set selected option in the content array
  // -------------------------------------------------------------
  const handleSelect = (targetName, checked) => {
    tmp_state = contentArr;
    tmp_arr = [];
    tmp_obj = {};
    tmp_state.forEach((dataObj) => {
      if (dataObj.targetName === targetName) {
        tmp_obj = { ...dataObj };
        tmp_obj.checked = checked;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_arr.push(tmp_obj);
      }
    });
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
      {contentArr.map((content, index) => {
        return (
          <div style={{ marginBottom: "1em" }} key={index}>
            <OptionItemFour
              {...args}
              content={{ ...content }}
              onSelect={(targetName, checked) =>
                handleSelect(targetName, checked)
              }
              onInput={(targetName, value) => handleInput(targetName, value)}
              onClick={handleRemove}
            />
          </div>
        );
      })}
    </div>
  );
};
export const MultipleOptionItemFour = MultipleTemplate.bind({});
MultipleOptionItemFour.args = {
  ...Default.args,
};
MultipleOptionItemFour.parameters = {
  docs: {
    source: {
      code: `<OptionItemFour {...${JSON.stringify(
        MultipleOptionItemFour.args,
        null,
        2
      )}}/>`,
    },
  },
};
