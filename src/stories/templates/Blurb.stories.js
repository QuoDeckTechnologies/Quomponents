import React from "react";
import Blurb from "../../components/Templates/Blurb/Blurb.react";

export default {
  title: "Design System/Templates/Blurb/Blurb",
  component: Blurb,
  argTypes: {
    data: {
      title: "",
      subtitle: "",
      paragraph: "",
    },
    slideId: 0,
    asAligned: {
      control: "select",
      options: ["left", "right", "center"],
      table: {
        category: "as-Flags",
      },
    },
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
          slideHeaderTextColor: "",
          slideHeaderAccentColor: "",
          slideHeaderBackgroundColor: "",
          captionTextColor: "",
          captionBackgroundColor: "",
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
  },
  decorators: [
    (story) => (
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle:
      "Displays a Blurb with SlideHeader for general-purpose use.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 600,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
  return <Blurb {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Lorem ipsum dolor sit amet",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl, ut aliquet orci. Mauris id sapien felis. Nullam elementum enim tincidunt, facilisis lacus vitae, volutpat ligula. ",
  },
  slideId: 0,
  asAligned: "left",
  asVariant: "warning",
  withColor: {
    backgroundColor: "",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#C98787",
    captionTextColor: "#121212",
    captionBackgroundColor: "#ffffff",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<Blurb {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Colored Blurb
// -------------------------------------------------------------
export const ColoredBlurb = Template.bind({});
ColoredBlurb.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#7d8384",
    slideHeaderTextColor: "#454545",
    slideHeaderAccentColor: "#C1DC9E",
    slideHeaderBackgroundColor: "#DBDBDB",
    captionTextColor: "#454545",
    captionBackgroundColor: "#C98787",
  },
};
ColoredBlurb.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<Blurb withColor={{backgroundColor: "#C98787", accentColor: "#D3D3D3", textColor: "#ffffff"}}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Animated Blurb
// -------------------------------------------------------------
export const AnimatedBlurb = Template.bind({});
AnimatedBlurb.args = {
  ...Default.args,
  withAnimation: {
    animation: "fade",
    duration: 2,
    delay: 0,
  },
};
AnimatedBlurb.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of Blurb",
    },
    source: {
      code: `<Blurb {...${JSON.stringify(
        AnimatedBlurb.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Without Header Image Blurb
// -------------------------------------------------------------
export const WithoutHeaderImageBlurb = Template.bind({});
WithoutHeaderImageBlurb.args = {
  data: {
    title: "Lorem ipsum dolor sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl, ut aliquet orci. Mauris id sapien felis. Nullam elementum enim tincidunt, facilisis lacus vitae, volutpat ligula. ",
  },
  slideId: 0,
  asAligned: "left",
  asVariant: "warning",
  withColor: {
    backgroundColor: "",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#C98787",
    captionTextColor: "#121212",
    captionBackgroundColor: "#ffffff",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
};
WithoutHeaderImageBlurb.parameters = {
  docs: {
    source: {
      code: `<Blurb {...${JSON.stringify(
        WithoutHeaderImageBlurb.args,
        null,
        2
      )}}/>`,
    },
  },
};