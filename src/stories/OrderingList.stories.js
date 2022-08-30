import React from "react";
import OrderingList from "../components/OrderingList/OrderingList/OrderingList.react";

export default {
  title: "Design System/OrderingList",
  component: OrderingList,
  argTypes: {
    content: [],
    purpose: "",
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
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
          textColor: "",
          hoverBackgroundColor: "",
          hoverTextColor: "",
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
    componentSubtitle:
      "Display Options with up and down buttons to rank/arrange options and submit the arranged options",
    a11y: { disable: true },
    docs: {
      iframeHeight: 550,
    },
  },
};
const Template = (args) => <OrderingList {...args} />;
//----------------------------------------------------------
// Default
//---------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
  purpose: "",
  asVariant: "warning",
  asFloated: "none",
  asAligned: "center",
  asPadded: "fitted",
  content: ["PRIMARY BUTTON", "SECONDARY BUTTON", "THIRD BUTTON"],
  withColor: {
    backgroundColor: "",
    textColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    description: {
      story:
        "Any free fontawesome icon can be used as the OrderingList icon definition. This component is combination of the ordering Button  title component  and orderingList buuton  is clickable and ranking the title",
    },
    source: {
      code: `<OrderingList
        purpose=""
        asVariant="warning"
        asFloated="none"
        asAligned="center"
        asPadded="fitted"
        content={["PRIMARY BUTTON", "SECONDARY BUTTON", "THIRD BUTTON"]}
        withColor={{
          backgroundColor: "",
          textColor: "",
          hoverBackgroundColor: "",
          hoverTextColor: "",
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
    ...Object.assign({}, Default.args, args, {}),
    asVariant: "primary",
    purpose: "quiz",
  };
  const baseObj2 = {
    ...Object.assign({}, Default.args, args, {}),
    asVariant: "secondary",
  };
  const baseObj3 = {
    ...Object.assign({}, Default.args, args, {}),
    asVariant: "success",
  };
  const baseObj4 = {
    ...Object.assign({}, Default.args, args, {}),
    asVariant: "warning",
  };
  const baseObj5 = {
    ...Object.assign({}, Default.args, args, {}),
    asVariant: "error",
  };
  return (
    <>
      <div>
        <OrderingList {...Object.assign({}, baseObj1, {})} />
        <OrderingList {...Object.assign({}, baseObj2, {})} />
        <OrderingList {...Object.assign({}, baseObj3, {})} />
        <OrderingList {...Object.assign({}, baseObj4, {})} />
        <OrderingList {...Object.assign({}, baseObj5, {})} />
      </div>
    </>
  );
};
