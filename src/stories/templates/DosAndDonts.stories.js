import React from "react";
import DosAndDonts from "../../components/Templates/DosAndDonts/DosAndDonts.react";

const dictionary = JSON.stringify({
  hi: {
    dosDonts: {
      dos: "क्या करें",
      donts: "क्या न करें",
      tip: "कृपया देखने के लिए ऊपर दिए गए बटन पर क्लिक करें",
    },
  },
});
export default {
  title: "Design System/Templates/DosAndDonts",
  component: DosAndDonts,
  argTypes: {
    data: {},
    slideId: 0,
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
      },
    },
    isChoice: {
      table: {
        defaultValue: true,
      },
    },
    asEmphasis: {
      control: "select",
      options: ["text", "outlined", "contained"],
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          slideHeaderTextColor: "",
          slideHeaderAccentColor: "",
          slideHeaderBackgroundColor: "",
          textBlockBackgroundColor: "",
          bulletBlockTextdColor: "",
          bulletBlockBackgroundColor: "",
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
    componentSubtitle:
      "Displays DosAndDonts slide with slideHeader and choice buttons which shows BulletBlock accordingly",
    a11y: { disable: true },
    docs: {
      iframeHeight: 400,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <DosAndDonts {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    bullets: [
      "DO Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Quisque sed turpis vel lectus suscipit auctor",
      "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
    ],
    rebullets: [
      "Don't Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Quisque sed turpis vel lectus suscipit auctor",
      "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
    ],
  },
  isChoice: false,
  asEmphasis: "contained",
  slideId: 0,
  asVariant: "warning",
  withColor: {
    slideHeaderTextColor: "#FFFFFF",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    textBlockBackgroundColor: "#ff000000",
    bulletBlockTextColor: "#ffffff",
    bulletBlockBackgroundColor: "#ad292980",
    backgroundColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "dosDonts",
    dictionary: dictionary,
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<DosAndDonts {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Dos Don'ts WithImage
// -------------------------------------------------------------
export const DosDontsWithImage = Template.bind({});
DosDontsWithImage.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    image: {
      id: "header-image",
      extention: "",
    },
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Quisque sed turpis vel lectus suscipit auctor",
      "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
    ],
    rebullets: [
      "R Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Quisque sed turpis vel lectus suscipit auctor",
      "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
    ],
  },
  imageLibrary: [
    {
      id: "header-image",
      image:
        "https://images.unsplash.com/photo-1661553914969-1c781d515fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1661&q=80",
    },
  ],
  isChoice: false,
  asEmphasis: "contained",
  slideId: 0,
  asVariant: "warning",
  withColor: {
    slideHeaderTextColor: "#FFFFFF",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    textBlockBackgroundColor: "#ff000000",
    bulletBlockTextColor: "#ffffff",
    bulletBlockBackgroundColor: "#ad292980",
    backgroundColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
};
DosDontsWithImage.parameters = {
  docs: {
    source: {
      code: `<DosAndDonts {...${JSON.stringify(
        DosDontsWithImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// TranslatedDOsDON'Ts
// -------------------------------------------------------------
export const TranslatedDosDonts = Template.bind({});
TranslatedDosDonts.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Quisque sed turpis vel lectus suscipit auctor",
      "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
    ],
    rebullets: [
      "R Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Quisque sed turpis vel lectus suscipit auctor",
      "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
    ],
  },
  isChoice: false,
  asEmphasis: "contained",
  slideId: 0,
  asVariant: "warning",
  withColor: {
    slideHeaderTextColor: "#FFFFFF",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    textBlockBackgroundColor: "#ff000000",
    bulletBlockTextColor: "#ffffff",
    bulletBlockBackgroundColor: "#ad292980",
    backgroundColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "hi",
    tgt: "dosDonts",
    dictionary: dictionary,
  },
  isHidden: false,
};
TranslatedDosDonts.parameters = {
  docs: {
    source: {
      code: `<DosAndDonts {...${JSON.stringify(
        TranslatedDosDonts.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// DosDontsWithBackgroundImage
// -------------------------------------------------------------
export const DosDontsWithBackgroundImage = Template.bind({});
DosDontsWithBackgroundImage.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    backgroundImage: {
      id: "background-image",
      extention: "",
    },
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Quisque sed turpis vel lectus suscipit auctor",
      "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
    ],
    rebullets: [
      "R Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Quisque sed turpis vel lectus suscipit auctor",
      "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
    ],
  },
  imageLibrary: [
    {
      id: "background-image",
      image:
        "https://images.unsplash.com/photo-1661854735281-f597d47132ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80",
    },
  ],
  isChoice: false,
  asEmphasis: "contained",
  slideId: 0,
  asVariant: "warning",
  withColor: {
    slideHeaderTextColor: "#FFFFFF",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    textBlockBackgroundColor: "#ff000000",
    bulletBlockTextColor: "#ffffff",
    bulletBlockBackgroundColor: "#ad292980",
    backgroundColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
};
DosDontsWithBackgroundImage.parameters = {
  docs: {
    source: {
      code: `<DosAndDonts {...${JSON.stringify(
        DosDontsWithBackgroundImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
