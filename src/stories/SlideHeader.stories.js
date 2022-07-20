import React from "react";
import SlideHeader from "../components/SlideHeader/SlideHeader.react";

export default {
  title: "Design System/SlideHeader",
  component: SlideHeader,
  argTypes: {
    title: "",
    subtitle: "",
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
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
      options: ["left", "right", "none", "inline"],
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
          accentColor: "",
          textColor: "",
          backgroundColor: "",
        },
      },
    },
    isHidden: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
  },
  decorators: [
    (story) => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle:
      "Default SlideHeader for general purpose use",
    a11y: { disable: true },
    docs: { iframeHeight: 400 },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SlideHeader {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: "Neque porro quisquam est qui dolorem",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
  asVariant: "primary",
  asFloated: "inline",
  asPadded: "normal",
  asAligned: "center",
  withColor: {
    accentColor: "#AD2929",
    textColor: "#ffffff",
    backgroundColor: "#ad292980",
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<SlideHeader {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored SlideHeader
// -------------------------------------------------------------
export const ColoredSlideHeader = Template.bind({});
ColoredSlideHeader.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#666666",
    textColor: "#fffff",
    accentColor: "#ffbf00",
  },
};
ColoredSlideHeader.parameters = {
  docs: {
    description: {
      story:
        "Use to override the standard colors of the SliderHeader.",
    },
    source: {
      code: `<ColoredSlideHeader {...${JSON.stringify(
        ColoredSlideHeader.args,
        null,
        2
      )}}/>`,
    },
  },
};