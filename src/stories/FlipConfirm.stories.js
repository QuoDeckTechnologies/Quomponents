// src/components/Button.stories.js
import React from "react";

import FlipConfirm from "../components/FlipConfirm/FlipConfirm.react";

export default {
    title: "FlipConfirm Button",
    component: FlipConfirm,
    argTypes: {
        backgroundColor: { control: "color" },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
    },
};

const Template = (args) => <FlipConfirm {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Delete",
};
