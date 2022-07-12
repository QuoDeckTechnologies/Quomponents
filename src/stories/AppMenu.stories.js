import React from "react";
import AppMenu from "../components/AppMenu/AppMenu/AppMenu.react";

const dictionary = JSON.stringify({
  hi: {
    appMenu: {
      content: "सूची",
    },
  },
});

export default {
  title: "Design System/Appmenu/Appmenu",
  component: AppMenu,
  argTypes: {
    avatar: "",
    isCircular: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
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
      options: ["left", "right", "inline"],
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
    withLabel: {
      table: {
        category: "with-Params",
        defaultValue: {
          content: "",
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
      "Displays a basic Icon,image and label for general-purpose use",
    a11y: { disable: true },
  },
};
//----------------------------------------------------------
// Default
//---------------------------------------------------------
const Template = (args) => <AppMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
  avatar: "",
  isCircular: true,
  asSize: "normal",
  asFloated: "inline",
  withIcon: { icon: "fas fa-ellipsis-v" },
  withColor: {
    backgroundColor: "",
    textColor: "",
  },
  withLabel: {
    content: "Catalog",
  },
  withTranslation: {
    lang: "en",
    tgt: "appMenu",
    dictionary: dictionary,
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
    description: {
      story:
        "Any free fontawesome icon can be used as the Avatar icon definition. This component is combination of the Avatar component on a MenuBlock component, The Avatar icon can be changed with userImage with in withIcon prop , give a link of any profile image and it will replace the icon with it , On the other side which is a Ellipsis icon in menuBlock component which is a part of menu block , this icon can also be change with other , and whole menublock is clickable",
    },
    source: {
      code: `<AppMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
//----------------------------------------------------------
// With UserImage
//---------------------------------------------------------
export const UserImage = Template.bind({});
UserImage.args = {
  ...Default.args,
  avatar: "https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg",
  isCircular: false,
  withLabel: { content: "" },
  withIcon: {
    icon: "",
  },
};
UserImage.parameters = {
  docs: {
    description: {
      story:
        "Any free fontawesome icon can be used as the Avatar icon definition. This component is combination of the Avatar component on a MenuBlock component, The Avatar icon can be changed with userImage with in withIcon prop , here the link if the image is already placed , On the other side which is a Ellipsis icon in menuBlock component which is a part of menu block , this icon can also be change with other , and whole menublock is clickable",
    },
    source: {
      code: `<AppMenu {...${JSON.stringify(UserImage.args, null, 2)}}/>`,
    },
  },
};
//----------------------------------------------------------
// Disabled Avatar Icon
//---------------------------------------------------------
export const DisabledIcon = Template.bind({});
DisabledIcon.args = {
  ...Default.args,
  avatar: "",
  isCircular: false,
  asSize: "normal",
  asFloated: "inline",
  withIcon: { icon: "fas fa-ellipsis-v" },
  withColor: {
    backgroundColor: "",
    textColor: "",
  },
  isDisabled: true,
  isHidden: false,
};
DisabledIcon.parameters = {
  docs: {
    description: {
      story:
        "AppMenu profile icon can change to profile image , Onclick is disabled",
    },
    source: {
      code: `<AppMenu {...${JSON.stringify(DisabledIcon.args, null, 2)}}/>`,
    },
  },
};
//----------------------------------------------------------
// Translated Avatar Icon
//---------------------------------------------------------
export const TranslatedAppMenu = Template.bind({});
TranslatedAppMenu.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "appMenu",
    dictionary: dictionary,
  },
};
TranslatedAppMenu.parameters = {
  docs: {
    description: {
      story:
        "AppMenu profile icon can change to profile image , Onclick is disabled",
    },
    source: {
      code: `<AppMenu {...${JSON.stringify(
        TranslatedAppMenu.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// AllSizes
// -------------------------------------------------------------
const AllSizesTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
      asFloated: "inline",
    }),
  };
  return (
    <div>
      <AppMenu
        {...Object.assign({}, baseObj, {
          asSize: "tiny",
          withIcon: { icon: "fas fa-adjust" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asSize: "small",
          withIcon: { icon: "fas fa-ellipsis-v" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asSize: "normal",
          withIcon: { icon: "fas fa-ellipsis-h" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asSize: "big",
          withIcon: { icon: "fas fa-home" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asSize: "huge",
          withIcon: { icon: "fas fa-igloo" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asSize: "massive",
          withIcon: { icon: "fas fa-bus" },
        })}
      />
    </div>
  );
};
export const AllSizes = AllSizesTemplate.bind({});
AllSizes.parameters = {
  docs: {
    description: {
      story: "6 sizes are supported. Use as per purpose noted here.",
    },
    source: {
      code: `<AppMenu />`,
    },
  },
};