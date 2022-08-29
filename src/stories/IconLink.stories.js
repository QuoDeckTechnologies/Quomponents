import React from "react";
import IconLink from "../components/Buttons/IconLink/IconLink.react";

const dictionary = JSON.stringify({
  en: {
    icon: { label: "Home" },
  },
  hi: {
    icon: { label: "होम" },
  },
});

export default {
  title: "Design System/Buttons/IconLink",
  component: IconLink,
  argTypes: {
    link: "",
    isActive: false,
    asEmphasis: {
      control: "select",
      options: ["text", "outlined", "contained"],
      table: {
        category: "as-Flags",
      },
    },
    isCircular: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
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
          backgroundColor: "",
          textColor: "",
          hoverBackgroundColor: "",
          hoverTextColor: "",
        },
      },
    },
    withIcon: {
      table: {
        category: "with-Params",
        defaultValue: {
          icon: "",
        },
      },
    },
    withLabel: {
      table: {
        category: "with-Params",
        defaultValue: {
          format: "caption",
          content: "",
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
    componentSubtitle: "Displays icon with a link",
    a11y: { disable: true },
    docs: { iframeHeight: 300 },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <IconLink {...args} />;
export const Default = Template.bind({});
Default.args = {
  link: "https://quodeck.com/",
  asEmphasis: "contained",
  isCircular: false,
  isActive: false,

  asVariant: "primary",
  asSize: "normal",
  asPadded: "normal",
  asFloated: "inline",
  asAligned: "center",

  withLabel: {
    format: "caption",
    content: "Label",
  },
  withIcon: {
    icon: "fa fa-paste",
  },
  withColor: {
    accentColor: "#666666",
    backgroundColor: "",
    textColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "icon",
    dictionary: dictionary,
  },

  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<IconLink 
            link="https://quodeck.com/"
            asEmphasis = "contained"
            isCircular = {false}
            isActive = {false}
        
            asVariant = "primary"
            asSize = "normal"
            asPadded =" normal"
            asFloated = "inline"
            asAligned = "center"
        
            withLabel = {{
                format:"caption",
                content:"Label",
            }}
            withIcon = {{
                icon:"fa fa-paste",
            }}
            withColor = {{
                accentColor="#666666",
                backgroundColor="",
                textColor="",
                hoverBackgroundColor="",
                hoverTextColor="",
            }}
            withAnimation = {{
                animation:"zoom",
                duration:0.5,
                delay:0,
            }}
            isDisabled = {false}
            isHidden = {false}
        />`,
    },
  },
};

// -------------------------------------------------------------
// Colored IconLink
// -------------------------------------------------------------
export const ColoredIconlink = Template.bind({});
ColoredIconlink.args = {
  ...Default.args,
  withColor: {
    accentColor: "#666666",
    backgroundColor: "#FFA500",
    textColor: "#E5E5E5",
    hoverBackgroundColor: "#E5E5E5",
    hoverTextColor: "#FFA500",
  },
};
ColoredIconlink.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the Icon.",
    },
    source: {
      code: `<IconLink 
            link="https://quodeck.com/"
            asEmphasis = "contained"
            isCircular = {false}
            isActive = {false}
            asVariant = "primary"
            asSize = "normal"
            asPadded =" normal"
            asFloated = "inline"
            asAligned = "center"
            withLabel = {{
                format:"caption",
                content:"Label",
            }}
            withIcon = {{
                icon:"fa fa-paste",
            }}
            withColor = {{
                accentColor: "#666666",
                backgroundColor: "#FFA500",
                textColor: "#E5E5E5",
                hoverBackgroundColor: "#E5E5E5",
                hoverTextColor: "#FFA500",
            }}
            withAnimation = {{
                animation:"zoom",
                duration:0.5,
                delay:0,
            }} 
            isDisabled = {false}
            isHidden = {false}
            />`,
    },
  },
};

// -------------------------------------------------------------
// Without Labelled IconLink
// -------------------------------------------------------------
export const WithoutLabelledIconlink = Template.bind({});
WithoutLabelledIconlink.args = {
  ...Default.args,
  withLabel: {
    format: "caption",
    content: "",
  },
};

WithoutLabelledIconlink.parameters = {
  docs: {
    description: {
      story:
        "Use to provide a header callout (format:label) above the icon. Or use as an information caption (format:caption) below the icon. Or use as an information label (format:label) top the icon. The text here can be customized through the withTranslation option.",
    },
    source: {
      code: `<IconLink link="https://quodeck.com/"
            asEmphasis = "contained"
            isCircular = {false}
            isActive = {false}
            asVariant = "primary"
            asSize = "normal"
            asPadded =" normal"
            asFloated = "inline"
            asAligned = "center"
            withLabel = {{
                format: "caption",
                content: "",
            }}
            withIcon = {{
                icon:"fa fa-paste",
            }}
            withColor = {{
                accentColor: "#666666",
                backgroundColor: "#FFA500",
                textColor: "#E5E5E5",
                hoverBackgroundColor: "#E5E5E5",
                hoverTextColor: "#FFA500",
            }}
            withAnimation = {{
                animation:"zoom",
                duration:0.5,
                delay:0,
            }}    
            isDisabled = {false}
            isHidden = {false}
            />`,
    },
  },
};

// -------------------------------------------------------------
// Animated IconLink
// -------------------------------------------------------------
export const AnimatedIconlink = Template.bind({});
AnimatedIconlink.args = {
  ...Default.args,
  withAnimation: {
    animation: "collapse",
    duration: 0.8,
    delay: 0,
  },
};
AnimatedIconlink.parameters = {
  docs: {
    description: {
      story:
        "Use to animate the entry of the Icon with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
    },
    source: {
      code: `<IconLink link="https://quodeck.com/"
            asEmphasis = "contained"
            isCircular = {false}
            isActive = {false}
            asVariant = "primary"
            asSize = "normal"
            asPadded =" normal"
            asFloated = "inline"
            asAligned = "center"
            withLabel = {{
                format:"caption",
                content:"Label",
            }}
            withIcon = {{
                icon:fa fa-paste",
            }}
            withColor = {{
                accentColor: "#666666",
                backgroundColor: "#FFA500",
                textColor: "#E5E5E5",
                hoverBackgroundColor: "#E5E5E5",
                hoverTextColor: "#FFA500",
            }}
            withAnimation = {{
                animation: "collapse",
                duration: .8,
                delay: 0,
            }}    isDisabled = {false}
            isHidden = {false}
        />`,
    },
  },
};

// -------------------------------------------------------------
// TranslatedIconlink
// -------------------------------------------------------------
export const TranslatedIconlink = Template.bind({});
TranslatedIconlink.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "icon",
    dictionary: dictionary,
  },
};
TranslatedIconlink.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in iconlink. To make this work for the iconlink, add a icon:{label} value to the dictionary.",
    },
    source: {
      code: `<IconLink link="https://quodeck.com/"
            asEmphasis = "contained"
            isCircular = {false}
            isActive = {false}
            asVariant = "primary"
            asSize = "normal"
            asPadded =" normal"
            asFloated = "inline"
            asAligned = "center"
            withLabel = {{
                format:"caption",
                content:"Label",
            }}
            withIcon = {{
                icon:"fa fa-paste",
            }}
            withColor = {{
                accentColor: "#666666",
                backgroundColor: "#FFA500",
                textColor: "#E5E5E5",
                hoverBackgroundColor: "#E5E5E5",
                hoverTextColor: "#FFA500",
            }}
            withAnimation = {{
                animation: "collapse",
                duration: .8,
                delay: 0,
            }}
            isDisabled = {false}
            isHidden = {false}
            />`,
    },
  },
};
