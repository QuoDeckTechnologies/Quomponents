import React from "react";
import InputField from "../components/InputField/InputField.react";

const dictionary = JSON.stringify({
    hi: {
        inputField: {
            label: "इनपुट नाम",
            placeholder: "विकल्प",
        },
    },
    en: {
        inputField: {
            label: "Input Name",
            placeholder: "Options",
        },
    },
});

export default {
    title: "Design System/InputField",
    component: InputField,
    argTypes: {
        name: "",
        label: "",
        value: "",
        placeholder: "",
        maxLength: 0,
        type: "text",
        multiline: false,
        asEmphasis: {
            control: "select",
            options: ["filled", "charLimited", "listInput", "shortField"],
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
                    textColor: "",
                    accentColor: "",
                    backgroundColor: "",
                    onSelectTextColor: "",
                    onSelectAccentColor: "",
                    onSelectBackgroundColor: "",
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
        onSubmit: {
            table: {
                category: "Events",
                defaultValue: null,
            },
        },
    },
    decorators: [
        (story) => (
            <div
                style={{
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Default InputField for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 100 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <InputField {...args} />;
export const Default = Template.bind({});
Default.args = {
    label: "Input Name",
    value: "Please input your text here",
    placeholder: "Options",
    maxLength: 300,
    type: "text",
    multiline: false,
    name: "testing_id",
    asEmphasis: "filled",
    asFloated: "none",
    withColor: {
        textColor: "#666666",
        accentColor: "#ffab00",
        backgroundColor: "#ffab000d",
        onSelectTextColor: "",
        onSelectAccentColor: "",
        onSelectBackgroundColor: "",
    },
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "inputField",
        dictionary: dictionary,
    },
    isHidden: false,
    isDisabled: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<InputField {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// charLimited InputField
// -------------------------------------------------------------
export const charLimitedField = Template.bind({});
charLimitedField.args = {
    ...Default.args,
    asEmphasis: "charLimited",
};
charLimitedField.parameters = {
    docs: {
        description: {
            story: "Use to show the charLimited editing state for the InputField.",
        },
        source: {
            code: `<charLimitedField {...${JSON.stringify(
                charLimitedField.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// listInput InputField
// -------------------------------------------------------------
export const listInputField = Template.bind({});
listInputField.args = {
    ...Default.args,
    value: "",
    placeholder: "Options",
    maxLength: 300,
    type: "text",
    multiline: false,
    asEmphasis: "listInput",
};
listInputField.parameters = {
    docs: {
        description: {
            story: "Use to show the listInput editing state for the InputField.",
        },
        source: {
            code: `<listInputField {...${JSON.stringify(
                listInputField.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// shortField InputField
// -------------------------------------------------------------
export const ShortFieldField = Template.bind({});
ShortFieldField.args = {
    ...Default.args,
    value: "0",
    asEmphasis: "shortField",
};
ShortFieldField.parameters = {
    docs: {
        description: {
            story: "Use to show the shortField editing state for the InputField.",
        },
        source: {
            code: `<ShortFieldField {...${JSON.stringify(
                ShortFieldField.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Default Translated InputField
// -------------------------------------------------------------
export const TranslatedInputField = Template.bind({});
TranslatedInputField.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "inputField",
        dictionary: dictionary,
    },
};
TranslatedInputField.parameters = {
    docs: {
        description: {
            story: "Use to change the language that the text appears in InputField.",
        },
        source: {
            code: `<InputField {...${JSON.stringify(
                TranslatedInputField.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// charLimited Translated InputField
// -------------------------------------------------------------
export const TranslatedCharLimited = Template.bind({});
TranslatedCharLimited.args = {
    ...Default.args,
    asEmphasis: "charLimited",
    withTranslation: {
        lang: "hi",
        tgt: "inputField",
        dictionary: dictionary,
    },
};
TranslatedCharLimited.parameters = {
    docs: {
        description: {
            story: "Use to change the language that the text appears in charLimited InputField.",
        },
        source: {
            code: `<InputField {...${JSON.stringify(
                TranslatedCharLimited.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// listInput Translated InputField
// -------------------------------------------------------------
export const TranslatedListInput = Template.bind({});
TranslatedListInput.args = {
    ...Default.args,
    content: {
        value: "",
        placeholder: "Options",
        maxLength: 300,
    },
    asEmphasis: "listInput",
    withTranslation: {
        lang: "hi",
        tgt: "inputField",
        dictionary: dictionary,
    },
};
TranslatedListInput.parameters = {
    docs: {
        description: {
            story: "Use to change the language that the text appears in listInput InputField.",
        },
        source: {
            code: `<InputField {...${JSON.stringify(
                TranslatedListInput.args,
                null,
                2
            )}}/>`,
        },
    },
};
