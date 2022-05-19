import React from "react";
import Calendar from "../components/Calendar/Calendar.react";

export default {
    title: "Design System/Calendar/Calendar",
    component: Calendar,
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
        componentSubtitle: "Displays a Calendar with Buttons & Steps for general-purpose use",
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
    return <Calendar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    asVariant: "primary",
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
            code: `<Calendar {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Colored Calendar
// -------------------------------------------------------------
export const ColoredCalendar = Template.bind({});
ColoredCalendar.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#C98787",
        accentColor: "#D3D3D3",
        lineColor: "#E82E19",
        textColor: "#ffffff",
    },
};
ColoredCalendar.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of Calendar",
        },
        source: {
            code: `<Calendar {...${JSON.stringify(
                ColoredCalendar.args,
                null,
                2
            )}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Animated Calendar
// -------------------------------------------------------------
export const AnimatedCalendar = Template.bind({});
AnimatedCalendar.args = {
    ...Default.args,
    withAnimation: {
        animation: "fade",
        duration: 2,
        delay: 0,
    },
};
AnimatedCalendar.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of Calendar",
        },
        source: {
            code: `<Calendar {...${JSON.stringify(
                AnimatedCalendar.args,
                null,
                2
            )}}/>`,
        },
    },
};
