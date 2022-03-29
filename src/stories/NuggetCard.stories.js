import React from "react";
import NuggetCard from "../components/NuggetCard/NuggetCard.react";

export default {
    title: "Design System/NuggetCard/NuggetCard",
    component: NuggetCard,
    argTypes: {
        content: {
            published:false,
            tags: [],
            category:"",
            name: "",
            description: "",
            image: "",
            points:"",
            identifier:"",
            startDate:"",
            endDate: ""
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
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
        published:false,
        tags: ["Tag1","Tag2"],
        category:"Profiler",
        name: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job",
        image: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
        points:"200",
        identifier:"XrPmy_OAK",
        startDate:"26th Feb",
        endDate: "3rd May"
    },
    asFloated: "inline",
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
                published:false,
                tags: ["Tag1","Tag2"],
                category:"Profiler",
                name: "Measure your sales readiness",
                description: "Take this quick profile test to check how well you are prepared for a sales job",
                image: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
                points:"200",
                identifier:"XrPmy_OAK",
                startDate:"26th Feb",
                endDate: "3rd May"
            },
        }),
    };
    return (
        <div style={{display:"flex", flexWrap:"wrap"}}>
            <div style={{ display: "flex", width: "375px", margin:"5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "481px", margin:"5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "769px", margin:"5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "1024px", margin:"5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
        </div>

    );
};