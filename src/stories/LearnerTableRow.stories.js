import React from "react";
import LearnerTableRow from "../components/LearnerTableRow/LearnerTableRow.react";

export default {
  title: "Design System/LearnerTableRow/LearnerTableRow",
  component: LearnerTableRow,
  argTypes: {
    content: [],
    asPadded: {
      control: "select",
      options: ["fitted", "compact", "normal", "relaxed"],
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
      _id: "",
      username: "sysadmin",
      first_name: "System",
      last_name: "Administrator",
    },
  ],
  asPadded: "normal",
  withColor: {
    backgroundColor: "",
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
      code: `<LearnerTableRow {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// LearnerTableRow List
// -------------------------------------------------------------
const ListTemplate = (args) => {
  return (
    <div className="qui-content-table-row-list">
      <LearnerTableRow
        {...args}
        content={[
          {
            _id: "",
            username: "sysadmin",
            first_name: "System",
            last_name: "Administrator",
          },
        ]}
      />
      <LearnerTableRow
        {...args}
        content={[
          {
            _id: "",
            username: "john_doe",
            first_name: "John",
            last_name: "Doe",
          },
        ]}
      />
      <LearnerTableRow
        {...args}
        content={[
          {
            _id: "",
            username: "superadmin",
            first_name: "Super",
            last_name: "Administrator",
          },
        ]}
      />
    </div>
  );
};
export const LearnerTableRowList = ListTemplate.bind({});
LearnerTableRowList.parameters = {
  docs: {
    description: {
      story: "Shows a list of LearnerTableRow Component",
    },
    source: {
      code: `<LearnerTableRowList {...${JSON.stringify(
        LearnerTableRowList.args,
        null,
        2
      )}}/>`,
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
