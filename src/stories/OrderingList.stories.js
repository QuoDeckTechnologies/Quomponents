import React from "react";
import OrderingList from "../components/OrderingList/OrderingList/OrderingList.react";

const dictionary = JSON.stringify({
    en: {
        templateActions: {
            checkAnswer: 'Check Answer',
            submitAnswer: 'Submit Answer',
            thanks: 'Thanks for your response',
            go: 'Go',
        }
    },
    hi: {
        templateActions: {
            checkAnswer: 'अपना उत्तर जाँच लें',
            submitAnswer: 'अपना जवाब सबमिट करें',
            thanks: 'आपके उत्तर के लिए धन्यवाद',
            go: 'आगे बढ़ें',
        }
    }
});
export default {
    title: "Design System/OrderingList",
    component: OrderingList,
    argTypes: {
        content: [],
        purpose: "",
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
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
                    hoverBackgroundColor: "",
                    hoverTextColor: "",
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
        componentSubtitle: "Display Options with up and down buttons to rank/ arrange options and submit the arranged options",
        a11y: { disable: true },
        docs: {
            iframeHeight: 550,
        },
    },
};
const Template = (args) => <OrderingList {...args} />;
//----------------------------------------------------------
// Default
//---------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
    purpose: "",
    asVariant: "warning",
    asFloated: "none",
    content: ["PRIMARY BUTTON", "SECONDARY BUTTON", "THIRD BUTTON"],
    withColor: {
        backgroundColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    withTranslation: {
        lang: "en",
        tgt: "templateActions",
        dictionary: dictionary,
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
        description: {
            story:
                "Any free fontawesome icon can be used as the OrderingList icon definition. This component is combination of the ordering Button  title component  and orderingList buuton  is clickable and ranking the title",
        },
        source: {
            code: `<OrderingList {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// AllVariants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div>
            <OrderingList
                {...Object.assign({}, baseObj, {
                    asVariant: "primary",
                    purpose: "quiz",
                })}
            />
            <OrderingList
                {...Object.assign({}, baseObj, {
                    asVariant: "secondary",
                    purpose: "",
                })}
            />
            <OrderingList
                {...Object.assign({}, baseObj, {
                    asVariant: "success",
                })}
            />
            <OrderingList
                {...Object.assign({}, baseObj, {
                    asVariant: "warning",
                })}
            />
            <OrderingList
                {...Object.assign({}, baseObj, {
                    asVariant: "error",
                })}
            />
        </div>
    );
};
export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
    docs: {
        description: {
            story: "5 variants are supported. Use as per purpose noted here.",
        },
        source: {
            code: `<OrderingList asVariant="primary"/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated OrderingList
// -------------------------------------------------------------
export const TranslatedOrderingList = Template.bind({});
TranslatedOrderingList.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "templateActions",
        dictionary: dictionary
    },
};
TranslatedOrderingList.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the OrderingList, add a templateActions:{} value to the dictionary.",
        },
        source: {
            code: `<OrderingList {...${JSON.stringify(
                TranslatedOrderingList.args,
                null,
                2
            )}}/>`,
        },
    },
};
