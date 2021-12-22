import React from "react";
import IconLink from "../components/Buttons/IconLink/IconLink.react";

const dictionary = JSON.stringify({
    en: {
        loading: "Please wait...",
        button: {
            text: "Button",
            label: "Do not press this repeatedly...",
        },
    },
    hi: {
        loading: "बस एक मिनट...",
        button: { text: "होम", label: "इसे बार-बार न दबाएं..." },
    },
});

export default {
    title: "Design System/Buttons/IconLink",
    component: IconLink,
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
            options: ["primary", "secondary", "warning"],
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
        componentSubtitle: "Displays a icon with a link",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};


//----------------------------------------------------------
// Home
//---------------------------------------------------------
const Template = (args) => <IconLink {...args} />;
export const Home = Template.bind({});
Home.args = {
    content: "Home",
    asEmphasis: "contained",
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
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },

    isDisabled: false,
    isHidden: false,
    isFluid: false,
};
Home.parameters = {
    docs: {
        source: {
            code: `<IconLink {...${JSON.stringify(Home.args, null, 2)}}/>`,
        },
    },
};


//----------------------------------------------------------
// Circular
//---------------------------------------------------------
export const Circular = Template.bind({});
Circular.args = {
    content: "Circle",
    asEmphasis: "contained",
    isCircular: true,

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
    withIcon: { icon: "fab fa-apple", size: "1em", position: "left" },
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
    isFluid: false,
};
Circular.parameters = {
    docs: {
        source: {
            code: `<IconLink {...${JSON.stringify(Circular.args, null, 2)}}/>`,
        },
    },
};


// -------------------------------------------------------------
// Icon Hover Button
// -------------------------------------------------------------
export const IconHover = Template.bind({});
IconHover.args = {
    content: "Hover on it",
    asEmphasis: "contained",
    isCircular: false,
    
    withColor: {
        backgroundColor: "#ffc900",
        textColor: "black",
        hoverBackgroundColor: "#85d5d6",
        hoverTextColor: "",
    },

    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },

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
    withIcon: { icon: "fab fa-adn", size: "1em", position: "left" },

    isDisabled: false,
    isHidden: false,
    isFluid: false,
};
IconHover.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the button.",
        },
        source: {
            code: `<IconHover withColor={{backgroundColor: "#ffc900", textColor: "#666666",hoverBackgroundColor: "#666666", hoverTextColor: "#ffc900"}}}/>`,
        },
    },
};


// -------------------------------------------------------------
// IconLabel
// -------------------------------------------------------------
export const IconLabel = Template.bind({});
IconLabel.args = {
    content: "Home",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "inline",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "label",
        content: "Home",
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
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },

    isDisabled: false,
    isHidden: false,
    isFluid: false,
  
};

IconLabel.parameters = {
    docs: {
        description: {
            story:
                "Use to provide a header callout (format:label) above the button. Or use as a tooltip (format:tooltip) to explain what the button does. The text here can be customized through the withTranslation option.",
        },
        source: {
            code: `<IconLabel withLabel={{format: "label",content: "Press to Confirm...",textColor: "#000000"}}}/>`,
        },
    },
};


//----------------------------------------------------------
// Translated  button
//---------------------------------------------------------
export const TransButton = Template.bind({});
TransButton.args = {
    ...Home.args,
    content: "Home",
    withTranslation: {
        lang: "hi",
        tgt: "button",
        dictionary: dictionary,
    },
};
TransButton.parameters = {
    docs: {
        description: {
            story: "Translating the Button",
        },
        source: {
            code: `<TransButton withTranslation={{lang:"hi", tgt:"button",dictionary:${JSON.stringify(
                {
                    hi: {
                        loading:
                            "बस एक मिनट",
                        button: {
                            text: "होम",
                            label: "इसे लगातार न दबाएं..."
                        },
                    },
                }
            )}}}/>`,
        },
    },
};