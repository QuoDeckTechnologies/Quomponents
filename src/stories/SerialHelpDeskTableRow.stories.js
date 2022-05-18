import React from "react";
import SerialHelpDeskTableRow from "../components/SerialHelpDeskTableRow/SerialHelpDeskTableRow.react";

export default {
    title: "Design System/SerialHelpDeskTableRow/SerialHelpDeskTableRow",
    component: SerialHelpDeskTableRow,
    argTypes: {
        content: {
            label: "",
            icon: "",
            date: "",
        },
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
            table: {
                category: "as-Flags",
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    textColor: "",
                    iconBlockAccentColor: "",
                    iconBlockBackgroundColor: ""
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
                    width: "100%",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a basic SerialHelpDeskTableRow for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 100 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SerialHelpDeskTableRow {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        label: "Redemption issue",
        icon: "fas fa-check-square",
        date: "13 Apr 2022"
    },
    asVariant: "secondary",
    withColor: {
        textColor: "",
        iconBlockAccentColor: "#FFFF00",
        iconBlockBackgroundColor: "#C1DC9E"
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<SerialHelpDeskTableRow {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated SerialHelpDeskTableRow
// -------------------------------------------------------------
export const AnimatedSerialHelpDeskTableRow = Template.bind({});
AnimatedSerialHelpDeskTableRow.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedSerialHelpDeskTableRow.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the SerialHelpDeskTableRow with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedSerialHelpDeskTableRow {...${JSON.stringify(
                AnimatedSerialHelpDeskTableRow.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored SerialHelpDeskTableRow
// -------------------------------------------------------------
export const ColoredSerialHelpDeskTableRow = Template.bind({});
ColoredSerialHelpDeskTableRow.args = {
    ...Default.args,
    asVariant: "primary",
    withColor: {
        textColor: "",
        iconBlockAccentColor: "#e31235",
        iconBlockBackgroundColor: "#1262e3"
    }
};
ColoredSerialHelpDeskTableRow.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the SerialHelpDeskTableRow.",
        },
        source: {
            code: `<ColoredSerialHelpDeskTableRow {...${JSON.stringify(
                ColoredSerialHelpDeskTableRow.args,
                null,
                2
            )}}/>`,
        },
    },
}; 