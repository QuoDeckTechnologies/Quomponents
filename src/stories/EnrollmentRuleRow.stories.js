import React from "react";
import EnrollmentRuleRow from "../components/EnrollmentRuleRow/EnrollmentRuleRow.react";

export default {
  title: "Design System/EnrollmentRuleRow/EnrollmentRuleRow",
  component: EnrollmentRuleRow,
  argTypes: {
    criteria: {},
    onRunRule: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onRemoveRule: {
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
    componentSubtitle: "Displays a EnrollmentRuleRow.",
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
  return <EnrollmentRuleRow {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  criteria: {
    company: "Microsoft",
    zone: "West",
    branch: "California",
    department: "IT",
    date_of_joining: "2-03-2022",
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<EnrollmentRuleRow {...${JSON.stringify(
        Default.args,
        null,
        2
      )}}/>`,
    },
  },
};
