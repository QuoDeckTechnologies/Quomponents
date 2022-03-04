import React from "react";
import EnrollmentRuleRow from "../components/EnrollmentRuleRow/EnrollmentRuleRow.react";

export default {
  title: "Design System/EnrollmentRuleRow/EnrollmentRuleRow",
  component: EnrollmentRuleRow,
  argTypes: {
    content: {
      table: {
        defaultValue: {
          enrollmentRule: {
            company: "",
            zone: "",
            branch: "",
            department: "",
            date_of_joining: "",
          },
          allRules: [],
        },
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
      iframeHeight: 600,
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
  content: {
    enrollmentRule: {
      company: "",
      zone: "",
      branch: "",
      department: "",
      date_of_joining: "",
    },
    allRules: [
      { _id: "", criteria: { company: "Quodeck", zone: "East" } },
      { _id: "", criteria: { branch: "Maharashtra", department: "IT" } },
      { _id: "", criteria: { zone: "West", date_of_joining: "2-03-2022" } },
      {
        _id: "",
        criteria: {
          company: "Microsoft",
          zone: "West",
          branch: "California",
          department: "IT",
          date_of_joining: "2-03-2022",
        },
      },
    ],
  },
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
      code: `<EnrollmentRuleRow {...${JSON.stringify(
        Default.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Colored EnrollmentRuleRow
// -------------------------------------------------------------
export const ColoredContentTableRow = Template.bind({});
ColoredContentTableRow.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
    accentColor: "#597387",
  },
};
ColoredContentTableRow.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<EnrollmentRuleRow {...${JSON.stringify(
        ColoredContentTableRow.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Animated EnrollmentRuleRow
// -------------------------------------------------------------
export const AnimatedEnrollmentRuleRow = Template.bind({});
AnimatedEnrollmentRuleRow.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#BBBBBB",
    textColor: "",
    accentColor: "#ffb703",
  },
  withAnimation: {
    animation: "fade",
    duration: 1,
    delay: 0,
  },
};
AnimatedEnrollmentRuleRow.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of EnrollmentRuleRow",
    },
    source: {
      code: `<EnrollmentRuleRow {...${JSON.stringify(
        AnimatedEnrollmentRuleRow.args,
        null,
        2
      )}}/>`,
    },
  },
};
