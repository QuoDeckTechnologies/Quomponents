import React from "react";
import InlineEditWithRemoveButton from "../components/OptionItem/InlineEditWithRemoveButton/InlineEditWithRemoveButton.react";

export default {
  title:
    "Design System/OptionItem/InlineEditWithRemoveButton/InlineEditWithRemoveButton",
  component: InlineEditWithRemoveButton,
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
  return <InlineEditWithRemoveButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {
    targetName: "Target Name",
    value: "",
    placeholder: "InlineEdit with remove button",
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
      code: `<OptionItem {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Inline Edit With Remove Button
// -------------------------------------------------------------
export const ColoredInlineEditWithRemoveButton = Template.bind({});
ColoredInlineEditWithRemoveButton.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
    accentColor: "#597387",
  },
};
ColoredInlineEditWithRemoveButton.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(
        ColoredInlineEditWithRemoveButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated Inline Edit With Remove Button
// -------------------------------------------------------------
export const AnimatedInlineEditWithRemoveButton = Template.bind({});
AnimatedInlineEditWithRemoveButton.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedInlineEditWithRemoveButton.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(
        AnimatedInlineEditWithRemoveButton.args,
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
  return (
    <div>
      <div style={{ marginBottom: "1em" }}>
        <InlineEditWithRemoveButton {...args} />
      </div>
      <div style={{ marginBottom: "1em" }}>
        <InlineEditWithRemoveButton {...args} />
      </div>
      <div style={{ marginBottom: "1em" }}>
        <InlineEditWithRemoveButton {...args} />
      </div>
    </div>
  );
};
export const MultipleInlineEditWithRemoveButton = MultipleTemplate.bind({});
MultipleInlineEditWithRemoveButton.args = {
  ...Default.args,
};
MultipleInlineEditWithRemoveButton.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(
        MultipleInlineEditWithRemoveButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
