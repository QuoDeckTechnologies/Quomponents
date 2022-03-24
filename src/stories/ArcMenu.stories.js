import React from "react";
import ArcMenu from "../components/ArcMenu/ArcMenu.react";

import Nugget_Story from "../assets/nuggets/nugget_story.png";
import Nugget_Quiz from "../assets/nuggets/nugget_quiz.png";
import Nugget_Assessment from "../assets/nuggets/nugget_assessment.png";
import Nugget_Game from "../assets/nuggets/nugget_game.png";
import Nugget_Article from "../assets/nuggets/nugget_article.png";
import Nugget_Feedback from "../assets/nuggets/nugget_feedback.png";

export default {
  title: "Design System/ArcMenu/ArcMenu",
  component: ArcMenu,
  argTypes: {
    content: {
      table: {
        defaultValue: {
          menuData: [],
        },
      },
    },
    arcIcon: "",
    type: {
      control: "select",
      options: ["menu", "add", "close"],
    },
    position: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
    },
    asSize: {
      control: "select",
      options: ["tiny", "small", "normal", "big", "huge", "massive"],
      table: {
        category: "as-Flags",
      },
    },
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
          accentColor: "",
          textColor: "",
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
    menuData: [
      { image: Nugget_Story },
      { image: Nugget_Quiz },
      { image: Nugget_Assessment },
      { image: Nugget_Game },
      { image: Nugget_Article },
      { image: Nugget_Feedback },
    ],
  },
  arcIcon: "fas fa-caret-down",
  type: "close",
  position: "top-right",
  asSize: "normal",
  asVariant: "primary",
  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "",
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
// Default Close button
// -------------------------------------------------------------
export const MenuButton = Template.bind({});
MenuButton.args = {
  ...Default.args,
  type: "menu",
  position: "bottom-left",
};
MenuButton.parameters = {
  docs: {
    source: {
      code: `<ArcMenu {...${JSON.stringify(MenuButton.args, null, 2)}}/>`,
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
    backgroundColor: "#f5f5f5",
    accentColor: "",
    textColor: "#fec13c",
  },
};
ColoredArcMenu.parameters = {
  docs: {
    source: {
      code: `<ArcMenu {...${JSON.stringify(ColoredArcMenu.args, null, 2)}}/>`,
    },
  },
};
