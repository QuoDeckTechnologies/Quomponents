import React, { useEffect, useState } from "react";
import OptionItemTwo from "../components/OptionItem/OptionItemTwo/OptionItemTwo.react";

const dictionary = JSON.stringify({
  hi: {
    optionItemTwo: {
      placeholder: "यह विकल्प ए है",
      correct: "सही",
      incorrect: "ग़लत",
    },
  },
});

export default {
  title: "Design System/OptionItem/OptionItemTwo",
  component: OptionItemTwo,
  argTypes: {
    targetName: "",
    value: "",
    placeholder: "",
    checked: true,
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
    onSelect: {
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
      "Displays a OptionItem component with a radio button and an InputField component.",
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
  return <OptionItemTwo {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  targetName: "Target Name",
  value: "",
  placeholder: "Option Item Two",
  checked: true,
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
    tgt: "optionItemTwo",
    dictionary: dictionary,
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionItemTwo
          targetName="Target Name"
          value=""
          placeholder="Option Item Two"
          checked={true}
          maxLength={300}
          withColor={{
            backgroundColor: "#ffab000d",
            textColor: "",
            accentColor: "#FFBF00",
            hoverBackgroundColor: "",
            hoverTextColor: "",
          }}
          withTranslation={{
            lang: "en",
            tgt: "optionItemTwo",
            dictionary: ${JSON.stringify({
              hi: {
                optionItemTwo: {
                  placeholder: "यह विकल्प ए है",
                  correct: "सही",
                  incorrect: "ग़लत",
                },
              },
            })},
          }}
          onInput={() => {}}
          onSelect={() => {}}
          onClick={() => {}}
        />`,
    },
  },
};
// -------------------------------------------------------------
// Colored OptionItem Two
// -------------------------------------------------------------
export const ColoredOptionItemTwo = Template.bind({});
ColoredOptionItemTwo.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    accentColor: "#597387",
    textColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
};
ColoredOptionItemTwo.parameters = {
  docs: {
    source: {
      code: `<OptionItemTwo
          targetName="Target Name"
          value=""
          placeholder="Option Item Two"
          checked={true}
          maxLength={300}
          withColor={{
            backgroundColor: "#8c9ea3",
            accentColor: "#597387",
            textColor: "",
            hoverBackgroundColor: "",
            hoverTextColor: "",
          }}
          withTranslation={{
            lang: "en",
            tgt: "optionItemTwo",
            dictionary: ${JSON.stringify({
              hi: {
                optionItemTwo: {
                  placeholder: "यह विकल्प ए है",
                  correct: "सही",
                  incorrect: "ग़लत",
                },
              },
            })},
          }}
          onInput={() => {}}
          onSelect={() => {}}
          onClick={() => {}}
        />`,
    },
  },
};
// -------------------------------------------------------------
// Translated OptionItem Two
// -------------------------------------------------------------
export const TranslatedOptionItemTwo = Template.bind({});
TranslatedOptionItemTwo.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "optionItemTwo",
    dictionary: dictionary,
  },
};
TranslatedOptionItemTwo.parameters = {
  docs: {
    source: {
      code: `<OptionItemTwo
          targetName="Target Name"
          value=""
          placeholder="Option Item Two"
          checked={true}
          maxLength={300}
          withColor={{
            backgroundColor: "#ffab000d",
            textColor: "",
            accentColor: "#FFBF00",
            hoverBackgroundColor: "",
            hoverTextColor: "",
          }}
          withTranslation={{
            lang: "hi",
            tgt: "optionItemTwo",
            dictionary: ${JSON.stringify({
              hi: {
                optionItemTwo: {
                  placeholder: "यह विकल्प ए है",
                  correct: "सही",
                  incorrect: "ग़लत",
                },
              },
            })},
          }}
          onInput={() => {}}
          onSelect={() => {}}
          onClick={() => {}}
        />`,
    },
  },
};
// -------------------------------------------------------------
// Multiple OptionItem Two
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
  const handleSelect = (targetName, value, checked) => {
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
        tmp_obj.checked = !checked;
        tmp_arr.push(tmp_obj);
      }
    });
    setContentArr([...tmp_arr]);
  };
  // -------------------------------------------------------------
  // Function to put value in the array of objects
  // -------------------------------------------------------------
  const handleInput = (targetName, value, checked) => {
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
            <OptionItemTwo
              {...args}
              targetName={content.targetName}
              value={content.value}
              placeholder={content.placeholder}
              checked={content.checked}
              onSelect={(targetName, value, checked) =>
                handleSelect(targetName, value, checked)
              }
              onInput={(targetName, value, checked) =>
                handleInput(targetName, value, checked)
              }
              onClick={handleRemove}
            />
          </div>
        );
      })}
    </div>
  );
};
export const MultipleOptionItemTwo = MultipleTemplate.bind({});
MultipleOptionItemTwo.args = {
  ...Default.args,
};
MultipleOptionItemTwo.parameters = {
  docs: {
    source: {
      code: `const [contentArr, setContentArr] = useState([
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
      const handleSelect = (targetName, value, checked) => {
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
            tmp_obj.checked = !checked;
            tmp_arr.push(tmp_obj);
          }
        });
        setContentArr([...tmp_arr]);
      };
      // -------------------------------------------------------------
      // Function to put value in the array of objects
      // -------------------------------------------------------------
      const handleInput = (targetName, value, checked) => {
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
                <OptionItemTwo
                  {...args}
                  targetName={content.targetName}
                  value={content.value}
                  placeholder={content.placeholder}
                  checked={content.checked}
                  onSelect={(targetName, value, checked) =>
                    handleSelect(targetName, value, checked)
                  }
                  onInput={(targetName, value, checked) =>
                    handleInput(targetName, value, checked)
                  }
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
