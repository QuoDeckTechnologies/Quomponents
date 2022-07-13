import React from "react";
import Sidebar from "../components/Sidebar/Sidebar.react";

export default {
    title: "Design System/Sidebar",
    component: Sidebar,
    argTypes: {
        logo: "",
        content: [
            {
                icon: "",
                label: "",
                active: false,
                onClick: () => true,
            },
        ],
        width: "",
        editMode: {
            active: false,
            label: "Edit Mode",
            onClick: () => true,
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
        isHidden: {
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
        componentSubtitle: "Displays sidebar for navigation purpose",
        a11y: { disable: true },
        docs: { iframeHeight: 600 },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Sidebar {...args} />;
export const Default = Template.bind({});
Default.args = {
    logo: "https://via.placeholder.com/150",
    content: [
        {
            icon: "fa fa-home",
            label: "Home",
            active: true,
            onClick: () => true,
        },
        {
            icon: "fa fa-archive",
            label: "Archives",
            active: false,
            onClick: () => true,
        },
    ],
    width: "80px",
    editMode: {
        active: false,
        label: "Edit Mode",
        onClick: () => true,
    },
    asFloated: "left",
    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<Sidebar {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
