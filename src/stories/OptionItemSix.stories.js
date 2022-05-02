import React, { useEffect, useState } from "react";
import OptionItemSix from "../components/OptionItem/OptionItemSix/OptionItemSix.react";

export default {
  title: "Design System/OptionItem/OptionItemSix",
  component: OptionItemSix,
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
    onCaption: {
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
  return <OptionItemSix {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    targetName: "target",
    value: "",
    placeholder: "This is option A",
    captionName: "caption",
    captionValue: "",
    captionPlaceholder: "Caption For Option A",
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
      code: `<OptionItemSix {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Colored OptionItem Six
// -------------------------------------------------------------
export const ColoredOptionItemSix = Template.bind({});
ColoredOptionItemSix.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    accentColor: "#597387",
    textColor: "#bac2c8",
  },
};
ColoredOptionItemSix.parameters = {
  docs: {
    source: {
      code: `<OptionItemSix {...${JSON.stringify(
        ColoredOptionItemSix.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated OptionItem Six
// -------------------------------------------------------------
export const AnimatedOptionItemSix = Template.bind({});
AnimatedOptionItemSix.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionItemSix.parameters = {
  docs: {
    source: {
      code: `<OptionItemSix {...${JSON.stringify(
        AnimatedOptionItemSix.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Multiple Option Item Six
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
  // Function to put value in the array
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
  // -------------------------------------------------------------
  // Function to put caption value in the array
  // -------------------------------------------------------------
  const handleCaption = (captionName, captionValue) => {
    tmp_state = contentArr;
    tmp_arr = [];
    tmp_obj = {};

    tmp_state.forEach((dataObj) => {
      if (dataObj.captionName === captionName) {
        tmp_obj = { ...dataObj };
        tmp_obj.captionValue = captionValue;
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
            <OptionItemSix
              {...args}
              content={{ ...content }}
              onUpload={(targetName, image) => handleUpload(targetName, image)}
              onInput={(targetName, value) => handleInput(targetName, value)}
              onCaption={(captionName, captionValue) =>
                handleCaption(captionName, captionValue)
              }
              onClose={handleRemove}
            />
          </div>
        );
      })}
    </div>
  );
};
export const MultipleOptionItemSix = MultipleTemplate.bind({});
MultipleOptionItemSix.args = {
  ...Default.args,
  multiContent: [
    {
      targetName: "target A",
      value: "",
      placeholder: "This is option A",
      captionName: "caption A",
      captionValue: "",
      captionPlaceholder: "Caption For Option A",
      image: {},
      maxLength: 300,
    },
    {
      targetName: "target B",
      value: "",
      placeholder: "This is option B",
      captionName: "caption B",
      captionValue: "",
      captionPlaceholder: "Caption For Option B",
      image: {},
      maxLength: 300,
    },
    {
      targetName: "target C",
      value: "",
      placeholder: "This is option C",
      captionName: "caption C",
      captionValue: "",
      captionPlaceholder: "Caption For Option C",
      image: {},
      maxLength: 300,
    },
  ],
};
MultipleOptionItemSix.parameters = {
  docs: {
    source: {
      code: `<OptionItemSix {...${JSON.stringify(
        MultipleOptionItemSix.args,
        null,
        2
      )}}/>`,
    },
  },
};
