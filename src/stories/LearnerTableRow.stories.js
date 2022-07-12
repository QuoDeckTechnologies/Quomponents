import React from "react";
import LearnerTableRow from "../components/LearnerTableRow/LearnerTableRow.react";

export default {
  title: "Design System/LearnerTableRow/LearnerTableRow",
  component: LearnerTableRow,
  argTypes: {
    content: [],
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
      },
    },
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
    onUnenrollLearner: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onSendMessage: {
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
    componentSubtitle: "Displays a LearnerTableRow.",
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
  return <LearnerTableRow {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      _id: "first",
      username: "sysadmin",
      first_name: "System",
      last_name: "Administrator",
    },
    {
      _id: "second",
      username: "learner",
      first_name: "New",
      last_name: "Learner",
    },
    {
      _id: "third",
      username: "creator",
      first_name: "New",
      last_name: "Creator",
    },
  ],
  asVariant: "primary",
  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "",
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<LearnerTableRow {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Colored LearnerTableRow
// -------------------------------------------------------------
export const ColoredLearnerTableRow = Template.bind({});
ColoredLearnerTableRow.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#FFC300",
    textColor: "#524A4E",
    accentColor: "#506E86",
  },
};
ColoredLearnerTableRow.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<ColoredLearnerTableRow {...${JSON.stringify(
        ColoredLearnerTableRow.args,
        null,
        2
      )}}/>`,
    },
  },
};
