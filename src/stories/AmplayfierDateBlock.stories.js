import React from "react";
import AmplayfierDateBlock from "../components/AmplayfierDateBlock/AmplayfierDateBlock.react";

export default {
  title: "Design System/AmplayfierDateBlock",
  component: AmplayfierDateBlock,
  argTypes: {
    date: "",
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
          backgroundColor: "",
          textColor: "",
        },
      },
    },
  },
  parameters: {
    componentSubtitle:
      "Displays a basic AmplayfierDateBlock for general-purpose use",
    a11y: { disable: true },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <AmplayfierDateBlock {...args} />;
export const Default = Template.bind({});
Default.args = {
  date: "1 Jan 2002",
  asVariant: "primary",
  withColor: {
    backgroundColor: "",
    textColor: "",
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<AmplayfierDateBlock
          date="1 Jan 2002"
          asVariant="primary"
          withColor={{
            backgroundColor: "",
            textColor: "",
          }}
        />`,
    },
  },
};
// -------------------------------------------------------------
// Colored AmplayfierDateBlock
// -------------------------------------------------------------
export const ColoredAmplayfierDateBlock = Template.bind({});
ColoredAmplayfierDateBlock.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#ffc857",
    textColor: "#00509d",
  },
};
ColoredAmplayfierDateBlock.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<AmplayfierDateBlock
          date="1 Jan 2002"
          asVariant="primary"
          withColor={{
            backgroundColor: "#ffc857",
            textColor: "#00509d",
          }}
        />`,
    },
  },
};
// -------------------------------------------------------------
// Custom AmplayfierDateBlock
// -------------------------------------------------------------
export const CustomAmplayfierDateBlock = Template.bind({});
CustomAmplayfierDateBlock.args = {
  ...Default.args,
  date: "2021-05-10T12:55:18.154Z",
};
CustomAmplayfierDateBlock.parameters = {
  docs: {
    description: {
      story: "Use to provide date to component.",
    },
    source: {
      code: `<AmplayfierDateBlock
          date="2021-05-10T12:55:18.154Z"
          asVariant="primary"
          withColor={{
            backgroundColor: "",
            textColor: "",
          }}
        />`,
    },
  },
};
