import React from "react";
import TimeLinedOptions from "../../components/Templates/TimeLinedOptions/TimeLinedOptions.react";

export default {
    title: "Design System/Templates/TimeLinedOptions/TimeLinedOptions",
    component: TimeLinedOptions,
    argTypes: {
        data: {
            defaultValue: {
                title: "",
                subtitle: "",
                image: {},
                backgroundImage: {},
                question: "",
                purpose: "",
                options: []
            }
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
        trackInteraction: {
            action: 'trackInteraction'
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
        componentSubtitle: "Displays a TimeLinedOptions component with options, the user need to submit the answer by arranging them using up down buttons, we can switch between the image and SlideHeader by adding or removing the image prop",
        a11y: { disable: true },
        docs: {
            iframeHeight: 650,
        },
    },
};
const Template = (args) => <TimeLinedOptions {...args} />;
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
        purpose: "",
        options: ["Item 1", "Item 2", "Item 3"]
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
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<TimeLinedOptions {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// TimeLinedOptionsWithSlideHeader
// -------------------------------------------------------------
export const TimeLinedOptionsWithSlideHeader = Template.bind({});
TimeLinedOptionsWithSlideHeader.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        purpose: "",
        options: ["Item 1", "Item 2", "Item 3"]
    },
    slideId: 0,
    asVariant: "warning",
    withColor: {
        questionColor: "#000000",
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
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
    isDisabled: false,
    isHidden: false,
};
TimeLinedOptionsWithSlideHeader.parameters = {
    docs: {
        source: {
            code: `<TimeLinedOptions {...${JSON.stringify(TimeLinedOptionsWithSlideHeader.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// TimeLinedOptionsWithSlideHeaderAndBackgroundImage
// -------------------------------------------------------------
export const TimeLinedOptionsWithSlideHeaderAndBackgroundImage = Template.bind({});
TimeLinedOptionsWithSlideHeaderAndBackgroundImage.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        backgroundImage: {
            id: "background-image",
            extention: ""
        },
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        purpose: "",
        options: ["Item 1", "Item 2", "Item 3"]
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
    isDisabled: false,
    isHidden: false,
};
TimeLinedOptionsWithSlideHeaderAndBackgroundImage.parameters = {
    docs: {
        source: {
            code: `<TimeLinedOptions {...${JSON.stringify(TimeLinedOptionsWithSlideHeaderAndBackgroundImage.args, null, 2)}}/>`,
        },
    },
};