import React from "react";
import Splash from "../components/Templates/Splash/Splash.react";

export default {
  title: "Design System/Templates/Splash",
  component: Splash,
  argTypes: {
    data: {
      defaultValue: {
        splash: "",
        backgroundImage: "",
        presenterBackgroundImage: "",
        presenterImage: "",
      },
    },
    isPresenter: {
      table: {
        defaultValue: false,
      },
    },
    slideId: {
      table: {
        defaultValue: 0,
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
  },
  parameters: {
    componentSubtitle: "Displays a Splash component",
    a11y: { disable: true },
    docs: {
      iframeHeight: 500,
    },
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
    splash:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a",
    backgroundImage: "",
    presenterBackgroundImage: "",
    presenterImage: "",
  },
  isPresenter: false,
  slideId: 0,
  asFloated: "none",
  withColor: {
    backgroundColor: "",
    textBlockBackgroundColor: "",
    accentColor: "#ffffff",
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
      code: `<Splash {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Splash With Presenter
// -------------------------------------------------------------
export const SplashWithPresenter = Template.bind({});
SplashWithPresenter.args = {
  ...Default.args,
  isPresenter: true,
};
SplashWithPresenter.parameters = {
  docs: {
    source: {
      code: `<Splash {...${JSON.stringify(
        SplashWithPresenter.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Splash
// -------------------------------------------------------------
export const ColoredSplash = Template.bind({});
ColoredSplash.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textBlockBackgroundColor: "",
    accentColor: "#ffffff",
    textColor: "#ffffff",
  },
};
ColoredSplash.parameters = {
  docs: {
    source: {
      code: `<Splash {...${JSON.stringify(ColoredSplash.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated Splash
// -------------------------------------------------------------
export const AnimatedSplash = Template.bind({});
AnimatedSplash.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedSplash.parameters = {
  docs: {
    source: {
      code: `<Splash {...${JSON.stringify(AnimatedSplash.args, null, 2)}}/>`,
    },
  },
};
