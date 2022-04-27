import React from "react";
import BackgroundImage from "../components/Templates/BackgroundImage/BackgroundImage.react";

export default {
  BackgroundImage: "Design System/Templates/BackgroundImage",
  component: BackgroundImage,
  argTypes: {
    data: {
      defaultValue: {
        title: "",
        image: "",
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
  },
  parameters: {
    componentSubtitle: "Displays a Title component",
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
const Template = (args) => <BackgroundImage {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    image:
      "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
  },
  isPresenter: false,
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
      code: `<BackgroundImage {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// BackgroundImage With Presenter
// -------------------------------------------------------------
export const BackgroundImageWithPresenter = Template.bind({});
BackgroundImageWithPresenter.args = {
  ...Default.args,
  isPresenter: true,
};
BackgroundImageWithPresenter.parameters = {
  docs: {
    source: {
      code: `<BackgroundImage {...${JSON.stringify(BackgroundImageWithPresenter.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored BackgroundImage 
// -------------------------------------------------------------
export const ColoredBackgroundImage = Template.bind({});
ColoredBackgroundImage.args = {
  ...Default.args,
  isPresenter: true,
  withColor: {
    slideHeaderBackgroundColor: "#8c9ea3",
    textBlockBackgroundColor: "#ffba08",
    accentColor: "#ffba08",
    textColor: "#ffffff",
  },
};
ColoredBackgroundImage.parameters = {
  docs: {
    source: {
      code: `<BackgroundImage {...${JSON.stringify(
        ColoredBackgroundImage.args,
        null,
        2
      )}}/>`,
    },
  },
};