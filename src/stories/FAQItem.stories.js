import React from "react";
import FAQItem from "../components/FAQItem/FAQItem.react";

const dictionary = JSON.stringify({
    hi: {
        faqItem: {
            question: "प्र. सेल्स रेडीनेस और सेल्स इनेबलमेंट में क्या अंतर है?",
            answer: "बिक्री शब्दावली की दुनिया में खो जाना आसान हो सकता है। किसी भी क्षेत्र की तरह, जब आपका पहली बार लिंगो से परिचय होता है, तो यह एक नई भाषा सीखने जैसा महसूस हो सकता है। समान शब्दों के बीच महत्वपूर्ण अंतर को समझना अपने आप में एक चुनौती हो सकती है।"
        }
    },
});

export default {
    title: "Design System/FAQItem",
    component: FAQItem,
    argTypes: {
        question: "",
        answer: "",
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
        asAligned: {
            control: "select",
            options: ["left", "right", "center"],
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
                    hoverBackgroundColor: "",
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
        }
    },
    decorators: [
        (story) => (
            <div>
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a basic FAQItem for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 250 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <FAQItem {...args} />;
export const Default = Template.bind({});
Default.args = {
    question: "Q. What is the difference between Sales Readiness and Sales Enablement",
    answer: "It can be easy to get lost in the world of sales terminology. As with any field, when you’re first introduced to the lingo, it can feel like learning a new language. Understanding the key differences between similar terms can be a challenge in its own right.",
    asVariant: "warning",
    asFloated: "none",
    asAligned: "left",
    withColor: {
        accentColor: "#86BC25",
        textColor: "#000000",
        backgroundColor: "#EFEFEF",
        hoverBackgroundColor: "#ffffff",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "faqItem",
        dictionary: dictionary,
    },
    isHidden: false,
    isDisabled: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<FAQItem 
            question= "Question"
            answer= "Answer"
            asVariant= "warning"
            asFloated= "none"
            asAligned= "left"
            withColor= {{
                accentColor: "#86BC25",
                textColor: "#000000",
                backgroundColor: "#EFEFEF",
                hoverBackgroundColor: "#ffffff",
            }}
            withAnimation= {{
                animation: "zoom",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "en",
                tgt: "faqItem",
                dictionary: dictionary,
            }}
            isHidden= {false}
            isDisabled= {false}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated FAQItem
// -------------------------------------------------------------
export const AnimatedFAQItem = Template.bind({});
AnimatedFAQItem.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedFAQItem.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the FAQItem with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<FAQItem 
            question= "Question"
            answer= "Answer"
            asVariant= "warning"
            asFloated= "none"
            asAligned= "left"
            withColor= {{
                accentColor: "#86BC25",
                textColor: "#000000",
                backgroundColor: "#EFEFEF",
                hoverBackgroundColor: "#ffffff",
            }}
            withAnimation= {{
                animation: "slideRight",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "en",
                tgt: "faqItem",
                dictionary: dictionary,
            }}
            isHidden= {false}
            isDisabled= {false}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored FAQItem
// -------------------------------------------------------------
export const ColoredFAQItem = Template.bind({});
ColoredFAQItem.args = {
    ...Default.args,
    withColor: {
        accentColor: "#222A35",
        textColor: "#454545",
        backgroundColor: "#FFBF00",
        hoverBackgroundColor: "#E8E8E8",
    }
};
ColoredFAQItem.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the FAQItem.",
        },
        source: {
            code: `<FAQItem 
            question= "Question"
            answer= "Answer"
            asVariant= "warning"
            asFloated= "none"
            asAligned= "left"
            withColor= {{
                accentColor: "#222A35",
                textColor: "#454545",
                backgroundColor: "#FFBF00",
                hoverBackgroundColor: "#E8E8E8",
            }}
            withAnimation= {{
                animation: "zoom",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "en",
                tgt: "faqItem",
                dictionary: dictionary,
            }}
            isHidden= {false}
            isDisabled= {false}/>`,
        },
    },
};
// -------------------------------------------------------------
// Translated FAQItem
// -------------------------------------------------------------
export const TranslatedFAQItem = Template.bind({});
TranslatedFAQItem.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "faqItem",
        dictionary: dictionary,
    },
};
TranslatedFAQItem.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in FAQItem.",
        },
        source: {
            code: `<FAQItem 
            question= "Question"
            answer= "Answer"
            asVariant= "warning"
            asFloated= "none"
            asAligned= "left"
            withColor= {{
                accentColor: "#86BC25",
                textColor: "#000000",
                backgroundColor: "#EFEFEF",
                hoverBackgroundColor: "#ffffff",
            }}
            withAnimation= {{
                animation: "zoom",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "hi",
                tgt: "faqItem",
                dictionary: dictionary,
            }}
            isHidden= {false}
            isDisabled= {false}/>`,
        },
    },
};