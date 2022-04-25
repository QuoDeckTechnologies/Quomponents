import React, { useEffect, useState } from "react";
import OptionItemNine from "../components/OptionItem/OptionItemNine/OptionItemNine.react";

export default {
  title: "Design System/OptionItem/OptionItemNine",
  component: OptionItemNine,
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
    onClose: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle: "Displays a InlineEdit with remove button.",
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
  content: {
    targetNameShortFieldOne: "ShortFieldOne",
    targetNameShortFieldTwo: "ShortFieldTwo",
    targetName: "Target Name",
    valueShortFieldOne: 0,
    valueShortFieldTwo: 0,
    value: "",
    placeholder: "Message for Quiz Result",
    maxLength: 300,
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
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionItemNine {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Single Select
// -------------------------------------------------------------
export const ColoredOptionItemNine = Template.bind({});
ColoredOptionItemNine.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
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
// Animated Single Select
// -------------------------------------------------------------
export const AnimatedOptionItemNine = Template.bind({});
AnimatedOptionItemNine.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionItemNine.parameters = {
  docs: {
    source: {
      code: `<OptionItemNine {...${JSON.stringify(
        AnimatedOptionItemNine.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Multiple Option Item Two
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  const [contentArr, setContentArr] = useState([...args.multiContent]);
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
  const handleShortFieldOne = (targetName, value) => {
    tmp_state = contentArr;
    tmp_arr = [];
    tmp_obj = {};
    tmp_state.forEach((dataObj) => {
      if (dataObj.targetNameShortFieldOne === targetName) {
        tmp_obj = { ...dataObj };
        tmp_obj.valueShortFieldOne = value;
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
      if (dataObj.targetNameShortFieldTwo === targetName) {
        tmp_obj = { ...dataObj };
        tmp_obj.valueShortFieldTwo = value;
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
      {contentArr.map((content, index) => {
        return (
          <div style={{ marginBottom: "1em" }} key={index}>
            <OptionItemNine
              {...args}
              content={content}
              onShortFieldOneInput={(targetName, value) =>
                handleShortFieldOne(targetName, value)
              }
              onShortFieldTwoInput={(targetName, value) =>
                handleShortFieldTwo(targetName, value)
              }
              onInput={(targetName, value) => handleInput(targetName, value)}
              onClose={handleRemove}
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
  multiContent: [
    {
      targetNameShortFieldOne: "ShortFieldOne1",
      targetNameShortFieldTwo: "ShortFieldTwo1",
      targetName: "Target Name1",
      valueShortFieldOne: 0,
      valueShortFieldTwo: 0,
      value: "",
      placeholder: "Message for Quiz Result",
      maxLength: 300,
    },
    {
      targetNameShortFieldOne: "ShortFieldOne2",
      targetNameShortFieldTwo: "ShortFieldTwo2",
      targetName: "Target Name2",
      valueShortFieldOne: 0,
      valueShortFieldTwo: 0,
      value: "",
      placeholder: "Message for Quiz Result",
      maxLength: 300,
    },
    {
      targetNameShortFieldOne: "ShortFieldOne3",
      targetNameShortFieldTwo: "ShortFieldTwo3",
      targetName: "Target Name3",
      valueShortFieldOne: 0,
      valueShortFieldTwo: 0,
      value: "Message for Quiz Result",
      placeholder: "",
      maxLength: 300,
    },
  ],
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
