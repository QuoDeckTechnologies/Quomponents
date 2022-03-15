import React from "react";
import IconBlock from "../components/IconBlock/IconBlock.react";

export default {
    title: "Design System/IconBlock/IconBlock",
    component: IconBlock,
    argTypes: {
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
            options: ["left", "right", "inline"],
            table: {
                category: "as-Flags",
            },
        },
        asEmphasis: {
            control: "select",
            options: ["text", "contained", "outlined"],
            table: {
                category: "as-Flags",
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: ""
                },
            },
        },
        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    icon: "",
                    color: ""
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
        componentSubtitle: "Displays a basic button for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <IconBlock {...args} />;
export const Default = Template.bind({});
Default.args = {
    asSize: "normal",
    asFloated: "inline",
    asPadded: "normal",
    asEmphasis: "contained",
    withColor: {
        backgroundColor: "#AD2929"
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withIcon: { icon: "fas fa-book-open", color: "#fff" },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<IconBlock {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

export const AllVariantsTemplate = (args) => {
    const baseObj1 = {
        ...Object.assign({}, Default.args, args, {
            asSize: "tiny",
        }),
        asEmphasis: "text",
        withIcon: { icon: "fas fa-book", color: "#DF5594" },
    };
    const baseObj2 = {
        ...Object.assign({}, Default.args, args, {
            asSize: "small",
        }),
        withColor: {
            backgroundColor: "#D8CE0D"
        },
        asEmphasis: "outlined",
        withIcon: { icon: "fas fa-book" },
    };
    const baseObj3 = {
        ...Object.assign({}, Default.args, args, {
            asSize: "normal",
        }),
        withColor: {
            backgroundColor: "#5A9C32"
        },
        asEmphasis: "contained",
        withIcon: { icon: "fas fa-book", color: "#fff" },
    };
    const baseObj4 = {
        ...Object.assign({}, Default.args, args, {
            asSize: "big",
        }),
        asEmphasis: "text",
        withIcon: { icon: "fas fa-book", color: "#8B0000" },
    };
    const baseObj5 = {
        ...Object.assign({}, Default.args, args, {
            asSize: "huge",
        }),
        withColor: {
            backgroundColor: "#21618C"
        },
        asEmphasis: "outlined",
        withIcon: { icon: "fas fa-book" },
    };
    const baseObj6 = {
        ...Object.assign({}, Default.args, args, {
            asSize: "massive",
        }),
        withColor: {
            backgroundColor: "#D98880"
        },
        asEmphasis: "contained",
        withIcon: { icon: "fas fa-book", color: "#fff" },
    };
    return (
        <div>
            <div>
                <IconBlock
                    {...Object.assign({}, baseObj1, {
                    })}
                />
                <IconBlock
                    {...Object.assign({}, baseObj2, {
                    })}
                />
                <IconBlock
                    {...Object.assign({}, baseObj3, {
                    })}
                />
            </div>
            <div>
                <IconBlock
                    {...Object.assign({}, baseObj4, {
                    })}
                />
                <IconBlock
                    {...Object.assign({}, baseObj5, {
                    })}
                />
                <IconBlock
                    {...Object.assign({}, baseObj6, {
                    })}
                />
            </div>
        </div>
    );
};