import React from "react";
import MCQwithFeedback from "../components/MCQwithFeedback/MCQwithFeedback.react";

export default {
  title: "Design System/MCQwithFeedback/MCQwithFeedback",
  component: MCQwithFeedback,
  argTypes: {
    content: {
      defaultValue: {
        image: "",
        title:'',
        subtitle:'',
      },
    },
    isCircular: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
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
          accentColor: "",
          textColor: "",
          hoverBackgroundColor: "",
          hoverTextColor: "",
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
    onClick: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle: "Displays a basic button for general-purpose use",
    a11y: { disable: true },
    // controls: { expanded: true }
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <MCQwithFeedback {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    title:'Lorem ipsum dolor sit amet',
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  },
  isCircular: false,
  asVariant: "primary",
  asSize: "normal",
  asFloated: "none",
  withColor: {
    backgroundColor: "#ad292980",
    accentColor: "#AD2929",
    textColor: "#ffffff",
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
      code: `<MCQwithFeedback {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
