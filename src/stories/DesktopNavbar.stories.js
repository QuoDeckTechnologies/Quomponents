import React from "react";
import DesktopNavbar from "../components/DesktopNavbar/DesktopNavbar.react";

export default {
  title: "Design System/DesktopNavbar",
  component: DesktopNavbar,
  argTypes: {
    links: [],
    user: {},
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
      },
    },
    withIcon: {
      table: {
        category: "with-Params",
        defaultValue: {
          icon: "",
          size: "",
        },
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
    componentSubtitle: "Displays a basic DesktopNavbar for general-purpose use",
    a11y: { disable: true },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <DesktopNavbar {...args} />;
export const Default = Template.bind({});
Default.args = {
  links: [
    {
      icon: "fas fa-home",
      text: "home",
    },
    {
      icon: "fas fa-award",
      text: "my profile",
    },
    {
      icon: "fas fa-chart-pie",
      text: "my reports",
    },
    {
      icon: "fas fa-bell",
      text: "notification",
    },
    {
      icon: "fas fa-question-circle",
      text: "help desk",
    },
  ],
  user: {
    name: "Anita Majithia",
    icon: "https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg",
  },
  asVariant: "primary",
  withIcon: { icon: "fas fa-share", size: "1em" },
};
Default.parameters = {
  docs: {
    source: {
      code: `<DesktopNavbar {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
