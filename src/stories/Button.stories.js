// src/components/Button.stories.js
import React from "react";

import Button from "../components/Button.react";

export default {
    title: "Material Button",
    component: Button,
    argTypes: {
        primary: {
            control: "boolean",
        },
        secondary: {
            control: "boolean",
        },
        variant: {
            control: "select",
            options: ["text", "contained", "outlined"],
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        backgroundColor: { control: "color" },
        textColor: { control: "color" },
    },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Default Button",
    primary: true,
    secondary: false,
};

export const Primary = Template.bind({});
Primary.parameters = {
    controls: { exclude: ["backgroundColor", "textColor", "secondary"] },
};
Primary.args = {
    label: "Primary Button",
    primary: true,
    secondary: false,
};
