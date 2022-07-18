import React, { useEffect, useState } from "react";
import OptionItemNine from "../components/OptionItem/OptionItemNine/OptionItemNine.react";

const dictionary = JSON.stringify({
  hi: {
    optionItemNine: {
      placeholder: "प्रश्नोत्तरी परिणाम के लिए संदेश",
    },
  },
});

export default {
  title: "Design System/OptionItem/OptionItemNine",
  component: OptionItemNine,
  argTypes: {
    shortFieldOne: {},
    shortFieldTwo: {},
    message: {},
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
    onInput: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onShortFieldOneInput: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onShortFieldTwoInput: {
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
      "Displays a OptionItem component with two ShortField and an InputField component.",
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
  return <OptionItemNine {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  shortFieldOne: {
    targetName: "ShortFieldOne",
    value: "0",
  },
  shortFieldTwo: {
    targetName: "ShortFieldTwo",
    value: "0",
  },
  message: {
    targetName: "Target Name",
    value: "",
    placeholder: "Message for Quiz Result",
    maxLength: 300,
  },
  withColor: {
    backgroundColor: "#ffab000d",
    accentColor: "#FFBF00",
    textColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
  withTranslation: {
    lang: "en",
    tgt: "optionItemNine",
    dictionary: dictionary,
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionItemNine {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored OptionItem Nine
// -------------------------------------------------------------
export const ColoredOptionItemNine = Template.bind({});
ColoredOptionItemNine.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    accentColor: "#597387",
  },
};
ColoredOptionItemNine.parameters = {
  docs: {
    source: {
      code: `<OptionItemNine {...${JSON.stringify(
        ColoredOptionItemNine.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated OptionItem Nine
// -------------------------------------------------------------
export const TranslatedOptionItemNine = Template.bind({});
TranslatedOptionItemNine.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "optionItemNine",
    dictionary: dictionary,
  },
};
TranslatedOptionItemNine.parameters = {
  docs: {
    source: {
      code: `<OptionItemNine {...${JSON.stringify(
        TranslatedOptionItemNine.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Multiple OptionItem Nine
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  const [contentArr, setContentArr] = useState([
    {
      shortFieldOne: {
        targetName: "ShortFieldOne A",
        value: "0",
      },
      shortFieldTwo: {
        targetName: "ShortFieldTwo A",
        value: "0",
      },
      message: {
        targetName: "Target Name A",
        value: "",
        placeholder: "Message for Quiz Result",
        maxLength: 300,
      },
    },
    {
      shortFieldOne: {
        targetName: "ShortFieldOne B",
        value: "0",
      },
      shortFieldTwo: {
        targetName: "ShortFieldTwo B",
        value: "0",
      },
      message: {
        targetName: "Target Name B",
        value: "",
        placeholder: "Message for Quiz Result",
        maxLength: 300,
      },
    },
    {
      shortFieldOne: {
        targetName: "ShortFieldOne C",
        value: "0",
      },
      shortFieldTwo: {
        targetName: "ShortFieldTwo C",
        value: "0",
      },
      message: {
        targetName: "Target Name C",
        value: "",
        placeholder: "Message for Quiz Result",
        maxLength: 300,
      },
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
    tmp_arr = tmp_state.filter(
      (dataObj) => dataObj.message.targetName !== dataID
    );
    setContentArr([...tmp_arr]);
  };
  // -------------------------------------------------------------
  // Function to set selected option in the content array
  // -------------------------------------------------------------
  const handleShortFieldOne = (targetName, value) => {
    tmp_state = contentArr;
    tmp_arr = [];
    tmp_obj = {};
    tmp_state.forEach((dataObj) => {
      if (dataObj.shortFieldOne.targetName === targetName) {
        tmp_obj = { ...dataObj };
        tmp_obj.shortFieldOne.value = value;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_arr.push(tmp_obj);
      }
    });
    setContentArr([...tmp_arr]);
  };
  // -------------------------------------------------------------
  // Function to set selected option in the content array
  // -------------------------------------------------------------
  const handleShortFieldTwo = (targetName, value) => {
    tmp_state = contentArr;
    tmp_arr = [];
    tmp_obj = {};
    tmp_state.forEach((dataObj) => {
      if (dataObj.shortFieldTwo.targetName === targetName) {
        tmp_obj = { ...dataObj };
        tmp_obj.shortFieldTwo.value = value;
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
      if (dataObj.message.targetName === targetName) {
        tmp_obj = { ...dataObj };
        tmp_obj.message.value = value;
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
            <OptionItemNine
              {...args}
              shortFieldOne={{
                targetName: content.shortFieldOne.targetName,
                value: content.shortFieldOne.value,
              }}
              shortFieldTwo={{
                targetName: content.shortFieldTwo.targetName,
                value: content.shortFieldTwo.value,
              }}
              message={{
                targetName: content.message.targetName,
                value: content.message.value,
                placeholder: content.message.placeholder,
                maxLength: content.message.maxLength,
              }}
              onShortFieldOneInput={(targetName, value) =>
                handleShortFieldOne(targetName, value)
              }
              onShortFieldTwoInput={(targetName, value) =>
                handleShortFieldTwo(targetName, value)
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
export const MultipleOptionItemNine = MultipleTemplate.bind({});
MultipleOptionItemNine.args = {
  ...Default.args,
};
MultipleOptionItemNine.parameters = {
  docs: {
    source: {
      code: `<OptionItemNine {...${JSON.stringify(
        MultipleOptionItemNine.args,
        null,
        2
      )}}/>`,
    },
  },
};
