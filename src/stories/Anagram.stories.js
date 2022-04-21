import React from "react";
import Anagram from "../components/Anagram/Anagram.react";

export default {
  title: "Design System/Anagram/Anagram",
  component: Anagram,
  argTypes: {
    content: {
      image: "",
      caption: "",
      label: "",
    },
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          captionColor: "",
          labelColor: "",
          inputFieldTextColor: "",
          inputFieldAccentColor: "",
          inputFieldBackgroundColor: "",
          buttonTextColor: "",
          buttonBackgroundColor: "",
          buttonHoverBackgroundColor: "",
          buttonHoverTextColor: "",
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
    componentSubtitle: "Displays a Anagram with BannerCard,label caption and InputField which can be used with submit button.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 650,
    },
  },
};
const Template = (args) => <Anagram {...args} />;
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
  content: {
    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    label: "RAWNES",
  },
  asVariant: "warning",
  withColor: {
    captionColor: "",
    labelColor: "#000000",
    inputFieldTextColor: "",
    inputFieldAccentColor: "",
    inputFieldBackgroundColor: "",
    buttonTextColor: "",
    buttonBackgroundColor: "",
    buttonHoverBackgroundColor: "",
    buttonHoverTextColor: "",
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

// -------------------------------------------------------------
// MultipleAnagram
// -------------------------------------------------------------
const MultipleAnagramTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
    }),
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
      <div style={{ margin: "1em", width: "25em" }}>
        <Anagram
          {...Object.assign({}, baseObj, {
            asVariant: 'warning',
            withAnimation: {
              animation: "slideRight",
              duration: 0.5,
              delay: 0,
            },
          })}
        />
      </div>
      <div style={{ margin: "1em", width: "25em" }}>
        <Anagram
          {...Object.assign({}, baseObj, {
            asVariant: 'warning',
            withAnimation: {
              animation: "slideup",
              duration: 0.5,
              delay: 0.8,
            },
          })}
        />
      </div>
      <div style={{ margin: "1em", width: "25em" }}>
        <Anagram
          {...Object.assign({}, baseObj, {
            asVariant: 'warning',
            withAnimation: {
              animation: "slideLeft",
              duration: 0.5,
              delay: 0.5,
            },
          })}
        />
      </div>
    </div>
  );
};
export const MultipleAnagram = MultipleAnagramTemplate.bind({});
MultipleAnagram.parameters = {
  docs: {
    description: {
      story: "Multiple Anagram.",
    },
    source: {
      code: `<Anagram content:{}/>`,
    },
  },
};