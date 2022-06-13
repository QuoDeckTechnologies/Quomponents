import React from "react";
import TodayMenuBtn from "../components/TodayMenuBtn/TodayMenuBtn.react";

export default {
    title: "Design System/TodayMenuBtn/TodayMenuBtn",
    component: TodayMenuBtn,
    argTypes: {
        content: "",
        withIcon: "",
        asEmphasis: {
            control: "select",
            options: ["Default", "Complete", "Active"]
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
                    iconColor: ""
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
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a TodayMenuBtn for general-purpose use",
        a11y: { disable: true },
        docs: {
            iframeHeight: 300,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <TodayMenuBtn {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "Home",
    withIcon: "fas fa-certificate",
    asEmphasis: "Default",
    asFloated: "none",
    withColor: {
        backgroundColor: "",
        textColor: "",
        iconColor: ""
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
            code: `<TodayMenuBtn {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
