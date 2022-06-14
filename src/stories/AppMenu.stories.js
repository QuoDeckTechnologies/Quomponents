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
          userImage: "",
          position: "left",
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
  asVariant: "primary",
  asSize: "normal",
  asFloated: "inline",
  withIcon: { icon: "fas fa-user" },
  withColor: {
    backgroundColor: "",
    textColor: "",
  },
  withLabel: {
    content: "Catalog",
    textColor: "#000000",
  },
  withTranslation: {
    lang: "en",
    tgt: "appMenu",
    dictionary: dictionary,
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
  asVariant: "warning",
  asSize: "normal",
  asFloated: "inline",
  withIcon: {
    icon:
      "https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg",
  },
  withColor: {
    backgroundColor: "",
    textColor: "",
  },
  isDisabled: false,
  isHidden: false,
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
  asVariant: "warning",
  asSize: "normal",
  asFloated: "inline",
  withIcon: { icon: "fas fa-user" },
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
// Disabled Avatar Icon
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
          asVariant: "secondary",
          asSize: "tiny",
          withIcon: { icon: "fas fa-adjust" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "small",
          withIcon: { icon: "fas fa-ellipsis-v" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "normal",
          withIcon: { icon: "fas fa-ellipsis-h" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "big",
          withIcon: { icon: "fas fa-home" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "huge",
          withIcon: { icon: "fas fa-igloo" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
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
      code: `<AppMenu asVariant="secondary"/>`,
    },
  },
};
// -------------------------------------------------------------
// AllSizesProfileIcon
// -------------------------------------------------------------
const AllSizesProfileTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
      asFloated: "inline",
    }),
  };
  return (
    <div>
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "tiny",
          withIcon: { icon: "fas fa-adjust" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "small",
          withIcon: { icon: "fas fa-ellipsis-v" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "normal",
          withIcon: { icon: "fas fa-ellipsis-h" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "big",
          withIcon: { icon: "fas fa-home" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "huge",
          withIcon: { icon: "fas fa-igloo" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "massive",
          withIcon: { icon: "fas fa-bus" },
        })}
      />
    </div>
  );
};
export const AllSizesWithProfileIcon = AllSizesProfileTemplate.bind({});
AllSizesWithProfileIcon.parameters = {
  docs: {
    description: {
      story:
        "6 sizes are supported with the profile image. Use as per purpose noted here.",
    },
    source: {
      code: `<AppMenu asVariant="secondary"/>`,
    },
  },
};
// -------------------------------------------------------------
// AllVariants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
      asFloated: "inline",
    }),
  };
  return (
    <div>
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "primary",
          asSize: "normal",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "normal",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "success",
          asSize: "normal",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "warning",
          asSize: "normal",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <AppMenu
        {...Object.assign({}, baseObj, {
          asVariant: "error",
          asSize: "normal",
          withIcon: { icon: "fas fa-user" },
        })}
      />
    </div>
  );
};
export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story: "5 variants are supported. Use as per purpose noted here.",
    },
    source: {
      code: `<Avatar asVariant="primary"/>`,
    },
  },
};
