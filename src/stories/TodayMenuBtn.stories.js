import React from "react";
import TodayMenuBtn from "../components/TodayMenuBtn/TodayMenuBtn.react";

export default {
    title: "Design System/TodayMenuBtn/TodayMenuBtn",
    component: TodayMenuBtn,
    argTypes: {
        content: {},
        withIcon: "",
        isActive:{
            table: {
                category: "is-Toggles",
                defaultValue: false,
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
    withIcon: "",
    isActive:false,
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
