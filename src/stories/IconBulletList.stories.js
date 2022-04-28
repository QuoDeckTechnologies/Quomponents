import React from "react";
import IconBulletList from "../components/Templates/IconBulletList/IconBulletList.react";

export default {
    title: "Design System/Templates/IconBulletList/IconBulletList",
    component: IconBulletList,
    argTypes: {
        data: {
            table: {
                defaultValue: {
                    title: "",
                    subTitle: "",
                    image: "",
                    backgroundImage: "",
                    iconlist: ["iconlist"]
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
                    iconListItemTextColor: "",
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
            "Default IconBulletList for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 600 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <IconBulletList {...args} />;
export const Default = Template.bind({});
Default.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        backgroundImage: "",
        iconlist: [
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
        iconListItemTextColor: "#ffffff",
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
            code: `<IconBulletList {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};