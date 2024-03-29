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
    content: {},
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          accentColor: "",
          textColor: "",
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
      "Displays a OptionItem component with a radio button and ImageField component.",
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
  content: {
    targetName: "Target Name",
    image: {},
    checked: true,
  },
  withColor: {
    backgroundColor: "#ffab000d",
    accentColor: "",
    textColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "optionItemThree",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionItemThree {...${JSON.stringify(Default.args, null, 2)}}/>`,
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
  },
};
ColoredOptionItemThree.parameters = {
  docs: {
    source: {
      code: `<OptionItemThree {...${JSON.stringify(
        ColoredOptionItemThree.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated OptionItem Three
// -------------------------------------------------------------
export const AnimatedOptionItemThree = Template.bind({});
AnimatedOptionItemThree.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionItemThree.parameters = {
  docs: {
    source: {
      code: `<OptionItemThree {...${JSON.stringify(
        AnimatedOptionItemThree.args,
        null,
        2
      )}}/>`,
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
      code: `<OptionItemThree {...${JSON.stringify(
        TranslatedOptionItemThree.args,
        null,
        2
      )}}/>`,
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
              content={content}
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
      code: `<OptionItemTwo {...${JSON.stringify(
        MultipleOptionItemThree.args,
        null,
        2
      )}}/>`,
    },
  },
};
