import React from "react";

import Loader from "../components/Loader/Loader.react";

export default {
    title: "Design System/Loader/Loader",
    component: Loader,
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "secondary", "success", "inherit"],
        },
        icon: {
            control: "radio",
            options: [true, false],
        }
    }
};

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.parameters = {
    controls: { exclude: ["color"] },
};
Default.args = {
    label: "Loader",
    color: "inherit",
    icon: false,
};

export const icon = Template.bind({});
icon.parameters = { controls: { exclude: [] } };
icon.args = {
    label: "Loading",
    color: "success",
    icon: true,
};


