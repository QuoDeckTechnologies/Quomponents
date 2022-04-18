import { RadioGroup } from "@mui/material";
import React from "react";
import OptionItemTwo from "../components/OptionItem/OptionItemTwo/OptionItemTwo.react";

export default {
  title: "Design System/OptionItem/OptionItemTwo",
  component: OptionItemTwo,
  argTypes: {
    content: {},
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
    onInput: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onClose: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  parameters: {
    componentSubtitle: "Displays a InlineEdit with remove button.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 250,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
  return <OptionItemTwo {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    targetName: "Target Name",
    value: "",
    placeholder: "Single Select",
    checked: true,
  },
  withColor: {
    backgroundColor: "#ffab000d",
    accentColor: "",
    textColor: "",
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
    source: {
      code: `<OptionItemTwo {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Single Select
// -------------------------------------------------------------
export const ColoredOptionItemTwo = Template.bind({});
ColoredOptionItemTwo.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
    accentColor: "#597387",
  },
};
ColoredOptionItemTwo.parameters = {
  docs: {
    source: {
      code: `<OptionItemTwo {...${JSON.stringify(
        ColoredOptionItemTwo.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated Single Select
// -------------------------------------------------------------
export const AnimatedOptionItemTwo = Template.bind({});
AnimatedOptionItemTwo.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionItemTwo.parameters = {
  docs: {
    source: {
      code: `<OptionItemTwo {...${JSON.stringify(
        AnimatedOptionItemTwo.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Multiple Inline Edit With Remove Button
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  let obj = { ...args.content };
  return (
    <RadioGroup>
      <div>
        <div style={{ marginBottom: "1em" }}>
          <OptionItemTwo
            {...args}
            content={{ ...obj, targetName: "one", checked: false }}
          />
        </div>
        <div style={{ marginBottom: "1em" }}>
          <OptionItemTwo
            {...args}
            content={{ ...obj, targetName: "two", checked: true }}
          />
        </div>
        <div style={{ marginBottom: "1em" }}>
          <OptionItemTwo
            {...args}
            content={{ ...obj, targetName: "three", checked: false }}
          />
        </div>
      </div>
    </RadioGroup>
  );
};
export const MultipleOptionItemTwo = MultipleTemplate.bind({});
MultipleOptionItemTwo.args = {
  ...Default.args,
};
MultipleOptionItemTwo.parameters = {
  docs: {
    source: {
      code: `<OptionItemTwo {...${JSON.stringify(
        MultipleOptionItemTwo.args,
        null,
        2
      )}}/>`,
    },
  },
};
