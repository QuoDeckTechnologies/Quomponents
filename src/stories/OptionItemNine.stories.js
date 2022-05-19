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
    componentSubtitle: "Displays a OptionItemNine component.",
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
// Animated OptionItem Nine
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
