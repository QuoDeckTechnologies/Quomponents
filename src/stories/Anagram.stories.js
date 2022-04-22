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
    componentSubtitle: "Displays a Anagram with BannerCard, label, caption and InputField which can be used with submit button.",
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
    label: "Rawnes",
  },
  asVariant: "warning",
  withColor: {
    captionColor: "#000000",
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
              animation: "slideUp",
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
      code: `<Anagram content={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      label: "RAWNES",}/>`,
    },
  },
};
// -------------------------------------------------------------
// ColoredAnagram
// -------------------------------------------------------------
const ColoredAnagramTemplate = (args) => {
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
            withColor: {
              captionColor: "#5072a4",
              labelColor: "#ff0000",
              inputFieldTextColor: "#12ff00",
              inputFieldAccentColor: "#00ff17",
              inputFieldBackgroundColor: "#000000",
              buttonTextColor: "#00ffa4",
              buttonBackgroundColor: "#000000",
              buttonHoverBackgroundColor: "#FF0000",
              buttonHoverTextColor: "#0000ff",
            },
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
            withColor: {
              captionColor: "#FFFF00",
              labelColor: "#000000",
              inputFieldTextColor: "#0000ff",
              inputFieldAccentColor: "#FF0000",
              inputFieldBackgroundColor: "#FF00FF",
              buttonTextColor: "#ffff17",
              buttonBackgroundColor: "#12ff00",
              buttonHoverBackgroundColor: "#ff0000",
              buttonHoverTextColor: "#5072a4",
            },
            withAnimation: {
              animation: "slideUp",
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
            withColor: {
              captionColor: "#ffff00",
              labelColor: "#0f00f0",
              inputFieldTextColor: "",
              inputFieldAccentColor: "",
              inputFieldBackgroundColor: "",
              buttonTextColor: "",
              buttonBackgroundColor: "",
              buttonHoverBackgroundColor: "",
              buttonHoverTextColor: "",
            },
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
export const ColoredAnagram = ColoredAnagramTemplate.bind({});
ColoredAnagram.parameters = {
  docs: {
    description: {
      story: "displays Colored Anagram.",
    },
    source: {
      code: `<Anagram content={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      label: "RAWNES",}
      withColor: {
        captionColor: "#FFFF00",
        labelColor: "#000000",
        inputFieldTextColor: "#0000ff",
        inputFieldAccentColor: "#FF0000",
        inputFieldBackgroundColor: "#FF00FF",
        buttonTextColor: "#ffff17",
        buttonBackgroundColor: "#12ff00",
        buttonHoverBackgroundColor: "#ff0000",
        buttonHoverTextColor: "#5072a4",
      },/>`,
    },
  },
};