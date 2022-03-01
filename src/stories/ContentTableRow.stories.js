import React from "react";
import ContentTableRow from "../components/ContentTableRow/ContentTableRow.react";

export default {
    title: "Design System/ContentTableRow/ContentTableRow",
    component: ContentTableRow,
    argTypes: {
        content: {
            defaultValue : {
                fileName : ''
            }
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
        componentSubtitle: "Displays a Content table row",
        a11y: { disable: true },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ContentTableRow {...args} /> 

export const Default = Template.bind({});
Default.args = {
    content: {
        fileName : 'Dummy file-name.pdf'
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
            code: `<ContentTableRow {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};