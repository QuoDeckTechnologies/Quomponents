import React from "react";
import MenuBlock from "../components/AppMenu/MenuBlock/MenuBlock.react";

const dictionary = JSON.stringify({
  hi: {
    menuBlock: {
      content: "सूची",
    },
  },
});

export default {
  title: "Design System/Appmenu/MenuBlock",
  component: MenuBlock,
  argTypes: {
    asEmphasis: {
      control: "select",
      options: ["text", "outlined", "contained"],
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
    withLabel: {
      table: {
        category: "with-Params",
        defaultValue: {
          content: "",
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
      "Displays a MenuBlock component for general-purpose use.",
    a11y: { disable: true },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <MenuBlock {...args} />;
export const Default = Template.bind({});
Default.args = {
  asEmphasis: "contained",
  asVariant: "primary",
  asSize: "normal",
  asFloated: "inline",
  withIcon: { icon: "fas fa-ellipsis-v" },
  withColor: {
    backgroundColor: "",
    textColor: "",
  },
  withLabel: {
    content: "Catalog",
    textColor: "",
  },
  withTranslation: {
    lang: "en",
    tgt: "menuBlock",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    description: {
      story:
        "Any free fontawesome icon can be used as the Ellipsis icon definition. we can change the icon to MenuBlock ican by adding withIcon prop.",
    },
    source: {
      code: `<MenuBlock {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Translated Button
// -------------------------------------------------------------
export const TranslatedMenuBlock = Template.bind({});
TranslatedMenuBlock.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "menuBlock",
    dictionary: dictionary,
  },
};
TranslatedMenuBlock.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the button, add a button:{text,label} value to the dictionary.",
    },
    source: {
      code: `<MenuBlock {...${JSON.stringify(
        TranslatedMenuBlock.args,
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
      <MenuBlock
        {...Object.assign({}, baseObj, {
          asVariant: "primary",
          asSize: "tiny",
        })}
      />
      <MenuBlock
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "small",
        })}
      />
      <MenuBlock
        {...Object.assign({}, baseObj, {
          asVariant: "success",
          asSize: "normal",
        })}
      />
      <MenuBlock
        {...Object.assign({}, baseObj, {
          asVariant: "warning",
          asSize: "big",
        })}
      />
      <MenuBlock
        {...Object.assign({}, baseObj, {
          asVariant: "error",
          asSize: "huge",
        })}
      />
      <MenuBlock
        {...Object.assign({}, baseObj, {
          asVariant: "primary",
          asSize: "massive",
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
      code: `
      const baseObj = {
        ...Object.assign({}, Default.args, args, {
          asFloated: "inline",
        }),
      };
      <div>
        <MenuBlock
          {...Object.assign({}, baseObj, {
            asVariant: "primary",
            asSize: "tiny",
          })}
        />
        <MenuBlock
          {...Object.assign({}, baseObj, {
            asVariant: "secondary",
            asSize: "small",
          })}
        />
        <MenuBlock
          {...Object.assign({}, baseObj, {
            asVariant: "success",
            asSize: "normal",
          })}
        />
        <MenuBlock
          {...Object.assign({}, baseObj, {
            asVariant: "warning",
            asSize: "big",
          })}
        />
        <MenuBlock
          {...Object.assign({}, baseObj, {
            asVariant: "error",
            asSize: "huge",
          })}
        />
        <MenuBlock
          {...Object.assign({}, baseObj, {
            asVariant: "primary",
            asSize: "massive",
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
      <MenuBlock
        {...Object.assign({}, baseObj, {
          asVariant: "primary",
          asSize: "normal",
          withIcon: { icon: "fas fa-ellipsis-v" },
        })}
      />
      <MenuBlock
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asSize: "normal",
          withIcon: { icon: "fas fa-ellipsis-v" },
        })}
      />
      <MenuBlock
        {...Object.assign({}, baseObj, {
          asVariant: "success",
          asSize: "normal",
          withIcon: { icon: "fas fa-ellipsis-v" },
        })}
      />
      <MenuBlock
        {...Object.assign({}, baseObj, {
          asVariant: "warning",
          asSize: "normal",
          withIcon: { icon: "fas fa-ellipsis-v" },
        })}
      />
      <MenuBlock
        {...Object.assign({}, baseObj, {
          asVariant: "error",
          asSize: "normal",
          withIcon: { icon: "fas fa-ellipsis-v" },
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
        <MenuBlock
          {...Object.assign({}, baseObj, {
            asVariant: "primary",
            asSize: "normal",
            withIcon: { icon: "fas fa-ellipsis-v" },
          })}
        />
        <MenuBlock
          {...Object.assign({}, baseObj, {
            asVariant: "secondary",
            asSize: "normal",
            withIcon: { icon: "fas fa-ellipsis-v" },
          })}
        />
        <MenuBlock
          {...Object.assign({}, baseObj, {
            asVariant: "success",
            asSize: "normal",
            withIcon: { icon: "fas fa-ellipsis-v" },
          })}
        />
        <MenuBlock
          {...Object.assign({}, baseObj, {
            asVariant: "warning",
            asSize: "normal",
            withIcon: { icon: "fas fa-ellipsis-v" },
          })}
        />
        <MenuBlock
          {...Object.assign({}, baseObj, {
            asVariant: "error",
            asSize: "normal",
            withIcon: { icon: "fas fa-ellipsis-v" },
          })}
        />
      </div>`,
    },
  },
};
