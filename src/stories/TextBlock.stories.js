import React from "react";
import TextBlock from "../components/TextBlock/TextBlock.react";

export default {
    title: "Design System/TextBlock/TextBlock",
    component: TextBlock,
    argTypes: {
        content: "TextBlock",
        opacity: "1",
        position: {
            control: "select",
            options: ["right-top", "right-bottom", "left-top", "left-bottom"],
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
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
        conversation: {
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
        componentSubtitle: "Displays a basic button for general-purpose use",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <TextBlock {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "Neque porro quisquam est qui dolorem",
    opacity: "1",
    position: "left-top",
    conversation: true,
    asFloated: "inline",
    withColor: {
        backgroundColor: "",
        textColor: "white",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    conversation: true,
};
Default.parameters = {
    docs: {
        description: {
            story:
                "Use to show the component with all default props",
        },
        source: {
            code: `<TextBlock {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// WithoutConversation 
// -------------------------------------------------------------
export const WithoutConversation = Template.bind({});
WithoutConversation.args = {
    ...Default.args,
    conversation: false,
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
};
WithoutConversation.parameters = {
    docs: {
        description: {
            story:
                "Use to show the component without the conversation toggle on. Can be used as a chat conversation.",
        },
        source: {
            code: `<WithoutConversation {...${JSON.stringify(
                WithoutConversation.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Conversation
// -------------------------------------------------------------
export const Conversation = (args) => {
    const baseObj1 = {
        ...Object.assign({}, Default.args, args, {
            position: "right-bottom",
            asFloated: "left",
            withAnimation: {
                animation: "slideRight",
                duration: 0.5,
                delay: 0.1,
            },
        })

    };
    const baseObj2 = {
        ...Object.assign({}, Default.args, args, {
            position: "left-bottom",
            asFloated: "right",
            withAnimation: {
                animation: "slideLeft",
                duration: 0.5,
                delay: 0.3,
            },
        })

    };
    const baseObj3 = {
        ...Object.assign({}, Default.args, args, {
            position: "right-bottom",
            asFloated: "left",
            withAnimation: {
                animation: "slideRight",
                duration: 0.5,
                delay: 0.5,
            },
        })

    };
    const baseObj4 = {
        ...Object.assign({}, Default.args, args, {
            position: "left-bottom",
            asFloated: "right",
            withAnimation: {
                animation: "slideLeft",
                duration: 0.5,
                delay: 0.7,
            },
        })
    };
    return (
        <div>
            <TextBlock
                {...Object.assign({}, baseObj1, {
                })}
            />
            <TextBlock
                {...Object.assign({}, baseObj2, {
                })}
            />
            <TextBlock
                {...Object.assign({}, baseObj3, {
                })}
            />
            <TextBlock
                {...Object.assign({}, baseObj4, {
                })}
            />
        </div>
    );
};