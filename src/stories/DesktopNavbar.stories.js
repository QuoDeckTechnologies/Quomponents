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
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          textColor: "",
          accentColor: "",
          hoverBackgroundColor: "",
          hoverTextColor: "",
        },
      },
    },
    withIcon: {
      table: {
        category: "with-Params",
        defaultValue: {
          icon: "",
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
  withColor: {
    backgroundColor: "#000000",
    textColor: "#eee",
    accentColor: "#666666",
    hoverBackgroundColor: "#86BC25",
    hoverTextColor: "#eee",
  },
  withIcon: {
    icon: "https://s3-alpha-sig.figma.com/img/62a7/fe58/4eecae9f288351910a0eb692d867ee13?Expires=1659916800&Signature=AlWDFcksp3SrNfu0e9xxYSVnvJDtrx0ckNiajI2LAfAuD8Wshhp8KhQwgCx1nyZjuagwO2wW6r8uKC4O6QBeCw1OvYF6L42cuCSZaFqoA-Io74RDywQrgRxCrR3SXRSgamPEhGvwZnlSco~kYXn4DnIhEbtmErawR21H~hFoxTOpTaoVmFw-29dz2SPxj-L1sKZM6kXj1vozhHOzHq6GM5IQLysBP9RJu6jjG4TmVuHQRx9Uy-i9j8he0q00Uvp1HV5-RZLY05dGNHxrQIdVq8UuB3U9P5kStx9dbC286AFVNVZfxky6pgP5ITb~Z~LRa28KqfGBn8ovGOYukrVVQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<DesktopNavbar {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const ColoredDesktopNavbar = Template.bind({});
ColoredDesktopNavbar.args = {
  ...Default.args,
  user: {
    name: "Anita Majithia",
    icon: "fas fa-user",
  },
  asVariant: "secondary",
  withColor: {
    backgroundColor: "#222A35",
    textColor: "#86BC25",
    accentColor: "#eee",
    hoverBackgroundColor: "",
    hoverTextColor: "#eee",
  },
};
ColoredDesktopNavbar.parameters = {
  docs: {
    source: {
      code: `<DesktopNavbar {...${JSON.stringify(
        ColoredDesktopNavbar.args,
        null,
        2
      )}}/>`,
    },
  },
};
