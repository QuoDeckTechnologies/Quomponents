import React, { useEffect, useState } from "react";
import OptionItemTen from "../components/OptionItem/OptionItemTen/OptionItemTen.react";

export default {
  title:
    "Design System/OptionItem/OptionItemTen",
  component: OptionItemTen,
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
    onClose: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle: "Displays a optionitemten with inputField and buttons for general-purpose use..",
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
  return <OptionItemTen {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    targetName: "name one",
    value: "",
    placeholder: "Ops10",
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
      code: `<OptionItem {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Option Item Ten
// -------------------------------------------------------------
export const ColoredOptionItemTen = Template.bind({});
ColoredOptionItemTen.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
    accentColor: "#597387",
  },
};
ColoredOptionItemTen.parameters = {
  docs: {
    source: {
      code: `<OptionItemTen {...${JSON.stringify(
        ColoredOptionItemTen.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated Option Item Ten
// -------------------------------------------------------------
export const AnimatedOptionItemTen = Template.bind({});
AnimatedOptionItemTen.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionItemTen.parameters = {
  docs: {
    source: {
      code: `<OptionItemTen {...${JSON.stringify(
        AnimatedOptionItemTen.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Multiple Option Item Ten
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  const [contentArr, setContentArr] = useState(args.multiContent);
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
            <OptionItemTen
              {...args}
              content={{ ...content }}
              onUpload={(targetName, image, value) =>
                handleUpload(targetName, image, value)
              }
              onInput={(targetName, image, value) =>
                handleInput(targetName, image, value)
              }
              onClose={handleRemove}
            />
          </div>
        );
      })}
    </div>
  );
};
export const MultipleOptionItemTen = MultipleTemplate.bind({});
MultipleOptionItemTen.args = {
  ...Default.args,
  multiContent: [
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
  ],
};
MultipleOptionItemTen.parameters = {
  docs: {
    source: {
      code: `<OptionItemTen {...${JSON.stringify(
        MultipleOptionItemTen.args,
        null,
        2
      )}}/>`,
    },
  },
};


