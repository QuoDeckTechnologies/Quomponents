import React from "react";
import ContentLine from "../components/ContentLine/ContentLine.react";

const dictionary = JSON.stringify({
    hi: {
        ContentLine: {

        },
    },
});
export default {
    title: "Design System/ContentLine/ContentLine",
    component: ContentLine,
    argTypes: {
        content: {},
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
    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    withAnimation: {
        animation: "slideDown",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "ContentLine",
        dictionary: dictionary,
    },
    isHidden: false
};
Default.parameters = {
    docs: {
        source: {
            code: `<ContentLine {...${JSON.stringify(Default.args, null, 2)}}/>`,
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
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        },
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        },
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        },
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        },
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        },
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        },
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            }
        }
    ]
    return (
        <div>
            {
                data.map((user, index) => {
                    return (
                        <ContentLine
                            key={index}
                            content={user.content}
                            withColor={{
                                backgroundColor: '#FFBF00',
                                textColor: '#000'
                            }}
                            withAnimation={{
                                animation: "zoom",
                                duration: 0.5,
                                delay: 0,
                            }}
                            withTranslation={{
                                lang: "en",
                                tgt: "ContentLine",
                                dictionary: dictionary,
                            }}
                        />
                    )
                })
            }
        </div>
    );
};
// -------------------------------------------------------------
// MultipleContentLinesWithFixedDivSize
// -------------------------------------------------------------
export const MultipleContentLinesWithFixedDivSize = (args) => {
    let data = [
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        },
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        },
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        },
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        },
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        },
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        },
        {
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
        }
    ]
    return (
        <div style={{ width: "290px" }}>
            {
                data.map((user, index) => {
                    return (
                        <ContentLine
                            key={index}
                            content={user.content}
                            withColor={{
                                backgroundColor: '#FFBF00',
                                textColor: '#000'
                            }}
                            withAnimation={{
                                animation: "zoom",
                                duration: 0.5,
                                delay: 0,
                            }}
                            withTranslation={{
                                lang: "en",
                                tgt: "ContentLine",
                                dictionary: dictionary,
                            }}
                        />
                    )
                })
            }
        </div>
    );
};
// -------------------------------------------------------------
// Translated AmplayfierDateBlock
// -------------------------------------------------------------
export const TranslatedContentLine = Template.bind({});
TranslatedContentLine.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "ContentLine",
        dictionary: dictionary,
    },
};
TranslatedContentLine.parameters = {
    docs: {
        source: {
            code: `<TranslatedContentLine {...${JSON.stringify(
                TranslatedContentLine.args,
                null,
                2
            )}}/>`,
        },
    },
};
