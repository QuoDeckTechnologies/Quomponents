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
        label: "",
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
    decorators: [
        (story) => (
            <div>
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
    label: "Start Date",
    asSize: "normal",
    asFloated: "none",
    withColor: {
        backgroundColor: "#aaaaaa",
        accentColor: "",
        textColor: "#666666",
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
            code: `<DateField 
            label= "Start Date"
            asSize= "normal"
            asFloated= "none"
            withColor= {{
                backgroundColor: "#aaaaaa",
                accentColor: "",
                textColor: "#666666",
            }}
            withAnimation= {{
                animation: "zoom",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "en",
                tgt: "dateField",
                dictionary: dictionary,
            }}
            isDisabled= {false}
            isHidden= {false}
            isFluid= {false}/>`,
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
            code: `<DateField 
            label= "Start Date"
            asSize= "normal"
            asFloated= "none"
            withColor= {{
                backgroundColor: "#666666",
                textColor: "#ffbf00",
                accentColor: "#ffbf00",
            }}
            withAnimation= {{
                animation: "zoom",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "en",
                tgt: "dateField",
                dictionary: dictionary,
            }}
            isDisabled= {false}
            isHidden= {false}
            isFluid= {false}/>`,
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
            code: `<DateField 
            label= "Start Date"
            asSize= "normal"
            asFloated= "none"
            withColor= {{
                backgroundColor: "#aaaaaa",
                accentColor: "",
                textColor: "#666666",
            }}
            withAnimation= {{
                animation: "slideRight",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "en",
                tgt: "dateField",
                dictionary: dictionary,
            }}
            isDisabled= {false}
            isHidden= {false}
            isFluid= {false}/>`,
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
            code: `<DateField 
            label= "Start Date"
            asSize= "normal"
            asFloated= "none"
            withColor= {{
                backgroundColor: "#aaaaaa",
                accentColor: "",
                textColor: "#666666",
            }}
            withAnimation= {{
                animation: "zoom",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "hi",
                tgt: "dateField",
                dictionary: dictionary,
            }}
            isDisabled= {false}
            isHidden= {false}
            isFluid= {false}/>`,
        },
    },
};