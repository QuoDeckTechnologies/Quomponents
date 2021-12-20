import React from "react";
import Ribbon from "../components/Ribbons/Ribbon/Ribbon.react";

const dictionary = JSON.stringify({
    // en: {
    //     loading: "Please wait...",
    //     button: {
    //         text: "Button",
    //         label: "Do not press this repeatedly...",
    //     },
    // },
    hi: {
        ribbon: {
            new: "नया",
            restricted: "प्रतिबंधित",
            premium: "अधिमूल्य",
            free: "नि: शुल्क"
        }
    },
});


export default {
    title: "Design System/Ribbons/Ribbon",
    component: Ribbon,
    argTypes: {
        asEmphasis: {
            control: "select",
            options: ["new", "premium", "restricted", "free"],
            table: {
                category: "as-Flags",
            },
        },
        asFloated: {
            control: "select",
            options: ["left", "right"],
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
                    hoverBackgroundColor: "",
                    hoverTextColor: "",
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
    },
    decorators: [
        (story) => (
            <div
                style={{
                    border: "1px solid #000",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a basic button for general-purpose use",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};


// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Ribbon {...args} />;
export const Default = Template.bind({});
Default.args = {
    asEmphasis: "restricted",
    asFloated: "left",

    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    withTranslation: {
        lang: "en",
        tgt: "ribbon",
        dictionary: dictionary,
    },

    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<Ribbon {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};