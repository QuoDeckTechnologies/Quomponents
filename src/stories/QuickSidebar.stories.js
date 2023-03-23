import React from "react";
import QuickSidebar from "../components/QuickSidebar/QuickSidebar.react";

export default {
    title: "Design System/QuickSidebar",
    component: QuickSidebar,
    argTypes: {
        logo: "",
        content: [
            {
                icon: "",
                label: "",
                title: "",
                active: false,
                onClick: () => true,
            },
        ],
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
        componentSubtitle: "Displays QuickSidebar for navigation purpose",
        a11y: { disable: true },
        docs: { iframeHeight: 600 },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <QuickSidebar {...args} />;
export const Default = Template.bind({});
Default.args = {
    location: "welcome",
    logo: "assets/coloredDefaultLogo.png",
    active: "welcome",
    content: [
        {
            icon: "fa fa-handshake",
            label: "Home",
            title: "Click here to go to the Home Page",
            active: true,
            onClick: () => true,
        },
        {
            icon: "fa fa-id-card",
            label: "Archives",
            active: false,
            onClick: () => true,
        },
        {
            icon: "fa fa-box",
            label: "Archives",
            active: false,
            onClick: () => true,
        },
        {
            icon: "fa fa-users",
            label: "Archives",
            active: false,
            onClick: () => true,
        },
        {
            icon: "fa fa-chart-area",
            label: "Archives",
            active: false,
            onClick: () => true,
        },
        {
            icon: "fa fa-question",
            label: "Archives",
            active: false,
            onClick: () => true,
        },
    ],
    panelLinks: {
        welcome: [
            {
                key: "welcome",
                name: "Welcome",
                icon: "fa fa-handshake",
                show: true,
                description: "Welcome to your QuoDeck training platform...",
            },
        ],
        content: [
            {
                key: "content",
                name: "Content",
                icon: "fa fa-handshake",
                show: true,
                description: "Welcome to your QuoDeck training platform...",
                color: "#e8e8e8",
            },
            {
                key: "advanced",
                name: "Setup",
                icon: "fa fa-id-card",
                show: true,
                description: "Brand and setup your platform...",
                color: "#e8e8e8",
            },
            {
                key: "files",
                name: "Platform Content",
                icon: "fa fa-box",
                show: true,
                description:
                    "Populate your platform with interactive content...",
                color: "#e8e8e8",
            },
            {
                key: "editor",
                name: "Edit Content",
                icon: "fas fa-pencil-alt",
                show: true,
                description:
                    "Edit interactive content for your platform in this authoring tool",
                color: "#e8e8e8",
            },
            {
                key: "share",
                name: "User Management",
                icon: "fas fa-users",
                show: true,
                description: "Add and manage the users of your platform...",
                color: "#e8e8e8",
            },
            {
                key: "analytics",
                name: "Analytics",
                icon: "fas fa-chart-area",
                show: true,
                description:
                    "Analyze your platform and team performance...",
                color: "#e8e8e8",
            },
            {
                key: "guide",
                name: "Help Center",
                icon: "fas fa-question",
                show: true,
                description:
                    "Get tips to make the best of your platform...",
                color: "#e8e8e8",
            },
            {
                key: "upgrade",
                name: "Account",
                icon: "fas fa-users",
                show: /* ["Inductor", "FreeInductor"].includes(props.license.license_type) ? true :  */false,
                description:
                    "Upgrade your license...",
                color: "#e8e8e8",
            },
        ],
        admin: [
            { key: "users", name: "Users", icon: "fas fa-users", show: true },
            { key: "courses", name: "Courses", icon: "fas fa-book", show: true },
            {
                key: "branding",
                name: "Branding",
                icon: "fas fa-paint-brush",
                show: true,
            },
            { key: "tags", name: "Tags", icon: "fas fa-tags", show: true },
            { key: "adverts", name: "Ads", icon: "far fa-image", show: true },
            {
                key: "tickets",
                name: "Ticket Centers",
                icon: "far fa-envelope-open",
                show: true,
            },
        ],
        analytics: [
            {
                key: "organization",
                name: "Org",
                icon: "fas fa-building",
                show: false,
            },
            {
                key: "users",
                name: "Teams",
                icon: "fas fa-users",
                show: true,
            },
            {
                key: "trainees",
                name: "Trainees",
                icon: "fas fa-users",
                show: true
            },
            {
                key: "courses",
                name: "Courses",
                icon: "fas fa-book",
                show: true
            },
            {
                key: "articles",
                name: "Articles",
                icon: "fas fa-microphone",
                show: true
            },
        ],
        blog: [
            {
                key: "articles",
                name: "Articles",
                icon: "fas fa-newspaper",
                show: true,
            },
            { key: "editor", name: "Editor", icon: "fas fa-pencil-alt", show: true },
        ],
        social: [
            { key: "text", name: "Text", icon: "fas fa-pencil-alt", show: true },
            { key: "link", name: "Link", icon: "fas fa-link", show: true },
            { key: "image", name: "Image", icon: "fas fa-image", show: true },
            { key: "gallery", name: "Gallery", icon: "fas fa-images", show: true },
            { key: "video", name: "Video", icon: "fas fa-film", show: true },
        ],
        help: [
            { key: "chat", name: "Chatbot", icon: "fas fa-comment", show: true },
            { key: "faq", name: "FAQ", icon: "fas fa-comments", show: true },
            { key: "ticket", name: "Support", icon: "fas fa-desktop", show: true },
        ],
    },
    editMode: {
        active: false,
        label: "Edit Mode",
        onClick: () => true,
    },
    setActivePanel: () => { },
    goToHome: () => { },
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
            code: `<QuickSidebar {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
