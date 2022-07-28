import React from "react";
import Tag from "../components/Tag/Tag.react";

export default {
    title: "Design System/Tag",
    component: Tag,
    argTypes: {
        content: "Tag",
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
            <div>
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle:
            "Default Tag for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 100 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Tag {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "Tag",
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
            code: `<Tag 
            content= "Tag"
            asVariant= "warning"
            asSize= "normal"
            asFloated= "inline"
            asPadded= "normal"
            withColor= {{
                textColor: "",
                backgroundColor: "",
            }}
            withAnimation: {{
                animation: "collapse",
                duration: 0.5,
                delay: 0,
            }}
            isHidden= {false}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored Tag
// -------------------------------------------------------------
export const ColoredTag = Template.bind({});
ColoredTag.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#666666",
        textColor: "#FFAB00",
    },
};
ColoredTag.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the Tag.",
        },
        source: {
            code: `<Tag 
            content= "Tag"
            asVariant= "warning"
            asSize= "normal"
            asFloated= "inline"
            asPadded= "normal"
            withColor= {{
                backgroundColor: "#666666",
                textColor: "#FFAB00",
            }}
            withAnimation: {{
                animation: "collapse",
                duration: 0.5,
                delay: 0,
            }}
            isHidden= {false}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated Tag
// -------------------------------------------------------------
export const AnimatedTag = Template.bind({});
AnimatedTag.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedTag.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the Tag with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<Tag 
            content= "Tag"
            asVariant= "warning"
            asSize= "normal"
            asFloated= "inline"
            asPadded= "normal"
            withColor= {{
                backgroundColor: "#666666",
                textColor: "#FFAB00",
            }}
            withAnimation: {{
                animation: "slideRight",
                duration: 0.5,
                delay: 0,
            }}
            isHidden= {false}/>`,
        },
    },
};
// Different Variants Tag
// -------------------------------------------------------------
const AllSizeTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
            withColor: null,
            asFloated: "inline",
        }),
    };
    return (
        <div>
            <Tag
                {...Object.assign({}, baseObj, {
                    content: "tiny tag",
                    asSize: "tiny",
                    asVariant: "primary",
                })}
            />{" "}
            <Tag
                {...Object.assign({}, baseObj, {
                    content: "small tag",
                    asSize: "small",
                    asVariant: "secondary",
                })}
            />{" "}
            <Tag
                {...Object.assign({}, baseObj, {
                    content: "big tag",
                    asSize: "big",
                    asVariant: "warning",
                })}
            />{" "}
            <Tag
                {...Object.assign({}, baseObj, {
                    content: "huge tag",
                    asSize: "huge",
                    asVariant: "primary",
                })}
            />{" "}
            <Tag
                {...Object.assign({}, baseObj, {
                    content: "massive tag",
                    asSize: "massive",
                    asVariant: "warning",
                })}
            />{" "}
        </div>
    );
};
export const DifferentSizeTag = AllSizeTemplate.bind({});
DifferentSizeTag.parameters = {
    docs: {
        description: {
            story: "Variants and Size are supported. Use as per purpose noted here.",
        },
        source: {
            code: `<Tag 
                content = "massive tag"
                asSize = "massive" 
                asVariant = "warning"/>`,
        },
    },
};