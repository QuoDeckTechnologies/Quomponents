import React from "react";
import CaptionedVideo from "../components/Templates/CaptionedVideo/CaptionedVideo.react";

export default {
    title: "Design System/Templates/CaptionedVideo/CaptionedVideo",
    component: CaptionedVideo,
    argTypes: {
        data: {
            table: {
                defaultValue: {
                    title: "",
                    subTitle: "",
                    image: "",
                    backgroundImage: "",
                    video: "video's url",
                    caption: "Caption"
                },
            },
        },
        isPresenter: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
                    slideHeaderTextColor: "",
                    slideHeaderBackgroundColor: "",
                    slideHeaderAccentColor: "",
                    textBockTextColor: "",
                    textBockBackgroundColor: "",
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
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle:
            "Default CaptionedVideo for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 400 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CaptionedVideo {...args} />;
export const Default = Template.bind({});
Default.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        backgroundImage: "",
        video: "https://www.youtube.com/watch?v=NpEaa2P7qZI",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    },
    slideId: 0,
    isPresenter: false,
    withColor: {
        backgroundColor: "#E8E8E8",
        slideHeaderTextColor: "#ffffff",
        slideHeaderBackgroundColor: "#ad292980",
        slideHeaderAccentColor: "#AD2929",
        textBockTextColor: "#ffffff",
        textBockBackgroundColor: "#ad292980",
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
            code: `<CaptionedVideo {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored CaptionedVideo
// -------------------------------------------------------------
export const ColoredCaptionedVideo = Template.bind({});
ColoredCaptionedVideo.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#59e3de",
        slideHeaderTextColor: "#FFFF00",
        slideHeaderBackgroundColor: "#ad292980",
        slideHeaderAccentColor: "#f51d0a",
        textBockTextColor: "#FFFF00",
        textBockBackgroundColor: "#ad292980",
    },
};
ColoredCaptionedVideo.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the CaptionedVideo.",
        },
        source: {
            code: `<ColoredCaptionedVideo {...${JSON.stringify(
                ColoredCaptionedVideo.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated CaptionedVideo
// -------------------------------------------------------------
export const AnimatedCaptionedVideo = Template.bind({});
AnimatedCaptionedVideo.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedCaptionedVideo.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the CaptionedVideo with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedCaptionedVideo {...${JSON.stringify(
                AnimatedCaptionedVideo.args,
                null,
                2
            )}}/>`,
        },
    },
}; 