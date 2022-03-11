import React from "react";
import MultiSelect from "../components/MultiSelect/MultiSelect.react";

export default {
  title: "Design System/MultiSelect/MultiSelect",
  component: MultiSelect,
  argTypes: {
    content: [],
    asEmphasis: {
      control: "select",
      options: ["text", "outlined", "contained"],
      table: {
        category: "as-Flags",
      },
    },
    isCircular: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
      },
    },
    asFloated: {
      control: "select",
      options: ["left", "right", "none", "inline"],
      table: {
        category: "as-Flags",
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
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
    isHidden: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    isDisabled: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    onClick: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  decorators: [
    (story) => (
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a MultiSelect Component",
    a11y: { disable: true },
    docs: { iframeHeight: 300 },

  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <MultiSelect {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: ["Primary Button",
    "Primary Button",
    "Primary Button"],
  asEmphasis: "contained",
  isCircular: false,

  asVariant: "warning",
  asFloated: "none",

  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
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
    description: {
      story: "Default component shows features like selected ,not selected , animation in the component",
    },
    source: {
      code: `<MultiSelect {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};


//--------------------------------------------------------------
// Animationchecked Buttons
//--------------------------------------------------------------

export const AnimationChecked = Template.bind({});
AnimationChecked.args = {
  ...Default.args,
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
};
AnimationChecked.parameters = {
  docs: {
    description: {
      story: "Animation Checked shows the buttons with animation and all variants as selected",
    },
    source: {
      code: `<MultiSelect {...${JSON.stringify(AnimationChecked.args, null, 2)}}/>`,
    },
  },
};
// // -------------------------------------------------------------
// // Multi select
// // -------------------------------------------------------------
// // const AllVariants= () => {
// //   const baseObj = {
// //     ...Object.assign({}, Default.args),
// //   };
// const AllVariants = (args) => {
//   const baseObj = {
//     ...Object.assign({}, Default.args, args),
//   };
//   return (
//     <div className="qui-allvariants-container">
//       <MultiSelect
//         {...Object.assign({}, baseObj, {
//           content: "Primary Button",
//           asVariant: "primary",
//         })}
//       />
//       <MultiSelect
//         {...Object.assign({}, baseObj, {
//           content: "Secondary Button",
//           asVariant: "secondary",
//         })}
//       />
//       <MultiSelect
//         {...Object.assign({}, baseObj, {
//           content: "Warning Button",
//           asVariant: "warning",
//         })}
//       />
//       <MultiSelect
//         {...Object.assign({}, baseObj, {
//           content: "Error Button",
//           asVariant: "error",
//         })}
//       />
//       <MultiSelect
//         {...Object.assign({}, baseObj, {
//           content: "Success Button",
//           asVariant: "success",
//         })}
//       />
//     </div>
//   );
// };
// export const MultipleSelect = AllVariants.bind({});
