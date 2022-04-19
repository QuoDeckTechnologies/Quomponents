import { RadioGroup } from "@mui/material";
import React from "react";
import OptionItemSeven from "../components/OptionItem/OptionItemSeven/OptionItemSeven.react";
import { MultipleOptionitemEight } from "./OptionItemEight.stories";

export default {
  title: "Design System/OptionItem/OptionItemSeven",
  component: OptionItemSeven,
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
  return <OptionItemSeven {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    targetName: "Target Name",
    value: "",
    placeholder: "Ops7",
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
      code: `<OptionItemSeven {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Single Select
// -------------------------------------------------------------
export const ColoredOptionitemSeven = Template.bind({});
ColoredOptionitemSeven.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
    accentColor: "#597387",
  },
};
ColoredOptionitemSeven.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        ColoredOptionitemSeven.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated Single Select
// -------------------------------------------------------------
export const AnimatedOptionitemSeven = Template.bind({});
AnimatedOptionitemSeven.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedOptionitemSeven.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        AnimatedOptionitemSeven.args,
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
          <OptionItemSeven
            {...args}
            content={{ ...obj, targetName: "one", checked: false }}
          />
        </div>
        <div style={{ marginBottom: "1em" }}>
          <OptionItemSeven
            {...args}
            content={{ ...obj, targetName: "two", checked: true }}
          />
        </div>
        <div style={{ marginBottom: "1em" }}>
          <OptionItemSeven
            {...args}
            content={{ ...obj, targetName: "three", checked: false }}
          />
        </div>
      </div>
    </RadioGroup>
  );
};
export const MultipleOptionitemSeven = MultipleTemplate.bind({});
MultipleOptionitemSeven.args = {
  ...Default.args,
};
MultipleOptionitemSeven.parameters = {
  docs: {
    source: {
      code: `<OptionItemSeven {...${JSON.stringify(
        MultipleOptionitemSeven.args,
        null,
        2
      )}}/>`,
    },
  },
};
