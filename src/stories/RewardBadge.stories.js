import React from "react";
import RewardBadge from "../components/RewardBadge/RewardBadge.react";
import RewardBadgeImage from "../assets/icons8_un_rank_medal_96px.png"

export default {
    title: "Design System/RewardBadge",
    component: RewardBadge,
    argTypes: {
        image: "",
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
                    textColor: "",
                },
            },
        },
        withLabel: {
            table: {
                category: "with-Params",
                defaultValue: {
                    format: "label",
                    content: "",
                    textColor: "",
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

            onClick: {
                table: {
                    category: "Events",
                    defaultValue: null,
                },
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
        componentSubtitle: "Displays a basic RewardBadge for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RewardBadge {...args} />;
export const Default = Template.bind({});
Default.args = {
    image: RewardBadgeImage,
    asVariant: "secondary",
    asSize: "normal",
    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    withLabel: {
        format: "caption",
        content: "You won the July season!",
        textColor: "#000000",
    },
    isHidden: false,
    isDisabled: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<RewardBadge {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored RewardBadge
// -------------------------------------------------------------
export const ColoredRewardBadge = Template.bind({});
ColoredRewardBadge.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#ff1a1a",
        textColor: "#ffff00",
    }
};
ColoredRewardBadge.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the RewardBadge.",
        },
        source: {
            code: `<ColoredRewardBadge {...${JSON.stringify(
                ColoredRewardBadge.args,
                null,
                2
            )}}/>`,
        },
    },
}; 