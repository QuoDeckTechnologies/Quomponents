import React from "react";
import Reward from "../components/Reward/Reward.react"

const dictionary = JSON.stringify({
    // en: {
    //     reward: {
    //         content: "Complete to win",amount:"10,000"
    //     },
    // },
    hi: {
        reward: { label: "जीतने के लिए पूर्ण", point: "१०,०००" },
    },
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
                    textColor: "",
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
        componentSubtitle: "Displays a basic button for general-purpose use",
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
        textColor: "#3E587A",
    },
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",

    withIcon: {
        icon: "https://lh3.googleusercontent.com/kG6f_MoL-4JkAaqeCMRbbAwTXByEoDZ59wJFM5WVWpn2z_r-UiNCJPpNp5LWTLMtaBrxn7c=s55",
    },
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
                "Use to change the language that the label appears in. To make this work for the reward, add a reward:{label} value to the dictionary.",
        },
        source: {
            code: `<TranslatedReward {...${JSON.stringify(
                TranslatedReward.args,
                null,
                2
            )}}/>`,
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
                "Use to change the language that the label appears in. To make this work for the reward, add a reward:{label} value to the dictionary.",
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
// Amount Color Reward
// -------------------------------------------------------------
export const AmountColor = Template.bind({});
AmountColor.args = {
    ...Default.args,
    withColor: {
        textColor: "red",
    },
};
AmountColor.parameters = {
    docs: {
        description: {
            story:
                "Use to change the amount color that appears in Reward Component. To make this work, add a withColor:{textColor}.",
        },
        source: {
            code: `<AmountColor {...${JSON.stringify(
                AmountColor.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Label Color Reward
// -------------------------------------------------------------
export const LabelColor = Template.bind({});
LabelColor.args = {
    ...Default.args,
    content: {
        label: "Complete to win",
        point: "10,000",
        textColor: "green",
    },
};
LabelColor.parameters = {
    docs: {
        description: {
            story:
                "Use to change the label color that appears in Reward Component. To make this work, add a content:{textColor}.",
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