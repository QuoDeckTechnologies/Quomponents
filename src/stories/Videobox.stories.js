import React from "react";
import Videobox from "../components/Videobox/Videobox.react";

export default {
  title: "Design System/Videobox",
  component: Videobox,
  argTypes: {

    url: "",
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
    onReady: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onPlay: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onPause: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onError: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onEnded: {
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
          textAlign: "",
          fontSize: "",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a videobox for general-purpose use",
    a11y: { disable: true },
    docs: { iframeHeight: 200 },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Videobox {...args} />;
export const Default = Template.bind({});
Default.args = {
  url: "https://www.youtube.com/watch?v=Bwx5nqvSTZ0",
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
      code: `<VideoBox {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// WithoutContentUrl
// -------------------------------------------------------------
export const WithoutContentUrl = Template.bind({});
WithoutContentUrl.args = {
  ...Default.args,
  url: "",
};
WithoutContentUrl.parameters = {
  docs: {
    description: {
      story:
        "Show VideoBox component without content url"
    },
    source: {
      code: `<WithoutContentUrl {...${JSON.stringify(
        WithoutContentUrl.args,
        null,
        2
      )}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Animated VideoBox
// -------------------------------------------------------------
export const AnimatedVideobox = Template.bind({});
AnimatedVideobox.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 2,
    delay: 0,
  },
};
AnimatedVideobox.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of videobox",
    },
    source: {
      code: `<VideoBox {...${JSON.stringify(
        AnimatedVideobox.args,
        null,
        2
      )}}/>`,
    },
  },
};

