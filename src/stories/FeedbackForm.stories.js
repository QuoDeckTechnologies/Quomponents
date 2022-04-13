import React from "react";
import FeedbackForm from "../components/FeedbackForm/FeedbackForm.react";

export default {
    title: "Design System/FeedbackForm/FeedbackForm",
    component: FeedbackForm,
    argTypes: {
        content: "Show Feedback",
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    toggleBarColor: "",
                    toggleActiveColor: "",
                    toggleLabelColor: "",
                    inputBackgroundColor: "",
                    inputAccentColor: "",
                    inputTextColor: "",
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
                    textAlign: "left",
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a feedback form by switching toggleButton on",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};

const Template = (args) => <FeedbackForm {...args} />;
//----------------------------------------------------------
// Default
//---------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
    content: "Show Feedback",
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withColor: {
        toggleBarColor: "#454545",
        toggleActiveColor: "#FFAB00",
        toggleLabelColor: "",
        inputBackgroundColor: "#ffab000d",
        inputAccentColor: "#ffab00",
        inputTextColor: "#666666",
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        description: {
            story:
                "The feedback form will appear by switching the toggle button , in form one can enter the data in 2 different different input fields which will  be used as per requirment  , by clicking outside the input field or entering on it the entered data will be saved.",
        },
        source: {
            code: `<FeedbackForm {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};