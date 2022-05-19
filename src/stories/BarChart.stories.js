import React from "react";
import BarChart from "../components/BarChart/QuoBarChart.react";

export default {
    title: "Design System/BarChart/BarChart",
    component: BarChart,
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
        componentSubtitle: "Displays a basic BarChart for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <BarChart {...args} />;
export const Default = Template.bind({});
Default.args = {
    asVariant: "warning",
    asSize: "normal",
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
            code: `<BarChart {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated BarChart
// -------------------------------------------------------------
export const AnimatedBarChart = Template.bind({});
AnimatedBarChart.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedBarChart.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the BarChart with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedBarChart {...${JSON.stringify(
                AnimatedBarChart.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored BarChart
// -------------------------------------------------------------
export const ColoredBarChart = Template.bind({});
ColoredBarChart.args = {
    ...Default.args,
    withColor: {
        accentColor: "#ff1a1a",
    }
};
ColoredBarChart.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the BarChart.",
        },
        source: {
            code: `<ColoredBarChart {...${JSON.stringify(
                ColoredBarChart.args,
                null,
                2
            )}}/>`,
        },
    },
}; 