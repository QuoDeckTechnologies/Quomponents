import React from "react";
import CourseCard from "../components/CourseCard/CourseCard.react";

export default {
    title: "Design System/CourseCard/CourseCard",
    component: CourseCard,
    argTypes: {
        content: {
            published: false,
            courseType: "",
            wrapper: "",
            tags: [],
            courseName: "",
            description: "",
            courseImage: "",
            points: "",
            identifier: "",
            date: {
                start_date: "",
                end_date: ""
            },
            sequential: false
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
            table: {
                courseType: "as-Flags",
            },
        },
        withAnimation: {
            table: {
                courseType: "with-Params",
                defaultValue: {
                    animation: "",
                    duration: 0,
                    delay: 0,
                },
            },
        },
        isHidden: {
            table: {
                courseType: "is-Toggles",
                defaultValue: false,
            },
        },
        isDisabled: {
            table: {
                courseType: "is-Toggles",
                defaultValue: false,
            },
        },
        onClick: {
            table: {
                courseType: "Events",
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
        published: false,
        courseType: "standard",
        wrapper: "carnival",
        tags: ["Tag1", "Tag2"],
        courseName: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job",
        courseImage: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
        points: "200",
        identifier: "XrPmy_OAK",
        date: {
            start_date: "2016-01-04 10:34:23",
            end_date: "2016-03-15 10:34:23"
        },
        sequential: false
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
            code: `<CourseCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Component with Different width 
// -------------------------------------------------------------
export const DifferentResolution = (args) => {
    const baseObj1 = {
        ...Object.assign({}, Default.args, args, {
            published: false,
            courseType: "standard",
            wrapper: "carnival",
            tags: ["Tag1", "Tag2"],
            courseName: "Measure your sales readiness",
            description: "Take this quick profile test to check how well you are prepared for a sales job",
            courseImage: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
            points: "200",
            identifier: "XrPmy_OAK",
            date: {
                start_date: "2016-01-04 10:34:23",
                end_date: "2016-03-15 10:34:23"
            },
            sequential: false
        }),
    };
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ display: "flex", width: "375px", margin: "5px" }}>
                <CourseCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "481px", margin: "5px" }}>
                <CourseCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "769px", margin: "5px" }}>
                <CourseCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "1024px", margin: "5px" }}>
                <CourseCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
        </div>
    );
};