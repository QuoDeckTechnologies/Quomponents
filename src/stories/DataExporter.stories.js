import React from "react";
import DataExporter from "../components/Buttons/DataExporter/DataExporter.react";

const dictionary = JSON.stringify({
  // en: {
  //     loading: "Please wait...",
  //     button: { text: "Export", label: "" },
  // },
  hi: {
    loading: "बस एक मिनट...",
    button: { text: "एक्स्पोर्ट", label: "" },
  },
});

export default {
  title: "Design System/Buttons/DataExporter",
  component: DataExporter,
  argTypes: {
    data: { type: "json", content: [] },
    content: "Export",
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
          backgroundColor: "",
          accentColor: "",
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
          size: "",
          position: "left",
        },
      },
    },
    withLabel: {
      table: {
        category: "with-Params",
        defaultValue: {
          format: "label",
          content: "",
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
    isLoading: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    onDone: {
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
    componentSubtitle:
      "Displays a basic data exporter button for general-purpose use. We can export file or json data using this component.",
    a11y: { disable: true },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <DataExporter {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: {
    type: "json",
    content: [
      {
        published: false,
        tags: [],
        _id: "5a22f2",
        name: "MERN",
        category: "course",
        summary: "",
        identifier: "9La_ApGyc",
        owner: "5a1b6f",
        createdAt: "2021-12-01T09:14:55.642Z",
        id: "5a22f2",
      },
      {
        published: false,
        tags: [],
        _id: "5a8db2",
        name: "Test",
        category: "course",
        summary: "",
        identifier: "PVSa42HZi",
        owner: "5a6b0c",
        createdAt: "2021-12-09T07:29:13.056Z",
        id: "5a8db2",
      },
    ],
  },
  content: "Export",
  asEmphasis: "contained",
  isCircular: false,
  asVariant: "primary",
  asSize: "normal",
  asFloated: "none",
  asPadded: "normal",
  asAligned: "center",
  withLabel: {
    format: "label",
    content: "",
    textColor: "",
  },
  withIcon: { icon: "fas fa-share", size: "1em", position: "left" },
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
    tgt: "button",
    dictionary: dictionary,
  },
  isDisabled: false,
  isLoading: false,
  isHidden: false,
  isFluid: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<DataExporter {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// File Exporter
// -------------------------------------------------------------

export const FileExporter = Template.bind({});
FileExporter.args = {
  ...Default.args,
  data: {
    type: "file",
    content: "https://demo.quodeck.com/public/samples/user_upload_format.xlsx",
  },
};
FileExporter.parameters = {
  docs: {
    description: {
      story:
        "To export file using url select type as 'file' and pass file url to content field.",
    },
    source: {
      code: `<DataExporter data={{ type: "file", content: "" }} asVariant="primary" isDisabled={true} />`,
    },
  },
};

// -------------------------------------------------------------
// Variants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
      asFloated: "inline",
      withLabel: null,
      withIcon: null,
      withTranslation: null,
      withColor: null,
    }),
  };
  return (
    <div>
      <DataExporter
        {...Object.assign({}, baseObj, {
          content: "Primary",
          asVariant: "primary",
        })}
      />{" "}
      <DataExporter
        {...Object.assign({}, baseObj, {
          content: "Secondary",
          asVariant: "secondary",
        })}
      />{" "}
      <DataExporter
        {...Object.assign({}, baseObj, {
          content: "Success",
          asVariant: "success",
        })}
      />{" "}
      <DataExporter
        {...Object.assign({}, baseObj, {
          content: "Warning",
          asVariant: "warning",
        })}
      />{" "}
      <DataExporter
        {...Object.assign({}, baseObj, {
          content: "Error",
          asVariant: "error",
        })}
      />{" "}
    </div>
  );
};
export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
  docs: {
    description: {
      story: "5 variants are supported. Use as per purpose noted here.",
    },
    source: {
      code: `<DataExporter data={{ type: "json", content: [] }} asVariant="primary"/>`,
    },
  },
};

// -------------------------------------------------------------
// Emphasis
// -------------------------------------------------------------
const AllEmphasisTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
      asFloated: "inline",
      withLabel: null,
      withIcon: null,
      withTranslation: null,
      withColor: null,
      asVariant: "success",
    }),
  };
  return (
    <div>
      <DataExporter
        {...Object.assign({}, baseObj, {
          content: "Text",
          asEmphasis: "text",
        })}
      />{" "}
      <DataExporter
        {...Object.assign({}, baseObj, {
          content: "Outlined",
          asEmphasis: "outlined",
        })}
      />{" "}
      <DataExporter
        {...Object.assign({}, baseObj, {
          content: "Contained",
          asEmphasis: "contained",
        })}
      />
    </div>
  );
};
export const AllEmphasis = AllEmphasisTemplate.bind({});
AllEmphasis.parameters = {
  docs: {
    description: {
      story:
        "3 options are supported for emphasis as text, outlined, contained",
    },
    source: {
      code: `<DataExporter data={{ type: "json", content: [] }} asEmphasis="contained"/>`,
    },
  },
};

