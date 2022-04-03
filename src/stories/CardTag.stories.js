import React from "react";
import CardTag from "../components/CardTag/CardTag.react";

export default {
    title: "Design System/CardTag/CardTag",
    component: CardTag,
    argTypes: {
        content: "Content",
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
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
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
                    accentColor: "",
                    textColor: "",
                    backgroundColor: "",
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
        docs: { iframeHeight: 200 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CardTag {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "Content",
    asVariant: "warning",
    asSize: "normal",
    asFloated: "inline",
    asPadded: "normal",
    withColor: {
        textColor: "",
        backgroundColor: "",
    },
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
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
        backgroundColor: "#666666",
        textColor: "#FFAB00",
    },
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
            code: `<CardTag content: "massive CardTag", asSize: "massive", asVariant: "warning"/>`,
        },
    },
};