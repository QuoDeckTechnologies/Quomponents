import React from "react";
import Segment from "../components/Segment/Segment.react";

export default {
  title: "Design System/Segment",
  component: Segment,
  argTypes: {
    isCircular: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    asPadded: {
      control: "select",
      options: ["fitted", "compact", "normal", "relaxed","zero"],
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
          width: "100%",
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a basic Segment for general-purpose use",
    a11y: { disable: true },
    docs: {
      iframeHeight: 500,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => (
  <Segment {...args}>
    <div style={{ height: "40em", width: "30em" }}></div>
  </Segment>
);
export const Default = Template.bind({});
Default.args = {
  isCircular: false,
  asFloated: "inline",
  asPadded: "normal",
  withColor: {
    backgroundColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<Segment {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Segment with other component
// -------------------------------------------------------------
const SegmentWithChildrenTemplate = (args) => {
  return (
    <Segment {...args}>
      <div style={{ padding: "1em" }}>
        <i className="fas fa-users" style={{ fontSize: "1.8em" }}></i>
        <p style={{ margin: 0, fontSize: "1.1em" }}>20,539</p>
        <p style={{ margin: 0, fontSize: "1.1em" }}>Players</p>
      </div>
    </Segment>
  );
};
export const SegmentWithChildren = SegmentWithChildrenTemplate.bind({});
SegmentWithChildren.args = {
  ...Default.args,
  asPadded: "normal",
  isCircular: true,
};
SegmentWithChildren.parameters = {
  docs: {
    description: {
      story: "Displays Segment wrapping other components",
    },
    source: {
      code: `<Segment {...${JSON.stringify(
        SegmentWithChildren.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Floated Segment
// -------------------------------------------------------------
export const FloatedSegment = SegmentWithChildrenTemplate.bind({});
FloatedSegment.args = {
  ...SegmentWithChildren.args,
  asFloated: "none",
};
FloatedSegment.parameters = {
  docs: {
    description: {
      story: "Use to float a component left, right, inline or none.",
    },
    source: {
      code: `<Segment {...${JSON.stringify(FloatedSegment.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Segment
// -------------------------------------------------------------
export const ColoredSegment = Template.bind({});
ColoredSegment.args = {
  ...Default.args,
  withColor: { backgroundColor: "#f8af09" },
};
ColoredSegment.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<Segment {...${JSON.stringify(ColoredSegment.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated Segment
// -------------------------------------------------------------
export const AnimatedSegment = Template.bind({});
AnimatedSegment.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedSegment.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of Segment component",
    },
    source: {
      code: `<Segment {...${JSON.stringify(AnimatedSegment.args, null, 2)}}/>`,
    },
  },
};