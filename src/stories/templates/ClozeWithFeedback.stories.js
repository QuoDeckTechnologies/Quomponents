import React from "react";
import ClozeWithFeedback from "../../components/Templates/ClozeWithFeedback/ClozeWithFeedback.react";

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
    title: "Design System/Templates/ClozeWithFeedback",
    component: ClozeWithFeedback,
    argTypes: {
        data: {
            title: "",
            subtitle: "",
            image: {},
            backgroundImage: {},
            question: "",
            answer: "",
            purpose: "",
        },
        slideId: 0,
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
                    questionColor: "",
                    slideHeaderTextColor: "",
                    slideHeaderAccentColor: "",
                    slideHeaderBackgroundColor: "",
                    inputFieldTextColor: "",
                    inputFieldAccentColor: "",
                    inputFieldBackgroundColor: "",
                    buttonTextColor: "",
                    buttonBackgroundColor: "",
                    buttonHoverBackgroundColor: "",
                    buttonHoverTextColor: "",
                    backgroundColor: "#fff",
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
        trackInteraction: {
            action: 'trackInteraction'
        }
    },
    decorators: [
        (story) => (
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a ClozeWithFeedback with a question and Input Field, the user need to submit the answer, we can switch between the image and SlideHeader by adding or removing the image prop",
        a11y: { disable: true },
        docs: {
            iframeHeight: 650,
        },
    },
};
const Template = (args) => <ClozeWithFeedback {...args} />;

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: {
            id: "header-image",
            extention: ""
        },
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Answer",
        purpose: ""
    },
    imageLibrary: [{
        id: "background-image",
        image: ""
    }, {
        id: "header-image",
        image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
    }],
    slideId: 0,
    asVariant: "warning",
    withColor: {
        questionColor: "#000000",
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
        inputFieldTextColor: "",
        inputFieldAccentColor: "",
        inputFieldBackgroundColor: "",
        buttonTextColor: "",
        buttonBackgroundColor: "",
        buttonHoverBackgroundColor: "",
        buttonHoverTextColor: "",
        backgroundColor: "#fff",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "templateActions",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<ClozeWithFeedback {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// ClozeWithFeedbackWithSlideHeader
// -------------------------------------------------------------
export const ClozeWithFeedbackWithSlideHeader = Template.bind({});
ClozeWithFeedbackWithSlideHeader.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Answer",
        purpose: ""
    },
    slideId: 0,
    asVariant: "warning",
    withColor: {
        questionColor: "#000000",
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
        inputFieldTextColor: "",
        inputFieldAccentColor: "",
        inputFieldBackgroundColor: "",
        buttonTextColor: "",
        buttonBackgroundColor: "",
        buttonHoverBackgroundColor: "",
        buttonHoverTextColor: "",
        backgroundColor: "#ffffff",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "templateActions",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
};
ClozeWithFeedbackWithSlideHeader.parameters = {
    docs: {
        source: {
            code: `<ClozeWithFeedback {...${JSON.stringify(ClozeWithFeedbackWithSlideHeader.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// ClozeWithFeedbackWithSlideHeaderAndBackgroundImage
// -------------------------------------------------------------
export const ClozeWithFeedbackWithSlideHeaderAndBackgroundImage = Template.bind({});
ClozeWithFeedbackWithSlideHeaderAndBackgroundImage.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        backgroundImage: {
            id: "background-image",
            extention: ""
        },
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Answer",
        purpose: ""
    },
    imageLibrary: [{
        id: 'background-image',
        image: "https://media.istockphoto.com/vectors/question-mark-3d-seamless-wallpaper-pattern-vector-id494094966?k=20&m=494094966&s=612x612&w=0&h=tXbLXNlUjL-jLsZOm7VBjDKY-Pp4yXJRwKv2pmi3TII=",
    }],
    slideId: 0,
    asVariant: "primary",
    withColor: {
        questionColor: "#000000",
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
        inputFieldTextColor: "",
        inputFieldAccentColor: "#AD292980",
        inputFieldBackgroundColor: "#ffffff",
        buttonTextColor: "",
        buttonBackgroundColor: "",
        buttonHoverBackgroundColor: "",
        buttonHoverTextColor: "",
        backgroundColor: "#ffffff",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "templateActions",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
};
ClozeWithFeedbackWithSlideHeaderAndBackgroundImage.parameters = {
    docs: {
        source: {
            code: `<ClozeWithFeedback {...${JSON.stringify(ClozeWithFeedbackWithSlideHeaderAndBackgroundImage.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated ClozeWithFeedback
// -------------------------------------------------------------
export const TranslatedClozeWithFeedback = Template.bind({});
TranslatedClozeWithFeedback.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "templateActions",
        dictionary: dictionary
    },
};
TranslatedClozeWithFeedback.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the ClozeWithFeedback, add a ClozeWithFeedback:{button:{checkAnswer, submitAnswer}} value to the dictionary.",
        },
        source: {
            code: `<ClozeWithFeedback {...${JSON.stringify(
                TranslatedClozeWithFeedback.args,
                null,
                2
            )}}/>`,
        },
    },
};