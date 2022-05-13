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
    componentSubtitle: "Displays a PdfViewer with a question and jumbled answer, the user need to submit the correct word as answer, we can switch between the image and SlideHeader by adding or removing the image prop",
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
    editorWidth: false,
    pdf: {
      id: "default-pdf",
      extention: ""
    },
    backgroundImage: {
      id: "background-image",
      extention: ""
    },
    // pdf: {
    //   id: "default-pdf",
    //   extention: ".pdf"
    // }
  },
  docLibrary: [{
    id: "default-pdf",
    doc: 'data:application/pdf;base64,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'
  }],
  // imageLibrary: [{
  //   id: "background-image",
  //   image: "data:image/png;base64,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"
  // }],
  slideId: 0,
  withColor: {
    backgroundColor: "#fff",
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