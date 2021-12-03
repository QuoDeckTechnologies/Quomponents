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

export const Default = Template.bind({});

Default.args = {
    name: "Default Button",
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
    ...Default.args,
    name: "",
    isCircular: true,
    withIcon: { icon: "fas fa-share", size: "1em", position: "left" },
    withLabel: {
        format: "popover",
        content: "Click to share this...",
        textColor: "",
    },
};

export const FluidButton = Template.bind({});

FluidButton.args = {
    ...Default.args,
    name: "Fluid Button",
    isFluid: true,
};

export const LabelledButton = Template.bind({});

LabelledButton.args = {
    ...Default.args,
    name: "Labelled Button",
    withLabel: {
        format: "label",
        content: "Press to Confirm...",
        textColor: "#000000",
    },
};

export const LoadingButton = Template.bind({});

LoadingButton.args = {
    ...Default.args,
    isLoading: true,
};

export const ColoredButton = Template.bind({});

ColoredButton.args = {
    ...Default.args,
    name: "Colored Button",
    withColor: {
        backgroundColor: "#ffc900",
        textColor: "#666666",
        hoverBackgroundColor: "#666666",
        hoverTextColor: "#ffc900",
    },
};

export const AnimatedButton = Template.bind({});

AnimatedButton.args = {
    ...Default.args,
    name: "Animated Button",
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
};

export const TranslatedButton = Template.bind({});

TranslatedButton.args = {
    ...Default.args,
    name: "Translated Button",
    withTranslation: {
        lang: "hi",
        tgt: "button",
        dictionary: dictionary,
    },
};
