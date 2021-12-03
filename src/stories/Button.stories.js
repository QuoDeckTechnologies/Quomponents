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
        },
        isCircular: false,

        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
        },
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
        },
        asAligned: {
            control: "select",
            options: ["left", "right", "center"],
        },

        withColor: {
            backgroundColor: "",
            accentColor: "",
            textColor: "",
            hoverBackgroundColor: "",
            hoverTextColor: "",
        },
        withIcon: {
            icon: "",
            size: "",
            position: "left",
        },
        withLabel: {
            format: "label",
            content: "",
            textColor: "",
        },
        withAnimation: {
            animation: "",
            duration: 0,
            delay: 0,
        },
        withTranslation: {
            lang: "",
            tgt: "",
            dictionary: "",
        },

        isHidden: false,
        isDisabled: false,
        isFluid: false,
        isLoading: false,

        onClick: null,
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
        docs: {
            source: {
                type: "code",
            },
        },
    },
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "Default Button",
    asEmphasis: "contained",
    isCircular: false,

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
};

const AllVariantsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
            asFloated: "inline",
            withLabel: null,
            withIcon: null,
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
    },
};

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
            story:
                "Any free fontawesome icon can be used as the icon definition. This component is typically used in a bank of buttons or for standalone floating actions. Use isCircular to toggle the rounding.",
        },
    },
};

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
};

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
            story:
                "Use to provide a header callout (format:label) above the button. Or use as an information caption (format:caption) below the button. Or use as a tooltip (format:tooltip) to explain what the button does. The text here can be customized through the withTranslation option.",
        },
    },
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
    ...Default.args,
    isLoading: true,
};
LoadingButton.parameters = {
    docs: {
        description: {
            story:
                "Use to indicate a loading state for the button when it stops being clickable. The loading text can be customized with the withTranslation option through a common loading:'' value in the dictionary.",
        },
    },
};

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
    },
};

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
            story:
                "Use to animate the entry of the button with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
    },
};
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
            story:
                "Use to change the language that the text appears in. To make this work for the button, add a button:{text,label} value to the dictionary.",
        },
    },
};
