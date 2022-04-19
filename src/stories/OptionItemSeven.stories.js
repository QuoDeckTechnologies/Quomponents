import React, { useEffect, useState } from "react";
import OptionItemSeven from "../components/OptionItem/OptionItemSeven/OptionItemSeven.react";

export default {
  title: "Design System/OptionItem/OptionItemSeven",
  component: OptionItemSeven,
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
  return <OptionItemSeven {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    targetName: "Target Name",
    value: "",
    placeholder: "Ops7",
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
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored OptionItem Seven
// -------------------------------------------------------------
export const ColoredOptionitemSeven = Template.bind({});
ColoredOptionitemSeven.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
    accentColor: "#597387",
  },
};
ColoredOptionitemSeven.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        ColoredOptionitemSeven.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated OptionItem
// -------------------------------------------------------------
export const AnimatedOptionitemSeven = Template.bind({});
AnimatedOptionitemSeven.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionitemSeven.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        AnimatedOptionitemSeven.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Multiple Inline Edit With Remove Button
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
      {contentArr.map((content, index) => {
        return (
          <div style={{ marginBottom: "1em" }} key={index}>
            <OptionItemSeven
              {...args}
              content={content}
              onSelect={(targetName, value, checked) =>
                handleSelect(targetName, value, checked)
              }
              onInput={(targetName, value, checked) =>
                handleInput(targetName, value, checked)
              }
              onClose={handleRemove}
            />
          </div>
        );
      })}
    </div>
  );
};
export const MultipleOptionitemSeven = MultipleTemplate.bind({});
MultipleOptionitemSeven.args = {
  ...Default.args,
  multiContent: [
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
  ],
};
MultipleOptionitemSeven.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        MultipleOptionitemSeven.args,
        null,
        2
      )}}/>`,
    },
  },
};

