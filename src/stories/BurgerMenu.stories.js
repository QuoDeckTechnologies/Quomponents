import React from "react";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu.react";

export default {
    title: "Design System/BurgerMenu",
    component: BurgerMenu,
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
        componentSublabel: "Displays a basic BurgerMenu for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 300 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => (
    <BurgerMenu {...args} />
);
export const Default = Template.bind({});
Default.args = {
    auth: {
        user: { first_name: "Test", last_name: "Name" },

    },
    license: { license_name: "Free", license_type: "Inductor", maxUsers: 100 },
    course: { learnerCount: 20 },
    setActivePanel: (data) => { console.log(data) },
    onLogout: () => { console.log('logout') }
};
Default.parameters = {
    docs: {
        source: {
            code: `<BurgerMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};