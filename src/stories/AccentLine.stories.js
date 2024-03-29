import React from "react";
import AccentLine from "../components/AccentLine/AccentLine.react";

export default {
    title: "Design System/AccentLine",
    component: AccentLine,
    argTypes: {
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
            options: ["fitted", "compact", "normal", "relaxed", "zero","zero"],
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
        isFluid: {
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
        componentSubtitle: "Displays a basic AccentLine for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <AccentLine {...args} />;
export const Default = Template.bind({});
Default.args = {
    asVariant: "warning",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "inline",
    withColor: {
        accentColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    isFluid: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<AccentLine {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated AccentLine
// -------------------------------------------------------------
export const AnimatedAccentLine = Template.bind({});
AnimatedAccentLine.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedAccentLine.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the AccentLine with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedAccentLine {...${JSON.stringify(
                AnimatedAccentLine.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored AccentLine
// -------------------------------------------------------------
export const ColoredAccentLine = Template.bind({});
ColoredAccentLine.args = {
    ...Default.args,
    withColor: {
        accentColor: "#ff1a1a",
    }
};
ColoredAccentLine.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the AccentLine.",
        },
        source: {
            code: `<ColoredAccentLine {...${JSON.stringify(
                ColoredAccentLine.args,
                null,
                2
            )}}/>`,
        },
    },
}; 