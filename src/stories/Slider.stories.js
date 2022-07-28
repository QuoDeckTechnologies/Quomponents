import React from "react";
import Slider from "../components/Slider/Slider.react";

export default {
  title: "Design System/Slider",
  component: Slider,
  argTypes: {
    initialValue: 10,
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          accentColor: "",
          hoverBackgroundColor: "",
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
          paddingTop: "1em",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a Slider Component",
    a11y: { disable: true },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Slider {...args} />;
export const Default = Template.bind({});
Default.args = {
  initialValue: 10,
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withColor: {
    backgroundColor: "",
    accentColor: "",
    hoverBackgroundColor: "",
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<Slider
          initialValue={10}
          withAnimation={{
            animation: "zoom",
            duration: 0.5,
            delay: 0,
          }}
          withColor={{
            backgroundColor: "",
            accentColor: "",
            hoverBackgroundColor: "",
          }}
          isDisabled={false}
          isHidden={false}
          onClick={()=>{}}
        />`,
    },
  },
};

// -------------------------------------------------------------
// Colored Slider
// -------------------------------------------------------------
export const ColoredSlider = Template.bind({});
ColoredSlider.args = {
  initialValue: 10,
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withColor: {
    backgroundColor: "#00153E",
    accentColor: "#00153E",
    hoverBackgroundColor: "#00153E26",
  },
  isDisabled: false,
  isHidden: false,
};
ColoredSlider.parameters = {
  docs: {
    source: {
      code: `<Slider
          initialValue={10}
          withAnimation={{
            animation: "zoom",
            duration: 0.5,
            delay: 0,
          }}
          withColor={{
            backgroundColor: "#00153E",
            accentColor: "#00153E",
            hoverBackgroundColor: "#00153E26",
          }}
          isDisabled={false}
          isHidden={false}
          onClick={()=>{}}
        />`,
    },
  },
};

// -------------------------------------------------------------
// DisabledSlider
// -------------------------------------------------------------
export const DisabledSlider = Template.bind({});
DisabledSlider.args = {
  ...Default.args,
  isDisabled: true,
};
DisabledSlider.parameters = {
  docs: {
    source: {
      code: `<Slider
          isDisabled={true}
          initialValue={10}
          withAnimation={{
            animation: "zoom",
            duration: 0.5,
            delay: 0,
          }}
          withColor={{
            backgroundColor: "",
            accentColor: "",
            hoverBackgroundColor: "",
          }}
          isHidden={false}
          onClick={()=>{}}
        />`,
    },
  },
};
