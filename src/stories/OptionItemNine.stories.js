import React, { useEffect, useState } from "react";
import OptionItemNine from "../components/OptionItem/OptionItemNine/OptionItemNine.react";

const dictionary = JSON.stringify({
    hi: {
        optionItemNine: {
            placeholder: "प्रश्नोत्तरी परिणाम के लिए संदेश",
        },
    },
});

export default {
    title: "Design System/OptionItem/OptionItemNine",
    component: OptionItemNine,
    argTypes: {
        minValue: {},
        maxValue: {},
        content: {},
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
        onMinChange: {
            table: {
                category: "Events",
                defaultValue: null,
            },
        },
        onMaxChange: {
            table: {
                category: "Events",
                defaultValue: null,
            },
        },
        onContentChange: {
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
            "Displays a OptionItem component with two ShortField and an InputField component.",
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
    return <OptionItemNine {...args} />;
};
export const Default = Template.bind({});
Default.args = {
    minValue: {
        value: 0,
        editable: true,
    },
    maxValue: {
        value: 100,
        editable: true,
    },
    content: {
        value: "",
        placeholder: "Message for Quiz Result",
        maxLength: 80,
    },
    removable: false,
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
        tgt: "optionItemNine",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<OptionItemNine {...${JSON.stringify(
                Default.args,
                null,
                2
            )}}/>`,
        },
    },
};
