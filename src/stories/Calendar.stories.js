import React from "react";
import Calendar from "../components/Calendar/Calendar.react";

export default {
    title: "Design System/Calendar/Calendar",
    component: Calendar,
    argTypes: {
        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
            table: {
                category: "as-Flags",
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
        componentSubtitle: "Displays a Calendar for general-purpose use",
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
    asFloated: "left",
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
