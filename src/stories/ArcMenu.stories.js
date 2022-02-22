import React from "react";
import ArcMenu from "../components/ArcMenu/ArcMenu.react";

const dictionary = JSON.stringify({
  hi: {
    arcmenu: {
      content: {
        menuData: [
          { name: "घर", icon: "fa fa-home" },
          { name: "खाता", icon: "fas fa-user" },
          { name: "समायोजन", icon: "fa fa-cogs" },
          { name: "संदेश", icon: "fa fa-comments" },
          { name: "कॉन्फ़िगर", icon: "fa fa-file" },
          { name: "लॉग आउट", icon: "fas fa-desktop" },
        ],
      },
    },
  },
});
export default {
  title: "Design System/ArcMenu/ArcMenu",
  component: ArcMenu,
  argTypes: {
    content: {
      table: {
        defaultValue: {
          arcIcon: "",
          menuData: [],
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
    arcIcon: "fas fa-user",
    menuData: [
      { name: "Home", icon: "fa fa-home" },
      { name: "Account", icon: "fas fa-user" },
      { name: "Settings", icon: "fa fa-cogs" },
      { name: "Message", icon: "fa fa-comments" },
      { name: "Configure", icon: "fa fa-file" },
      { name: "Logout", icon: "fas fa-desktop" },
    ],
  },
  asVariant: "primary",
  asSize: "normal",
  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "",
  },
  withAnimation: {
    animation: "slideUp",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "arcmenu",
    dictionary: dictionary,
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
// Translated Arc menu
// -------------------------------------------------------------
export const TranslatedArcMenu = Template.bind({});
TranslatedArcMenu.args = {
  ...Default.args,
  asVariant: "secondary",
  withTranslation: {
    lang: "hi",
    tgt: "arcmenu",
    dictionary: dictionary,
  },
};
TranslatedArcMenu.parameters = {
  docs: {
    description: {
      story: "Use to change the language that the text appears in.",
    },
    source: {
      code: `<TranslatedArcMenu {...${JSON.stringify(
        TranslatedArcMenu.args,
        null,
        2
      )}}/>`,
    },
  },
};
