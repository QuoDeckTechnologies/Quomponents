import React from "react";
import Ribbon from "../components/Ribbons/Ribbon/Ribbon.react";

const dictionary = JSON.stringify({
    // en: {
    //     loading: "Please wait...",
    //     button: {
    //         text: "Button",
    //         label: "Do not press this repeatedly...",
    //     },
    // },
    hi: {
        loading: "बस एक मिनट...",
        button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
    },
});


export default {
    title: "Design System/Ribbons/Ribbon",
    component: Ribbon,
    argTypes: {
        asEmphasis: {
            control: "select",
            options: ["New", "Premium", "Restricted", "Free"],
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
                    border: "1px solid #000",
                    height: "40vh",
                    width: "99%",
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
const Template = (args) => <Ribbon {...args} />;
export const Default = Template.bind({});
Default.args = {
    asEmphasis: "New",
    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "Do not press this button repeatedly...",
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
        tgt: "button",
        dictionary: dictionary,
    },

    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
    decorators: [
        (story) => (
            <div
                style={{
                    border: "1px solid #000",
                    image: "https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg",
                    height: "20vh",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
};
Default.parameters = {
    docs: {
        source: {
            code: `<Ribbon {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};