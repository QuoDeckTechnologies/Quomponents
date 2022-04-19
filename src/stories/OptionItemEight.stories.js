import { RadioGroup } from "@mui/material";
import React from "react";
import OptionItemEight from "../components/OptionItem/OptionItemEight/OptionItemEight.react";

export default {
  title: "Design System/OptionItem/OptionItemEight",
  component: OptionItemEight,
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
  return <OptionItemEight {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    targetName: "Target Name",
    value: "",
    placeholder: "Ops7",
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
      code: `<OptionItemEight {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Single Select
// -------------------------------------------------------------
export const ColoredOptionitemEight = Template.bind({});
ColoredOptionitemEight.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
    accentColor: "#597387",
  },
};
ColoredOptionitemEight.parameters = {
  docs: {
    source: {
      code: `<OptionItemEight {...${JSON.stringify(
        ColoredOptionitemEight.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated Single Select
// -------------------------------------------------------------
export const AnimatedOptionitemEight = Template.bind({});
AnimatedOptionitemEight.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionitemEight.parameters = {
  docs: {
    source: {
      code: `<OptionItemEight {...${JSON.stringify(
        AnimatedOptionitemEight.args,
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
          <OptionItemEight
            {...args}
            content={{ ...obj, targetName: "one" }}
          />
        </div>
        <div style={{ marginBottom: "1em" }}>
          <OptionItemEight
            {...args}
            content={{ ...obj, targetName: "two"}}
          />
        </div>
        <div style={{ marginBottom: "1em" }}>
          <OptionItemEight
            {...args}
            content={{ ...obj, targetName: "three"}}
          />
        </div>
      </div>
    </RadioGroup>
  );
};
export const MultipleOptionitemEight = MultipleTemplate.bind({});
MultipleOptionitemEight.args = {
  ...Default.args,
};
MultipleOptionitemEight.parameters = {
  docs: {
    source: {
      code: `<OptionItemEight {...${JSON.stringify(
        MultipleOptionitemEight.args,
        null,
        2
      )}}/>`,
    },
  },
};
