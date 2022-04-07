import React from "react";
import CardTag from "../components/CardTag/CardTag.react";

export default {
    title: "Design System/CardTag/CardTag",
    component: CardTag,
    argTypes: {
        content: "Content",
        isActive: false,
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
                    textColor: "",
                    activeBackgroundColor: "",
                    activeTextColor: ""
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
        onClick: {
            table: {
                category: "Events",
                defaultValue: null,
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
    },
    decorators: [
        (story) => (
            <div
                style={{
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle:
            "Default CardTag for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 500 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CardTag {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "Content",
    isActive: true,
    asVariant: "warning",
    asSize: "normal",
    asFloated: "inline",
    withColor: {
        backgroundColor: "#AAAAAA",
        textColor: "#FFF",
        activeBackgroundColor: "#666666",
        activeTextColor: "#FFAB00"
    },
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    isDisabled: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<CardTag {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored CardTag
// -------------------------------------------------------------
export const ColoredCardTag = Template.bind({});
ColoredCardTag.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#AAAAAA",
        textColor: "#FFF",
        activeBackgroundColor: "#88ee88",
        activeTextColor: "#37285f"
    },
    active: false,
};
ColoredCardTag.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the CardTag.",
        },
        source: {
            code: `<ColoredCardTag {...${JSON.stringify(
                ColoredCardTag.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Different Variants CardTag
// -------------------------------------------------------------
const AnimatedVariants = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
            withColor: null,
            asFloated: "inline",
        }),
    };
    return (
        <div>
            <CardTag
                {...Object.assign({}, baseObj, {
                    content: "tiny CardTag",
                    asSize: "tiny",
                    asVariant: "primary",
                    withAnimation: {
                        animation: "slideDown",
                        duration: 0.5,
                        delay: 0,
                    },
                })}
            />{" "}
            <CardTag
                {...Object.assign({}, baseObj, {
                    content: "small CardTag",
                    asSize: "small",
                    asVariant: "secondary",
                    withAnimation: {
                        animation: "slideDown",
                        duration: 0.5,
                        delay: 0.5,
                    },
                })}
            />{" "}
            <CardTag
                {...Object.assign({}, baseObj, {
                    content: "big CardTag",
                    asSize: "big",
                    asVariant: "warning",
                    withAnimation: {
                        animation: "slideDown",
                        duration: 0.5,
                        delay: 1,
                    },
                })}
            />{" "}
            <CardTag
                {...Object.assign({}, baseObj, {
                    content: "huge CardTag",
                    asSize: "huge",
                    asVariant: "primary",
                    withAnimation: {
                        animation: "slideDown",
                        duration: 0.5,
                        delay: 1.5,
                    },
                })}
            />{" "}
            <CardTag
                {...Object.assign({}, baseObj, {
                    content: "massive CardTag",
                    asSize: "massive",
                    asVariant: "secondary",
                    withAnimation: {
                        animation: "slideDown",
                        duration: 0.5,
                        delay: 1.5,
                    },
                })}
            />{" "}
        </div>
    );
};
export const AnimatedSize = AnimatedVariants.bind({});
AnimatedSize.parameters = {
    docs: {
        description: {
            story: "Variants and Size are supported with Animation. Use as per purpose noted here.",
        },
        source: {
            code: ``,
        },
    },
};
// -------------------------------------------------------------
// Different Variants CardTag
// -------------------------------------------------------------
const Custom = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
            withColor: null,
        }),
    };
    return (
        <div style={{
            width: "90%",
            height: "auto",
            padding: "0.5em 0 1em 2em",
            backgroundColor: "#dce9e7",
            display: "flex",
            flex: "1",
        }}>
            <div style={{
                width: "2.5em",
                padding: "0.5em 0 1em 2em",
                display: "flex",
                flexDirection: "column",
            }}><div style={{ marginBottom: "0.3em" }}>
                    <CardTag
                        {...Object.assign({}, baseObj, {
                            content: "CardTag",
                            asSize: "tiny",
                            asVariant: "primary",
                            withAnimation: {
                                animation: "slideDown",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div><div style={{ marginBottom: "0.3em" }}>
                    <CardTag
                        {...Object.assign({}, baseObj, {
                            content: "CardTag",
                            asSize: "tiny",
                            asVariant: "secondary",
                            withAnimation: {
                                animation: "slideDown",
                                duration: 0.5,
                                delay: 0.5,
                            },
                        })}
                    /></div>
                <div style={{ marginBottom: "0.3em" }}>
                    <CardTag
                        {...Object.assign({}, baseObj, {
                            content: "CardTag",
                            asSize: "tiny",
                            asVariant: "warning",
                            withAnimation: {
                                animation: "slideDown",
                                duration: 0.5,
                                delay: 1,
                            },
                        })}
                    /></div>
                <div style={{ marginBottom: "0.3em" }}>
                    <CardTag
                        {...Object.assign({}, baseObj, {
                            content: "CardTag",
                            asSize: "tiny",
                            asVariant: "primary",
                            withAnimation: {
                                animation: "slideDown",
                                duration: 0.5,
                                delay: 1.5,
                            },
                        })}
                    />
                </div>
                <div style={{ marginBottom: "0.3em" }}>
                    <CardTag
                        {...Object.assign({}, baseObj, {
                            content: "CardTag",
                            asSize: "tiny",
                            asVariant: "secondary",
                            withAnimation: {
                                animation: "slideDown",
                                duration: 0.5,
                                delay: 2,
                            },
                        })}
                    />
                </div>
            </div>
            <div style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#fff",
                marginRight:"0.5em"
            }}>

            </div>
        </div>
    );
};
export const CustomCardTag = Custom.bind({});
CustomCardTag.parameters = {
    docs: {
        description: {
            story: "Card Tags can be used with a parent div to show data.",
        },
        source: {
            code: ``,
        },
    },
};