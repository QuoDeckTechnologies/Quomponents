import React from "react";
import IconLink from "../components/Buttons/IconLink/IconLink.react";

const dictionary = JSON.stringify({
    en: {
        icon: { label: "Home" },
    },
    hi: {
        icon: { label: "होम" },
    },
});

export default {
    title: "Design System/Buttons/IconLink",
    component: IconLink,
    argTypes: {
        link: "",
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
            options: ["fitted", "compact", "normal", "relaxed","zero"],
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

        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
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
                },
            },
        },
        withLabel: {
            table: {
                category: "with-Params",
                defaultValue: {
                    format: "caption",
                    content: "",
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
    link: "https://quodeck.com/",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "inline",
    asPadded: "normal",

    withLabel: {
        format: "caption",
        content: "Label",
    },
    withIcon: {
        icon: "fa fa-paste",
    },
    withColor: {
        backgroundColor: "",
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
};
Default.parameters = {
    docs: {
        source: {
            code: `<IconLink {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Colored IconLink
// -------------------------------------------------------------
export const ColoredIconlink = Template.bind({});
ColoredIconlink.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "orange",
        textColor: "gray",
        hoverBackgroundColor: "gray",
        hoverTextColor: "orange",
    },
};
ColoredIconlink.parameters = {
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
// Without Labelled IconLink
// -------------------------------------------------------------
export const WithoutLabelledIconlink = Template.bind({});
WithoutLabelledIconlink.args = {
    ...Default.args,
    withLabel: {
        format: "caption",
        content: "",
    },
};

WithoutLabelledIconlink.parameters = {
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
// Animated IconLink
// -------------------------------------------------------------
export const AnimatedIconlink = Template.bind({});
AnimatedIconlink.args = {
    ...Default.args,
    withAnimation: {
        animation: "collapse",
        duration: .8,
        delay: 0,
    },
};
AnimatedIconlink.parameters = {
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
// TranslatedIconlink
// -------------------------------------------------------------
export const TranslatedIconlink = Template.bind({});
TranslatedIconlink.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "icon",
        dictionary: dictionary,
    },
};
TranslatedIconlink.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in iconlink. To make this work for the iconlink, add a icon:{label} value to the dictionary.",
        },
        source: {
            code: `<TranslatedIconlink {...${JSON.stringify(
                TranslatedIconlink.args,
                null,
                2
            )}}/>`,
        },
    },
};

