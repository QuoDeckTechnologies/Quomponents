import React from "react";
import FlipConfirm from "../components/Buttons/FlipConfirm/FlipConfirm.react";

const dictionary = JSON.stringify({
    en: {
        loading: "Please wait...",
        flipconfirm: {
            text: "Button",
            label: "Do not press this repeatedly...",
            header: "Are you sure you want to do that?",
            yes: "Yes",
            no: "No",
        }
    },
    hi: {
        loading: "बस एक मिनट...",
        flipconfirm: {
            text: "बटन",
            label: "इसे बार-बार न दबाएं...",
            header: "क्या वाकई आपकी इसे करने की इच्छा है?",
            yes: "हां",
            no: "नहीं",
        }

    },
});

export default {
    title: "Design System/Buttons/FlipConfirm",
    component: FlipConfirm,
    argTypes: {
        content: "FlipConfirm",
        asEmphasis: {
            control: "select",
            options: ["text", "outlined", "contained"],
            table: {
                category: "as-Flags",
            },
        },
        isCircular: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
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
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
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
        asAligned: {
            control: "select",
            options: ["left", "right", "center"],
            table: {
                category: "as-Flags",
            },
        },
        withConfirmation: {
            table: {
                category: "with-Params",
                defaultValue: {
                    header: "Are you sure you want to do that?",
                    yes: "Yes",
                    no: "No",
                },
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
        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    icon: "",
                    size: "",
                    position: "left",
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
        isDisabled: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        isFluid: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        isLoading: {
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
                    fontSize: "0.85em",
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
const Template = (args) => <FlipConfirm {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "FlipConfirm",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withConfirmation: {
        header: "Are you sure you want to do that?",
        yes: "Yes",
        no: "No",
    },
    withLabel: {
        format: "caption",
        content: "Do not press this button repeatedly...",
        textColor: "#000000",
    },
    withIcon: { icon: "fas fa-sync-alt", size: "1em", position: "left" },
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
    withTranslation: {
        lang: "en",
        tgt: "flipconfirm",
        dictionary: dictionary,
    },

    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<FlipConfirm {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};


// -------------------------------------------------------------
// Icon Button
// -------------------------------------------------------------
export const IconOnlyButton = Template.bind({});
IconOnlyButton.args = {
    ...Default.args,
    content: "",
    isCircular: true,
    withIcon: { icon: "fas fa-sync-alt", size: "1em", position: "left" },
    withLabel: {
        format: "popover",
        content: "Click to open this...",
        textColor: "",
    },
};
IconOnlyButton.parameters = {
    docs: {
        description: {
            story:
                "Any free fontawesome icon can be used as the icon definition. This component is typically used in a bank of buttons or for standalone floating actions. Use isCircular to toggle the rounding.",
        },
        source: {
            code: `<FlipConfirm isCircular={true} withIcon={{ icon: "fas fa-sync-alt", size: "1em", position: "left" }}} withLabel={{format: "popover",content: "Click to open this...",textColor: ""}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Fluid Button
// -------------------------------------------------------------
export const FluidButton = Template.bind({});
FluidButton.args = {
    ...Default.args,
    content: "Fluid Button",
    isFluid: true,
};
FluidButton.parameters = {
    docs: {
        description: {
            story: "Typically used as the bottom of a modal or a container.",
        },
    },
    source: {
        code: `<FlipConfirm isFluid={true}/>`,
    },
};

// -------------------------------------------------------------
// Labelled Button
// -------------------------------------------------------------
export const LabelledButton = Template.bind({});
LabelledButton.args = {
    ...Default.args,
    content: "Labelled Button",
    withLabel: {
        format: "label",
        content: "Press to Confirm...",
        textColor: "#000000",
    },
};

LabelledButton.parameters = {
    docs: {
        description: {
            story:
                "Use to provide a header callout (format:label) above the button. Or use as an information caption (format:caption) below the button. Or use as a tooltip (format:tooltip) to explain what the button does. The text here can be customized through the withTranslation option.",
        },
        source: {
            code: `<FlipConfirm withLabel={{format: "label",content: "Press to Confirm...",textColor: "#000000"}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Loading Button
// -------------------------------------------------------------
export const LoadingButton = Template.bind({});
LoadingButton.args = {
    ...Default.args,
    isLoading: true,
};
LoadingButton.parameters = {
    docs: {
        description: {
            story:
                "Use to indicate a loading state for the button when it stops being clickable. The loading text can be customized with the withTranslation option through a common loading:'' value in the dictionary.",
        },
        source: {
            code: `<FlipConfirm isLoading={true}/>`,
        },
    },
};

// -------------------------------------------------------------
// Colored Button
// -------------------------------------------------------------
export const ColoredButton = Template.bind({});
ColoredButton.args = {
    ...Default.args,
    content: "Colored Button",
    withColor: {
        backgroundColor: "#ffc900",
        textColor: "#666666",
        hoverBackgroundColor: "#666666",
        hoverTextColor: "#ffc900",
    },
};
ColoredButton.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the button.",
        },
        source: {
            code: `<FlipConfirm withColor={{backgroundColor: "#ffc900", textColor: "#666666",hoverBackgroundColor: "#666666", hoverTextColor: "#ffc900"}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Animated Button
// -------------------------------------------------------------
export const AnimatedButton = Template.bind({});
AnimatedButton.args = {
    ...Default.args,
    content: "Animated Button",
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedButton.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the button with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<FlipConfirm withAnimation={{animation: "collapse", duration: 0.5, delay: 0}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated Button
// -------------------------------------------------------------
export const TranslatedFlipButton = Template.bind({});
TranslatedFlipButton.args = {
    ...Default.args,
    content: "Translated Button",
    withTranslation: {
        lang: "hi",
        tgt: "flipconfirm",
        dictionary: dictionary,
    },
};
TranslatedFlipButton.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the button, add a button:{text,label} value to the dictionary.",
        },
        source: {
            code: `<FlipConfirm withTranslation={{lang: "hi", tgt: "flipconfirm", dictionary: ${JSON.stringify(
                {
                    hi: {
                        loading: "बस एक मिनट...",
                        flipconfirm: {
                            text: "बटन",
                            label: "इसे बार-बार न दबाएं...",
                            header: "क्या वाकई आपकी इसे करने की इच्छा है?",
                            yes: "हां",
                            no: "नहीं",
                        },
                
                    },
                }
            )}}}}/>`,
        },
    },
};