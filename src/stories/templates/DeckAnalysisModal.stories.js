import React from "react";
import DeckAnalysisModal from "../../components/Templates/DeckAnalysisModal/DeckAnalysisModal.react";
export default {
    title: "Design System/Templates/DeckAnalysisModal/DeckAnalysisModal",
    component: DeckAnalysisModal,
    argTypes: {
        isOpen: {
            defaultValue: true,
        },
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
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
        componentSubtitle: "Displays a Image Upload Modal Component.",
        a11y: { disable: true },
        docs: {
            iframeHeight: 1000,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
    return <DeckAnalysisModal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    asVariant: "secondary",
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
            code: `<DeckAnalysisModal {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
