import React from "react";
import CertificateCard from "../components/CertificateCard/CertificateCard.react";

const dictionary = JSON.stringify({
  hi: {
    certificateCard: {
      text: {
        notstarted: "शुरू नही हुआ",
        inprogress: "चालू है",
        completed: "पूरा है",
      }
    },
  },
});

export default {
  title: "Design System/CertificateCard/CertificateCard",
  component: CertificateCard,
  argTypes: {
    asStatus: {
      control: "select",
      options: ["not started", "in progress", "completed"],
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
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          accentColor: "",
          textColor: "",
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
    componentSubtitle:
      "Certificate Card displays status of completion or certificate if available",
    a11y: { disable: true },
    docs: { iframeHeight: 900 },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CertificateCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  asVariant: "primary",
  asStatus: "completed",
  asSize: "normal",
  withLabel: {
    content: "Negotiation Skills 101",
  },
  withIcon: {
    icon:
      "https://media.istockphoto.com/vectors/certificate-template-vector-id1097299164",
  },
  withColor: {
    accentColor: "",
    textColor: "",
  },
  withAnimation: {
    animation: "collapse",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "certificateCard",
    dictionary: dictionary,
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<CertificateCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Not Started CertificateCard
// -------------------------------------------------------------
export const NotStarted = Template.bind({});
NotStarted.args = {
  ...Default.args,
  asStatus: "not started",
  withIcon: {
    icon: "",
  },
};
NotStarted.parameters = {
  docs: {
    description: {
      story:
        "Use to Show the CertificateCard with not started mark or empty icon.",
    },
    source: {
      code: `<NotStarted {...${JSON.stringify(NotStarted.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// In Progress CertificateCard
// -------------------------------------------------------------
export const InProgress = Template.bind({});
InProgress.args = {
  ...Default.args,
  asStatus: "in progress",
  withIcon: {
    icon: "",
  },
};
InProgress.parameters = {
  docs: {
    description: {
      story: "Use to show certificate card with progress mark or icon.",
    },
    source: {
      code: `<InProgress {...${JSON.stringify(InProgress.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Completed CertificateCard
// -------------------------------------------------------------
export const Completed = Template.bind({});
Completed.args = {
  ...Default.args,
  asStatus: "completed",
  withIcon: {
    icon: "",
  },
};
Completed.parameters = {
  docs: {
    description: {
      story:
        "Use to Show the CertificateCard with Completion check-mark or icon.",
    },
    source: {
      code: `<Completed {...${JSON.stringify(Completed.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Animated CertificateCard
// -------------------------------------------------------------
export const AnimatedCard = Template.bind({});
AnimatedCard.args = {
  ...Default.args,
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedCard.parameters = {
  docs: {
    description: {
      story:
        "Use to animate the entry of the CertificateCard with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
    },
    source: {
      code: `<AnimatedCard {...${JSON.stringify(
        AnimatedCard.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated CertificateCard
// -------------------------------------------------------------
export const TranslatedCard = Template.bind({});
TranslatedCard.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "certificateCard",
    dictionary: dictionary,
  },
};
TranslatedCard.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the Certificate Card, add a CertificateCard:{text:{notstarted, inprogress, completed},label} value to the dictionary.",
    },
    source: {
      code: `<TranslatedCard {...${JSON.stringify(
        TranslatedCard.args,
        null,
        2
      )}}/>`,
    },
  },
};
