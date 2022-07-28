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
    targetName: "",
    value: "",
    placeholder: "",
    maxLength: 300,
    buttonText: "",
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
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
  targetName: "Target Name",
  value: "",
  placeholder: "This is Option A",
  maxLength: 300,
  buttonText: "outlined button",
  asVariant: "warning",
  withColor: {
    backgroundColor: "#ffab000d",
    textColor: "",
    accentColor: "#FFBF00",
    hoverBackgroundColor: "#FFBF00",
    hoverTextColor: "#000",
  },
  withTranslation: {
    lang: "en",
    tgt: "optionItemEight",
    dictionary: dictionary,
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionItemEight 
      targetName= "Target Name"
      value= ""
      placeholder= "This is Option A"
      maxLength= {300}
      buttonText= "outlined button"
      asVariant= "warning"
      withColor= {{
        backgroundColor: "#ffab000d",
        textColor: "",
        accentColor: "#FFBF00",
        hoverBackgroundColor: "#FFBF00",
        hoverTextColor: "#000",
      }}
      withTranslation= {{
        lang: "en",
        tgt: "optionItemEight",
        dictionary: dictionary,
      }}/>`,
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
    textColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
};
ColoredOptionItemEight.parameters = {
  docs: {
    source: {
      code: `<OptionItemEight 
      targetName= "Target Name"
      value= ""
      placeholder= "This is Option A"
      maxLength= {300}
      buttonText= "outlined button"
      asVariant= "warning"
      withColor= {{
        backgroundColor: "#8c9ea3",
        accentColor: "#597387",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
      }}
      withTranslation= {{
        lang: "en",
        tgt: "optionItemEight",
        dictionary: dictionary,
      }}/>`,
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
      code: `<OptionItemEight 
      targetName= "Target Name"
      value= ""
      placeholder= "This is Option A"
      maxLength= {300}
      buttonText= "outlined button"
      asVariant= "warning"
      withColor= {{
        backgroundColor: "#ffab000d",
        textColor: "",
        accentColor: "#FFBF00",
        hoverBackgroundColor: "#FFBF00",
        hoverTextColor: "#000",
      }}
      withTranslation= {{
        lang: "hi",
        tgt: "optionItemEight",
        dictionary: dictionary,
      }}/>`,
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
              targetName={content.targetName}
              value={content.value}
              placeholder={content.placeholder}
              maxLength={content.maxLength}
              buttonText={content.buttonText}
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
      code: `const [contentArr, setContentArr] = useState([
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
                  targetName={content.targetName}
                  value={content.value}
                  placeholder={content.placeholder}
                  maxLength={content.maxLength}
                  buttonText={content.buttonText}
                  onInput={(targetName, value) => handleInput(targetName, value)}
                  onClick={handleRemove}
                />
              </div>
            );
          })}
        </div>
      );`,
    },
  },
};
