import React from "react";
import Banner from "../components/Carousel/Banner/Banner.react";

export default {
    title: "Design System/Carousel/Banner",
    component: Banner,
    argTypes: {
        content: [{
            image: "",
            header: "",
            description: "",
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
        componentSubtitle: "Displays a basic banner for general-purpose use",
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
            image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            header: "What is Lorem Ipsum?",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            image: "https://www.gannett-cdn.com/media/2019/01/18/USATODAY/usatsports/gettyimages-500740897.jpg?crop=1365,768,x0,y0&width=660&height=372&format=pjpg&auto=webp",
            header: "Welcome to the Learning Library",
            description: "There is always something new to learn here. Articles, games, the whole kitchen sink. Just click to enter and have fun...",
        },
        {
            image: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
            header: "BALLOON BURST",
            description: "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
        },
    ],
    asVariant: "warning",
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
};
Default.parameters = {
    docs: {
        source: {
            code: `<Banner {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated Banner
// -------------------------------------------------------------
export const AnimatedBanner = Template.bind({});
AnimatedBanner.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedBanner.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the Banner with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<Banner {...${JSON.stringify(
                AnimatedBanner.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored Banner
// -------------------------------------------------------------
export const ColoredBanner = Template.bind({});
ColoredBanner.args = {
    ...Default.args,
    withColor: {
        textColor: "#222A35",
        backgroundColor: "#ffb703",
        accentColor: "#ED6E6E",
    }
};
ColoredBanner.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the Banner.",
        },
        source: {
            code: `<Banner {...${JSON.stringify(
                ColoredBanner.args,
                null,
                2
            )}}/>`,
        },
    },
}; 