import React from "react";
import BulletList from "../components/Templates/BulletList/BulletList.react";

export default {
    title: "Design System/Templates/BulletList/BulletList",
    component: BulletList,
    argTypes: {
        data: {
            table: {
                defaultValue: {
                    title: "",
                    subTitle: "",
                    image: "",
                    backgroundImage: "",
                    bullets: ["bullets"]
                },
            },
        },
        slideId: {
            table: {
                defaultValue: 0,
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
                    bulletBockTextColor: "",
                    bulletBockBackgroundColor: "",
                    bulletBockAccentColor: "",
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
            "Default BulletList for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 600 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <BulletList {...args} />;
export const Default = Template.bind({});
Default.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        backgroundImage: "",
        bullets: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ],
    },
    slideId: 0,
    withColor: {
        backgroundColor: "",
        slideHeaderTextColor: "#ffffff",
        slideHeaderBackgroundColor: "#ad292980",
        slideHeaderAccentColor: "#AD2929",
        bulletBockTextColor: "#ffffff",
        bulletBockBackgroundColor: "#ad292980",
        bulletBockAccentColor: "#FFFFFF",
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
            code: `<BulletList {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored BulletList
// -------------------------------------------------------------
export const ColoredBulletList = Template.bind({});
ColoredBulletList.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#59e3de",
        slideHeaderTextColor: "#FFFF00",
        slideHeaderBackgroundColor: "#ad292980",
        slideHeaderAccentColor: "#f51d0a",
        bulletBockTextColor: "#FFFF00",
        bulletBockBackgroundColor: "#ad292980",
        bulletBockAccentColor: "#FFFFFF",
    },
};
ColoredBulletList.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the BulletList.",
        },
        source: {
            code: `<ColoredBulletList {...${JSON.stringify(
                ColoredBulletList.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated BulletList
// -------------------------------------------------------------
export const AnimatedBulletList = Template.bind({});
AnimatedBulletList.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedBulletList.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the BulletList with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedBulletList {...${JSON.stringify(
                AnimatedBulletList.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// BulletList with slideHeader
// -------------------------------------------------------------
export const withSlideHeaderBulletList = Template.bind({});
withSlideHeaderBulletList.args = {
    ...Default.args,
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: "",
        backgroundImage: "",
        bullets: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ],
    },
};
withSlideHeaderBulletList.parameters = {
    docs: {
        description: {
            story:
                "Use to show slideHeader in the BulletList.",
        },
        source: {
            code: `<withSlideHeaderBulletList {...${JSON.stringify(
                withSlideHeaderBulletList.args,
                null,
                2
            )}}/>`,
        },
    },
}; 