import React from "react";
import OTPFields from "../components/OTPFields/OTPFields.react";

export default {
    title: "Design System/OTPFields/OTPFields",
    component: OTPFields,
    argTypes: {
        numFields: 5,
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
                    textColor: "",
                    accentColor: "",
                    backgroundColor: "",
                    focusAccentColor: "",
                    focusBackgroundColor: ""
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
        componentSubtitle: "Displays a basic OTPFields for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 300 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <OTPFields {...args} />;
export const Default = Template.bind({});
Default.args = {
    numFields: 5,
    asSize: "normal",
    asFloated: "inline",
    withColor: {
        textColor: "",
        accentColor: "#8c8c898c",
        backgroundColor: "#4545453b",
        focusAccentColor: "#AAAAAA",
        focusBackgroundColor: "#FFBF00",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    isDisabled: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<OTPFields {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated OTPFields
// -------------------------------------------------------------
export const AnimatedOTPFields = Template.bind({});
AnimatedOTPFields.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedOTPFields.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the OTPFields with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedOTPFields {...${JSON.stringify(
                AnimatedOTPFields.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored OTPFields
// -------------------------------------------------------------
export const ColoredOTPFields = Template.bind({});
ColoredOTPFields.args = {
    ...Default.args,
    withColor: {
        textColor: "#AD2929",
        accentColor: "#AAAAAA",
        backgroundColor: "#FFBF00",
        focusAccentColor: "#8c8c898c",
        focusBackgroundColor: "#4545453b",
    }
};
ColoredOTPFields.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the OTPFields.",
        },
        source: {
            code: `<ColoredOTPFields {...${JSON.stringify(
                ColoredOTPFields.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Different Size OTPFields
// -------------------------------------------------------------
const AllSizeTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
            asFloated: "inline",
        }),
    };
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <OTPFields
                {...Object.assign({}, baseObj, {
                    asSize: "tiny",
                })}
            /><br />
            <OTPFields
                {...Object.assign({}, baseObj, {
                    asSize: "small",

                })}
            /><br />
            <OTPFields
                {...Object.assign({}, baseObj, {
                    asSize: "big",
                })}
            /><br />
            <OTPFields
                {...Object.assign({}, baseObj, {
                    asSize: "huge",
                })}
            /><br />
            <OTPFields
                {...Object.assign({}, baseObj, {
                    asSize: "massive",
                })}
            /><br />
        </div>
    );
};
export const DifferentSizeOTPFields = AllSizeTemplate.bind({});
DifferentSizeOTPFields.parameters = {
    docs: {
        description: {
            story: "Size are supported. Use as per purpose noted here.",
        },
        source: {
            code: `<OTPFields asSize: "small"/>`,
        },
    },
};