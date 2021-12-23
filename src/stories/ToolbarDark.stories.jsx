import React from "react";
import ToolbarDark from "../components/Buttons/ToolbarDark/ToolbarDark.react"
import { ColoredIcon } from "./IconLink.stories";
import Button from "../components/Buttons/Button/Button.react";



const dictionary = JSON.stringify({
       en: {
        icon: {label: "Home"},
    },
    hi: {
        icon: { label: "होम आइकन" },
    },
});

export default {
    title: "Design System/Buttons/ToolbarDark",
    component: ToolbarDark,
    argTypes: {

        asEmphasis: {
            control: "select",
            options: ["text", "outlined", "contained"],
            table: {
                category: "as-Flags",
            },
        },
        isCircular: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },

        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning"],
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
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
            table: {
                category: "as-Flags",
            },
        },
        asAligned: {
            control: "select",
            options: ["left", "right", "center"],
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
        withLabel: {
            table: {
                category: "with-Params",
                defaultValue: {
                    format: "label",
                    content: "",
                    textColor: "",
                    hoverTextColor:"",
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
            <div
                style={{
                    width: "100%",
                    textAlign: "left",
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Display ToolbarDark with Icon",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ToolbarDark {...args} />;
export const Default = Template.bind({});
Default.args = {
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "",
    asSize: "normal",
    asPadded: "normal",
    asAligned: "left",

    withLabel: {
        format: "caption",
        content: "Home",
        textColor: "#000000",
        hoverTextColor:"pink",
    },
    withIcon: { icon: "fa fa-home", size: "2em", position:"left"},
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
   
    isDisabled: false,
    isHidden: false,
    isFluid: false,
};

Default.parameters = {
    docs: {
        source: {
            code: `<ToolbarDark {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
    
};

const AllVariantsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
            asFloated: "inline",
            withLabel: null,
            withTranslation: null,
            withColor: null,
            
        }),
    };
    return (
        <div>
            <ToolbarDark
                {...Object.assign({}, baseObj, {
                    asVariant: "success",
                    withIcon: { icon: "fas fa-home", size: "1em", position: "left" },

                })}
            />
            <ToolbarDark
                {...Object.assign({}, baseObj, {
                    asVariant: "success",
                    withIcon: { icon: "fas fa-wallet", size: "1em", position: "left" },
                })}
            />
            <ToolbarDark
                {...Object.assign({}, baseObj, {
                    asVariant: "success",
                    withIcon: { icon: "fas fa-home", size: "1em", position: "left" },
                })}
            />
           
            <ToolbarDark   
                {...Object.assign({}, baseObj, {
                    asVariant: "success",
                    withIcon: { icon: "fas fa-book-open", size: "1em", position: "left" },
                })}
            />
        </div>
    );
};


export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
    docs: {
        description: {
            story: "5 variants are supported. Use as per purpose noted here.",
        },
        source: {
            code: `<IconList asVariant="primary"/>`,
        },
    },
};
