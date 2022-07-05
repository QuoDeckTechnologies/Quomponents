import React from "react";
import RibbonDesignMenu from "../components/RibbonMenu/designMenu/RibbonDesignMenu.react";

const dictionary = JSON.stringify({
    en: {
        ribbonDesignMenu: {
            overlayBackground: "Overlay Background",
            slideBackground: "Slide Background",
            setBackground: "Set",
            removeBackground: "Remove",
            settings: "Settings",
            pageColor: "Page Color",
            primaryColor: "Primary Color",
            accentColor: "Accent Color",
            secondaryColor: "Secondary Color",
        }
    },
    hi: {
        ribbonDesignMenu: {
            overlayBackground: "उपरिशायी पृष्ठभूमि",
            slideBackground: "स्लाइड पृष्ठभूमि",
            setBackground: "सेट",
            removeBackground: "निकाले",
            settings: "समायोजन",
            pageColor: "पृष्ठ रंग",
            primaryColor: "प्राथमिक रंग",
            accentColor: "स्वरोंका रंग",
            secondaryColor: "द्वितीयक रंग"
        }
    }
});
export default {
    title: "Design System/RibbonMenu/RibbonDesignMenu",
    component: RibbonDesignMenu,
    argTypes: {
        actions: {},
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
            table: {
                category: "as-Flags",
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
    decorators: [
        (story) => (
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a RibbbonDesignMenu for general-purpose use",
        a11y: { disable: true },
        docs: {
            iframeHeight: 300,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RibbonDesignMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
    actions: {
        updateDeck: (value) => { return value }
    },
    asFloated: "left",
    withTranslation: {
        lang: "en",
        tgt: "ribbonDesignMenu",
        dictionary: dictionary
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<RibbbonDesignMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated RibbonDesignMenu
// -------------------------------------------------------------
export const TranslatedRibbonDesignMenu = Template.bind({});
TranslatedRibbonDesignMenu.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "ribbonDesignMenu",
        dictionary: dictionary
    },
};
TranslatedRibbonDesignMenu.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the RibbonDesignMenu, add a RibbonDesignMenu:{} value to the dictionary.",
        },
        source: {
            code: `<RibbonDesignMenu {...${JSON.stringify(
                TranslatedRibbonDesignMenu.args,
                null,
                2
            )}}/>`,
        },
    },
};