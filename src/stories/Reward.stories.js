import React from "react";
import Reward from "../components/Reward/Reward.react";
import rewardImage from "../assets/coin.png";

const dictionary = JSON.stringify({
    hi: {
        reward: {
            label: "जीतने के लिए पूर्ण करें",
        }
    },
    en: {
        reward: {
            label: "Complete to win",
        }
    }
});

export default {
    title: "Design System/Reward/Reward",
    component: Reward,
    argTypes: {
        content: {
            table: {
                category: "with-Params",
                defaultValue: {
                    label: "",
                    point: "",
                    image: "",
                },
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
                    textColor: "",
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
        withTranslation: {
            table: {
                category: "with-Params",
                defaultValue: {
                    lang: "",
                    tgt: "",
                    dictionary: "",
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
                    textAlign: "center",
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a basic Reward for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Reward {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        label: "Complete to win",
        point: "10,000",
        image: rewardImage
    },
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",

    withColor: {
        textColor: "#3e587a",
        accentColor: "#ed6e6e",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "reward",
        dictionary: dictionary,
    },
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<Reward {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animation Reward
// -------------------------------------------------------------
export const AnimationReward = Template.bind({});
AnimationReward.args = {
    ...Default.args,
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
};
AnimationReward.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the Reward with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimationReward {...${JSON.stringify(
                AnimationReward.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Point Color in Reward
// -------------------------------------------------------------
export const PointColor = Template.bind({});
PointColor.args = {
    ...Default.args,
    withColor: {
        textColor: "",
        accentColor: "#FF0000",
    },
};
PointColor.parameters = {
    docs: {
        description: {
            story:
                "Use to change the point color that appears in Reward Component. To make this work, add a withColor:{accentColor}.",
        },
        source: {
            code: `<PointColor {...${JSON.stringify(
                PointColor.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Label Color in Reward
// -------------------------------------------------------------
export const LabelColor = Template.bind({});
LabelColor.args = {
    ...Default.args,
    withColor: {
        textColor: "#1C6600",
        accentColor: "",
    },
};
LabelColor.parameters = {
    docs: {
        description: {
            story:
                "Use to change the label color that appears in Reward Component. To make this work, add a withColor:{textColor}.",
        },
        source: {
            code: `<LabelColor {...${JSON.stringify(
                LabelColor.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Translated Reward
// -------------------------------------------------------------
export const TranslatedReward = Template.bind({});
TranslatedReward.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "reward",
        dictionary: dictionary,
    },
};
TranslatedReward.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in Reward.",
        },
        source: {
            code: `<Reward {...${JSON.stringify(
                TranslatedReward.args,
                null,
                2
            )}}/>`,
        },
    },
};