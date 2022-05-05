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
    onClose: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle:
      "Displays a optionitemseven with inputfield and buttons for general-purpose use.",
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
    placeholder: "This is Option A",
    checked: true,
    image: {},
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
      code: `<OptionItemSeven {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored OptionItem Seven
// -------------------------------------------------------------
export const ColoredOptionItemSeven = Template.bind({});
ColoredOptionItemSeven.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    accentColor: "#597387",
    textColor: "#bac2c8",
  },
};
ColoredOptionItemSeven.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        ColoredOptionItemSeven.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated OptionItem Seven
// -------------------------------------------------------------
export const AnimatedOptionItemSeven = Template.bind({});
AnimatedOptionItemSeven.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionItemSeven.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        AnimatedOptionItemSeven.args,
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
  const handleSelect = (targetName, checked) => {
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
  const handleUpload = (targetName, image) => {
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
            <OptionItemSeven
              {...args}
              content={content}
              onSelect={(targetName, checked) =>
                handleSelect(targetName, checked)
              }
              onUpload={(targetName, image) => handleUpload(targetName, image)}
              onInput={(targetName, value) => handleInput(targetName, value)}
              onClose={handleRemove}
            />
          </div>
        );
      })}
    </div>
  );
};
export const MultipleOptionItemSeven = MultipleTemplate.bind({});
MultipleOptionItemSeven.args = {
  ...Default.args,
  multiContent: [
    {
      targetName: "Target Name A",
      value: "",
      placeholder: "This is Option A",
      checked: false,
      image: {},
      maxLength: 300,
    },
    {
      targetName: "Target Name B",
      value: "",
      placeholder: "This is Option B",
      checked: true,
      image: {},
      maxLength: 300,
    },
    {
      targetName: "Target Name C",
      value: "",
      placeholder: "This is Option C",
      checked: false,
      image: {},
      maxLength: 300,
    },
  ],
};
MultipleOptionItemSeven.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        MultipleOptionItemSeven.args,
        null,
        2
      )}}/>`,
    },
  },
};
