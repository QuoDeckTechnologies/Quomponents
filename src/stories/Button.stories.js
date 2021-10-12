// src/components/Button.stories.js
import React from "react";

import Button from "../components/Button.react";

export default {
    title: "Example/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "My Button",
};
