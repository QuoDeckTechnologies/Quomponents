import React from "react";
import RewardBadge from "../components/RewardBadge/RewardBadge.react";

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
                    textColor: "",
                    hoverBackgroundColor: "",
                    hoverTextColor: "",
                },
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
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
    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
    asVariant: "warning",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "inline",
    asAligned: "center",
    withColor: {
        backgroundColor: "",
    },
    withLabel: {
        format: "caption",
        content: "You won the July season!.",
        textColor: "#000000",
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
            code: `<RewardBadge {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated RewardBadge
// -------------------------------------------------------------
export const AnimatedRewardBadge = Template.bind({});
AnimatedRewardBadge.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedRewardBadge.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the RewardBadge with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedRewardBadge {...${JSON.stringify(
                AnimatedRewardBadge.args,
                null,
                2
            )}}/>`,
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
        accentColor: "#ff1a1a",
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