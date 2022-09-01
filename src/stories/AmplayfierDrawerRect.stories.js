import React from "react";
import AmplayfierDrawerRect from "../components/AmplayfierDrawerRect/AmplayfierDrawerRect.react";
import LearnerTableRow from "../components/LearnerTableRow/LearnerTableRow.react";

export default {
  title: "Design System/AmplayfierDrawerRect",
  component: AmplayfierDrawerRect,
  argTypes: {
    isCircular: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
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
    componentSubtitle:
      "Displays a basic AmplayfierDrawerRect for general-purpose use",
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
  <AmplayfierDrawerRect {...args}>
    <div style={{ height: "25em", width: "30em" }}></div>
  </AmplayfierDrawerRect>
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
      code: `<AmplayfierDrawerRect {...${JSON.stringify(
        Default.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// AmplayfierDrawerRect with other component
// -------------------------------------------------------------
const AmplayfierDrawerWithOtherComponentTemplate = (args) => (
  <AmplayfierDrawerRect {...args}>
    <div>
      <LearnerTableRow
        content={[
          {
            _id: "",
            username: "user one",
            first_name: "System",
            last_name: "Administrator",
          },
        ]}
        onUnenrollLearner={() => {}}
        onSendMessage={() => {}}
      />
      <LearnerTableRow
        content={[
          {
            _id: "",
            username: "user two",
            first_name: "",
            last_name: "Manager",
          },
        ]}
        onUnenrollLearner={() => {}}
        onSendMessage={() => {}}
      />
      <LearnerTableRow
        content={[
          {
            _id: "",
            username: "user three",
            first_name: "",
            last_name: "Learner",
          },
        ]}
        onUnenrollLearner={() => {}}
        onSendMessage={() => {}}
      />
    </div>
  </AmplayfierDrawerRect>
);
export const AmplayfierDrawerWithOtherComponent = AmplayfierDrawerWithOtherComponentTemplate.bind(
  {}
);
AmplayfierDrawerWithOtherComponent.args = {
  ...Default.args,
  asPadded: "relaxed",
  isCircular: true,
};
AmplayfierDrawerWithOtherComponent.parameters = {
  docs: {
    description: {
      story: "Displays AmplayfierDrawerRect wrapping other component",
    },
    source: {
      code: `<AmplayfierDrawerRect {...${JSON.stringify(
        AmplayfierDrawerWithOtherComponent.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Floated AmplayfierDrawerRect
// -------------------------------------------------------------
export const FloatedAmplayfierDrawer = Template.bind({});
FloatedAmplayfierDrawer.args = {
  ...AmplayfierDrawerWithOtherComponent.args,
  asFloated: "none",
};
FloatedAmplayfierDrawer.parameters = {
  docs: {
    description: {
      story: "Use to float AmplayfierDrawerRect left, right, inline or none",
    },
    source: {
      code: `<AmplayfierDrawerRect {...${JSON.stringify(
        FloatedAmplayfierDrawer.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored AmplayfierDrawerRect
// -------------------------------------------------------------
export const ColoredAmplayfierDrawer = Template.bind({});
ColoredAmplayfierDrawer.args = {
  ...AmplayfierDrawerWithOtherComponent.args,
  withColor: { backgroundColor: "#f8af09" },
};
ColoredAmplayfierDrawer.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<AmplayfierDrawerRect {...${JSON.stringify(
        ColoredAmplayfierDrawer.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated AmplayfierDrawerRect
// -------------------------------------------------------------
export const AnimatedAmplayfierDrawer = Template.bind({});
AnimatedAmplayfierDrawer.args = {
  ...AmplayfierDrawerWithOtherComponent.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedAmplayfierDrawer.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of AmplayfierDateBlock",
    },
    source: {
      code: `<AmplayfierDrawerRect {...${JSON.stringify(
        AnimatedAmplayfierDrawer.args,
        null,
        2
      )}}/>`,
    },
  },
};
