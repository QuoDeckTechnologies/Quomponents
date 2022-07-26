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
        },
        onClick: {
            table: {
                category: "Events",
                defaultValue: null,
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
        docs: { iframeHeight: 300 },
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
// -------------------------------------------------------------
// DisabledRewardBadge
// -------------------------------------------------------------
export const DisabledRewardBadge = Template.bind({});
DisabledRewardBadge.args = {
    ...Default.args,
    asVariant: "secondary",
    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    isDisabled: true
};
DisabledRewardBadge.parameters = {
    docs: {
        description: {
            story:
                "Used as disabled version of the RewardBadge.",
        },
        source: {
            code: `<DisabledRewardBadge {...${JSON.stringify(
                DisabledRewardBadge.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// RewardBadgeWithCaptionFormat
// -------------------------------------------------------------
export const RewardBadgeWithCaptionFormat = Template.bind({});
RewardBadgeWithCaptionFormat.args = {
    ...Default.args,
    asVariant: "secondary",
    withColor: {
        backgroundColor: "",
        textColor: "",
    },

    withLabel: {
        format: "caption",
        content: "You won the July season!",
        textColor: "#000000",
    },
};
RewardBadgeWithCaptionFormat.parameters = {
    docs: {
        description: {
            story:
                "Use the content of RewardBadge in the caption format from withLable prop.",
        },
        source: {
            code: `<RewardBadgeWithCaptionFormat {...${JSON.stringify(
                RewardBadgeWithCaptionFormat.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// RewardBadgeWithLabelFormat
// -------------------------------------------------------------
export const RewardBadgeWithLabelFormat = Template.bind({});
RewardBadgeWithLabelFormat.args = {
    ...Default.args,
    asVariant: "secondary",
    withColor: {
        backgroundColor: "",
        textColor: "",
    },

    withLabel: {
        format: "label",
        content: "You won the July season!",
        textColor: "#000000",
    },
};
RewardBadgeWithLabelFormat.parameters = {
    docs: {
        description: {
            story:
                "Use the content of RewardBadge in the label format from withLable prop.",
        },
        source: {
            code: `<RewardBadgeWithLabelFormat {...${JSON.stringify(
                RewardBadgeWithLabelFormat.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// RewardBadgeWithPopoverFormat
// -------------------------------------------------------------
export const RewardBadgeWithPopoverFormat = Template.bind({});
RewardBadgeWithPopoverFormat.args = {
    ...Default.args,
    asVariant: "secondary",
    withColor: {
        backgroundColor: "",
        textColor: "",
    },

    withLabel: {
        format: "popover",
        content: "You won the July season!",
        textColor: "#000000",
    },
};
RewardBadgeWithPopoverFormat.parameters = {
    docs: {
        description: {
            story:
                "Use the content of RewardBadge in a popover format from withLable prop that will be shown when user hover over the badge.",
        },
        source: {
            code: `<RewardBadgeWithPopoverFormat {...${JSON.stringify(
                RewardBadgeWithPopoverFormat.args,
                null,
                2
            )}}/>`,
        },
    },
}; 