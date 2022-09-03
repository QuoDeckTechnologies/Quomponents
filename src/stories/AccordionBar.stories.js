import React from "react";
import AccordionBar from "../components/TreeBar/AccordionBar.react";

const dictionary = JSON.stringify({
    hi: {
        AccordionBar: {
            pageHeader: "पाठ्यक्रम",
        },
        searchBar: {
            placeHolder: "यहां पाठ्यक्रम चुनें...",
        },
    },
});

export default {
    title: "Design System/AccordionBar",
    component: AccordionBar,
    argTypes: {
        pageHeader: "Page Header",
        sections: [],
        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
            table: {
                category: "as-Flags",
            },
        },
        withTranslation: {
            table: {
                category: "with-Params",
                defaultValue: {
                    lang: "",
                    tgt: "",
                    dictionary: "",
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
        isFluid: {
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
        componentSubtitle: "Displays a AccordionBar for general-purpose use",
        a11y: { disable: true },
        docs: {
            iframeHeight: 500,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => (
    <AccordionBar {...args} style={{ width: "30%" }}>
        <div>Active Canvas</div>
    </AccordionBar>
);
export const Default = Template.bind({});
Default.args = {
    pageHeader: "Campaigns",
    treeData: [
        {
            id: "category-0",
            parentId: null,
            label: "Article",
            isOpen: true,
            items: [
                {
                    label: "Seeding Dummy Test Article Seeding Dummy Test Article ",
                    id: "622eeb5ede595f24b7aadd6e",
                },
                {
                    label: "New Article",
                    id: "622b4534a2d4393e6ce1c3ba",
                },
            ],
        },
        {
            id: "category-1",
            label: "News",
            parentId: null,
            items: [
                {
                    label: "Test News",
                    id: "623da574187838221637bebe",
                },
            ],
        },
    ],
    onOpenClose: () => true,
    onSelect: () => true,
    sections: [
        {
            name: "Digital Events",
            link: "/events",
            chip: {},
            active: true,
            selected: false,
        },
        {
            name: "Activity Leaderboards",
            link: "/events",
            chip: { name: "Pro", bg: "#0f4c5c", color: "#ffffff" },
            active: true,
            selected: true,
        },
        {
            name: "Assessments",
            link: "/events",
            chip: { name: "Pro", bg: "#0f4c5c", color: "#ffffff" },
            active: false,
            selected: false,
        },
        {
            name: "Knowledge Base",
            link: "/events",
            chip: { name: "Premium", bg: "#9a031e", color: "#ffffff" },
            active: false,
            selected: false,
        },
        {
            name: "Game Worlds",
            link: "/events",
            chip: { name: "Premium", bg: "#9a031e", color: "#ffffff" },
            active: false,
            selected: false,
        },
        {
            name: "Daily Learning",
            link: "/events",
            chip: { name: "Premium", bg: "#9a031e", color: "#ffffff" },
            active: false,
            selected: false,
        },
        {
            name: "Courseware",
            link: "/events",
            chip: { name: "Enterprise", bg: "#5f0f40", color: "#ffffff" },
            active: false,
            selected: false,
        },
        {
            name: "Job Aids",
            link: "/events",
            chip: { name: "Enterprise", bg: "#5f0f40", color: "#ffffff" },
            active: false,
            selected: false,
        },
        {
            name: "Community",
            link: "/events",
            chip: { name: "Enterprise", bg: "#5f0f40", color: "#ffffff" },
            active: false,
            selected: false,
        },
    ],
    asFloated: "left",
    withAnimation: {
        animation: "",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isFluid: false,
    isHidden: false,
    withTranslation: {
        lang: "en",
        tgt: "AccordionBar",
        dictionary: dictionary,
    },
};
Default.parameters = {
    docs: {
        source: {
            code: `<AccordionBar {...${JSON.stringify(
                Default.args,
                null,
                2
            )}}/>`,
        },
    },
};
