import React from "react";
import OptionalImageField from "../components/OptionalImageField/OptionalImageField.react";

const dictionary = JSON.stringify({
    hi: {
        optionalImageField: {
            title: "अपलोड",
        },
    },
});

export default {
    title: "Design System/OptionalImageField",
    component: OptionalImageField,
    argTypes: {
        content: {
            defaultValue: {
                title: "Upload",
                icon: "",
                actionButton: true,
            },
        },
        withFile: {
            defaultValue: {
                type: "image/*",
                capture: "",
            },
        },
        isMultiple: {
            table: {
                defaultValue: false,
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
    parameters: {
        componentSubtitle: "Displays a OptionalImageField Component",
        a11y: { disable: true },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <OptionalImageField {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        title: "Upload",
        icon: "",
        actionButton: true,
    },
    withFile: {
        type: "image/*",
        capture: "",
    },
    isMultiple: false,
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
        tgt: "optionalImageField",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
    isFluid: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<OptionalImageField {...${JSON.stringify(
                Default.args,
                null,
                2
            )}}/>`,
        },
    },
};
