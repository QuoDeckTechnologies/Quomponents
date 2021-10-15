// src/components/Button.stories.js
import React from "react";

import FlipConfirm from "../components/FlipConfirm.react";

export default {
    title: "FlipConfirm Button",
    component: FlipConfirm,
    argTypes: {
        backgroundColor: { control: "color" },
        textColor: { control: "color" },
        variant: {
            control: "select",
            options: ["tight", "compact", "normal", "relaxed", "wide"],
        },
    },
};

const Template = (args) => <FlipConfirm {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Delete",
};
