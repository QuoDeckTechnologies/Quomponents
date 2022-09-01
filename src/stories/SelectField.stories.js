import React from "react";
import SelectField from "../components/SelectField/SelectField.react";

const dictionary = JSON.stringify({
    hi: {
        selectField: {
            label: "पाठ्यक्रम श्रेणी",
            placeholder: "चुनें..."
        }
    },
    en: {
        selectField: {
            label: "Course Category",
            placeholder: "",
        }
    }
});

export default {
    title: "Design System/SelectField",
    component: SelectField,
    argTypes: {
        label: "",
        options: [],
        placeholder: "",
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed", "zero","zero"],
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
        onClick: {
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
            "Default SelectField for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 400 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SelectField {...args} />;
export const Default = Template.bind({});
Default.args = {
    label: "Course Category",
    options: ["Sales Training", "Tech Training", "HR Training", "Graphic Training"],
    placeholder: "Choose...",
    asPadded: "normal",
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
        tgt: "selectField",
        dictionary: dictionary,
    },
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<SelectField {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored SelectField
// -------------------------------------------------------------
export const ColoredSelectField = Template.bind({});
ColoredSelectField.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#666666",
        textColor: "#ffbf00",
        accentColor: "#ffbf00",
    },
};
ColoredSelectField.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the SelectField.",
        },
        source: {
            code: `<ColoredSelectField {...${JSON.stringify(
                ColoredSelectField.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated SelectField
// -------------------------------------------------------------
export const AnimatedSelectField = Template.bind({});
AnimatedSelectField.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedSelectField.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the SelectField with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedSelectField {...${JSON.stringify(
                AnimatedSelectField.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Translated SelectField
// -------------------------------------------------------------
export const TranslatedSelectField = Template.bind({});
TranslatedSelectField.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "selectField",
        dictionary: dictionary,
    },
};
TranslatedSelectField.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in SelectField.",
        },
        source: {
            code: `<SelectField {...${JSON.stringify(
                TranslatedSelectField.args,
                null,
                2
            )}}/>`,
        },
    },
};