import React from "react";
import IconLink from '../components/Buttons/IconLink/IconLink.react'

const dictionary = JSON.stringify({
    hi: {
        loading: "बस एक मिनट...",
        button: { text: "",label: "होम" },
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

        onClick: {
            action: 'clicked',
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
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a icon with a link",
        a11y: { disable: true },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <IconLink {...args} />;
export const Default = Template.bind({});
Default.args = {
    asEmphasis: "text",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "inline",
    asPadded: "normal",
    asAligned: "center",

 
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
    withTranslation: {
        lang: "en",
        tgt: "button",
        dictionary: dictionary,
    },
    withLabel: {
        format: "label",
        content: "Home",
        textColor: "#000000",
    },

    isDisabled: false,
    isHidden: false,
    isFluid: false,

};
Default.parameters = {
    docs: {
        source: {
            code: `<Button {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Variants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
            asFloated: "inline",
            withLabel: null,
            withTranslation: null,
            withColor: null,
            
        }),
    };
    return (
        <div>
            <IconLink
                {...Object.assign({}, baseObj, {
                    asVariant: "primary",
                    withIcon: { icon: "fas fa-home", size: "1em", position: "left" },

                })}
            />
            <IconLink
                {...Object.assign({}, baseObj, {
                    asVariant: "secondary",
                    withIcon: { icon: "fas fa-desktop", size: "1em", position: "left" },
                })}
            />
            <IconLink
                {...Object.assign({}, baseObj, {
                    asVariant: "success",
                    withIcon: { icon: "fas fa-address-book", size: "1em", position: "left" },
                })}
            />
            <IconLink
                {...Object.assign({}, baseObj, {
                    asVariant: "warning",
                    withIcon: { icon: "fas fa-address-card", size: "1em", position: "left" },
                })}
            />
            <IconLink
                {...Object.assign({}, baseObj, {
                    asVariant: "error",
                    withIcon: { icon: "fas fa-book-open", size: "1em", position: "left" },
                })}
            />
        </div>
    );
};


export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
    docs: {
        description: {
            story: "5 variants are supported. Use as per purpose noted here.",
        },
        source: {
            code: `<IconList asVariant="primary"/>`,
        },
    },
};


// -------------------------------------------------------------
// Icon Button
// -------------------------------------------------------------
export const IconOnlyButton = Template.bind({});
IconOnlyButton.args = {
    ...Default.args,
    asEmphasis:"contained",
    isCircular: true,
    withIcon: { icon: "fas fa-home", size: "1em", position: "left" },
    withLabel: {
        format: "caption",
        content: "",
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
            code: `<Button isCircular={true} withIcon={{ icon: "fas fa-share", size: "1em", position: "left" }}} withLabel={{format: "popover",content: "Click to share this...",textColor: ""}}}/>`,
        },
    },
};



// -------------------------------------------------------------
// Fluid Button
// -------------------------------------------------------------
export const FluidButton = Template.bind({});
FluidButton.args = {
    ...Default.args,
    asEmphasis:"contained",
    isFluid: true,
};
FluidButton.parameters = {
    docs: {
        description: {
            story: "Typically used as the bottom of a modal or a container.",
        },
    },
    source: {
        code: `<Button isFluid={true}/>`,
    },
};

// -------------------------------------------------------------
// Caption Button
// -------------------------------------------------------------

export const CaptionButton = Template.bind({});
CaptionButton.args = {
    ...Default.args,
    withLabel: {
        format: "caption",
        content: "Home",
        textColor: "#000000",
    },
};

CaptionButton.parameters = {
    docs: {
        description: {
            story:
                "Use to provide a header callout (format:label) above the button. Or use as an information caption (format:caption) below the button. Or use as a tooltip (format:tooltip) to explain what the button does. The text here can be customized through the withTranslation option.",
        },
        source: {
            code: `<Button withLabel={{format: "label",content: "Press to Confirm...",textColor: "#000000"}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Colored Button
// -------------------------------------------------------------

export const ColoredButton = Template.bind({});
ColoredButton.args ={
    ...Default.args,
    withColor: {
        backgroundColor: "#ffc900",
        textColor: "#666666",
        hoverBackgroundColor: "#666666",
        hoverTextColor: "#ffc900",
    },
}

Default.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the button.",
        },
        source: {
            code: `<Button withColor={{backgroundColor: "#ffc900", textColor: "#666666",hoverBackgroundColor: "#666666", hoverTextColor: "#ffc900"}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Animated Button
// -------------------------------------------------------------
export const AnimatedButton = Template.bind({});
AnimatedButton.args = {
    ...Default.args,
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
            code: `<Button withAnimation={{animation: "collapse", duration: 0.5, delay: 0}}}/>`,
        },
    },
};


// -------------------------------------------------------------
// Translated Button
// -------------------------------------------------------------
export const TranslatedButton = Template.bind({});
TranslatedButton.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "button",
        dictionary: dictionary,
    },
};
TranslatedButton.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the button, add a button:{text,label} value to the dictionary.",
        },
        source: {
            code: `<Button withTranslation={{lang: "hi", tgt: "button", dictionary: ${JSON.stringify(
                {
                    hi: {
                        loading: "बस एक मिनट...",
                        button: {
                            text: "",
                            label: "होम" 
                        },
                    },
                }
            )}}}}/>`,
        },
    },
};