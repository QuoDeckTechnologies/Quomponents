import React from "react";
import MenuBlock from "../components/AppMenu/MenuBlock/MenuBlock.react";

const dictionary = JSON.stringify({
    en: {
        button: {
            text: "Button",
        },
    },
    hi: {
        button: { text: "होम", label: "होम" },
    },
});
export default {
    title: "Design System/Appmenu/MenuBlock",
    component: MenuBlock,
    argTypes: {
        asEmphasis: {
            control: "select",
            options: ["text", "outlined", "contained"],
            table: {
                category: "as-Flags",
            },
        },
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
            table: {
                category: "as-Flags",
            },
        },
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
                    hoverBackgroundColor: "",
                    hoverTextColor: "",
                },
            },
        },
        withLabel: {
            table: {
                category: "with-Params",
                defaultValue: {
                    format: "",
                    content: "",
                    textColor: "",
                },
            },
        },
        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    icon: "",
                    size: "",
                    position: "left",
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
        componentSubtitle: "Displays a basic data exporter button for general-purpose use. We can export file or json data using this component.",
        a11y: { disable: true }
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <MenuBlock {...args} />;
export const Default = Template.bind({});
Default.args = {
    asEmphasis: "contained",
    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asAligned: "center",
    withIcon: { icon: "fas fa-ellipsis-v", size: "1em", position: "left" },
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withLabel: {
        format: "label",
        content: "",
        textColor: "#000000",
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<MenuBlock {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
//-------------------------------------------------------------
// Translated Button
// -------------------------------------------------------------
export const TranslatedMenuBlock = Template.bind({});
TranslatedMenuBlock.args = {
    ...Default.args,
    content: "Translated Button",
    withTranslation: {
        lang: "hi",
        tgt: "button",
        dictionary: dictionary,
    },
};
TranslatedMenuBlock.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the button, add a button:{text,label} value to the dictionary.",
        },
        source: {
            code: `<MenuBlock withTranslation={{lang: "hi", tgt: "button", dictionary: ${JSON.stringify(
                {
                    hi: {

                        button: {
                            text: "बटन",
                            label: "इसे बार-बार न दबाएं...",
                        },
                    },
                }
            )}}}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Emphasis
// -------------------------------------------------------------
const AllEmphasisTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
            asFloated: "inline",
            withLabel: null,
            withIcon: null,
            withTranslation: null,
            withColor: null,
            asVariant: "success"
        }),
    };
    return (
        <div>
            <MenuBlock
                {...Object.assign({}, baseObj, {
                    content: "Text",
                    asEmphasis: "text",
                })}
            />{" "}
            <MenuBlock
                {...Object.assign({}, baseObj, {
                    content: "Outlined",
                    asEmphasis: "outlined",
                })}
            />{" "}
            <MenuBlock
                {...Object.assign({}, baseObj, {
                    content: "Contained",
                    asEmphasis: "contained",
                })}
            />
        </div>
    );
};
export const AllEmphasis = AllEmphasisTemplate.bind({});
AllEmphasis.parameters = {
    docs: {
        description: {
            story: "3 options are supported for emphasis as text, outlined, contained",
        },
        source: {
            code: `<MenuBlock data={{ type: "json", content: [] }} asEmphasis="contained"/>`,
        }
    },
};

