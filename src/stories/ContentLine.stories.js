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
        isActive:false,
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
    isActive:false,
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