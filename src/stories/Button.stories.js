import React from "react";
import Button from "../components/Buttons/Button/Button.react";

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
    title: "Design System/Buttons/Button",
    component: Button,
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
            options: ["fitted", "compact", "normal", "relaxed", "zero","zero"],
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

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "Default Button",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "fitted",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "Do not press this button repeatedly...",
        textColor: "#000000",
    },
    withIcon: { icon: "fas fa-share", size: "1em", position: "left" },
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
        tgt: "button",
        dictionary: dictionary,
    },

    isDisabled: false,
    isLoading: false,
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
// DisabledButton
// -------------------------------------------------------------
export const DisabledButton = Template.bind({});
DisabledButton.args = {
    content: "Disabled Button",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "label",
        content: "",
        textColor: "#000000",
    },
    withIcon: { icon: "fas fa-minus-circle", size: "1em", position: "left" },
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
        tgt: "button",
        dictionary: dictionary,
    },

    isDisabled: true,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};
DisabledButton.parameters = {
    docs: {
        source: {
            code: `<Button {...${JSON.stringify(
                DisabledButton.args,
                null,
                2
            )}}/>`,
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
            withIcon: null,
            withTranslation: null,
            withColor: null,
        }),
    };
    return (
        <div>
            <Button
                {...Object.assign({}, baseObj, {
                    content: "Primary",
                    asVariant: "primary",
                })}
            />{" "}
            <Button
                {...Object.assign({}, baseObj, {
                    content: "Secondary",
                    asVariant: "secondary",
                })}
            />{" "}
            <Button
                {...Object.assign({}, baseObj, {
                    content: "Success",
                    asVariant: "success",
                })}
            />{" "}
            <Button
                {...Object.assign({}, baseObj, {
                    content: "Warning",
                    asVariant: "warning",
                })}
            />{" "}
            <Button
                {...Object.assign({}, baseObj, {
                    content: "Error",
                    asVariant: "error",
                })}
            />{" "}
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
            code: `<Button asVariant="primary"/>`,
        },
    },
};

// -------------------------------------------------------------
// Icon Button
// -------------------------------------------------------------
export const IconOnlyButton = Template.bind({});
IconOnlyButton.args = {
    ...Default.args,
    content: "",
    isCircular: true,
    withIcon: { icon: "fas fa-share", size: "1em", position: "left" },
    withLabel: {
        format: "popover",
        content: "Click to share this...",
        textColor: "",
    },
};
IconOnlyButton.parameters = {
    docs: {
        description: {
            story: "Any free fontawesome icon can be used as the icon definition. This component is typically used in a bank of buttons or for standalone floating actions. Use isCircular to toggle the rounding.",
        },
        source: {
            code: `<Button isCircular={true} withIcon={{ icon: "fas fa-share", size: "1em", position: "left" }}} withLabel={{format: "popover",content: "Click to share this...",textColor: ""}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Linked Button
// -------------------------------------------------------------
export const UrlButton = Template.bind({});
UrlButton.args = {
    ...Default.args,
    content: "Go to QuoDeck",
    url: "https://www.quodeck.com",
};
UrlButton.parameters = {
    docs: {
        description: {
            story: "Any free fontawesome icon can be used as the icon definition. This component is typically used in a bank of buttons or for standalone floating actions. Use isCircular to toggle the rounding.",
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
    content: "Fluid Button",
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
// Labelled Button
// -------------------------------------------------------------
export const LabelledButton = Template.bind({});
LabelledButton.args = {
    ...Default.args,
    content: "Labelled Button",
    withLabel: {
        format: "label",
        content: "Press to Confirm...",
        textColor: "#000000",
    },
};

LabelledButton.parameters = {
    docs: {
        description: {
            story: "Use to provide a header callout (format:label) above the button. Or use as an information caption (format:caption) below the button. Or use as a tooltip (format:tooltip) to explain what the button does. The text here can be customized through the withTranslation option.",
        },
        source: {
            code: `<Button withLabel={{format: "label",content: "Press to Confirm...",textColor: "#000000"}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Loading Button
// -------------------------------------------------------------
export const LoadingButton = Template.bind({});
LoadingButton.args = {
    ...Default.args,
    isLoading: true,
};
LoadingButton.parameters = {
    docs: {
        description: {
            story: "Use to indicate a loading state for the button when it stops being clickable. The loading text can be customized with the withTranslation option through a common loading:'' value in the dictionary.",
        },
        source: {
            code: `<Button isLoading={true}/>`,
        },
    },
};

// -------------------------------------------------------------
// Colored Button
// -------------------------------------------------------------
export const ColoredButton = Template.bind({});
ColoredButton.args = {
    ...Default.args,
    content: "Colored Button",
    withColor: {
        backgroundColor: "#ffc900",
        textColor: "#666666",
        hoverBackgroundColor: "#666666",
        hoverTextColor: "#ffc900",
    },
};
ColoredButton.parameters = {
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
    content: "Animated Button",
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedButton.parameters = {
    docs: {
        description: {
            story: "Use to animate the entry of the button with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
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
    content: "Translated Button",
    withTranslation: {
        lang: "hi",
        tgt: "button",
        dictionary: dictionary,
    },
};
TranslatedButton.parameters = {
    docs: {
        description: {
            story: "Use to change the language that the text appears in. To make this work for the button, add a button:{text,label} value to the dictionary.",
        },
        source: {
            code: `<Button withTranslation={{lang: "hi", tgt: "button", dictionary: ${JSON.stringify(
                {
                    hi: {
                        loading: "बस एक मिनट...",
                        button: {
                            text: "बटन",
                            label: "इसे बार-बार न दबाएं...",
                        },
                    },
                }
            )}}}}/>`,
        },
    },
};
