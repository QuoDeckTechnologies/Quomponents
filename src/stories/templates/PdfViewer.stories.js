import React from "react";
import PdfViewer from "../../components/Templates/PdfViewer/PdfViewer.react";

export default {
  title: "Design System/Templates/PdfViewer/PdfViewer",
  component: PdfViewer,
  argTypes: {
    data: {
    },
    docLibrary: [{}],
    slideId: 0,
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "#fff",
          sliderBackgroundColor: "#fff",
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
    componentSubtitle: "This template component is to be used to show pdf",
    a11y: { disable: true },
    docs: {
      iframeHeight: 650,
    },
  },
};
const Template = (args) => <PdfViewer {...args} />;
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
  data: {
    pdf: {
      id: "default-pdf",
      extention: ""
    },
  },
  docLibrary: [{
    id: "default-pdf",
  }],
  slideId: 0,
  withColor: {
    backgroundColor: "#ddd6d600",
    sliderBackgroundColor: "#3a3636a6",
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
      code: `<PdfViewer {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};