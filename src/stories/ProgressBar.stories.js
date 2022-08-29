import React from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar.react";

export default {
  title: "Design System/ProgressBar",
  component: ProgressBar,
  argTypes: {
    leftIcon: "",
    rightIcon: "",
    totalSlides: 5,
    activeSlide: 1,
    enableLeftNavigation: {
      table: {
        defaultValue: false,
      },
    },
    enableRightNavigation: {
      table: {
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
    asPadded: {
      control: "select",
      options: ["fitted", "compact", "normal", "relaxed"],
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
          accentColor: "",
          backgroundColor: "",
          textColor: "",
          hoverTextColor: "",
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
    isFluid: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
  },
  decorators: [(story) => <div>{story()}</div>],
  parameters: {
    componentSubtitle:
      "Displays a ProgressBar with Buttons & Steps for general-purpose use",
    a11y: { disable: true },
    docs: {
      iframeHeight: 600,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
  return <ProgressBar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  leftIcon: "fa fa-arrow-alt-circle-left",
  rightIcon: "fa fa-arrow-alt-circle-right",
  totalSlides: 5,
  activeSlide: 2,
  enableLeftNavigation: false,
  enableRightNavigation: false,
  asVariant: "primary",
  asPadded: "normal",
  asFloated: "none",
  withColor: {
    accentColor: "",
    backgroundColor: "",
    textColor: "#808080",
    hoverTextColor: "#E82E19",
  },
  isHidden: false,
  isDisabled: false,
  isFluid: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<ProgressBar 
            leftIcon= "fa fa-arrow-alt-circle-left"
            rightIcon= "fa fa-arrow-alt-circle-right"
            totalSlides= {5}
            activeSlide= {2}
            enableLeftNavigation= {false}
            enableRightNavigation= {false}
            asVariant= "primary"
            asPadded= "normal"
            asFloated= "inline"
            withColor= {{
                accentColor: "",
                backgroundColor: "",
                textColor: "#808080",
                hoverTextColor: "#E82E19",
            }}
            isHidden= {false}
            isDisabled= {false}
            isFluid= {false}/>`,
    },
  },
};
//-------------------------------------------------------------
// Colored Progressbar
// -------------------------------------------------------------
export const ColoredProgressbar = Template.bind({});
ColoredProgressbar.args = {
  ...Default.args,
  withColor: {
    accentColor: "#ffffff",
    backgroundColor: "#C98787",
    textColor: "#D3D3D3",
    hoverTextColor: "#E82E19",
  },
};
ColoredProgressbar.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the content.",
    },
    source: {
      code: `<ProgressBar 
            leftIcon= "fa fa-arrow-alt-circle-left"
            rightIcon= "fa fa-arrow-alt-circle-right"
            totalSlides= {5}
            activeSlide= {2}
            enableLeftNavigation= {false}
            enableRightNavigation= {false}
            asVariant= "primary"
            asPadded= "normal"
            asFloated= "inline"
            withColor= {{
                accentColor: "#ffffff",
                backgroundColor: "#C98787",
                textColor: "#D3D3D3",
                hoverTextColor: "#E82E19",
            }}
            isHidden= {false}
            isDisabled= {false}
            isFluid= {false}/>`,
    },
  },
};
// -------------------------------------------------------------
// Fluid ProgressBar
// -------------------------------------------------------------
export const FluidProgressbar = Template.bind({});
FluidProgressbar.args = {
  ...Default.args,
  isFluid: true,
};
FluidProgressbar.parameters = {
  docs: {
    description: {
      story:
        "Use to toggle the ProgressBar taking the full width of the parent container",
    },
  },
  source: {
    code: `<ProgressBar 
        leftIcon= "fa fa-arrow-alt-circle-left"
        rightIcon= "fa fa-arrow-alt-circle-right"
        totalSlides= {5}
        activeSlide= {2}
        enableLeftNavigation= {false}
        enableRightNavigation= {false}
        asVariant= "primary"
        asPadded= "normal"
        asFloated= "inline"
        withColor= {{
            accentColor: "#ffffff",
            backgroundColor: "#C98787",
            textColor: "#D3D3D3",
            hoverTextColor: "#E82E19",
        }}
        isHidden= {false}
        isDisabled= {false}
        isFluid= {true}/>`,
  },
};
// -------------------------------------------------------------
// AllVariants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {}),
  };
  return (
    <div>
      <ProgressBar
        {...Object.assign({}, baseObj, {
          asVariant: "primary",
        })}
      />
      <ProgressBar
        {...Object.assign({}, baseObj, {
          withColor: {
            accentColor: "#ffffff",
            backgroundColor: "#C98787",
            textColor: "#D3D3D3",
            hoverTextColor: "#E82E19",
          },
        })}
      />
    </div>
  );
};
export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story: "All variants are supported in ProgressBar.",
    },
    source: {
      code: `<ProgressBar 
            asVariant= "primary"
            withColor= {{
                accentColor: "#ffffff",
                backgroundColor: "#C98787",
                textColor: "#D3D3D3",
                hoverTextColor: "#E82E19",
            }}/>`,
    },
  },
};
