import React from "react";
import RibbonDesignMenu from "../components/RibbonMenu/designMenu/RibbonDesignMenu.react";

export default {
    title: "Design System/RibbonMenu/RibbonDesignMenu",
    component: RibbonDesignMenu,
    argTypes: {
        asEmphasis: {
            control: "select",
            options: ["html", "home", "tools", "design"],
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
        componentSubtitle: "Displays a RibbbonDesignMenu for general-purpose use",
        a11y: { disable: true },
        docs: {
            iframeHeight: 300,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RibbonDesignMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
    asEmphasis: "html",
    asFloated: "left",
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<RibbbonDesignMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
