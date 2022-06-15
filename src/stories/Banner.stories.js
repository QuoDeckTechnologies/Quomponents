import React from "react";
import Banner from "../components/Carousel/Banner/Banner.react";

export default {
    title: "Design System/Carousel/Banner",
    component: Banner,
    argTypes: {
        content: [{
            image: "",
            header: "",
            content: "",
        }],
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
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
        }
    },
    decorators: [
        (story) => (
            <div
                style={{
                    width: "100%",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubheader: "Displays a basic banner for general-purpose use",
        a11y: { disable: true },
        docs: {
            iframeHeight: 600,
        }
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Banner {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: [
        {
            image: "https://www.gannett-cdn.com/media/2019/01/18/USATODAY/usatsports/gettyimages-500740897.jpg?crop=1365,768,x0,y0&width=660&height=372&format=pjpg&auto=webp",
            header: "Welcome to the Learning Library",
            content: "There is always something new to learn here. Articles, games, the whole kitchen sink. Just click to enter and have fun...",
        },
        {
            image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            header: "What is Lorem Ipsum?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            image: "https://www.gannett-cdn.com/media/2019/01/18/USATODAY/usatsports/gettyimages-500740897.jpg?crop=1365,768,x0,y0&width=660&height=372&format=pjpg&auto=webp",
            header: "Welcome to the Learning Library",
            content: "There is always something new to learn here. Articles, games, the whole kitchen sink. Just click to enter and have fun...There is always something new to learn here. Articles, games, the whole kitchen sink. Just click to enter and have fun...There is always something new to learn here. Articles, games, the whole kitchen sink. Just click to enter and have fun...There is always something new to learn here. Articles, games, the whole kitchen sink. Just click to enter and have fun...",
        },
    ],
    asVariant: "primary",
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    isDisabled: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<Banner {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};