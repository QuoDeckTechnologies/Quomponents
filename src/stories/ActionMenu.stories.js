import React from "react";
import ActionMenu from "../components/ActionMenu/ActionMenu.react";

export default {
  title: "Design System/ActionMenu/ActionMenu",
  component: ActionMenu,
  argTypes: {
    content: [
      {
        title: "label1",
        icon: "",
      },
    ],
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
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle:
      "Displays a ActionMenu with icons & related contents for general-purpose use.",
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
  return <ActionMenu {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      title: "Open Deck",
      icon: "fas fa-book-open",
      func: () => { },
    },
    {
      title: "Edit Deck",
      icon: "fas fa-edit",
      func: () => { },
    },
    {
      title: "Move Deck Up",
      icon: "fas fa-chevron-up",
      func: () => { },
    },
    {
      title: "Move Deck Down",
      icon: "fas fa-chevron-down",
      func: () => { },
    },
    {
      title: "Move to Topic",
      icon: "fas fa-retweet",
      func: () => { },
    },
    {
      title: "Unpublish Deck",
      icon: "fas fa-eye-slash",
      func: () => { },
    },
    {
      title: "Delete Deck",
      icon: "fas fa-trash-alt",
      func: () => { },
    },
  ],
  withColor: {
    backgroundColor: "#ffffff",
    textColor: "",
    accentColor: "",
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
      code: `<ActionMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Colored ActionMenu
// -------------------------------------------------------------
export const ColoredActionMenu = Template.bind({});
ColoredActionMenu.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#D3D3D3",
    textColor: "#C53816",
    accentColor: "#F2A52D",
  },
};
ColoredActionMenu.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the Icon & Contents.",
    },
    source: {
      code: `<ActionMenu withColor={{backgroundColor: "lightblue", textColor: "#666666",accentColor: "#666666"}}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Animated ActionMenu
// -------------------------------------------------------------
export const AnimatedActionMenu = Template.bind({});
AnimatedActionMenu.args = {
  ...Default.args,
  withAnimation: {
    animation: "collapse",
    duration: 1,
    delay: 0,
  },
};
AnimatedActionMenu.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of ActionMenu",
    },
    source: {
      code: `<ActionMenu {...${JSON.stringify(
        AnimatedActionMenu.args,
        null,
        2
      )}}/>`,
    },
  },
};
