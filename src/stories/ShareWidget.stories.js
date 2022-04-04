import React from "react";
import ShareWidget from "../components/ShareWidget/ShareWidget.react";

const dictionary = JSON.stringify({
    hi: {
        ShareWidget: {
            label: "शेयर",
        },
    },
});

export default {
    title: "Design System/ShareWidget/ShareWidget",
    component: ShareWidget,
    argTypes: {
        content: {
            table: {
                category: "with-Params",
                defaultValue: {
                    label: "",
                    url: ""
                },
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
                    accentColor: "",
                    textColor: "",
                    backgroundColor: "",
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
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle:
            "Default ShareWidget for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 150 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ShareWidget {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        label: "Share",
        url: "www.quodeck.com",
    },
    asFloated: "inline",
    withColor: {
        textColor: "#000000",
    },
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "ShareWidget",
        dictionary: dictionary,
    },
    isHidden: false,
    isDisabled: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<ShareWidget {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated ShareWidget
// -------------------------------------------------------------
export const AnimatedShareWidget = Template.bind({});
AnimatedShareWidget.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedShareWidget.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the ShareWidget with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedShareWidget {...${JSON.stringify(
                AnimatedShareWidget.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Translated ShareWidget
// -------------------------------------------------------------
export const TranslatedShareWidget = Template.bind({});
TranslatedShareWidget.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "ShareWidget",
        dictionary: dictionary,
    },
};
TranslatedShareWidget.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the ShareWidget, add a ShareWidget:{label} value to the dictionary.",
        },
        source: {
            code: `<TranslatedShareWidget {...${JSON.stringify(
                TranslatedShareWidget.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Variants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div>
            <ShareWidget
                {...Object.assign({}, baseObj, {
                    withTranslation: {
                        lang: "en",
                        tgt: "ShareWidget",
                        dictionary: dictionary,
                    }
                })}
            />{" "}
            <br />
            <ShareWidget
                {...Object.assign({}, baseObj, {
                    withTranslation: {
                        lang: "hi",
                        tgt: "ShareWidget",
                        dictionary: dictionary,
                    },
                })}
            />{" "}
            <br />
            <ShareWidget
                {...Object.assign({}, baseObj, {
                    withColor: {
                        textColor: "#00FF00",
                    }
                })}
            />{" "}
        </div>
    );
};
export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
    docs: {
        description: {
            story: "variants are supported. Use as per purpose noted here.",
        },
        source: {
            code: `<AllVariants {...${JSON.stringify(
                AllVariants.args,
                null,
                2
            )}}/>`,
        },
    },
};
