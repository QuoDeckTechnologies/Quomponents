import React from "react";
import Avatar from "../components/AppMenu/Avatar/Avatar.react";

export default {
  title: "Design System/Appmenu/Avatar",
  component: Avatar,
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
      "Displays a basic Icon for general-purpose use or change it for user image by giving a link of image in withIcon prop.",
    a11y: { disable: true },
  },
};

const Template = (args) => <Avatar {...args} />;
//----------------------------------------------------------
// Default
//---------------------------------------------------------
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
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    description: {
      story:
        "Any free fontawesome icon can be used as the Avatar icon definition. we can change the icon to profile image by adding a link to userImgae in withIcon prop.",
    },
    source: {
      code: `<Avatar {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

//----------------------------------------------------------
// Profile icon
//---------------------------------------------------------
export const ProfileIcon = Template.bind({});
ProfileIcon.args = {
  asVariant: "warning",
  asSize: "normal",
  asFloated: "inline",
  withIcon: {
    icon: "https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg",
  },
  withColor: {
    backgroundColor: "",
    textColor: "",
  },
  isDisabled: false,
  isHidden: false,
};
ProfileIcon.parameters = {
  docs: {
    description: {
      story: "Profile default icon can change to profile image",
    },
    source: {
      code: `<Avatar {...${JSON.stringify(ProfileIcon.args, null, 2)}}/>`,
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
        "Profile default icon can change to profile image , onClick is disabled",
    },
    source: {
      code: `<Avatar {...${JSON.stringify(DisabledIcon.args, null, 2)}}/>`,
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
      <Avatar
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "tiny",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <Avatar
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "small",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <Avatar
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "normal",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <Avatar
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "big",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <Avatar
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "huge",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <Avatar
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "massive",
          withIcon: { icon: "fas fa-user" },
        })}
      />
    </div>
  );
};

export const AllSizes = AllSizesTemplate.bind({});
AllSizes.parameters = {
  docs: {
    description: {
      story:
        "6 sizes are supported with the different different fontawesome icons. Use as per purpose noted here.",
    },
    source: {
      code: `
      const baseObj = {
        ...Object.assign({}, Default.args, args, {
          asFloated: "inline",
        }),
      };
      <div>
        <Avatar
          {...Object.assign({}, baseObj, {
            asVariant: "secondary",
            asSize: "tiny",
            withIcon: { icon: "fas fa-user" },
          })}
        />
        <Avatar
          {...Object.assign({}, baseObj, {
            asVariant: "secondary",
            asSize: "small",
            withIcon: { icon: "fas fa-user" },
          })}
        />
        <Avatar
          {...Object.assign({}, baseObj, {
            asVariant: "secondary",
            asSize: "normal",
            withIcon: { icon: "fas fa-user" },
          })}
        />
        <Avatar
          {...Object.assign({}, baseObj, {
            asVariant: "secondary",
            asSize: "big",
            withIcon: { icon: "fas fa-user" },
          })}
        />
        <Avatar
          {...Object.assign({}, baseObj, {
            asVariant: "secondary",
            asSize: "huge",
            withIcon: { icon: "fas fa-user" },
          })}
        />
        <Avatar
          {...Object.assign({}, baseObj, {
            asVariant: "secondary",
            asSize: "massive",
            withIcon: { icon: "fas fa-user" },
          })}
        />
      </div>`,
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
      <Avatar
        {...Object.assign({}, baseObj, {
          asVariant: "primary",
          asSize: "normal",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <Avatar
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "normal",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <Avatar
        {...Object.assign({}, baseObj, {
          asVariant: "success",
          asSize: "normal",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <Avatar
        {...Object.assign({}, baseObj, {
          asVariant: "warning",
          asSize: "normal",
          withIcon: { icon: "fas fa-user" },
        })}
      />
      <Avatar
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
      code: `
      const baseObj = {
        ...Object.assign({}, Default.args, args, {
          asFloated: "inline",
        }),
      };
      <div>
        <Avatar
          {...Object.assign({}, baseObj, {
            asVariant: "primary",
            asSize: "normal",
            withIcon: { icon: "fas fa-user" },
          })}
        />
        <Avatar
          {...Object.assign({}, baseObj, {
            asVariant: "secondary",
            asSize: "normal",
            withIcon: { icon: "fas fa-user" },
          })}
        />
        <Avatar
          {...Object.assign({}, baseObj, {
            asVariant: "success",
            asSize: "normal",
            withIcon: { icon: "fas fa-user" },
          })}
        />
        <Avatar
          {...Object.assign({}, baseObj, {
            asVariant: "warning",
            asSize: "normal",
            withIcon: { icon: "fas fa-user" },
          })}
        />
        <Avatar
          {...Object.assign({}, baseObj, {
            asVariant: "error",
            asSize: "normal",
            withIcon: { icon: "fas fa-user" },
          })}
        />
      </div>`,
    },
  },
};
