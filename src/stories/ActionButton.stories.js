import React from "react";
import ActionButton from "../components/ActionButton/ActionButton.react.jsx";

const dictionary = JSON.stringify({
    // en: {
    //     loading: "Please wait...",
    //     button: {
    //         text: "Button",
    //         label: "Do not press this repeatedly...",
    //     },
    // },
    hi: {
        ActionButton: {
            rupeeSymbol: "रु.",
            label: "ख़रीदे",
            amount:"७५"
        }

    },
});

export default {
    title: "Design System/ActionButton/ActionButton",
    component: ActionButton,
    argTypes: {
        buttonType: {
            control: "select",
            options: ["withButton", "withImage"],
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
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
            table: {
                category: "as-Flags",
            },
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
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

        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
                    textColor: "",
                },
            },
        },
        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    icon: "",
                    width: "",
                    iconColor:""   
                },
            },
        },
        withLabel: {
            table: {
                category: "with-Params",
                defaultValue: {
                    format: "label",
                    content: "",
                    amount: "",
                    rupeeSymbol: "Rs."
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
        docs: { iframeHeight: 200 },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ActionButton {...args} />;
export const Default = Template.bind({});
Default.args = { 
    asVariant: "primary",
    asSize: "normal",
    asFloated: "inline",
    asPadded: "normal",
    asAligned: "center",
    buttonType: "withButton",

    withLabel: {
        format: "caption",
        content: "BUY",
        rupeeSymbol: "Rs.",
        amount: "75"
    },
    withIcon: { 
        icon: "https://lh3.googleusercontent.com/xLmXTCiuwYkuQ3QNLCMzRJbZstJfKd4JolyOy2UuEekbaDJvqDuc1dATac4lVmAfE3KoP6E=s85", 
        width: "70%",
        iconColor:"#fff"   
},
    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "button",
        dictionary: dictionary,
    },

    isDisabled: false,
    isHidden: false,
 
};
Default.parameters = {
    docs: {
        source: {
            code: `<Button {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};






export const ActionButtonWithButton = Template.bind({});

ActionButtonWithButton.args = {
    ...Default.args,
    buttonType: "withButton"
}


export const ActionButtonWithImage = Template.bind({});

ActionButtonWithImage.args = {
    ...Default.args,
    buttonType: "withImage"
}

// -------------------------------------------------------------
// Translated ActionButton
// -------------------------------------------------------------
export const TranslatedActionButton = Template.bind({});
TranslatedActionButton.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "ActionButton",
        dictionary: dictionary,
    },
};
TranslatedActionButton.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the ActionButton, add a buttonType:{text:{withButton, withImage},label} value to the dictionary.",
        },
        source: {
            code: `<ActionButton {...${JSON.stringify(
                TranslatedActionButton.args,
                null,
                2
            )}}/>`,
        },
    },
};








export const AllVariantsTemplate = (args) => {
    const baseObj1 = {
        ...Object.assign({}, Default.args, args, {
            buttonType: "withButton"
        }),
    };
    const baseObj2 = {
        ...Object.assign({}, Default.args, args, {
            buttonType: "withImage"
        }),
    };
    return (
        <div>
            <ActionButton
                {...Object.assign({}, baseObj1, {
                    asVariant: "primary",
                    asSize: "normal",

                })}
            />
            <ActionButton
                {...Object.assign({}, baseObj2, {
                    asSize: "normal",
                    withIcon: { 
                        icon: "https://lh3.googleusercontent.com/xLmXTCiuwYkuQ3QNLCMzRJbZstJfKd4JolyOy2UuEekbaDJvqDuc1dATac4lVmAfE3KoP6E=s85",
                         width: "70%",
                         iconColor:"white" },
                })}
            />
        </div>
    );
};
