import React from "react";
import ImageField from "../components/ImageField/ImageField.react";

const dictionary = JSON.stringify({
    hi: {
        ImageField: {
            title: "अपलोड",
        },
    },
});

export default {
    title: "Design System/ImageField",
    component: ImageField,
    argTypes: {
        title: "Upload",
        image: "",
        aspectRatio: 1,
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
                    accentColor: "",
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
        onChange: {
            table: {
                category: "Events",
                defaultValue: null,
            },
        },
    },
    parameters: {
        componentSubtitle: "Displays a ImageField Component",
        a11y: { disable: true },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ImageField {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: "Upload",
    image: "",
    aspectRatio: 1,
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "ImageField",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
    isFluid: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<ImageField {...${JSON.stringify(
                Default.args,
                null,
                2
            )}}/>`,
        },
    },
};
