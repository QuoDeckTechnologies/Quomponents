import React from "react";
import ActionButton from "../components/Buttons/ActionButton/ActionButton.react";

const dictionary = JSON.stringify({
    hi: {
        ActionButton: {
            title: "ख़रीदे",
            subTitle: "रु. ७५"
        }
    },
});
export default {
    title: "Design System/ActionButton/ActionButton",
    component: ActionButton,
    argTypes: {
        isEllipse: {
            table: {
                category: "is-Toggles",
                defaultValue: true,
            },
        },
        content: {
            table: {
                category: "with-Params",
                defaultValue: {
                    title: "",
                    subTitle: "",
                    image: "https://media.glassdoor.com/sqll/1666177/quodeck-squarelogo-1519202233122.png"
                },
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
    content: {
        title: "BUY",
        subTitle: "Rs. 75",
        image: "https://media.glassdoor.com/sqll/1666177/quodeck-squarelogo-1519202233122.png"
    },
    isEllipse: true,
    asVariant: "primary",
    asSize: "normal",
    asFloated: "inline",
    asPadded: "normal",
    asAligned: "center",

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
    content: {
        title: "BUY",
        subTitle: "Rs. 75",
        image: ""
    }
}
export const ActionButtonWithImage = Template.bind({});

ActionButtonWithImage.args = {
    ...Default.args,
    content: {
        title: "BUY",
        subTitle: "Rs. 75",
        image: "https://media.glassdoor.com/sqll/1666177/quodeck-squarelogo-1519202233122.png"
    }
}
// -------------------------------------------------------------
// Translated ActionButton
// -------------------------------------------------------------
export const TranslatedActionButton = Template.bind({});
TranslatedActionButton.args = {
    ...Default.args,
    content: {
        image: ""
    },
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
                "Use to change the language that the text appears in. To make this work for the ActionButton, add a content:{text:{title, subTitle},label} value to the dictionary.",
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
            content: {
                title: "BUY",
                subTitle: "Rs. 75",
            }
        }),
    };
    const baseObj2 = {
        ...Object.assign({}, Default.args, args, {
            content: {
                image: "https://media.glassdoor.com/sqll/1666177/quodeck-squarelogo-1519202233122.png",
            }
        }),
    };
    return (
        <div>
            <ActionButton
                {...Object.assign({}, baseObj1, {
                })}
            />
            <ActionButton
                {...Object.assign({}, baseObj2, {
                })}
            />
        </div>
    );
};
