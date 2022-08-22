import React from "react";
import ViewSection from "../components/RibbonMenu/homeMenu/sections/ViewSection.react";

const dictionary = JSON.stringify({
  en: {
    viewSection: {
      view: "View",
      sorter: "Sorter",
      mobile: "Mobile",
      desktop: "Desktop",
      comments: "Comments",
    },
  },
  hi: {
    viewSection: {
      view: "दृश्य",
      sorter: "छँटाईकर्ता",
      mobile: "मोबाइल",
      desktop: "डेस्कटॉप",
      comments: "टिप्पणियाँ",
    },
  },
});
export default {
  title: "Design System/RibbonMenu/RibbonHomeMenu/ViewSection",
  component: ViewSection,
  argTypes: {
    actions: {},
    asFloated: {
      control: "select",
      options: ["left", "right", "inline"],
      table: {
        category: "as-Flags",
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
          width: "100%",
          textAlign: "center",
          fontSize: "1.25em",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a ViewSection for general-purpose use",
    a11y: { disable: true },
    docs: {
      iframeHeight: 300,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ViewSection {...args} />;
export const Default = Template.bind({});
Default.args = {
  actions: {
    setUserOptions: (view) => {
      return view;
    },
  },
  asFloated: "left",
  withTranslation: {
    lang: "en",
    tgt: "viewSection",
    dictionary: dictionary,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<ViewSection {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Translated ViewSection
// -------------------------------------------------------------
export const TranslatedViewSection = Template.bind({});
TranslatedViewSection.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "viewSection",
    dictionary: dictionary,
  },
};
TranslatedViewSection.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the ViewSection, add a ViewSection:{} value to the dictionary.",
    },
    source: {
      code: `<ViewSection {...${JSON.stringify(
        TranslatedViewSection.args,
        null,
        2
      )}}/>`,
    },
  },
};