// -------------------------------------------------------------
// Custom color export button
// -------------------------------------------------------------
export const CustomColorExporter = Template.bind({});
CustomColorExporter.args = {
  ...Default.args,
  content: "Export",
  withColor: {
    backgroundColor: "#163E70",
    accentColor: "",
    textColor: "#ffffff",
    hoverBackgroundColor: "#607A9B",
    hoverTextColor: "ffffff",
  },
};
CustomColorExporter.parameters = {
  docs: {
    source: {
      code: `<DataExporter data={{ type: "json", content: [] }} content="Export" withColor: {{ backgroundColor: "#163E70", accentColor: "", textColor: "#ffffff", hoverBackgroundColor: "#607A9B", hoverTextColor: "ffffff" }/>`,
    },
  },
};

// -------------------------------------------------------------
// Circular Icon Button Exporter
// -------------------------------------------------------------
export const IconButtonCircularExporter = Template.bind({});
IconButtonCircularExporter.args = {
  ...Default.args,
  content: "",
  isCircular: true,
  withIcon: { icon: "fa fa-download", size: "1em", position: "left" },
  withLabel: {
    format: "popover",
    content: "Click here to export",
    textColor: "",
  },
};
IconButtonCircularExporter.parameters = {
  docs: {
    description: {
      story:
        "Any free fontawesome icon can be used as the icon definition. This component is typically used in a bank of buttons or for standalone floating actions. Use isCircular to toggle the rounding.",
    },
    source: {
      code: `<DataExporter data={{ type: "json", content: [] }}  isCircular={true} withIcon={{ icon: "fas fa-share", size: "1em", position: "left" }}} withLabel={{format: "popover",content: "Click here to export",textColor: ""}}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Icon Button
// -------------------------------------------------------------
export const IconExporter = Template.bind({});
IconExporter.args = {
  ...Default.args,
  content: "",
  asEmphasis: "text",
  asVariant: "error",
  isCircular: false,
  withIcon: { icon: "fa fa-download", size: "1em", position: "left" },
};
IconExporter.parameters = {
  docs: {
    source: {
      code: `<DataExporter data={{ type: "json", content: [] }} withIcon={{ icon: "fas fa-share", size: "1em", position: "left" }}} withLabel={{format: "popover",content: "Click here to export",textColor: ""}}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Export button with Icon positioned at right of label
// -------------------------------------------------------------
export const ExporterWithIcon = Template.bind({});
ExporterWithIcon.args = {
  ...Default.args,
  content: "Export",
  withIcon: { icon: "fas fa-share", size: "1em", position: "right" },
  withLabel: {
    format: "popover",
    content: "Click here to export",
    textColor: "",
  },
};
ExporterWithIcon.parameters = {
  docs: {
    source: {
      code: `<DataExporter data={{ type: "json", content: [] }} content="Export" asVariant="primary" withIcon: { icon: "fas fa-share", size: "1em", position: "right" }/>`,
    },
  },
};

// -------------------------------------------------------------
// Export button without Icon
// -------------------------------------------------------------
export const ExporterWithoutIcon = Template.bind({});
ExporterWithoutIcon.args = {
  ...Default.args,
  content: "Export",
  withIcon: { icon: "", size: "", position: "left" },
  withLabel: {
    format: "popover",
    content: "Click here to export",
    textColor: "",
  },
};
ExporterWithoutIcon.parameters = {
  docs: {
    source: {
      code: `<DataExporter data={{ type: "json", content: [] }} asVariant="primary" withIcon: { icon: "", size: "", position: "left" }/>`,
    },
  },
};

// -------------------------------------------------------------
// Translated Button
// -------------------------------------------------------------
export const TranslatedExporterButton = Template.bind({});
TranslatedExporterButton.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "button",
    dictionary: dictionary,
  },
};
TranslatedExporterButton.parameters = {
  docs: {
    source: {
      code: `<DataExporter data={{ type: "json", content: [] }} asVariant="primary" withTranslation: { lang: "hi" tgt: "button" dictionary: { dictionary } }/>`,
    },
  },
};

export const DisabledExporterButton = Template.bind({});
DisabledExporterButton.args = {
  ...Default.args,
  isDisabled: true,
};
DisabledExporterButton.parameters = {
  docs: {
    source: {
      code: `<DataExporter data={{ type: "json", content: [] }} asVariant="primary" isDisabled={true} />`,
    },
  },
};
