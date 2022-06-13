import React from "react";
import ContentLine from "../components/ContentLine/ContentLine.react";

export default {
    title: "Design System/ContentLine/ContentLine",
    component: ContentLine,
    argTypes: {
        content: {},
        isActive: false,
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
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
        componentSubtitle: "Displays a ContentLine with date and player's coins",
        a11y: { disable: true },
        docs: { iframeHeight: 500 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ContentLine {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        name: "What is Sales Pitching?",
        icon: "fas fa-book"
    },
    isActive: false,
    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    withAnimation: {
        animation: "slideDown",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    isDisabled: false
};
Default.parameters = {
    docs: {
        source: {
            code: `<ContentLine {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// ActiveContentLine
// -------------------------------------------------------------
export const ActiveContentLine = Template.bind({});
ActiveContentLine.args = {
    ...Default.args,
    content: {
        name: "What is Sales Pitching?",
        icon: "fas fa-book"
    },
    isActive: true,
    withColor: {
        backgroundColor: "#ED6E6E",
        textColor: "#FFFFFF",
    },
    withAnimation: {
        animation: "slideDown",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    isDisabled: false
};
ActiveContentLine.parameters = {
    docs: {
        description: {
            story: "Use to show Active ContentLine.",
        },
        source: {
            code: `<ContentLine {...${JSON.stringify(ActiveContentLine.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// DisabledContentLine
// -------------------------------------------------------------
export const DisabledContentLine = Template.bind({});
DisabledContentLine.args = {
    ...Default.args,
    content: {
        name: "What is Sales Pitching?",
        icon: "fas fa-book"
    },
    isActive: false,
    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    withAnimation: {
        animation: "slideDown",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    isDisabled: true
};
DisabledContentLine.parameters = {
    docs: {
        description: {
            story: "Use to show Disabled ContentLine.",
        },
        source: {
            code: `<ContentLine {...${JSON.stringify(DisabledContentLine.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// MultipleContentLine
// -------------------------------------------------------------
export const MultipleContentLine = (args) => {
    let data = [
        {
            content: {
                name: "What is Topic1",
                icon: "fas fa-book"
            },
            isActive: false,
            isDisabled: false
        },
        {
            content: {
                name: "What is Topic2",
                icon: "fas fa-book"
            },
            isActive: false,
            isDisabled: false
        },
        {
            content: {
                name: "What is Topic3",
                icon: "fas fa-book"
            },
            isActive: true,
            isDisabled: false
        },
        {
            content: {
                name: "What is Topic4",
                icon: "fas fa-book"
            },
            isActive: false,
            isDisabled: true
        },
        {
            content: {
                name: "What is Topic5",
                icon: "fas fa-book"
            },
            isActive: false,
            isDisabled: true
        },
        {
            content: {
                name: "What is Topic6",
                icon: "fas fa-book"
            },
            isActive: false,
            isDisabled: true
        }
    ]
    return (
        <div>
            {
                data.map((data, index) => {
                    return (
                        <ContentLine
                            key={index}
                            content={data.content}
                            isActive={data.isActive}
                            isDisabled={data.isDisabled}
                            withAnimation={{
                                animation: "zoom",
                                duration: 0.5,
                                delay: 0,
                            }}
                        />
                    )
                })
            }
        </div>
    );
};