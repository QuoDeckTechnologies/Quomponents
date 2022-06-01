import React from "react";
import PictureFuddle from "../../components/Templates/PictureFuddle/PictureFuddle.react";

const dictionary = JSON.stringify({
    hi: {
        PictureFuddle: {
            button: {
                checkAnswer: "जवाब की जांच करो",
                submitAnswer: "उत्तर सबमिट करें"
            }
        }
    }
});
export default {
    title: "Design System/Templates/PictureFuddle/PictureFuddle",
    component: PictureFuddle,
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
        componentSubtitle: "Displays a PictureFuddle with a question and Input Field, the user need to submit the answer, we can switch between the image and SlideHeader by adding or removing the image prop",
        a11y: { disable: true },
        docs: {
            iframeHeight: 650,
        },
    },
};
const Template = (args) => <PictureFuddle {...args} />;
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        backgroundImage: {
            id: "background-image",
            extention: ""
        },
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
        tgt: "PictureFuddle",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<PictureFuddle {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// PictureFuddleWithSlideHeader
// -------------------------------------------------------------
export const PictureFuddleWithSlideHeader = Template.bind({});
PictureFuddleWithSlideHeader.args = {
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
        tgt: "PictureFuddle",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
};
PictureFuddleWithSlideHeader.parameters = {
    docs: {
        source: {
            code: `<PictureFuddle {...${JSON.stringify(PictureFuddleWithSlideHeader.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// PictureFuddleWithSlideHeaderAndBackgroundImage
// -------------------------------------------------------------
export const PictureFuddleWithSlideHeaderAndBackgroundImage = Template.bind({});
PictureFuddleWithSlideHeaderAndBackgroundImage.args = {
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
        tgt: "PictureFuddle",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
};
PictureFuddleWithSlideHeaderAndBackgroundImage.parameters = {
    docs: {
        source: {
            code: `<PictureFuddle {...${JSON.stringify(PictureFuddleWithSlideHeaderAndBackgroundImage.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated PictureFuddle
// -------------------------------------------------------------
export const TranslatedPictureFuddle = Template.bind({});
TranslatedPictureFuddle.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "PictureFuddle",
        dictionary: dictionary
    },
};
TranslatedPictureFuddle.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the PictureFuddle, add a content:{text:{title, subTitle},label} value to the dictionary.",
        },
        source: {
            code: `<PictureFuddle {...${JSON.stringify(
                TranslatedPictureFuddle.args,
                null,
                2
            )}}/>`,
        },
    },
};