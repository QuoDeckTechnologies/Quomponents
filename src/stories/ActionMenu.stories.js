import React from "react";
import ActionMenu from "../components/ActionMenu/ActionMenu.react";

export default {
    title: "Design System/ActionMenu/ActionMenu",
    component: ActionMenu,
    argTypes: {
        content: [
            {
                title: "label1",
                icon: "",
            },
        ],
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
            table: {
                category: "as-Flags",
            },
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
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
        componentSubtitle: "Displays a ActionMenu with icons & related contents for general-purpose use.",
        a11y: { disable: true },
        docs: {
            iframeHeight: 600,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
    return <ActionMenu {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    content: [
        {
            title: "Open Deck",
            icon: "fas fa-book-open",
        },
        {
            title: "Edit Deck",
            icon: "fas fa-edit",
        },
        {
            title: "Move Deck Up",
            icon: "fas fa-angle-up",
        },
        {
            title: "Move Deck Down",
            icon: "fas fa-angle-down",
        },
        {
            title: "Move to Topic",
            icon: "fas fa-square",
        },
        {
            title: "Unpublish Deck",
            icon: "fas fa-eye-slash",
        },
        {
            title: "Delete Deck",
            icon: "fas fa-trash",
        },
    ],
    asVariant: "success",
    asSize: "normal",
    withColor: {
        backgroundColor: "",
        textColor: "",
        accentColor: "",
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
            code: `<ActionMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Colored ActionMenu
// -------------------------------------------------------------
export const ColoredActionMenu = Template.bind({});
ColoredActionMenu.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "8#ADDE6",
        textColor: "#C53816",
        accentColor: "#F2A52D",
    },
};
ColoredActionMenu.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the Icon & Contents.",
        },
        source: {
            code: `<ActionMenu withColor={{backgroundColor: "lightblue", textColor: "#666666",accentColor: "#666666"}}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Without Icons ActionMenu
// -------------------------------------------------------------
export const WithoutIconsActionMenu = Template.bind({});
WithoutIconsActionMenu.args = {
    ...Default.args,
    content: [
        {
            title: "Open Deck",
            icon: "",
        },
        {
            title: "Edit Deck",
            icon: "",
        },
        {
            title: "Move Deck Up",
            icon: "",
        },
        {
            title: "Move Deck Down",
            icon: "",
        },
        {
            title: "Move to Topic",
            icon: "",
        },
        {
            title: "Unpublish Deck",
            icon: "",
        },
        {
            title: "Delete Deck",
            icon: "",
        },
    ],
};
WithoutIconsActionMenu.parameters = {
    docs: {
        description: {
            story: "Dispay the actionmenu without icons.",
        },
        source: {
            code: `<ActionMenu content:[{""}]/>`,
        },
    },
};

//-------------------------------------------------------------
// Animated ActionMenu
// -------------------------------------------------------------
export const AnimatedActionMenu = Template.bind({});
AnimatedActionMenu.args = {
    ...Default.args,
    withAnimation: {
        animation: "collapse",
        duration: 1,
        delay: 0,
    },
};
AnimatedActionMenu.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of ActionMenu",
        },
        source: {
            code: `<ActionMenu {...${JSON.stringify(
                AnimatedActionMenu.args,
                null,
                2
            )}}/>`,
        },
    },
};



