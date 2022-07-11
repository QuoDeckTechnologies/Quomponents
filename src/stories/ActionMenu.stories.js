import React from "react";
import ActionMenu from "../components/ActionMenu/ActionMenu.react";
const dictionary = JSON.stringify({
  hi: {
    actionMenu: {
      content: [
        { title: "डेक खोलो" },
        { title: "डेक संपादित करें" },
        { title: "डेक ऊपर ले जाएँ" },
        { title: "डेक नीचे ले जाएँ" },
        { title: "विषय पर जाएं" },
        { title: "डेक को अप्रकाशित करें" },
        { title: "डेक हटाएं" },
      ]
    },
  },
});
export default {
  title: "Design System/ActionMenu/ActionMenu",
  component: ActionMenu,
  argTypes: {
    content: [],

    asPadded: {
      control: "select",
      options: ["fitted", "compact", "normal", "relaxed"],
      table: {
        category: "as-Flags",
      },
    },
    asAligned: {
      control: "select",
      options: ["left", "right", "center"],
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
    withTranslation: {
      table: {
        category: "with-Params",
        defaultValue: {
          lang: "",
          tgt: "",
          dictionary: "",
        },
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
      popover: "Open Deck...",
      onClick: () => { },
    },
    {
      title: "Edit Deck",
      icon: "fas fa-edit",
      popover: "Edit Deck...",
      onClick: () => { },
    },
    {
      title: "Move Deck Up",
      icon: "fas fa-chevron-up",
      popover: "Move Deck Up...",
      onClick: () => { },
    },
    {
      title: "Move Deck Down",
      icon: "fas fa-chevron-down",
      popover: "Move Deck Down...",
      onClick: () => { },
    },
    {
      title: "Move to Topic",
      icon: "fas fa-retweet",
      popover: "Move to Topic...",
      onClick: () => { },
    },
    {
      title: "Unpublish Deck",
      icon: "fas fa-eye-slash",
      popover: "Unpublish Deck...",
      onClick: () => { },
    },
    {
      title: "Delete Deck",
      icon: "fas fa-trash-alt",
      popover: "Delete Deck...",
      onClick: () => { },
    },
  ],
  asPadded: "normal",
  asAligned: "left",
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
  withTranslation: {
    lang: "en",
    tgt: "actionMenu",
    dictionary: dictionary,
  },
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
      code: `<ActionMenu {...${JSON.stringify(
        ColoredActionMenu.args,
        null,
        2
      )}}/>`,
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

// -------------------------------------------------------------
// TranslatedActionMenu
// -------------------------------------------------------------
export const TranslatedActionMenu = Template.bind({});
TranslatedActionMenu.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "actionMenu",
    dictionary: dictionary,
  },
};
TranslatedActionMenu.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in ActionMenu."
    },
    source: {
      code: `<TranslatedActionMenu {...${JSON.stringify(
        TranslatedActionMenu.args,
        null,
        2
      )}}/>`,
    },
  },
};
