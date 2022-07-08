import React from "react";
import Ribbon from "../components/Ribbons/Ribbon/Ribbon.react";

const dictionary = JSON.stringify({
    // en: {
    //     loading: "Please wait...",
    //     ribbon: {
    //         text: "Ribbon",
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
            options: ["left", "right", "none"],
            table: {
                category: "as-Flags",
            },
        },

        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
                    textColor: "",
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
    parameters: {
        componentSubtitle: "Display a basic ribbon for general-purpose use",
        a11y: { disable: true },
        docs: {
            iframeHeight: 300,
        }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Ribbon {...args} />;
export const Default = Template.bind({});
Default.args = {
    asEmphasis: "new",
    asFloated: "left",

    withColor: {
        backgroundColor: "",
        textColor: "",
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

// -------------------------------------------------------------
// Floted Ribbon
// -------------------------------------------------------------
export const RightRibbon = Template.bind({});
RightRibbon.args = {
    ...Default.args,
    asEmphasis: "premium",
    asFloated: "right",
};
RightRibbon.parameters = {
    docs: {
        description: {
            story:
                "Use to float the ribbon",
        },
        source: {
            code: `<Ribbon asFloated="right"/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated Ribbon
// -------------------------------------------------------------
export const TranslatedRibbon = Template.bind({});
TranslatedRibbon.args = {
    ...Default.args,
    asEmphasis: "new",
    withTranslation: {
        lang: "hi",
        tgt: "ribbon",
        dictionary: dictionary,
    },
};
TranslatedRibbon.parameters = {
    docs: {
        description: {
            story:
                "Use to change the ribbon label language.",
        },
        source: {
            code: `<Ribbon withTranslation={{lang: "hi", tgt: "ribbon", dictionary: ${JSON.stringify(
                {
                    hi: {
                        ribbon: {
                            new: "नया",
                            restricted: "प्रतिबंधित",
                            premium: "अधिमूल्य",
                            free: "नि: शुल्क"
                        }
                    },
                }
            )}}}}/>`,
        },
    },
};