import React from "react";
import SerialCard from "../components/SerialCard/SerialCard.react";
import Image from "../assets/GameImage.png";

export default {
    title: "Design System/SerialCard/SerialCard",
    component: SerialCard,
    argTypes: {
        content: {
            table: {
                defaultValue: {
                    title: "",
                    description: "",
                    backImage: "",
                    image: "",
                    playerIcon: "",
                    playersValue: 1,
                    iconOpt: [],
                },
            },
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
                    textAlign: "",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a SerialCard with, images and icon for general-purpose use",
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
    return <SerialCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    content: {
        title: "5th May 2022",
        description:
            "What are Mutual Funds?",
        image: Image,
        backImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        playerIcon: "fa fa-users",
        playersValue: 20539,
        iconOpt: ["fa fa-book", "fa fa-gamepad", "fa fa-trophy"]
    },
    asVariant: "error",
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
            code: `<SerialCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Colored SerialCard
// -------------------------------------------------------------
export const ColoredSerialcard = Template.bind({});
ColoredSerialcard.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "",
        textColor: "#3A8080",
        accentColor: "#F2A52D"
    },
    asVariant: "warning",
};
ColoredSerialcard.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of SerialCard",
        },
        source: {
            code: `<SerialCard {...${JSON.stringify(
                ColoredSerialcard.args,
                null,
                2
            )}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Animated SerialCard
// -------------------------------------------------------------
export const AnimatedSerialcard = Template.bind({});
AnimatedSerialcard.args = {
    ...Default.args,
    withAnimation: {
        animation: "collapse",
        duration: 1,
        delay: 0,
    },
};
AnimatedSerialcard.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of SerialCard",
        },
        source: {
            code: `<SerialCard {...${JSON.stringify(
                AnimatedSerialcard.args,
                null,
                2
            )}}/>`,
        },
    },
};