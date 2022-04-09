import React from "react";
import SaveExitSection from "../components/RibbonMenu/htmlMenu/sections/SaveExitSection.react";

export default {
    title: "Design System/RibbonMenu/SaveExitSection",
    component: SaveExitSection,
    argTypes: {
        asEmphasis: {
            control: "select",
            options: ["html", "home", "tools", "design"],
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
            options: ["left", "right", "inline"],
            table: {
                category: "as-Flags",
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
        isFluid: {
            table: {
                category: "is-Toggles",
                defaultValue: true,
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
        componentSubtitle: "Displays a loader for general-purpose use",
        a11y: { disable: true },
        docs: {
            iframeHeight: 300,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SaveExitSection {...args} />;
export const Default = Template.bind({});
Default.args = {
    asEmphasis: "html",
    asFloated: "left",
    asPadded: "normal",
    isDisabled: false,
    isFluid:true,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<SaveExitSection {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
