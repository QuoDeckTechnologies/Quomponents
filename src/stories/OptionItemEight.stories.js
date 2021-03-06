import React, { useState, useEffect } from "react";
import OptionItemEight from "../components/OptionItem/OptionItemEight/OptionItemEight.react";

const dictionary = JSON.stringify({
  hi: {
    optionItemEight: {
      placeholder: "यह विकल्प ए है",
      buttonText: "रेखांकित बटन",
    },
  },
});

export default {
  title: "Design System/OptionItem/OptionItemEight",
  component: OptionItemEight,
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
    onSubmit: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle:
      "Displays an OptionItem component with an InputField component and a button.",
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
  return <OptionItemEight {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  content: {
    targetName: "Target Name",
    value: "",
    placeholder: "This is Option A",
    maxLength: 300,
    buttonText: "outlined button",
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
    tgt: "optionItemEight",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionItemEight {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored OptionItem Eight
// -------------------------------------------------------------
export const ColoredOptionItemEight = Template.bind({});
ColoredOptionItemEight.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    accentColor: "#597387",
  },
};
ColoredOptionItemEight.parameters = {
  docs: {
    source: {
      code: `<OptionItemEight {...${JSON.stringify(
        ColoredOptionItemEight.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated OptionItem Eight
// -------------------------------------------------------------
export const AnimatedOptionItemEight = Template.bind({});
AnimatedOptionItemEight.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionItemEight.parameters = {
  docs: {
    source: {
      code: `<OptionItemEight {...${JSON.stringify(
        AnimatedOptionItemEight.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated OptionItem Eight
// -------------------------------------------------------------
export const TranslatedOptionItemEight = Template.bind({});
TranslatedOptionItemEight.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "optionItemEight",
    dictionary: dictionary,
  },
};
TranslatedOptionItemEight.parameters = {
  docs: {
    source: {
      code: `<OptionItemEight {...${JSON.stringify(
        TranslatedOptionItemEight.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Multiple OptionItem Eight
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  const [contentArr, setContentArr] = useState([
    {
      targetName: "TargetNameOne",
      value: "",
      placeholder: "Placeholder Eight",
      buttonText: "Button One",
    },
    {
      targetName: "TargetNameTwo",
      value: "",
      placeholder: "Placeholder Two",
      buttonText: "Button Two",
    },
    {
      targetName: "TargetNameThree",
      value: "Default Value",
      placeholder: "Placeholder Three",
      buttonText: "Button Three",
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
      {contentArr.map((content, index) => {
        return (
          <div style={{ marginBottom: "1em" }} key={index}>
            <OptionItemEight
              {...args}
              content={{ ...content }}
              onInput={(targetName, value) => handleInput(targetName, value)}
              onClick={handleRemove}
            />
          </div>
        );
      })}
    </div>
  );
};
export const MultipleOptionItemEight = MultipleTemplate.bind({});
MultipleOptionItemEight.args = {
  ...Default.args,
};
MultipleOptionItemEight.parameters = {
  docs: {
    source: {
      code: `<OptionItemEight {...${JSON.stringify(
        MultipleOptionItemEight.args,
        null,
        2
      )}}/>`,
    },
  },
};
