import React from "react";
import Button from "../components/Buttons/Button/Button.react";

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
        button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
    },
});

export default {
    title: "Design System/Buttons/Button",
    component: Button,
    argTypes: {
        name: "Button",
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
    parameters: {
        docs: {
            source: {
                type: "code",
            },
        },
    },
};

const Template = (args) => (
    <div style={{ width: "100%", textAlign: "center" }}>
        <Button {...args} />
    </div>
);

export const DefaultButton = Template.bind({});

DefaultButton.args = {
    name: "Button",
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
        lang: "",
        tgt: "button",
        dictionary: dictionary,
    },

    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};

export const IconOnlyButton = Template.bind({});

IconOnlyButton.args = {
    name: "",
    asEmphasis: "contained",
    isCircular: true,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withIcon: { icon: "fas fa-share", size: "1em", position: "left" },
    withLabel: {
        format: "popover",
        content: "Click to share this...",
        textColor: "",
    },
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};

export const FluidButton = Template.bind({});

FluidButton.args = {
    name: "Button",
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
        textColor: "",
    },
    withIcon: { icon: "fas fa-share", size: "1em", position: "left" },
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: true,
};

export const LabelledButton = Template.bind({});

LabelledButton.args = {
    name: "Button",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "label",
        content: "Press to Confirm...",
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
    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};

export const LoadingButton = Template.bind({});

LoadingButton.args = {
    name: "Button",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    isDisabled: false,
    isLoading: true,
    isHidden: false,
    isFluid: true,
};

export const ColoredButton = Template.bind({});

ColoredButton.args = {
    name: "Button",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "big",
    asFloated: "none",
    asPadded: "relaxed",
    asAligned: "center",
    withIcon: { icon: "fas fa-share", size: "1em", position: "left" },
    withColor: {
        backgroundColor: "#ffc900",
        textColor: "#666666",
        hoverBackgroundColor: "#666666",
        hoverTextColor: "#ffc900",
    },
    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};

export const AnimatedButton = Template.bind({});

AnimatedButton.args = {
    name: "Button",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "big",
    asFloated: "none",
    asPadded: "relaxed",
    asAligned: "center",
    withLabel: {
        format: "caption",
        content: "Do not press this button repeatedly...",
        textColor: "#000000",
    },
    withIcon: { icon: "fas fa-share", size: "1em", position: "left" },
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },

    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};

export const TranslatedButton = Template.bind({});

TranslatedButton.args = {
    name: "Button",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "secondary",
    asSize: "big",
    asFloated: "none",
    asPadded: "relaxed",
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
    withTranslation: {
        lang: "hi",
        tgt: "button",
        dictionary: dictionary,
    },

    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};
