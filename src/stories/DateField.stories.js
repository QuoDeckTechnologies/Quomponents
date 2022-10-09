import React from "react";
import DateField from "../components/DateField/DateField.react";

const dictionary = JSON.stringify({
    hi: {
        dateField: {
            label: "आरंभ करने की तिथि",
        },
    },
    en: {
        dateField: {
            label: "Start Date",
        },
    },
});

export default {
    title: "Design System/DateField",
    component: DateField,
    argTypes: {
        label: "",
        value: Date.now(),
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed", "zero", "zero"],
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
    decorators: [(story) => <div>{story()}</div>],
    parameters: {
        componentSubtitle: "Default DateField for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 400 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <DateField {...args} />;
export const Default = Template.bind({});
Default.args = {
    label: "Start Date",
    value: Date.now(),
    asPadded: "normal",
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "dateField",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<DateField {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
