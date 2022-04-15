import React from "react";
import RibbonHtmlMenu from "../components/RibbonMenu/htmlMenu//RibbonHtmlMenu.react";

export default {
    title: "Design System/RibbonMenu/RibbonHtmlMenu",
    component: RibbonHtmlMenu,
    argTypes: {
        saveExit: {
            table: {
                category: "Events",
                defaultValue: null,
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
        }
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
const Template = (args) => <RibbonHtmlMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
    asFloated: "left",
    isDisabled: false,
    isHidden: false
};
Default.parameters = {
    docs: {
        source: {
            code: `<RibbonHtmlMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
