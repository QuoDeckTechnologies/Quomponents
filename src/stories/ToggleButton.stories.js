import React from "react";
import ToggleButton from "../components/ToggleButton/ToggleButton.react";

const dictionary = JSON.stringify({
    hi: {
        toggleButton: {
            label: "सक्रिय",
        }
    },
});
export default {
    title: "Design System/ToggleButton/ToggleButton",
    component: ToggleButton,
    argTypes: {
        label: "Active",
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
        componentSubtitle: "Displays a Toggle button ",
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
    label: "Active",
    asFloated: "inline",

    withColor: {
        backgroundColor: "#454545",
        accentColor: "#FFAB00",
        textColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "toggleButton",
        dictionary: dictionary,
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
        tgt: "toggleButton",
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
