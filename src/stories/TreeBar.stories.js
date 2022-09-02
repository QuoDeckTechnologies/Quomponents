import React from "react";
import TreeBar from "../components/TreeBar/TreeBar.react";

const dictionary = JSON.stringify({
    hi: {
        TreeBar: {
            pageHeader: "पाठ्यक्रम",
        },
        searchBar: {
            placeHolder: "यहां पाठ्यक्रम चुनें...",
        },
    },
});

export default {
    title: "Design System/TreeBar",
    component: TreeBar,
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
        componentSubtitle: "Displays a TreeBar for general-purpose use",
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
    <TreeBar {...args} style={{ width: "30%" }}>
        <div>Active Canvas</div>
    </TreeBar>
);
export const Default = Template.bind({});
Default.args = {
    pageHeader: "Courses",
    sections: [
        {
            name: "Digital Events",
            link: "/events",
            label: "",
            locked: false,
        },
        {
            name: "Activity Leaderboards",
            link: "/events",
            label: "Pro",
            locked: true,
        },
        {
            name: "Assessments",
            link: "/events",
            label: "Pro",
            locked: true,
        },
        {
            name: "Knowledge Base",
            link: "/events",
            label: "Premium",
            locked: true,
        },
        {
            name: "Game Worlds",
            link: "/events",
            label: "Premium",
            locked: true,
        },
        {
            name: "Daily Learning",
            link: "/events",
            label: "Premium",
            locked: true,
        },
        {
            name: "Courseware",
            link: "/events",
            label: "Enterprise",
            locked: true,
        },
        {
            name: "Job Aids",
            link: "/events",
            label: "Enterprise",
            locked: true,
        },
        {
            name: "Community",
            link: "/events",
            label: "Enterprise",
            locked: true,
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
        tgt: "TreeBar",
        dictionary: dictionary,
    },
};
Default.parameters = {
    docs: {
        source: {
            code: `<TreeBar {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
