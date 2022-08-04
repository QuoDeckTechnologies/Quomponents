import React from "react";
import ConfirmationOverlay from "../components/ConfirmationOverlay/ConfirmationOverlay.react";

const dictionary = JSON.stringify({
    hi: {
        confirmationoverlay: {
            header: "क्या वाकई आपकी इसे करने की इच्छा है?",
            yes: "हां",
            no: "नहीं",
        }

    },
});

export default {
    title: "Design System/ConfirmationOverlay",
    component: ConfirmationOverlay,
    argTypes: {
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
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
            table: {
                category: "as-Flags",
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
                    textColor: "",
                    accentColor: "",
                    hoverBackgroundColor: "",
                    hoverTextColor: "",
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
        onConfirm: {
            table: {
                category: "Events",
                defaultValue: null,
            },
        },
        onCancel: {
            table: {
                category: "Events",
                defaultValue: null,
            },
        },
    },
    decorators: [
        (story) => (
            <div>
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Confirmation overlay is to be used to get confirmations before operations",
        a11y: { disable: true },
        docs: { iframeHeight: 300 },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ConfirmationOverlay {...args} />;
export const Default = Template.bind({});
Default.args = {
    withConfirmation: {
        header: "Are you sure you want to do that?",
        yes: "Yes",
        no: "No",
    },
    asPadded: "fitted",
    withColor: {
        backgroundColor: "",
        textColor: "",
        accentColor: "",
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
        tgt: "confirmationoverlay",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false
};
Default.parameters = {
    docs: {
        source: {
            code: `<ConfirmationOverlay 
                    withConfirmation= {{
                        header: "Are you sure you want to do that?",
                        yes: "Yes",
                        no: "No",
                    }}
                    asPadded= "fitted"
                    withColor= {{
                        backgroundColor: "",
                        textColor: "",
                        accentColor: "",
                        hoverBackgroundColor: "",
                        hoverTextColor: "",
                    }}
                    withAnimation= {{
                        animation: "zoom",
                        duration: 0.5,
                        delay: 0,
                    }}
                    withTranslation= {{
                        lang: "en",
                        tgt: "confirmationoverlay",
                        dictionary: dictionary,
                    }}
                    isDisabled= {false}
                    isHidden= {false}/>`,
        },
    },
};

// -------------------------------------------------------------
// Colored Overlay
// -------------------------------------------------------------
export const ColoredOverlay = Template.bind({});
ColoredOverlay.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#000000",
        textColor: "#ffffff",
        accentColor: "#ffbf00",
        hoverBackgroundColor: "#ffff00",
        hoverTextColor: "#ff0000",
    },
};
ColoredOverlay.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the overlay.",
        },
        source: {
            code: `<ConfirmationOverlay 
            withConfirmation= {{
                header: "Are you sure you want to do that?",
                yes: "Yes",
                no: "No",
            }}
            asPadded= "fitted"
            withColor={{
                backgroundColor: "#000000",
                textColor: "#ffffff",
                accentColor: "#ffbf00",
                hoverBackgroundColor: "#ffff00",
                hoverTextColor: "#ff0000",
            }}
            withAnimation= {{
                animation: "zoom",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "en",
                tgt: "confirmationoverlay",
                dictionary: dictionary,
            }}
            isDisabled= {false}
            isHidden= {false}/>`,
        },
    },
};

// -------------------------------------------------------------
// Animated Overlay
// -------------------------------------------------------------
export const AnimatedOverlay = Template.bind({});
AnimatedOverlay.args = {
    ...Default.args,
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedOverlay.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the overlay with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<ConfirmationOverlay 
            withConfirmation= {{
                header: "Are you sure you want to do that?",
                yes: "Yes",
                no: "No",
            }}
            asPadded= "fitted"
            withColor={{
                backgroundColor: "",
                textColor: "",
                accentColor: "",
                hoverBackgroundColor: "",
                hoverTextColor: "",
            }}
            withAnimation= {{
                animation: "zoom",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "en",
                tgt: "confirmationoverlay",
                dictionary: dictionary,
            }}
            isDisabled= {false}
            isHidden= {false}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated Overlay
// -------------------------------------------------------------
export const TranslatedOverlay = Template.bind({});
TranslatedOverlay.args = {
    ...Default.args,
    content: "Translated Overlay",
    withTranslation: {
        lang: "hi",
        tgt: "confirmationoverlay",
        dictionary: dictionary,
    },
};
TranslatedOverlay.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in.",
        },
        source: {
            code: `<ConfirmationOverlay 
            withConfirmation= {{
                header: "Are you sure you want to do that?",
                yes: "Yes",
                no: "No",
            }}
            asPadded= "fitted"
            withColor={{
                backgroundColor: "",
                textColor: "",
                accentColor: "",
                hoverBackgroundColor: "",
                hoverTextColor: "",
            }}
            withAnimation= {{
                animation: "zoom",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "hi",
                tgt: "confirmationoverlay",
                dictionary: dictionary,
            }}
            isDisabled= {false}
            isHidden= {false}/>`,
        },
    },
};