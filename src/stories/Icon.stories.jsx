import React from "react";
import Icon from "../components/Icons/Icon/Icon.react";

const dictionary = JSON.stringify({
    // en: {
    //     loading: "Please wait...",
    //     Icon: {
    //         text: "Icon",
    //         label: "Do not press this repeatedly...",
    //     },
    // },
    hi: {
        loading: "बस एक मिनट...",
        icon: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
    },
});

export default {
    title: "Icons/Icon",
    component: Icon,
    argTypes: {
        content: "Icon",
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
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a basic Icon for general-purpose use",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Icon {...args} />;
export const FirstIcon = Template.bind({});
FirstIcon.args = {
    content: "",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "Share",
        textColor: "#000000",
    },
    withIcon: { icon: "fas fa-share", size: "1em", position: "left" },
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
        tgt: "icon",
        dictionary: dictionary,
    },

    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};
FirstIcon.parameters = {
    docs: {
        source: {
            code: `<Icon {...${JSON.stringify(FirstIcon.args, null, 2)}}/>`,
        },
    },
};


// -------------------------------------------------------------
// Animated Icon
// -------------------------------------------------------------
export const AnimatedIcon = Template.bind({});
AnimatedIcon.args = {
    ...FirstIcon.args,
    content: "",
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedIcon.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the Icon with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<Icon withAnimation={{animation: "collapse", duration: 0.5, delay: 0}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated Icon
// -------------------------------------------------------------
export const TranslatedIcon = Template.bind({});
TranslatedIcon.args = {
    ...FirstIcon.args,
    content: "",
    withTranslation: {
        lang: "hi",
        tgt: "icon",
        dictionary: dictionary,
    },
};
TranslatedIcon.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the Icon, add a Icon:{text,label} value to the dictionary.",
        },
        source: {
            code: `<Icon withTranslation={{lang: "hi", tgt: "icon", dictionary: ${JSON.stringify(
                {
                    hi: {
                        loading: "बस एक मिनट...",
                        icon: {
                            label: "चिन्ह",
                        },
                    },
                }
            )}}}}/>`,
        },
    },
};
