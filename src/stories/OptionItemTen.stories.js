import React, { useEffect, useState } from "react";
import OptionItemTen from "../components/OptionItem/OptionItemTen/OptionItemTen.react";

export default {
  title: "Design System/OptionItem/OptionItemTen",
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
    onHeader: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onMessage: {
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
      "Displays a optionitemten with inputField and buttons for general-purpose use..",
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
    option: {
      targetName: "target",
      value: "",
      placeholder: "Option A",
    },
    header: {
      targetName: "header",
      value: "",
      placeholder: "Header for Option A",
      maxLength: 300,
    },
    message: {
      targetName: "message",
      value: "",
      placeholder: "Message for Option A",
      maxLength: 300,
    },
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
    accentColor: "#597387",
    textColor: "#bac2c8",
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
    tmp_arr = tmp_state.filter(
      (dataObj) => dataObj.option.targetName !== dataID
    );
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
      if (dataObj.option.targetName === targetName) {
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
      if (dataObj.option.targetName === targetName) {
        tmp_obj = { ...dataObj };
        tmp_obj.option.value = value;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_arr.push(tmp_obj);
      }
    });
    setContentArr([...tmp_arr]);
  };
  // -------------------------------------------------------------
  // Function to put header value in the array
  // -------------------------------------------------------------
  const handleHeader = (headerName, headerValue) => {
    tmp_state = contentArr;
    tmp_arr = [];
    tmp_obj = {};

    tmp_state.forEach((dataObj) => {
      if (dataObj.header.targetName === headerName) {
        tmp_obj = { ...dataObj };
        tmp_obj.header.value = headerValue;
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
  const handleMessage = (messageName, messageValue) => {
    tmp_state = contentArr;
    tmp_arr = [];
    tmp_obj = {};

    tmp_state.forEach((dataObj) => {
      if (dataObj.message.targetName === messageName) {
        tmp_obj = { ...dataObj };
        tmp_obj.message.value = messageValue;
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
              onUpload={(targetName, image) => handleUpload(targetName, image)}
              onInput={(targetName, value) => handleInput(targetName, value)}
              onHeader={(targetName, value) => handleHeader(targetName, value)}
              onMessage={(targetName, value) =>
                handleMessage(targetName, value)
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
      option: {
        targetName: "target A",
        value: "",
        placeholder: "Option A",
      },
      header: {
        targetName: "header A",
        value: "",
        placeholder: "Header for Option A",
        maxLength: 300,
      },
      message: {
        targetName: "message",
        value: "",
        placeholder: "Message for Option A",
        maxLength: 300,
      },
    },
    {
      option: {
        targetName: "target B",
        value: "",
        placeholder: "Option B",
      },
      header: {
        targetName: "header B",
        value: "",
        placeholder: "Header for Option B",
        maxLength: 300,
      },
      message: {
        targetName: "message B",
        value: "",
        placeholder: "Message for Option B",
        maxLength: 300,
      },
    },
    {
      option: {
        targetName: "target C",
        value: "",
        placeholder: "Option C",
      },
      header: {
        targetName: "header C",
        value: "",
        placeholder: "Header for Option C",
        maxLength: 300,
      },
      message: {
        targetName: "message C",
        value: "",
        placeholder: "Message for Option C",
        maxLength: 300,
      },
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
