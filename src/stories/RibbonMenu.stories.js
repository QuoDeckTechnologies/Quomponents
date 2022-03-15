import React from "react";
import RibbonMenu from "../components/RibbonMenu/RibbonMenu.react";


const dictionary = JSON.stringify({
    hi: {
        RibbonMenu: {
            
        }
    },
});
export default {
    title: "Design System/RibbonMenu/RibbonMenu",
    component: RibbonMenu,
    argTypes: {
        content: {
            table: {
                defaultValue: {
                    tab:"html"
                },
            },
        },
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
            table: {
                category: "as-Flags",
            },
        },
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
        isFluid: {
            table: {
                category: "is-Toggles",
                defaultValue: true,
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
        componentSubtitle: "Displays a loader for general-purpose use",
        a11y: { disable: true },
        docs: {
            iframeHeight: 300,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RibbonMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        tab:"html"
    },
    asFloated: "inline",
    asPadded: "normal",
    withTranslation: {
        lang: "en",
        tgt: "RibbonMenu",
        dictionary: dictionary,
    },
    isDisabled: false,
    isFluid:true,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<RibbonMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
