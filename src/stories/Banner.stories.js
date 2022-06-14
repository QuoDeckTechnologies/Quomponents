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
        componentSubheader: "Displays a banner carousel.",
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
            image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            header: "The Negotiation Room",
            content: "Play the contest and win to earn Flipkart vouchers.",
        },
        {
            image: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
            header: "The Negotiation Room",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
            image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            header: "What is Lorem Ipsum?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }],
};
Default.parameters = {
    docs: {
        source: {
            code: `<Banner {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};