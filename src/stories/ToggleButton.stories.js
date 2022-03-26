import React from "react";
import ToggleButton from "../components/ToggleButton/ToggleButton.react";

const dictionary = JSON.stringify({
    hi: { 
        ToggleButton: {content: "सक्रिय" },
    },
});

export default {
    title: "Design System/ToggleButtons/ToggleButton",
    component: ToggleButton,
    argTypes: {
        content: "Primary",
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
        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
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
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a basic button for general-purpose use",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ToggleButton {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "Active",
    asVariant: "primary",
    asSize: "normal",
    asFloated: "inline",

    withLabel: {
        format: "caption",
        textColor: "#000000",
    },
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

    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<ToggleButton {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated ToggleButton
// -------------------------------------------------------------
export const TranslatedToggleButton = Template.bind({});
TranslatedToggleButton.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "ToggleButton",
    dictionary: dictionary,
  },
};
TranslatedToggleButton.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in.",
    },
    source: {
      code: `<ToggleButton {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

