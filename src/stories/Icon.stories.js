import React from "react";
import Icon from "../components/Buttons/Icon/Icon.react";

// const dictionary = JSON.stringify({
//     // en: {
//     //     loading: "Please wait...",
//     //     button: {
//     //         text: "Button",
//     //         label: "Do not press this repeatedly...",
//     //     },
//     // },
//     hi: {
//         loading: "बस एक मिनट...",
//         button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
//     },
// });

export default {
    title: "Design System/Buttons/Icon",
    component: Icon,
    argTypes: {
        content: "Button",
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
        componentSubtitle: "Displays a basic button for general-purpose use",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};


//----------------------------------------------------------
// Home
//---------------------------------------------------------
const Template = (args) => <Icon {...args}/>;
export const Home = Template.bind({});
Home.args = {
    content: "Home",
    asEmphasis: "text",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "inline",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "Do not press this button repeatedly...",
        textColor: "#000000",
    },
    withIcon: { icon: "fas fa-globe", size: "1em", position: "left" },
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    // withAnimation: {
    //     animation: "zoom",
    //     duration: 0.5,
    //     delay: 0,
    // },
    // withTranslation: {
    //     lang: "en",
    //     tgt: "button",
    //     dictionary: dictionary,
    // },

    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};
Home.parameters = {
    docs: {
        source: {
            code: `<Button {...${JSON.stringify(Home.args, null, 2)}}/>`,
        },
    },
};

//----------------------------------------------------------
// Tiny Home
//---------------------------------------------------------

export const TinyHome = Template.bind({});
TinyHome.args = {
    content: "TinyHome",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "tiny",
    asFloated: "inline",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "Do not press this button repeatedly...",
        textColor: "#000000",
    },
    withIcon: { icon: "fas fa-home", size: "1em", position: "left" },
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    withAnimation: {
        animation: "fade",
        duration: 0.5,
        delay: 0,
    },
    // withTranslation: {
    //     lang: "en",
    //     tgt: "button",
    //     dictionary: dictionary,
    // },

    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};
TinyHome.parameters = {
    docs: {
        source: {
            code: `<Button {...${JSON.stringify(TinyHome.args, null, 2)}}/>`,
        },
    },
};

//----------------------------------------------------------
// Document
//---------------------------------------------------------
export const Victory = Template.bind({});
Victory.args = {
    format:"popover",
    content: "Victory",
    asEmphasis: "text",
    isCircular: false,

    asVariant: "primary",
    asSize: "big",
    asFloated: "inline",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "Do not press this button repeatedly...",
        textColor: "#000000",
    },
    withIcon: { icon: "fab fa-angellist", size: "1Victorym", position: "left" },
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    // withAnimation: {
    //     animation: "zoom",
    //     duration: 0.5,
    //     delay: 0,
    // },
    // withTranslation: {
    //     lang: "en",
    //     tgt: "button",
    //     dictionary: dictionary,
    // },

    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};
Victory.parameters = {
    docs: {
        source: {
            code: `<Button {...${JSON.stringify(Victory.args, null, 2)}}/>`,
        },
    },
}