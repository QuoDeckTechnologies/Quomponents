import React from "react";
import StatisticsCard from "../components/StatisticsCard/StatisticsCard.react";

export default {
    title: "Design System/StatisticsCard/StatisticsCard",
    component: StatisticsCard,
    argTypes: {
        content: {
            players: "",
            playerIcon: "",
            playerNum: ""

        },
        isCircular: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
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
                    backgroundColor: "",
                    accentColor: "",
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
        componentSubtitle: "Displays a basic StatisticsCard for general-purpose use",
        a11y: { disable: true },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => (
    <StatisticsCard {...args} />
);
export const Default = Template.bind({});
Default.args = {
    content: {
        players: "Players",
        playerIcon: "fas fa-users",
        playerNum: "20,539"
    },
    isCircular: true,
    asFloated: "inline",
    asPadded: "normal",
    withColor: {
        backgroundColor: "",
        accentColor: "",
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
            code: `<StatisticsCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored StatisticsCard
// -------------------------------------------------------------
export const ColoredSegment = Template.bind({});
ColoredSegment.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#F3E5F5",
        accentColor: "#F2A52D",
        textColor: "#3A8080",
    },
};
ColoredSegment.parameters = {
    docs: {
        source: {
            code: `<StatisticsCard {...${JSON.stringify(ColoredSegment.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated StatisticsCard
// -------------------------------------------------------------
export const AnimatedSegment = Template.bind({});
AnimatedSegment.args = {
    ...Default.args,
    withAnimation: {
        animation: "fade",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedSegment.parameters = {
    docs: {
        source: {
            code: `<StatisticsCard {...${JSON.stringify(AnimatedSegment.args, null, 2)}}/>`,
        },
    },
};
