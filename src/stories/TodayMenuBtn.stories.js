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
    content: "Learn",
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
// -------------------------------------------------------------
// CompleteTodayMenuBtn
// -------------------------------------------------------------
export const CompleteTodayMenuBtn = Template.bind({});
CompleteTodayMenuBtn.args = {
    ...Default.args,
    content: "LEARN",
    withIcon: "fas fa-certificate",
    asEmphasis: "Complete",
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
CompleteTodayMenuBtn.parameters = {
    docs: {
        description: {
            story:
                "Shows Complete TodayMenuBtn component",
        },
        source: {
            code: `<CompleteTodayMenuBtn {...${JSON.stringify(
                CompleteTodayMenuBtn.args,
                null,
                2
            )}}/>`,
        },
    },
};
export const ActiveTodayMenuBtn = Template.bind({});
ActiveTodayMenuBtn.args = {
    ...Default.args,
    content: "LEARN",
    withIcon: "fas fa-certificate",
    asEmphasis: "Active",
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
ActiveTodayMenuBtn.parameters = {
    docs: {
        description: {
            story:
                "Shows Active TodayMenuBtn component",
        },
        source: {
            code: `<ActiveTodayMenuBtn {...${JSON.stringify(
                ActiveTodayMenuBtn.args,
                null,
                2
            )}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Different Variants TodayMenuBtn
// -------------------------------------------------------------
const TodayMenuTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
            withColor: null,
        }),
    };
    return (
        <div style={{
            overflowY: "none",
            display: "flex",
            overflowX: "auto"
        }}>
            <div style={{ margin: "0 0.1em" }}>
                <TodayMenuBtn
                    {...Object.assign({}, baseObj, {
                        content: "",
                        withIcon: "fas fa-home",
                        withAnimation: {
                            animation: "slideLeft",
                            duration: 0.5,
                            delay: 0,
                        },
                    })}
                />
            </div>
            <div style={{ margin: "0 0.1em" }}>
                <TodayMenuBtn
                    {...Object.assign({}, baseObj, {
                        content: "Learn",
                        withIcon: "fas fa-certificate",
                        withAnimation: {
                            animation: "slideLeft",
                            duration: 0.5,
                            delay: 0.5,
                        },
                    })}
                /></div>
            <div style={{ margin: "0 0.1em" }}>
                <TodayMenuBtn
                    {...Object.assign({}, baseObj, {
                        content: "Play",
                        withIcon: "fas fa-gamepad",
                        withAnimation: {
                            animation: "slideLeft",
                            duration: 0.5,
                            delay: 1,
                        },
                    })}
                /></div>
            <div style={{ margin: "0 0.1em" }}>
                <TodayMenuBtn
                    {...Object.assign({}, baseObj, {
                        content: "Win",
                        withIcon: "fas fa-trophy",
                        withAnimation: {
                            animation: "slideLeft",
                            duration: 0.5,
                            delay: 1.5,
                        },
                    })}
                />
            </div>
        </div>
    );
};
export const TodayMenu = TodayMenuTemplate.bind({});
TodayMenu.parameters = {
    docs: {
        description: {
            story: "TodayMenu contains multiple TodayMenuBtn",
        },
        source: {
            code: ``,
        },
    },
};