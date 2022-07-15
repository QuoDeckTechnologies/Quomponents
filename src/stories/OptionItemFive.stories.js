import React, { useEffect, useState } from "react";
import OptionItemFive from "../components/OptionItem/OptionItemFive/OptionItemFive.react";

const dictionary = JSON.stringify({
  hi: {
    optionItemFive: {
      placeholder: "विकल्प आइटम पांच",
      uploadButton: "अपलोड",
    },
  },
});

export default {
  title: "Design System/OptionItem/OptionItemFive",
  component: OptionItemFive,
  argTypes: {
    targetName: "",
    value: "",
    image: {},
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
    onUpload: {
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
      "Displays an OptionItem component with an OptionImageField and InputField component.",
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
  return <OptionItemFive {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  targetName: "Target Name",
  value: "",
  image: {},
  placeholder: "Option Item Five",
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
    tgt: "optionItemFive",
    dictionary: dictionary,
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionItemFive {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored OptionItem Five
// -------------------------------------------------------------
export const ColoredOptionItemFive = Template.bind({});
ColoredOptionItemFive.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    accentColor: "#597387",
    textColor: "#bac2c8",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
};
ColoredOptionItemFive.parameters = {
  docs: {
    source: {
      code: `<OptionItemFive {...${JSON.stringify(
        ColoredOptionItemFive.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated OptionItem Five
// -------------------------------------------------------------
export const TranslatedOptionItemFive = Template.bind({});
TranslatedOptionItemFive.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "optionItemFive",
    dictionary: dictionary,
  },
};
TranslatedOptionItemFive.parameters = {
  docs: {
    source: {
      code: `<OptionItemFive {...${JSON.stringify(
        TranslatedOptionItemFive.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Multiple OptionItem Five
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  const [contentArr, setContentArr] = useState([
    {
      targetName: "TargetNameOne",
      value: "",
      placeholder: "Placeholder One",
      image: {},
    },
    {
      targetName: "TargetNameTwo",
      value: "",
      placeholder: "Placeholder Two",
      image: {},
    },
    {
      targetName: "TargetNameThree",
      value: "Default Value",
      placeholder: "Placeholder Three",
      image: {},
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
  // Function to insert image object in the multiContent array
  // -------------------------------------------------------------
  const handleUpload = (targetName, image, value) => {
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
  // -------------------------------------------------------------
  // Function to put value in the array
  // -------------------------------------------------------------
  const handleInput = (targetName, image, value) => {
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
            <OptionItemFive
              {...args}
              targetName={content.targetName}
              value={content.value}
              image={content.image}
              placeholder={content.placeholder}
              maxLength={content.maxLength}
              onUpload={(targetName, image, value) =>
                handleUpload(targetName, image, value)
              }
              onInput={(targetName, image, value) =>
                handleInput(targetName, image, value)
              }
              onClick={handleRemove}
            />
          </div>
        );
      })}
    </div>
  );
};
export const MultipleOptionItemFive = MultipleTemplate.bind({});
MultipleOptionItemFive.args = {
  ...Default.args,
};
MultipleOptionItemFive.parameters = {
  docs: {
    source: {
      code: `<OptionItemFive {...${JSON.stringify(
        MultipleOptionItemFive.args,
        null,
        2
      )}}/>`,
    },
  },
};
