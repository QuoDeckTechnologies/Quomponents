import React from "react";
import AmplayfierDrawerRect from "../components/AmplayfierDrawerRect/AmplayfierDrawerRect.react";
import LearnerTableRow from "../components/LearnerTableRow/LearnerTableRow.react";

export default {
  title: "Design System/AmplayfierDrawerRect/AmplayfierDrawerRect",
  component: AmplayfierDrawerRect,
  argTypes: {
    content: "AmplayfierDrawerRect",
    isCircular: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
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
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <AmplayfierDrawerRect {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: <div style={{ height: "25em", width: "30em" }}></div>,
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
  isDisabled: false,
  isHidden: false,
  isFluid: false,
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
export const AmplayfierDrawerWithOtherComponent = Template.bind({});
AmplayfierDrawerWithOtherComponent.args = {
  ...Default.args,
  content: (
    <>
      <div style={{ marginBottom: "1em" }}>
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
      </div>
      <div style={{ marginBottom: "1em" }}>
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
      </div>
      <div style={{ marginBottom: "1em" }}>
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
    </>
  ),
  asPadded: "relaxed",
};
AmplayfierDrawerWithOtherComponent.parameters = {
  docs: {
    source: {
      code: `<AmplayfierDrawerRect {...${JSON.stringify(
        AmplayfierDrawerWithOtherComponent.args,
        null,
        2
      )}}/>`,
    },
  },
};
