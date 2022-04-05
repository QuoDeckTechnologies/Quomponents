import React from "react";
import NuggetCard from "../components/NuggetCard/NuggetCard.react";

export default {
    title: "Design System/NuggetCard/NuggetCard",
    component: NuggetCard,
    argTypes: {
        content: {
            published: false,
            tags: [],
            category: "",
            name: "",
            description: "",
            image: "",
            points: "",
            identifier: ""
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
        componentSubtitle: "Displays a basic button for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <NuggetCard {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        published: false,
        tags: ["Tag1", "Tag2"],
        category: "profiler",
        name: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job",
        image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
        points: "200",
        identifier: "XrPmy_OAK"
    },
    asFloated: "inline",
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<NuggetCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// MobileView
// -------------------------------------------------------------

export const DifferentResolution = (args) => {
    const baseObj1 = {
        ...Object.assign({}, Default.args, args, {
            content: {
                published: false,
                tags: ["Tag1", "Tag2"],
                category: "Profiler",
                name: "Measure your sales readiness",
                description: "Take this quick profile test to check how well you are prepared for a sales job",
                image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
                points: "200",
                identifier: "XrPmy_OAK"
            },
        }),
    };
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ display: "flex", width: "375px", margin: "5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "481px", margin: "5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "769px", margin: "5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "1024px", margin: "5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
        </div>

    );
};