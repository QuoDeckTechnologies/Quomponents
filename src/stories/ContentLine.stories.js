import React from "react";
import ContentLine from "../components/ContentLine/ContentLine.react";

export default {
    title: "Design System/ContentLine",
    component: ContentLine,
    argTypes: {
        name: "",
        isActive: false,
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
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
        componentSubtitle: "Displays a DeckLine if we pass icon and Displays TopicLine if we do not pass icon",
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
    name: "What is Sales Pitching?",
    isActive: false,
    asPadded: "fitted",
    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    withIcon: { icon: "fas fa-book" },
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
    isActive: true,
    withColor: {
        backgroundColor: "#ED6E6E",
        textColor: "#FFFFFF",
    }
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
            name: "What is Topic1",
            withIcon: {
                name: "What is Topic1",
                icon: "fas fa-book"
            },
            isActive: false,
            isDisabled: false
        },
        {
            name: "What is Topic2",
            withIcon: {
                name: "What is Topic2",
                icon: "fas fa-book"
            },
            isActive: false,
            isDisabled: false
        },
        {
            name: "What is Topic3",
            withIcon: {
                name: "What is Topic3",
                icon: "fas fa-book"
            },
            isActive: true,
            isDisabled: false
        },
        {
            name: "What is Topic4",
            withIcon: {
                name: "What is Topic4",
                icon: "fas fa-book"
            },
            isActive: false,
            isDisabled: true
        },
        {
            name: "What is Topic5",
            withIcon: {
                name: "What is Topic5",
                icon: "fas fa-book"
            },
            isActive: false,
            isDisabled: true
        },
        {
            name: "What is Topic6",
            withIcon: {
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
                            name={data.name}
                            withIcon={data.withIcon}
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