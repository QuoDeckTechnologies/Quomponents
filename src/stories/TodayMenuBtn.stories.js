import React from "react";
import TodayMenuBtn from "../components/TodayMenuBtn/TodayMenuBtn.react";

export default {
    title: "Design System/TodayMenuBtn",
    component: TodayMenuBtn,
    argTypes: {
        content: "",
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
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
                    accentColor: ""
                },
            },
        },
        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    icon: "",
                    size: "",
                    position: ""
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
    asVariant: "secondary",
    asFloated: "inline",
    asPadded: "normal",
    withColor: {
        backgroundColor: "",
        textColor: "#ffffff",
        accentColor: "#ffffff"
    },
    withIcon: {
        icon: "fas fa-book",
        size: "1em",
        position: "left"
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<TodayMenuBtn content= "Learn"
            asVariant= "secondary"
            asFloated= "inline"
            asPadded= "normal"
            withColor= {{
                backgroundColor: "",
                textColor: "#ffffff",
                accentColor: "#ffffff"
            }}
            withIcon={{
                icon: "fas fa-book",
                size: "1em",
                position: "left"
            }}
            isDisabled= {false}
            isHidden= {false}
            />`,
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
    asFloated: "none",
    asPadded: "normal",
    withColor: {
        backgroundColor: "#C1DC9E",
        textColor: "#454545",
        accentColor: "#52AF50"
    },
    withIcon: { icon: "fas fa-check-circle", size: "1em", position: "left" },
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
            code: `<TodayMenuBtn content= "Learn"
            asVariant= "secondary"
            asFloated= "none"
            asPadded= "normal"
            withColor= {{
                backgroundColor: "#C1DC9E",
                textColor: "#454545",
                accentColor: "#52AF50"
            }}
            withIcon={{
                icon: "fas fa-check-circle",
                size: "1em",
                position: "left" 
            }}
            isDisabled= {false}
            isHidden= {false}
            />`,
        },
    },
};
export const ActiveTodayMenuBtn = Template.bind({});
ActiveTodayMenuBtn.args = {
    ...Default.args,
    content: "LEARN",
    asFloated: "none",
    asPadded: "normal",
    withColor: {
        backgroundColor: "#222A35",
        textColor: "#FFFFFF",
        accentColor: "#FFCA36"
    },
    withIcon: { icon: "fas fa-book", size: "1em", position: "left" },
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
            code: `<TodayMenuBtn content= "Learn"
            asVariant= "secondary"
            asFloated= "none"
            asPadded= "normal"
            withColor= {{
                backgroundColor: "#222A35",
                textColor: "#FFFFFF",
                accentColor: "#FFCA36"
            }}
            withIcon={{
                icon: "fas fa-book",
                size: "1em",
                position: "left"
            }}
            isDisabled= {false}
            isHidden= {false}
            />`,
        },
    },
};

// -------------------------------------------------------------
// Different Variants TodayMenuBtn
// -------------------------------------------------------------
const TodayMenuTemplate = (args) => {
    return (
        <div style={{
            overflowY: "none",
            display: "flex",
            overflowX: "auto"
        }}>
            <div style={{ margin: "0 0.1em" }}>
                <TodayMenuBtn
                    {...Object.assign({}, {
                        content: "",
                        withIcon: { icon: "fas fa-home", size: "1em", position: "left" },
                    })}
                />
            </div>
            <div style={{ margin: "0 0.1em" }}>
                <TodayMenuBtn
                    {...Object.assign({}, {
                        content: "Learn",
                        withIcon: { icon: "fas fa-certificate", size: "1em", position: "left" },
                    })}
                /></div>
            <div style={{ margin: "0 0.1em" }}>
                <TodayMenuBtn
                    {...Object.assign({}, {
                        content: "Play",
                        withIcon: { icon: "fas fa-gamepad", size: "1em", position: "left" },
                    })}
                /></div>
            <div style={{ margin: "0 0.1em" }}>
                <TodayMenuBtn
                    {...Object.assign({}, {
                        content: "Win",
                        withIcon: { icon: "fas fa-trophy", size: "1em", position: "left" },
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