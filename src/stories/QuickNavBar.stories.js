import React from "react";
import QuickNavBar from "../components/QuickNavBar/QuickNavBar.react";

export default {
    title: "Design System/QuickNavBar",
    component: QuickNavBar,
    argTypes: {

    },
    decorators: [
        (story) => (
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSublabel: "Displays a basic QuickNavBar for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 300 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => (
    <QuickNavBar {...args} />
);
export const Default = Template.bind({});
Default.args = {
    image: "assets/avatar.jpg",
    onImageClick: (data) => { console.log(data) },
    onLeaderboardClick: (data) => { console.log(data) },
    onCollectionClick: (data) => { console.log(data) },
};
Default.parameters = {
    docs: {
        source: {
            code: `<QuickNavBar {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};