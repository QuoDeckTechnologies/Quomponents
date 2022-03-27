import React from "react";
import FeedbackformM from "../components/FeedbackformM/FeedbackformM/FeedbackformM.react";

export default {
    title: "Design System/FeedbackformM/FeedbackformM",
    component: FeedbackformM,
    argTypes: {
        content :{
            title:"Show Feedback",
            isToggled: true,
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
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

        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
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
                    textAlign: "left",
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a basic Icon and content for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 700 },
    },
};

const Template = (args) => <FeedbackformM {...args} />;
//----------------------------------------------------------
// Default
//---------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
    content :{
        title:"Show Feedback",
        isToggled: true,
    },
    asSize: "normal",
    asFloated: "inline",
    asVariant:"primary",
    asAligned:"",
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        description: {
            story:
                "Any free fontawesome icon can be used as the NavBar icon definition. This component is combination of the Avatar component on a MenuBlock component, The MenuBlock icon can be changed with userImage with in withIcon prop , give a link of any profile image and it will replace the icon with it , On the other side which is a Ellipsis icon in menuBlock component which is a part of NavBar , this icon can also be change with other , and whole NavBarr is clickable",
        },
        source: {
            code: `<FeedbackformM {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// AllVariants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {


        }),
    };
    return (
        <div>
            <FeedbackformM
                {...Object.assign({}, baseObj, {
                    asVariant: "primary",
                    asSize: "normal",

                })}
            />
            <FeedbackformM
                {...Object.assign({}, baseObj, {
                    asVariant: "secondary",
                    asSize: "normal",

                })}
            />
            <FeedbackformM
                {...Object.assign({}, baseObj, {
                    asVariant: "success",
                    asSize: "normal",

                })}
            />
            <FeedbackformM
                {...Object.assign({}, baseObj, {
                    asVariant: "warning",
                    asSize: "normal",

                })}
            />
            <FeedbackformM
                {...Object.assign({}, baseObj, {
                    asVariant: "error",
                    asSize: "normal",

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
            code: `<FeedbackformM asVariant="primary"/>`,
        },
    },
};
