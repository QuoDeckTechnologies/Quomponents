import React from "react";
import SelectField from "../components/SelectField/SelectField.react";

export default {
    title: "Design System/SelectField/SelectField",
    component: SelectField,
    argTypes: {
        content: "Course Category",
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
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
                    textColor: "",
                    accentColor: "",
                    backgroundColor: "",
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
    },
    decorators: [
        (story) => (
            <div
                style={{
                    textAlign: "",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle:
            "Default SelectField for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 100 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SelectField {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "Course Category",
    asSize: "normal",
    asFloated: "none",
    withColor: {
        textColor: "#666666",
        accentColor: "",
        backgroundColor: "#aaaaaa",
    },
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    isDisabled: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<SelectField {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};