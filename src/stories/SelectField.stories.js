import React from "react";
import SelectField from "../components/SelectField/SelectField.react";

export default {
    title: "Design System/SelectField/SelectField",
    component: SelectField,
    argTypes: {
        content: {
            label: "",
            categoryOptions: [],
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
            table: {
                category: "as-Flags",
            },
        },
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
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
                    backgroundColor: "",
                    accentColor: "",
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
        docs: { iframeHeight: 200 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SelectField {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        label: "Course Category",
        categoryOptions: ["Sales Training", "Tech Training", "HR Training", "Graphic Training"],
    },
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "left",
    withColor: {
        backgroundColor: "#aaaaaa",
        accentColor: "",
        textColor: "#666666",
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
            code: `<SelectField {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};