import React, { useState, useEffect } from "react";
import _ from 'lodash'
import OptionItemOne from "../components/OptionItem/OptionItemOne/OptionItemOne.react";

export default {
  title: "Design System/OptionItem/OptionItemOne",
  component: OptionItemOne,
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
  return <OptionItemOne {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    targetName: "Target Name",
    value: "",
    placeholder: "InlineEdit with remove button",
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
      code: `<OptionItemOne {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Inline Edit With Remove Button
// -------------------------------------------------------------
export const ColoredOptionItemOne = Template.bind({});
ColoredOptionItemOne.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
    accentColor: "#597387",
  },
};
ColoredOptionItemOne.parameters = {
  docs: {
    source: {
      code: `<OptionItemOne {...${JSON.stringify(
        ColoredOptionItemOne.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated Inline Edit With Remove Button
// -------------------------------------------------------------
export const AnimatedOptionItemOne = Template.bind({});
AnimatedOptionItemOne.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionItemOne.parameters = {
  docs: {
    source: {
      code: `<OptionItemOne {...${JSON.stringify(
        AnimatedOptionItemOne.args,
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
  let obj = { ...args.content };
  const [contentArr, setContentArr] = useState(args.multiContent);

  useEffect(() => {
    args.onInput(contentArr);
  });
  // return (
  //   <div>
  //     <div style={{ marginBottom: "1em" }}>
  //       <OptionItemOne {...args} content={{ ...obj, targetName: "one" }} />
  //     </div>
  //     <div style={{ marginBottom: "1em" }}>
  //       <OptionItemOne {...args} content={{ ...obj, targetName: "two" }} />
  //     </div>
  //     <div style={{ marginBottom: "1em" }}>
  //       <OptionItemOne {...args} content={{ ...obj, targetName: "three" }} />
  //     </div>
  //   </div>
  // );

  let tmp_state = contentArr;
  let tmp_arr = [];
  let tmp_obj = {};

  const handleRemove = (dataID) => {
    tmp_state = contentArr;
    tmp_arr = [];
    tmp_state.forEach((dataObj) => {
      tmp_arr.push({ ...dataObj });
    });
    tmp_arr = tmp_state.filter((dataObj) => dataObj.targetName !== dataID);
    setContentArr([...tmp_arr]);
  };

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
            <OptionItemOne
              {...args}
              content={{...content}}
              onInput={(targetName, value) => handleInput(targetName, value)}
              onClose={handleRemove}
            />
          </div>
        );
      })}
    </div>
  );
};
export const MultipleOptionItemOne = MultipleTemplate.bind({});
MultipleOptionItemOne.args = {
  ...Default.args,
  multiContent: [
    {
      targetName: "TargetNameOne",
      value: "",
      placeholder: "Placeholder One",
    },
    {
      targetName: "TargetNameTwo",
      value: "",
      placeholder: "Placeholder Two",
    },
    {
      targetName: "TargetNameThree",
      value: "Default Value",
      placeholder: "Placeholder Three",
    },
  ],
};
MultipleOptionItemOne.parameters = {
  docs: {
    source: {
      code: `<OptionItemOne {...${JSON.stringify(
        MultipleOptionItemOne.args,
        null,
        2
      )}}/>`,
    },
  },
};
