import React from "react";
import Splash from "../components/Splash/Splash.react";

export default {
  title: "Design System/Splash/Splash",
  component: Splash,
  argTypes: {
    data: {
      defaultValue: {
        splash: "",
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
          slideHeaderBackgroundColor: "",
          textBlockBackgroundColor: "",
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
const Template = (args) => <Splash {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: {
    splash: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl, ut aliquet orci. Mauris id sapien felis. Nullam elementum enim tincidunt, facilisis lacus vitae, volutpat ligula. ",
  },
  isPresenter:false,
  asFloated: "none",
  withColor: {
    slideHeaderBackgroundColor: "#ad292980",
    textBlockBackgroundColor: "",
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
      code: `<Splash {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};