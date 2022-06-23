import React from "react";
import Marker from "../components/Marker/Marker.react";

export default {
    title: "Design System/Marker/Marker",
    component: Marker,
    argTypes: {
        content: {
            wrapper: "",
            inset: 0,
        },
        status: {
            control: "select",
            options: ["current", "complete", "incomplete"],
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
        onClick: {
            table: {
                category: "Events",
                defaultValue: null,
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
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle:
            "Default Marker for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 500 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Marker {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        wrapper: "carnival",
        inset: 1
    },
    status: "current",
    asFloated: "inline",
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
            code: `<Marker {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
