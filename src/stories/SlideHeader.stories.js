import React from "react";
import SlideHeader from "../components/SlideHeader/SlideHeader.react";

export default {
  title: "Design System/SlideHeader",
  component: SlideHeader,
  argTypes: {
    content: {
      table: {
        category: "with-Params",
        defaultValue: {
          title: "",
          subTitle: "",
        },
      },
    },
    asPadded: {
      control: "select",
      options: ["fitted", "compact", "normal", "relaxed", "zero","zero"],
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
    asAligned: {
      control: "select",
      options: ["left", "right", "center"],
      table: {
        category: "as-Flags",
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          accentColor: "",
          textColor: "",
          backgroundColor: "",
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
  },
  decorators: [
    (story) => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle:
      "Default SlideHeader for general purpose use",
    a11y: { disable: true },
    docs: { iframeHeight: 400 },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SlideHeader {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    title: "Neque porro quisquam est qui dolorem",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
  },
  asFloated: "inline",
  asPadded: "normal",
  asAligned: "center",
  withColor: {
    accentColor: "#AD2929",
    textColor: "#ffffff",
    backgroundColor: "#ad292980",
  },
  withAnimation: {
    animation: "collapse",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<SlideHeader {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored SlideHeader
// -------------------------------------------------------------
export const ColoredSlideHeader = Template.bind({});
ColoredSlideHeader.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#666666",
    textColor: "#fffff",
    accentColor: "#ffbf00",
  },
};
ColoredSlideHeader.parameters = {
  docs: {
    description: {
      story:
        "Use to override the standard colors of the SliderHeader.",
    },
    source: {
      code: `<ColoredSlideHeader {...${JSON.stringify(
        ColoredSlideHeader.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated SlideHeader
// -------------------------------------------------------------
export const AnimatedSlideHeader = Template.bind({});
AnimatedSlideHeader.args = {
  ...Default.args,
  withAnimation: {
    animation: "slideRight",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedSlideHeader.parameters = {
  docs: {
    description: {
      story:
        "Use to animate the entry of the SlideHeader with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
    },
    source: {
      code: `<AnimatedSlideHeader {...${JSON.stringify(
        AnimatedSlideHeader.args,
        null,
        2
      )}}/>`,
    },
  },
}; 