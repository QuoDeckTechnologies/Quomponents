import React from "react";
import ImageUploadModal from "../components/ImageUploadModal/ImageUploadModal.react";

export default {
  title: "Design System/ImageUploadModal/ImageUploadModal",
  component: ImageUploadModal,
  argTypes: {
    content: {
      table: {
        defaultValue: {
          
        },
      },
    },
    aspectRatio: {
      table: {
        defaultValue: ''
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
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a ImageUploadModal.",
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
  return <ImageUploadModal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: {},
  aspectRatio:1,
  asVariant:'warning',
  asSize: "normal",
  withColor: {
    backgroundColor: "",
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
      code: `<ImageUploadModal {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
