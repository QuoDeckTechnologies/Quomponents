import React from "react";
import IconLink from "../components/Buttons/IconLink/IconLink.react";

const dictionary = JSON.stringify({
    en: {
        icon: { label: "Home" },
    },
    hi: {
        icon: { label: "होम आइकन" },
    },
});

export default {
    title: "Design System/Buttons/IconLink",
    component: IconLink,
    argTypes: {

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
            options: ["primary", "secondary", "success", "warning"],
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
                    format: "caption",
                    content: "",
                    textColor: "",
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
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays icon with a link",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <IconLink {...args} />;
export const Default = Template.bind({});
Default.args = {
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "",
        textColor: "",
        hoverTextColor: "",
    },
    withIcon: { icon: "fa fa-home" },
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
    isHidden: false,
    isFluid: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<IconLink {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Colored Icon
// -------------------------------------------------------------
export const ColoredIcon = Template.bind({});
ColoredIcon.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "orange",
        textColor: "gray",
        hoverBackgroundColor: "gray",
        hoverTextColor: "orange",
    },
};
ColoredIcon.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the Icon.",
        },
        source: {
            code: `<IconLink withColor={{backgroundColor: "orange", textColor: "gray",hoverBackgroundColor: "gray", hoverTextColor: "orange"}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Icon Only
// -------------------------------------------------------------
export const IconOnly = Template.bind({});
IconOnly.args = {
    ...Default.args,
    content: "",
    isCircular: true,
    withIcon: { icon: "fas fa-home" },

};
IconOnly.parameters = {
    docs: {
        description: {
            story:
                "Any free fontawesome icon can be used as the icon definition. This component is typically used in a bank of Icons or for standalone floating actions. Use isCircular to toggle the rounding.",
        },
        source: {
            code: `<IconLink isCircular={true} withIcon={{ icon: "fas fa-home" }}/>`,
        },
    },
};

// -------------------------------------------------------------
// Labelled IconLink
// -------------------------------------------------------------
export const LabelledIcon = Template.bind({});
LabelledIcon.args = {
    ...Default.args,
    withLabel: {
        format: "caption",
        content: "Home",
        textColor: "",
    },
};

LabelledIcon.parameters = {
    docs: {
        description: {
            story:
                "Use to provide a header callout (format:label) above the icon. Or use as an information caption (format:caption) below the icon. Or use as an information label (format:label) top the icon. The text here can be customized through the withTranslation option.",
        },
        source: {
            code: `<IconLink withLabel={{format: "label",content: "Home",textColor: ""}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Fluid Icon
// -------------------------------------------------------------
export const FluidIcon = Template.bind({});
FluidIcon.args = {
    ...Default.args,
    isFluid: true,
};
FluidIcon.parameters = {
    docs: {
        description: {
            story: "Typically used as the bottom of a modal or a container.",
        },
    },
    source: {
        code: `<IconLink isFluid={true}/>`,
    },
};

// -------------------------------------------------------------
// Animated Icon
// -------------------------------------------------------------
export const AnimatedIcon = Template.bind({});
AnimatedIcon.args = {
    ...Default.args,
    withAnimation: {
        animation: "collapse",
        duration: .8,
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
            code: `<IconLink withAnimation={{animation: "collapse", duration: 0.8, delay: 0}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated Icon
// -------------------------------------------------------------
export const TranslatedIcon = Template.bind({});
TranslatedIcon.args = {
    ...Default.args,
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
            code: `<IconLink withTranslation={{lang: "hi", tgt: "icon", dictionary: ${JSON.stringify(
                {

                    en: {
                        icon: { label: "Home" },
                    },
                    hi: {
                        icon: {
                            label: "होम आइकन",
                        },
                    },
                }
            )}}}}/>`,
        },
    },
};
