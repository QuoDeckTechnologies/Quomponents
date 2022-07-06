import React from "react";
import ToolbarDark from "../components/Buttons/ToolbarDark/ToolbarDark.react";
const dictionary = JSON.stringify({

  hi: {
    toolbarDark: {
      content: [
        { label: "प्रमाणपत्र" },
        { label: "बटुआ" },
        { label: "पुरस्कार" },
        { label: "रिपोर्ट" },
      ]
    },
  },
});
export default {
  title: "Design System/Buttons/ToolbarDark",
  component: ToolbarDark,
  argTypes: {
    content: [
      {
        icon: "",
        label: "label1",
        link: "",
      },
    ],
    asEmphasis: {
      control: "select",
      options: ["text", "outlined", "contained"],
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
          backgroundColor: "",
          accentColor: "",
          textColor: "",
          hoverBackgroundColor: "",
          hoverTextColor: "",
        },
      },
    },
    withAnimation: {
      table: {
        category: "with-Params",
        defaultValue: {
          animation: "zoom",
          duration: 0.7,
          delay: 1,
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
    isFluid: {
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
          width: "100%",
          textAlign: "left",
          fontSize: "1em",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays  ToolbarDark with Icons",
    a11y: { disable: true },
    // controls: { expanded: true }
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ToolbarDark {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: [
    {
      icon: "fa fa-certificate",
      label: "Certificate",
      format: "caption",
      link: "https://quodeck.com/",
    },
    {
      icon: "fa fa-wallet",
      label: "Wallet",
      format: "caption",
      link: "https://www.google.com/",
    },
    {
      icon: "fa fa-gift",
      label: "Rewards",
      format: "caption",
      link: "https://github.com/",
    },
    {
      icon: "fa fa-chart-pie",
      label: "Reports",
      format: "caption",
      link: "https://www.youtube.com/",
    },
  ],

  asEmphasis: "text",

  asVariant: "primary",
  asSize: "normal",
  asPadded: "normal",
  asAligned: "center",

  withColor: {
    backgroundColor: "",
    accentColor: "",
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
    tgt: "toolbarDark",
    dictionary: dictionary,
  },

  isDisabled: false,
  isHidden: false,
  isFluid: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<ToolbarDark {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Colored Toolbar
// -------------------------------------------------------------
export const ColoredToolbar = Template.bind({});
ColoredToolbar.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "gray",
    textColor: "gray",
    accentColor: "#48D1CC",
    hoverBackgroundColor: "steelblue",
    hoverTextColor: "steelblue",
  },
};
ColoredToolbar.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the Icon.",
    },
    source: {
      code: `<Toolbardark withColor={{backgroundColor: "orange", textColor: "gray",hoverBackgroundColor: "gray", hoverTextColor: "orange"}}}/>`,
    },
  },
};

//-------------------------------------------------------------
// Animated Toolbar
// -------------------------------------------------------------
export const AnimatedToolbar = Template.bind({});
AnimatedToolbar.args = {
  ...Default.args,
  withAnimation: {
    animation: "slideDown",
    duration: 3,
    delay: 0,
  },
};
AnimatedToolbar.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of Toolbar",
    },
    source: {
      code: `<ToolbarDark {...${JSON.stringify(
        AnimatedToolbar.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// WithoutLabelToolbardark
// -------------------------------------------------------------
export const WithoutLabelToolbardark = Template.bind({});
WithoutLabelToolbardark.args = {
  ...Default.args,
  content: [
    {
      icon: "fa fa-certificate",
      label: "",
      format: "caption",
      link: "https://quodeck.com/",
    },
    {
      icon: "fa fa-wallet",
      label: "",
      format: "caption",
      link: "https://www.google.com/",
    },
    {
      icon: "fa fa-gift",
      label: "",
      format: "caption",
      link: "https://github.com/",
    },
    {
      icon: "fa fa-chart-pie",
      label: "",
      format: "caption",
      link: "https://www.youtube.com/",
    },
  ],
  asVariant: "warning"
};
WithoutLabelToolbardark.parameters = {
  docs: {
    description: {
      story:
        "Show ToolbarDark component without caption/label with asVarient:'warning'",
    },
    source: {
      code: `<WithoutLabelToolbardark {...${JSON.stringify(
        WithoutLabelToolbardark.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// TranslatedToolbardark
// -------------------------------------------------------------
export const TranslatedToolbardark = Template.bind({});
TranslatedToolbardark.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "toolbarDark",
    dictionary: dictionary,
  },
};
TranslatedToolbardark.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in Toolbardark. To make this work for the Toolbardark, add a content:{label} value to the dictionary.",
    },
    source: {
      code: `<TranslatedToolbardark {...${JSON.stringify(
        TranslatedToolbardark.args,
        null,
        2
      )}}/>`,
    },
  },
};

