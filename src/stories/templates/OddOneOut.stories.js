import React from "react";
import OddOneOut from "../../components/Templates/OddOneOut/OddOneOut.react";

export default {
    title: "Design System/Templates/OddOneOut/OddOneOut",
    component: OddOneOut,
    argTypes: {
        data: {
            title: "",
            subtitle: "",
            image: {},
            backgroundImage: {}
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
            "Component is used to show options and choose the odd one out from the given options, we can switch between the image and SlideHeader by adding or removing the image prop",
        a11y: { disable: true },
        docs: {
            iframeHeight: 650,
        },
    },
};
const Template = (args) => <OddOneOut {...args} />;
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
        options: [
            { correct: "checked", text: "Item 1" },
            { correct: "", text: "Item 2" },
            { correct: "", text: "Item 3" },
            { correct: "", text: "Item 4" }
        ],
    },
    slideId: 0,
    imageLibrary: [{
        id: "header-image",
        image:
            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    }],
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
        buttonBackgroundColor: "#ad292980",
        buttonTextColor: "",
        buttonHoverBackgroundColor: "#AD2929",
        buttonHoverTextColor: "",
        backgroundColor: "#AD292"
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
            code: `<OddOneOut {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// OddOneOutWithSlideHeader
// -------------------------------------------------------------
export const OddOneOutWithSlideHeader = Template.bind({});
OddOneOutWithSlideHeader.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        options: [
            { correct: "checked", text: "Item 1" },
            { correct: "", text: "Item 2" },
            { correct: "", text: "Item 3" },
            { correct: "", text: "Item 4" }
        ],
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
        buttonBackgroundColor: "",
        buttonTextColor: "",
        buttonHoverBackgroundColor: "#AD292980",
        buttonHoverTextColor: "",
        backgroundColor: "#AD292"
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
OddOneOutWithSlideHeader.parameters = {
    docs: {
        source: {
            code: `<OddOneOut {...${JSON.stringify(
                OddOneOutWithSlideHeader.args,
                null,
                2
            )}}/>`,
        },
    },
};

// -------------------------------------------------------------
// OddOneOutWithSlideHeaderAndBackgroundImage
// -------------------------------------------------------------
export const OddOneOutWithSlideHeaderAndBackgroundImage = Template.bind({});
OddOneOutWithSlideHeaderAndBackgroundImage.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        backgroundImage: { id: "background-image", extention: "" },
        options: [
            { correct: "checked", text: "Item 1" },
            { correct: "", text: "Item 2" },
            { correct: "", text: "Item 3" },
            { correct: "", text: "Item 4" }
        ],
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
    isDisabled: false,
    isHidden: false,
};
OddOneOutWithSlideHeaderAndBackgroundImage.parameters = {
    docs: {
        source: {
            code: `<ClozeWithFeedback {...${JSON.stringify(OddOneOutWithSlideHeaderAndBackgroundImage.args, null, 2)}}/>`,
        },
    },
};
