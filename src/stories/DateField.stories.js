import React from "react";
import DateField from "../components/DateField/DateField.react";

const dictionary = JSON.stringify({
    hi: {
        dateField: {
            label: "आरंभ करने की तिथि",
        }
    },
    en: {
        dateField: {
            label: "Start Date",
        }
    }
});

export default {
    title: "Design System/DateField",
    component: DateField,
    argTypes: {
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
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
        withLabel: {
            table: {
                category: "with-Params",
                defaultValue: {
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
            table: {
                category: "Events",
                defaultValue: null,
            },
        },
    },
    decorators: [
        (story) => (
            <div style={{
                width: "100%",
                // textAlign: "center",
            }}>
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle:
            "Default DateField for general purpose use",
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
    asSize: "normal",
    asFloated: "none",
    withColor: {
        backgroundColor: "#aaaaaa",
        accentColor: "",
        textColor: "#666666",
    },
    withLabel: {
        content: "Start Date",
        textColor: "",
    },
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
    isFluid: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<DateField {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored DateField
// -------------------------------------------------------------
export const ColoredDateField = Template.bind({});
ColoredDateField.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#666666",
        textColor: "#ffbf00",
        accentColor: "#ffbf00",
    },
};
ColoredDateField.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the DateField.",
        },
        source: {
            code: `<ColoredDateField {...${JSON.stringify(
                ColoredDateField.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated DateField
// -------------------------------------------------------------
export const AnimatedDateField = Template.bind({});
AnimatedDateField.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedDateField.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the DateField with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedDateField {...${JSON.stringify(
                AnimatedDateField.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Translated DateField
// -------------------------------------------------------------
export const TranslatedDateField = Template.bind({});
TranslatedDateField.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "dateField",
        dictionary: dictionary,
    },
};
TranslatedDateField.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in DateField.",
        },
        source: {
            code: `<DateField {...${JSON.stringify(
                TranslatedDateField.args,
                null,
                2
            )}}/>`,
        },
    },
};