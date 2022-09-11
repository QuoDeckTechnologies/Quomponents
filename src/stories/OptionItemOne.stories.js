import React, { useState, useEffect } from "react";
import OptionItemOne from "../components/OptionItem/OptionItemOne/OptionItemOne.react";

const dictionary = JSON.stringify({
    hi: {
        optionItemOne: {
            placeholder: "प्रश्नोत्तरी परिणाम के लिए संदेश",
        },
    },
});

export default {
    title: "Design System/OptionItem/OptionItemOne",
    component: OptionItemOne,
    argTypes: {
        value: "",
        placeholder: "",
        maxLength: 0,
        removable: false,
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
                    accentColor: "",
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
        isDisabled: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        isHidden: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        onSubmit: {
            table: {
                category: "Events",
                defaultValue: null,
            },
        },
        onRemove: {
            table: {
                category: "Events",
                defaultValue: null,
            },
        },
    },
    parameters: {
        componentSubtitle:
            "Displays a OptionItem component with an InputField component.",
        a11y: { disable: true },
        docs: {
            iframeHeight: 250,
        },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
    return <OptionItemOne {...args} />;
};
export const Default = Template.bind({});
Default.args = {
    value: "",
    placeholder: "Option Item One",
    maxLength: 300,
    removable: true,
    withColor: {
        backgroundColor: "#ffab000d",
        accentColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "optionItemOne",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<OptionItemOne {...${JSON.stringify(
                Default.args,
                null,
                2
            )}}/>`,
        },
    },
};
