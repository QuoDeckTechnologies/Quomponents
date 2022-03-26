import React from "react";
import ClickableImage from "../components/ClickableImage/ClickableImage.react";

export default {
  title: "Design System/ClickableImage/ClickableImage",
  component: ClickableImage,
  argTypes: {
    content: {
      table: {
        defaultValue: {
          image: "",
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
  parameters: {
    componentSubtitle:
      "Displays a basic Clickable Image for general-purpose use",
    a11y: { disable: true },
    docs: { iframeHeight: 1000 },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ClickableImage {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    image: "",
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
      code: `<ClickableImage {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// With Image
// -------------------------------------------------------------
export const WithImage = Template.bind({});
WithImage.args = {
  ...Default.args,
  content: {
    image:
      "https://images.unsplash.com/photo-1647339490516-b835c0408b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
};
WithImage.parameters = {
  docs: {
    description: {
      story: "Use to Show the ClickableImage with image provided by the user.",
    },
    source: {
      code: `<ClickableImage {...${JSON.stringify(WithImage.args, null, 2)}}/>`,
    },
  },
};
