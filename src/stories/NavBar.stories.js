import React from "react";
import NavBar from "../components/NavBar/NavBar/NavBar.react";
import ShortLogo from "../assets/amplayfier-logo-short.png";
import FullLogo from "../assets/FullLogo.png";

const dictionary = JSON.stringify({
  hi: {
    navBar: {
      title: "कमाये",
    },
  },
});

export default {
  title: "Design System/NavBar/NavBar",
  component: NavBar,
  argTypes: {
    title: "",
    shortLogo: "",
    fullLogo: "",
    iconLink: {},
    isBackButton: {
      table: {
        defaultValue: true,
      },
    },
    isSearch: {
      table: {
        defaultValue: false,
      },
    },
    isMenuBar: {
      table: {
        defaultValue: false,
      },
    },
    isCircular: {
      table: {
        defaultValue: true,
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
          menuBackgroundColor: "",
          backIconColor: "",
          searchIconColor: "",
          textColor: "",
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
    onSearch: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onMenuClick: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onAppMenuClick: {
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
    componentSubtitle: "Displays NavBar with AppMenu for general-purpose use",
    a11y: { disable: true },
    docs: { iframeHeight: 150 },
  },
};

//----------------------------------------------------------
// Default
//----------------------------------------------------------
const Template = (args) => <NavBar {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: "Earn",
  shortLogo: ShortLogo,
  fullLogo: FullLogo,
  iconLink: {
    icon: "fas fa-angle-left",
    link: "https://www.google.com/",
  },
  isCircular: false,
  isSearch: true,
  isMenuBar: true,
  isBackButton: true,
  asVariant: "primary",
  withIcon: {
    icon: "fas fa-user",
  },
  withColor: {
    menuBackgroundColor: "",
    backIconColor: "",
    searchIconColor: "",
    textColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "navBar",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<NavBar {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
//----------------------------------------------------------
// UserNavBar
//----------------------------------------------------------
export const UserNavbar = Template.bind({});
UserNavbar.args = {
  ...Default.args,
  title: "Earn",
  shortLogo: ShortLogo,
  fullLogo: FullLogo,
  iconLink: {
    icon: "fas fa-angle-left",
    link: "https://www.google.com/",
  },
  withIcon: {
    icon: "https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg",
  },
  isCircular: false,
};
UserNavbar.parameters = {
  docs: {
    description: {
      story: "Any image can be used as the NavBar logo image.",
    },
    source: {
      code: `<NavBar {...${JSON.stringify(UserNavbar.args, null, 2)}}/>`,
    },
  },
};
//----------------------------------------------------------
// Amplayfier Header
//----------------------------------------------------------
export const AmplayfierHeader = Template.bind({});
AmplayfierHeader.args = {
  ...Default.args,
  shortLogo: ShortLogo,
  fullLogo: FullLogo,
  iconLink: {
    icon: "fas fa-angle-left",
    link: "https://www.google.com/",
  },
  isBackButton: true,
  isSearch: false,
  isMenuBar: false,
  isDisabled: false,
  isHidden: false,
};
AmplayfierHeader.parameters = {
  docs: {
    description: {
      story: "Use this to display Amplayfier Header component.",
    },
    source: {
      code: `<NavBar {...${JSON.stringify(AmplayfierHeader.args, null, 2)}}/>`,
    },
  },
};
//----------------------------------------------------------
// Amplayfier Header without back button
//----------------------------------------------------------
export const AmplayfierHeaderWithoutBackButton = Template.bind({});
AmplayfierHeaderWithoutBackButton.args = {
  ...AmplayfierHeader.args,
  isBackButton: false,
};
AmplayfierHeaderWithoutBackButton.parameters = {
  docs: {
    description: {
      story:
        "Use this to display Amplayfier Header without back button component.",
    },
    source: {
      code: `<NavBar {...${JSON.stringify(
        AmplayfierHeaderWithoutBackButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
//----------------------------------------------------------
// Colored NavBar
//----------------------------------------------------------
export const ColoredNavBar = Template.bind({});
ColoredNavBar.args = {
  ...Default.args,
  withColor: {
    menuBackgroundColor: "#C1DC9E",
    backIconColor: "#FFBF00",
    searchIconColor: "#FFBF00",
    textColor: "#AAAAAA",
  },
};
ColoredNavBar.parameters = {
  docs: {
    description: {
      story:
        "Use this to display Amplayfier Header without back and menu button component.",
    },
    source: {
      code: `<NavBar {...${JSON.stringify(ColoredNavBar.args, null, 2)}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Animated Navbar
// -------------------------------------------------------------
export const AnimatedNavbar = Template.bind({});
AnimatedNavbar.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 1,
    delay: 0,
  },
};
AnimatedNavbar.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of Navbar",
    },
    source: {
      code: `<Navbar {...${JSON.stringify(AnimatedNavbar.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated NavBar
// -------------------------------------------------------------
export const TranslatedNavBar = Template.bind({});
TranslatedNavBar.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "navBar",
    dictionary: dictionary,
  },
};
TranslatedNavBar.parameters = {
  docs: {
    description: {
      story:
        "We can translate the language of NavBar if dictionary is provided",
    },
    source: {
      code: `<NavBar {...${JSON.stringify(TranslatedNavBar.args, {
        navbar: { title: "कमाये" },
      })}}/>`,
    },
  },
};
