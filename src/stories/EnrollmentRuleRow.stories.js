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
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
      },
    },
    asSize: {
      control: "select",
      options: ["tiny", "small", "normal", "big", "huge", "massive"],
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
    withTranslation: {
      table: {
        category: "with-Params",
        defaultValue: {
          lang: "",
          tgt: "",
          dictionary: "",
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
  asVariant: "primary",
  asSize: "normal",
  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "#b60d17",
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
      code: `<EarnCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
