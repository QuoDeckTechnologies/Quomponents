import React from "react";
import ArcMenu from "../components/ArcMenu/ArcMenu.react";

export default {
  title: "Design System/ArcMenu/ArcMenu",
  component: ArcMenu,
  argTypes: {
    content: {
      table: {
        defaultValue: {
          icons: [],
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
    asFloated: {
      control: "select",
      options: ["left", "right"],
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
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a ArcMenu component",
    a11y: { disable: true },
    docs: {
      iframeHeight: 300,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
  return <ArcMenu {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    icons: ["fas fa-desktop", "fas fa-user", "fas fa-home"],
  },
  asVariant: "primary",
  asSize: "normal",
  asFloated: "left",
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
      code: `<ArcMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored ArchMenu
// -------------------------------------------------------------
export const ColoredArcMenu = Template.bind({});
ColoredArcMenu.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#ffcc00",
    accentColor: "",
    textColor: "#808080",
  },
};
ColoredArcMenu.parameters = {
  docs: {
    source: {
      code: `<ArcMenu {...${JSON.stringify(ColoredArcMenu.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// ArcMenu Button
// -------------------------------------------------------------
export const ArcMenuButton = Template.bind({});
ArcMenuButton.args = {
  ...Default.args,
  content: {
    icons: ["fas fa-desktop"],
  },
  asVariant: "secondary",
};
ArcMenuButton.parameters = {
  docs: {
    source: {
      code: `<ArcMenu {...${JSON.stringify(ArcMenuButton.args, null, 2)}}/>`,
    },
  },
};
