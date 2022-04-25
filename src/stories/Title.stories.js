import React from "react";
import Title from "../components/Title/Title.react";

export default {
  title: "Design System/Title/Title",
  component: Title,
  argTypes: {
    data: {
      defaultValue: {
        title: "",
        subtitle: "",
        image: "",
        icon: "",
      },
    },
    isPresenter: {
      table: {
        defaultValue: false,
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
const Template = (args) => <Title {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    image:
      "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    icon: "fas fa-book-open",
  },
  isPresenter:false,
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
      code: `<Title {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
