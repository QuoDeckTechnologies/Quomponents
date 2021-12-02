import React from "react";
import Button from "../components/Buttons/Button/Button.react";

export default {
    title: "Design System/Buttons/Button",
    component: Button,
    argTypes: {
        name: "Button",
        asEmphasis: {
            control: "select",
            options: ["text", "outlined", "contained"],
        },

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
        isPaged: false,
        isLoading: false,

        onClick: null,
    },
};

const Template = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});

DefaultButton.args = {
    name: "Button",
    asEmphasis: "contained",

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "Do not press this button repeatedly...",
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
        lang: "en",
        tgt: "button",
        dictionary: JSON.stringify({
            en: {
                button: {
                    text: "Button",
                    label: "Do not press this repeatedly...",
                },
            },
            hi: {
                button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
            },
        }),
    },

    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
    isPaged: false,
};

export const IconOnlyButton = Template.bind({});

IconOnlyButton.args = {
    name: "",
    asEmphasis: "contained",

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

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
    isPaged: false,
};

export const FluidButton = Template.bind({});

FluidButton.args = {
    name: "Button",
    asEmphasis: "contained",

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "Do not press this button repeatedly...",
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
    isPaged: false,
};

export const LabelledButton = Template.bind({});

LabelledButton.args = {
    name: "Button",
    asEmphasis: "contained",

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "label",
        content: "Press to Confirm...",
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
    isPaged: false,
};

export const LoadingButton = Template.bind({});

LoadingButton.args = {
    name: "Button",
    asEmphasis: "contained",

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
    isPaged: false,
};

export const TranslatedButton = Template.bind({});

TranslatedButton.args = {
    name: "Button",
    asEmphasis: "contained",

    asVariant: "secondary",
    asSize: "big",
    asFloated: "none",
    asPadded: "relaxed",
    asAligned: "center",
    withLabel: {
        format: "caption",
        content: "Do not press this button repeatedly...",
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
        dictionary: JSON.stringify({
            en: {
                button: {
                    text: "Button",
                    label: "Do not press this repeatedly...",
                },
            },
            hi: {
                button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
            },
        }),
    },

    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
    isPaged: false,
};
