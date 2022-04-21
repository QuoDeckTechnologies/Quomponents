import React from "react";
import Anagram from "../components/Anagram/Anagram.react";

const dictionary = JSON.stringify({
  hi: {
    loading: "बस एक मिनट...",
    bannercard: { header: "", content: "" },
    ribbon: {
      new: "नया",
      restricted: "प्रतिबंधित",
      premium: "अधिमूल्य",
      free: "नि: शुल्क",
    },
    Anagram: {
      title: "क्वोडेक इमर्जिंग लीडरशिप प्रोग्राम",
      description:
        "अपने करियर को सितारों तक ले जाने के इस विशेष अवसर के लिए आवेदन करने का मौका जीतें",
      dates: {
        end_date: "3 मई",
        start_date: "28 फरवरी",
      },
    },
  },
});

export default {
  title: "Design System/Anagram/Anagram",
  component: Anagram,
  argTypes: {
    image: "",
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
    componentSubtitle: "Displays a Anagram with BannerCard, text and icon.",
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
  return <Anagram {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
  asVariant: "primary",
  asSize: "normal",
  withColor: {
    backgroundColor: "",
    accentColor: "",
    textColor: "#b60d17",
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
      code: `<Anagram {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};