import React, { useEffect, useState } from "react";
import OptionItemThree from "../components/OptionItem/OptionItemThree/OptionItemThree.react";

const dictionary = JSON.stringify({
  hi: {
    optionItemThree: {
      uploadButton: "अपलोड",
      correct: "सही",
      incorrect: "ग़लत",
    },
  },
});

export default {
  title: "Design System/OptionItem/OptionItemThree",
  component: OptionItemThree,
  argTypes: {
    targetName: "Target Name",
    image: {},
    checked: true,
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
    onUpload: {
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
      "Displays a OptionItem component with a radio button and OptionalImageField component.",
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
  return <OptionItemThree {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  targetName: "Target Name",
  image: {},
  checked: true,
  withColor: {
    backgroundColor: "#ffab000d",
    textColor: "",
    accentColor: "#FFBF00",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
  withTranslation: {
    lang: "en",
    tgt: "optionItemThree",
    dictionary: dictionary,
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionItemThree
          targetName="Target Name"
          image=""
          checked={true}
          withColor={{
            backgroundColor: "#ffab000d",
            textColor: "",
            accentColor: "#FFBF00",
            hoverBackgroundColor: "",
            hoverTextColor: "",
          }}
          withTranslation={{
            lang: "en",
            tgt: "optionItemThree",
            dictionary: ${JSON.stringify({
              hi: {
                optionItemThree: {
                  uploadButton: "अपलोड",
                  correct: "सही",
                  incorrect: "ग़लत",
                },
              },
            })},
          }}
          onUpload={() => {}}
          onSelect={() => {}}
          onClick={() => {}}
        />`,
    },
  },
};
// -------------------------------------------------------------
// Colored OptionItem Three
// -------------------------------------------------------------
export const ColoredOptionItemThree = Template.bind({});
ColoredOptionItemThree.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    accentColor: "#597387",
    textColor: "#bac2c8",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
};
ColoredOptionItemThree.parameters = {
  docs: {
    source: {
      code: `<OptionItemThree
          targetName="Target Name"
          image=""
          checked={true}
          withColor={{
            backgroundColor: "#8c9ea3",
            accentColor: "#597387",
            textColor: "#bac2c8",
            hoverBackgroundColor: "",
            hoverTextColor: "",
          }}
          withTranslation={{
            lang: "en",
            tgt: "optionItemThree",
            dictionary: ${JSON.stringify({
              hi: {
                optionItemThree: {
                  uploadButton: "अपलोड",
                  correct: "सही",
                  incorrect: "ग़लत",
                },
              },
            })},
          }}
          onUpload={() => {}}
          onSelect={() => {}}
          onClick={() => {}}
        />`,
    },
  },
};
// -------------------------------------------------------------
// Translated OptionItem Three
// -------------------------------------------------------------
export const TranslatedOptionItemThree = Template.bind({});
TranslatedOptionItemThree.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "optionItemThree",
    dictionary: dictionary,
  },
};
TranslatedOptionItemThree.parameters = {
  docs: {
    source: {
      code: `<OptionItemThree
          targetName="Target Name"
          image=""
          checked={true}
          withColor={{
            backgroundColor: "#ffab000d",
            textColor: "",
            accentColor: "#FFBF00",
            hoverBackgroundColor: "",
            hoverTextColor: "",
          }}
          withTranslation={{
            lang: "hi",
            tgt: "optionItemThree",
            dictionary: ${JSON.stringify({
              hi: {
                optionItemThree: {
                  uploadButton: "अपलोड",
                  correct: "सही",
                  incorrect: "ग़लत",
                },
              },
            })},
          }}
          onUpload={() => {}}
          onSelect={() => {}}
          onClick={() => {}}
        />`,
    },
  },
};
// -------------------------------------------------------------
// Multiple OptionItem Three
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  const [contentArr, setContentArr] = useState([
    {
      targetName: "TargetNameOne",
      image: {},
      checked: false,
    },
    {
      targetName: "TargetNameTwo",
      image: {},
      checked: true,
    },
    {
      targetName: "TargetNameThree",
      image: {},
      checked: false,
    },
  ]);
  // -------------------------------------------------------------
  // Hook to return modified content object
  // -------------------------------------------------------------
  useEffect(() => {
    args.onUpload(contentArr);
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
  // Function to image in the array of objects
  // -------------------------------------------------------------
  const handleUpload = (targetName, image, checked) => {
    tmp_state = contentArr;
    tmp_arr = [];
    tmp_obj = {};
    tmp_state.forEach((dataObj) => {
      if (dataObj.targetName === targetName) {
        tmp_obj = { ...dataObj };
        tmp_obj.image = image;
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
            <OptionItemThree
              {...args}
              targetName={content.targetName}
              image={content.image}
              checked={content.checked}
              onSelect={(targetName, value, checked) =>
                handleSelect(targetName, value, checked)
              }
              onUpload={(targetName, image, checked) =>
                handleUpload(targetName, image, checked)
              }
              onClick={handleRemove}
            />
          </div>
        );
      })}
    </div>
  );
};
export const MultipleOptionItemThree = MultipleTemplate.bind({});
MultipleOptionItemThree.args = {
  ...Default.args,
};
MultipleOptionItemThree.parameters = {
  docs: {
    source: {
      code: `const [contentArr, setContentArr] = useState([
        {
          targetName: "TargetNameOne",
          image: {},
          checked: false,
        },
        {
          targetName: "TargetNameTwo",
          image: {},
          checked: true,
        },
        {
          targetName: "TargetNameThree",
          image: {},
          checked: false,
        },
      ]);
      // -------------------------------------------------------------
      // Hook to return modified content object
      // -------------------------------------------------------------
      useEffect(() => {
        args.onUpload(contentArr);
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
      // Function to image in the array of objects
      // -------------------------------------------------------------
      const handleUpload = (targetName, image, checked) => {
        tmp_state = contentArr;
        tmp_arr = [];
        tmp_obj = {};
        tmp_state.forEach((dataObj) => {
          if (dataObj.targetName === targetName) {
            tmp_obj = { ...dataObj };
            tmp_obj.image = image;
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
                <OptionItemThree
                  {...args}
                  targetName={content.targetName}
                  image={content.image}
                  checked={content.checked}
                  onSelect={(targetName, value, checked) =>
                    handleSelect(targetName, value, checked)
                  }
                  onUpload={(targetName, image, checked) =>
                    handleUpload(targetName, image, checked)
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
