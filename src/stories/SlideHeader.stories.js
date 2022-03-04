import React from "react";
import SlideHeader from "../components/SlideHeader/SlideHeader.react";

const dictionary = JSON.stringify({
  // en: {
  //   SlideHeader: {
  //     title: "Neque porro quisquam est qui dolorem",
  //     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem"
  //   },
  // },
  hi: {
    SlideHeader: {
      title: "नेक पोरो क्विस्कम इस्ट क्यूई डोलोरेम",
      subtitle: "लोरेम इप्सम डोलर सिट एमेट, कॉन्सेक्टेटूर एडिपिसिंग एलीट, क्युराबिटुर इप्सम सेम"
    },
  },
});

export default {
  title: "Design System/SlideHeader/SlideHeader",
  component: SlideHeader,
  argTypes: {
    content: {
      table: {
        category: "with-Params",
        defaultValue: {
          title: "",
          subTitle: "",
        },
      },
    },
    asSize: {
      control: "select",
      options: ["tiny", "small", "normal", "big", "huge", "massive"],
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
    withTranslation: {
      table: {
        category: "with-Params",
        defaultValue: {
          lang: "",
          tgt: "",
          dictionary: "",
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
  content: {
    title: "Neque porro quisquam est qui dolorem",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
  },
  asSize: "normal",
  asFloated: "inline",
  asPadded: "normal",
  asAligned: "center",
  withColor: {
    accentColor: "#AD2929",
    textColor: "#ffffff",
    backgroundColor: "#ad292980",
  },
  withAnimation: {
    animation: "collapse",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "SlideHeader",
    dictionary: dictionary,
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
// -------------------------------------------------------------
// Animated SlideHeader
// -------------------------------------------------------------
export const AnimatedSlideHeader = Template.bind({});
AnimatedSlideHeader.args = {
  ...Default.args,
  withAnimation: {
    animation: "slideRight",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedSlideHeader.parameters = {
  docs: {
    description: {
      story:
        "Use to animate the entry of the SlideHeader with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
    },
    source: {
      code: `<AnimatedSlideHeader {...${JSON.stringify(
        AnimatedSlideHeader.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated SlideHeader
// -------------------------------------------------------------
export const TranslatedSlideHeader = Template.bind({});
TranslatedSlideHeader.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "SlideHeader",
    dictionary: dictionary,
  },
};
TranslatedSlideHeader.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the SlideHeader, add a SlideHeader:{title, subtitle} value to the dictionary.",
    },
    source: {
      code: `<TranslatedSlideHeader {...${JSON.stringify(
        TranslatedSlideHeader.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Variants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
    }),
  };
  return (
    <div>
      <SlideHeader
        {...Object.assign({}, baseObj, {
          withColor: {
            accentColor: "#ffbf00",
            textColor: "#ffffff",
            backgroundColor: "#666666",
          },
          withTranslation: {
            lang: "en",
            tgt: "SlideHeader",
            dictionary: dictionary,
          },
        })}
      />{" "}
      <br />
      <SlideHeader
        {...Object.assign({}, baseObj, {
          withColor: {
            accentColor: "#589C48",
            textColor: "#FBB149",
            backgroundColor: "#733381",
          },
          withTranslation: {
            lang: "hi",
            tgt: "SlideHeader",
            dictionary: dictionary,
          },
        })}
      />{" "}
    </div>
  );
};
export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story: "variants are supported. Use as per purpose noted here.",
    },
    source: {
      code: `<AllVariants {...${JSON.stringify(
        AllVariants.args,
        null,
        2
      )}}/>`,
    },
  },
};
