import React from "react";
import StatisticsCard from "../components/StatisticsCard/StatisticsCard.react";

export default {
    title: "Design System/StatisticsCard",
    component: StatisticsCard,
    argTypes: {
        value: "",

        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
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
            options: ["left", "right", "none", "inline"],
            table: {
                category: "as-Flags",
            },
        },
        asAligned: {
            control: "select",
            options: ["left", "right", "center"],
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
        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    icon: "",
                    size: "",
                    position: "left",
                },
            },
        },
        withLabel: {
            table: {
                category: "with-Params",
                defaultValue: {
                    content: "",
                },
            },
        },

        isCircular: {
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
        componentSublabel: "Displays a basic StatisticsCard for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 300 },
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
    value: "20,539",

    asVariant: "primary",
    asFloated: "none",
    asPadded: "fitted",
    asAligned: "center",

    withLabel: {
        content: "PLAYERS",
    },
    withIcon: { icon: "fas fa-users", size: "1em", position: "left" },
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
    },

    isCircular: true,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<StatisticsCard value="20,539"
            asVariant="primary"
            asFloated="none"
            asPadded="fitted"
            asAligned="center"
            withLabel={{
                content: "PLAYERS",
            }}
            withIcon={{ icon: "fas fa-users", size: "1em", position: "left" }}
            withColor={{
                backgroundColor: "",
                accentColor: "",
                textColor: "",
            }}
            isCircular= {true}
            isHidden= {false}
            />`,
        },
    },
};
// -------------------------------------------------------------
// Colored StatisticsCard
// -------------------------------------------------------------
export const ColoredStatisticsCard = Template.bind({});
ColoredStatisticsCard.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#F3E5F5",
        accentColor: "#F2A52D",
        textColor: "#3A8080",
    },
};
ColoredStatisticsCard.parameters = {
    docs: {
        source: {
            code: `<StatisticsCard value="20,539"
            asVariant="primary"
            asFloated="none"
            asPadded="fitted"
            asAligned="center"
            withLabel={{
                content: "PLAYERS",
            }}
            withIcon={{ icon: "fas fa-users", size: "1em", position: "left" }}
            withColor={{
                backgroundColor: "#F3E5F5",
                accentColor: "#F2A52D",
                textColor: "#3A8080",
            }}
            isCircular= {true}
            isHidden= {false}
            />`,
        },
    },
};

