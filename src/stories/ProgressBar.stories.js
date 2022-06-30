import React from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar.react";

export default {
    title: "Design System/ProgressBar/ProgressBar",
    component: ProgressBar,
    argTypes: {
        content: {
            table: {
                defaultValue: {
                    leftIcon: "",
                    rightIcon: "",
                },
                count: 5,
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
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
                    accentColor: "",
                    lineColor: "",
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

        isDisabled: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
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
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a ProgressBar with Buttons & Steps for general-purpose use",
        a11y: { disable: true },
        docs: {
            iframeHeight: 600,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
    return <ProgressBar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    content: {
        leftIcon: "fa fa-arrow-alt-circle-left",
        rightIcon: "fa fa-arrow-alt-circle-right",
        count: 5,
    },
    asVariant: "primary",
    asSize: "normal",
    withColor: {
        backgroundColor: "",
        accentColor: "#808080",
        lineColor: "#E82E19",
        textColor: "",
    },
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
        source: {
            code: `<ProgressBar {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Colored Progressbar
// -------------------------------------------------------------
export const ColoredProgressbar = Template.bind({});
ColoredProgressbar.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#C98787",
        accentColor: "#D3D3D3",
        lineColor: "#E82E19",
        textColor: "#ffffff",
    },
};
ColoredProgressbar.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the content.",
        },
        source: {
            code: `<Progressbar withColor={{backgroundColor: "#C98787", accentColor: "#D3D3D3",
            lineColor: "#E82E19", textColor: "#ffffff"}}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Animated Progressbar
// -------------------------------------------------------------
export const AnimatedProgressbar = Template.bind({});
AnimatedProgressbar.args = {
    ...Default.args,
    withAnimation: {
        animation: "fade",
        duration: 2,
        delay: 0,
    },
};
AnimatedProgressbar.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of Progressbar",
        },
        source: {
            code: `<Progressbar {...${JSON.stringify(
                AnimatedProgressbar.args,
                null,
                2
            )}}/>`,
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
            <ProgressBar
                {...Object.assign({}, baseObj, {
                    asVariant: "primary",
                })}
            />
            <ProgressBar
                {...Object.assign({}, baseObj, {
                    withColor: {
                        backgroundColor: "#C98787",
                        accentColor: "#D3D3D3",
                        lineColor: "#E82E19",
                        textColor: "#ffffff",
                    },
                })}
            />
        </div>
    );
};
export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
    docs: {
        description: {
            story: "All variants are supported in ProgressBar.",
        },
        source: {
            code: `<ProgressBar content:{}/>`,
        },
    },
};