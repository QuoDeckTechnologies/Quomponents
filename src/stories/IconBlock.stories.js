import React from "react";
import IconBlock from "../components/IconBlock/IconBlock.react";

export default {
  title: "Design System/IconBlock",
  component: IconBlock,
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
    asPadded: {
      control: "select",
      options: ["fitted", "compact", "normal", "relaxed"],
      table: {
        category: "as-Flags",
      },
    },
    asFloated: {
      control: "select",
      options: ["left", "right", "inline", "none"],
      table: {
        category: "as-Flags",
      },
    },
    asEmphasis: {
      control: "select",
      options: ["text", "contained", "outlined"],
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
  decorators: [(story) => <div>{story()}</div>],
  parameters: {
    componentSubtitle: "Displays a basic IconBlock for general-purpose use",
    a11y: { disable: true },
    docs: { iframeHeight: 200 },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <IconBlock {...args} />;
export const Default = Template.bind({});
Default.args = {
  asVariant: "primary",
  asSize: "normal",
  asFloated: "inline",
  asPadded: "normal",
  asEmphasis: "contained",
  withColor: {
    backgroundColor: "",
    textColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withIcon: { icon: "fas fa-book-open", size: "1em" },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<IconBlock
          asVariant="primary"
          asSize="normal"
          asFloated="inline"
          asPadded="normal"
          asEmphasis="contained"
          withColor={{
            backgroundColor: "",
            textColor: "",
          }}
          withAnimation={{
            animation: "zoom",
            duration: 0.5,
            delay: 0,
          }}
          withIcon={{
            icon: "fas fa-book-open",
            size: "1em",
          }}
          isDisabled={false}
          isHidden={false}/>`,
    },
  },
};

// -------------------------------------------------------------
// AllVariants
// -------------------------------------------------------------
export const AllVariantsTemplate = (args) => {
  const baseObj1 = {
    ...Object.assign({}, Default.args, args, {
      asSize: "tiny",
    }),
    withColor: {
      textColor: "#fff",
    },
    asEmphasis: "text",
  };
  const baseObj2 = {
    ...Object.assign({}, Default.args, args, {
      asSize: "small",
    }),
    withColor: {
      backgroundColor: "#D8CE0D",
    },
    asEmphasis: "outlined",
  };
  const baseObj3 = {
    ...Object.assign({}, Default.args, args, {
      asSize: "normal",
    }),
    withColor: {
      backgroundColor: "#5A9C32",
      textColor: "#fff",
    },
    asEmphasis: "contained",
  };
  const baseObj4 = {
    ...Object.assign({}, Default.args, args, {
      asSize: "big",
    }),
    withColor: {
      textColor: "#8B0000",
    },
    asEmphasis: "text",
  };
  const baseObj5 = {
    ...Object.assign({}, Default.args, args, {
      asSize: "huge",
    }),
    withColor: {
      backgroundColor: "#21618C",
    },
    asEmphasis: "outlined",
  };
  const baseObj6 = {
    ...Object.assign({}, Default.args, args, {
      asSize: "massive",
    }),
    withColor: {
      backgroundColor: "#D98880",
      textColor: "#fff",
    },
    asEmphasis: "contained",
  };
  return (
    <>
      <div>
        <IconBlock {...Object.assign({}, baseObj1, {})} />
        <IconBlock {...Object.assign({}, baseObj2, {})} />
        <IconBlock {...Object.assign({}, baseObj3, {})} />
      </div>
      <div>
        <IconBlock {...Object.assign({}, baseObj4, {})} />
        <IconBlock {...Object.assign({}, baseObj5, {})} />
        <IconBlock {...Object.assign({}, baseObj6, {})} />
      </div>
    </>
  );
};
