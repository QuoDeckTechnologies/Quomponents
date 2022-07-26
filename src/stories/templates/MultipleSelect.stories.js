import React from "react";
import MultipleSelect from "../../components/Templates/MultipleSelect/MultipleSelect.react";

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
    title: "Design System/Templates/MultipleSelect",
    component: MultipleSelect,
    argTypes: {
        data: {
            defaultValue: {
                title: "",
                subtitle: "",
                image: {},
                question: "",
                backgroundImage: {},
                multiselect: [],
                purpose: ""
            }
        },
        slideId: 0,
        imageLibrary: [],
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
                    buttonBackgroundColor: "",
                    buttonTextColor: "",
                    buttonHoverBackgroundColor: "",
                    buttonHoverTextColor: ""
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
        asEmphasis: {
            control: "select",
            options: ["text", "outlined", "contained"],
            table: {
                category: "as-Flags",
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
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle:
            "Displays a MultipleSelect with a question, the user need to submit the correct option/ options by clicking on the button or checkbox, we can switch between the image and SlideHeader by adding or removing the image prop",
        a11y: { disable: true },
        docs: {
            iframeHeight: 650,
        },
    },
};
const Template = (args) => <MultipleSelect {...args} />;
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: { id: "header-image", extension: "" },
        backgroundImage: { id: "", extention: "" },
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        multiselect: [
            {
                name: "Item 1",
                isSelected: false,
            },
            {
                name: "Item 2",
                isSelected: false,
            },
            {
                name: "Item 3",
                isSelected: false,
            },
            {
                name: "Item 4",
                isSelected: false,
            }
        ],
        purpose: "quiz"
    },
    slideId: 0,
    imageLibrary: [{
        id: "header-image",
        image:
            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    }],
    asVariant: "warning",
    withColor: {
        questionColor: "#000000",
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
        buttonBackgroundColor: "#ad292980",
        buttonTextColor: "",
        buttonHoverBackgroundColor: "#AD2929",
        buttonHoverTextColor: "",
        backgroundColor: "#AD292"
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
    asEmphasis: "contained",
    isDisabled: false,
    isHidden: false
};
Default.parameters = {
    docs: {
        source: {
            code: `<MultipleSelect {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// MultipleSelectWithSlideHeader
// -------------------------------------------------------------
export const MultipleSelectWithSlideHeader = Template.bind({});
MultipleSelectWithSlideHeader.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        backgroundImage: { id: "", extention: "" },
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        multiselect: [
            {
                name: "Item 1",
                isSelected: false,
            },
            {
                name: "Item 2",
                isSelected: false,
            },
            {
                name: "Item 3",
                isSelected: false,
            },
            {
                name: "Item 4",
                isSelected: false,
            }
        ],
        purpose: ""
    },
    slideId: 0,
    asVariant: "primary",
    withColor: {
        questionColor: "#000000",
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
        buttonBackgroundColor: "",
        buttonTextColor: "",
        buttonHoverBackgroundColor: "",
        buttonHoverTextColor: "",
        backgroundColor: "#AD292"
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
    asEmphasis: "contained",
    isDisabled: false,
    isHidden: false,
};
MultipleSelectWithSlideHeader.parameters = {
    docs: {
        source: {
            code: `<MultipleSelect {...${JSON.stringify(
                MultipleSelectWithSlideHeader.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// EmphasisMultipleSelect
// -------------------------------------------------------------
export const EmphasisMultipleSelect = Template.bind({});
EmphasisMultipleSelect.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: { id: "header-image", extension: "" },
        backgroundImage: { id: "", extention: "" },
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        multiselect: [
            {
                name: "Item 1",
                isSelected: false,
            },
            {
                name: "Item 2",
                isSelected: false,
            },
            {
                name: "Item 3",
                isSelected: false,
            },
            {
                name: "Item 4",
                isSelected: false,
            }
        ],
        purpose: "quiz"
    },
    slideId: 0,
    imageLibrary: [{
        id: "header-image",
        image:
            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    }],
    asVariant: "secondary",
    withColor: {
        questionColor: "#000000",
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
        buttonBackgroundColor: "",
        buttonTextColor: "",
        buttonHoverBackgroundColor: "",
        buttonHoverTextColor: "",
        backgroundColor: "#AD292"
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
    asEmphasis: "outlined",
    isDisabled: false,
    isHidden: false,
};
EmphasisMultipleSelect.parameters = {
    docs: {
        source: {
            code: `<MultipleSelect {...${JSON.stringify(
                EmphasisMultipleSelect.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// ColoredMultipleSelect
// -------------------------------------------------------------
export const ColoredMultipleSelect = Template.bind({});
ColoredMultipleSelect.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: { id: "header-image", extension: "" },
        backgroundImage: { id: "", extention: "" },
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        multiselect: [
            {
                name: "Item 1",
                isSelected: false,
            },
            {
                name: "Item 2",
                isSelected: false,
            },
            {
                name: "Item 3",
                isSelected: false,
            },
            {
                name: "Item 4",
                isSelected: false,
            }
        ]
    },
    slideId: 0,
    imageLibrary: [{
        id: "header-image",
        image:
            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    }],
    asVariant: "primary",
    withColor: {
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
        buttonBackgroundColor: "#AD2929",
        buttonTextColor: "#ffffff",
        buttonHoverBackgroundColor: "#AD292980",
        buttonHoverTextColor: "#AD2929",
        backgroundColor: "#AD292"
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
    asEmphasis: "contained",
    isDisabled: false,
    isHidden: false,
};
ColoredMultipleSelect.parameters = {
    docs: {
        source: {
            code: `<MultipleSelect {...${JSON.stringify(
                ColoredMultipleSelect.args,
                null,
                2
            )}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated MultipleSelect
// -------------------------------------------------------------
export const TranslatedMultipleSelect = Template.bind({});
TranslatedMultipleSelect.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "templateActions",
        dictionary: dictionary
    },
};
TranslatedMultipleSelect.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the MultipleSelect, add a templateActions:{} value to the dictionary.",
        },
        source: {
            code: `<MultipleSelect {...${JSON.stringify(
                TranslatedMultipleSelect.args,
                null,
                2
            )}}/>`,
        },
    },
};