import React from "react";
import CourseCard from "../components/CourseCard/CourseCard.react";

export default {
    title: "Design System/CourseCard/CourseCard",
    component: CourseCard,
    argTypes: {
        content: {
            published:false,
            tags: [],
            name: "",
            description: "",
            baseImage: "",
            rewardPoint:"",
            identifier:"",
            date:""
        },     
        category:{
            control: "select",
            options: ["Story", "Quiz", "Assessment", "Game", "Article", "Feedback", "Poll", "Profiler", "Recco", "Document", "Survey", "Submission", "Caculator", "Linklist", "Faq", "Event", "Video", "Quiz", "News", "Webinar", "Gallery", "Course"],
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
const Template = (args) => <CourseCard {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        published:false,
        tags: ["Tag1","Tag2"],
        name: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job",
        image: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
        rewardPoint:"200",
        identifier:"XrPmy_OAK",
        date:"28th Feb - 3rd May"
    },    
    category:"Course",
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
            code: `<CourseCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
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
                name: "Measure your sales readiness",
                description: "Take this quick profile test to check how well you are prepared for a sales job",
                image: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
                rewardPoint:"200",
                identifier:"XrPmy_OAK",
                date:"28th Feb - 3rd May"
            },    
            category:"Course",
        }),
    };
    return (
        <div style={{display:"flex", flexWrap:"wrap"}}>
            <div style={{ display: "flex", width: "375px", margin:"5px" }}>
                <CourseCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "481px", margin:"5px" }}>
                <CourseCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "769px", margin:"5px" }}>
                <CourseCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "1024px", margin:"5px" }}>
                <CourseCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
        </div>

    );
};