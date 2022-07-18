import React from "react";
import ButtonBank from "../components/ButtonBank/ButtonBank.react";

export default {
  title: "Design System/ButtonBank/Button",
  component: ButtonBank,
  argTypes: {
    content: [],
    isHorizontal: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
  },
  parameters: {
    componentSubtitle: "Displays a ButtonBank Component",
    a11y: { disable: true },
    docs: {
      iframeHeight: 400,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ButtonBank {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: [
    {
      content: "Default Button",
      asEmphasis: "contained",
      isCircular: false,
      asFloated: "none",
      asPadded: "normal",
      asAligned: "center",
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
      isDisabled: false,
      isLoading: false,
      isHidden: false,
      isFluid: false,
    },
    {
      content: "Default Button",
      asEmphasis: "contained",
      isCircular: false,

      asFloated: "none",
      asPadded: "normal",
      asAligned: "center",
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
      isDisabled: false,
      isLoading: false,
      isHidden: false,
      isFluid: false,
    },
    {
      content: "Default Button",
      asEmphasis: "contained",
      isCircular: false,
      asFloated: "none",
      asPadded: "normal",
      asAligned: "center",
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
      isDisabled: false,
      isLoading: false,
      isHidden: false,
      isFluid: false,
    },
  ],
  isHorizontal: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<ButtonBank {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated Button
// -------------------------------------------------------------
export const TranslatedButtonBank = Template.bind({});
TranslatedButtonBank.args = {
  ...Default.args,
  content: [
    {
      content: "Default Button",
      asEmphasis: "contained",
      isCircular: false,
      asFloated: "none",
      asPadded: "normal",
      asAligned: "center",
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
      withTranslation: {
        lang: "hi",
        tgt: "button",
        dictionary: JSON.stringify({
          hi: {
            loading: "बस एक मिनट...",
            button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
          },
        }),
      },
      isDisabled: false,
      isLoading: false,
      isHidden: false,
      isFluid: false,
    },
    {
      content: "Default Button",
      asEmphasis: "contained",
      isCircular: false,

      asFloated: "none",
      asPadded: "normal",
      asAligned: "center",
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
      withTranslation: {
        lang: "hi",
        tgt: "button",
        dictionary: JSON.stringify({
          hi: {
            loading: "बस एक मिनट...",
            button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
          },
        }),
      },
      isDisabled: false,
      isLoading: false,
      isHidden: false,
      isFluid: false,
    },
    {
      content: "Default Button",
      asEmphasis: "contained",
      isCircular: false,
      asFloated: "none",
      asPadded: "normal",
      asAligned: "center",
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
      withTranslation: {
        lang: "hi",
        tgt: "button",
        dictionary: JSON.stringify({
          hi: {
            loading: "बस एक मिनट...",
            button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
          },
        }),
      },
      isDisabled: false,
      isLoading: false,
      isHidden: false,
      isFluid: false,
    },
  ],
};
TranslatedButtonBank.parameters = {
  docs: {
    description: {
      story: "Use to change the language that the text appears in.",
    },
    source: {
      code: `<ButtonBank {...${JSON.stringify(
        TranslatedButtonBank.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Horizontal ButtonBank
// -------------------------------------------------------------
export const HorizontalButtonBank = Template.bind({});
HorizontalButtonBank.args = {
  ...Default.args,
  isHorizontal: true,
};
HorizontalButtonBank.parameters = {
  docs: {
    description: {
      story: "Use to change the directions of the button.",
    },
    source: {
      code: `<ButtonBank {...${JSON.stringify(
        HorizontalButtonBank.args,
        null,
        2
      )}}/>`,
    },
  },
};
