import React from "react";
import OTPFields from "../components/OTPFields/OTPFields.react";

export default {
    title: "Design System/OTPFields/OTPFields",
    component: OTPFields,
    argTypes: {
        numFields: 5,
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
                    backgroundColor: ""
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
        docs: { iframeHeight: 100 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <OTPFields {...args} />;
export const Default = Template.bind({});
Default.args = {
    numFields: 5,
    asFloated: "inline",
    withColor: {
        accentColor: "",
        backgroundColor: "",
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
        accentColor: "#FFAB00",
        backgroundColor: "#ffab000d"
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