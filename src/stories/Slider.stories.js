import React from "react";
import Slider from "../components/Slider/Slider.react";

export default {
  title: "Design System/Slider/Slider",
  component: Slider,
  argTypes: {
    initialValue: 10,
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
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
          paddingTop: "2em",
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
  asVariant: "warning",
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
      code: `<Slider {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// MultipleSlider
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  return (
    <>
      <Slider
        initialValue={50}
        asVariant="primary"
        onClick={(value) => args.onClick(value)}
      />
      <Slider
        initialValue={30}
        asVariant="secondary"
        onClick={(value) => args.onClick(value)}
      />
      <Slider
        initialValue={10}
        asVariant="warning"
        onClick={(value) => args.onClick(value)}
      />
    </>
  );
};
export const MultipleSlider = MultipleTemplate.bind({});
MultipleSlider.parameters = {
  docs: {
    source: {
      code: `<Slider {...${JSON.stringify(MultipleSlider.args, null, 2)}}/>`,
    },
  },
};
