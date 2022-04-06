import React from "react";
import TextBlock from "../components/TextBlock/TextBlock.react";

export default {
    title: "Design System/TextBlock/TextBlock",
    component: TextBlock,
    argTypes: {
        content: "TextBlock",
        position: {
            control: "select",
            options: ["right-top", "right-bottom", "left-top", "left-bottom"],
        },
        conversation: true,
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
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
        docs: {
            iframeHeight: 500,
        }
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
    position: "left-top",
    conversation: true,
    asFloated: "inline",
    asSize: "normal",
    withColor: {
        backgroundColor: "",
        textColor: "#fff",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
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
            content: "Hi!!",
            position: "left-top",
            asFloated: "left",
            withAnimation: {
                animation: "slideRight",
                duration: 0.5,
                delay: 0.1,
            },
            withColor: {
                backgroundColor: "#202c33",
                textColor: "#fff",
            },
        })
    };
    const baseObj2 = {
        ...Object.assign({}, Default.args, args, {
            content: "Hello ",
            position: "right-top",
            asFloated: "right",
            withAnimation: {
                animation: "slideLeft",
                duration: 0.5,
                delay: 0.3,
            },
            withColor: {
                backgroundColor: "#225c4b",
                textColor: "#fff",
            },
        })
    };
    const baseObj3 = {
        ...Object.assign({}, Default.args, args, {
            content: "Neque porro quisquam est qui dolorem",
            position: "left-top",
            asFloated: "left",
            withAnimation: {
                animation: "slideRight",
                duration: 0.5,
                delay: 0.5,
            },
            withColor: {
                backgroundColor: "#202c33",
                textColor: "#fff",
            },
        })
    };
    const baseObj4 = {
        ...Object.assign({}, Default.args, args, {
            content: "Neque porro quisquam est qui dolorem Neque porro quisquam est qui dolorem",
            position: "right-top",
            asFloated: "right",
            withAnimation: {
                animation: "slideLeft",
                duration: 0.5,
                delay: 0.7,
            },
            withColor: {
                backgroundColor: "#225c4b",
                textColor: "#fff",
            },
        })
    };
    const baseObj5 = {
        ...Object.assign({}, Default.args, args, {
            content: "Neque porro quisquam est qui dolorem Neque porro quisquam est qui dolorem ",
            position: "left-top",
            asFloated: "left",
            withAnimation: {
                animation: "slideRight",
                duration: 0.5,
                delay: 0.9,
            },
            withColor: {
                backgroundColor: "#202c33",
                textColor: "#fff",
            },
        })
    };
    const baseObj6 = {
        ...Object.assign({}, Default.args, args, {
            content: "OK!",
            position: "right-top",
            asFloated: "right",
            withAnimation: {
                animation: "slideLeft",
                duration: 0.5,
                delay: 1.1,
            },
            withColor: {
                backgroundColor: "#225c4b",
                textColor: "#fff",
            },
        })
    };
    return (
        <div style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/2224368.png")', display: "flex", alignItems: "center", flexDirection: "column", height: "auto", width: "100%" }}>
            <div style={{ fontFamily: "Helvetica", color: "white", fontWeight: "bold", fontSize: "2em", margin: "1em" }}>Whatsapp</div>
            <div style={{ width: "100%" }} >
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
                <TextBlock
                    {...Object.assign({}, baseObj5, {
                    })}
                />
                <TextBlock
                    {...Object.assign({}, baseObj6, {
                    })}
                />
            </div>
        </div >
    );
};