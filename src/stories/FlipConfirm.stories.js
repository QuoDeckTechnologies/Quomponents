// src/components/Button.stories.js
import React from "react";
import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
  } from '@storybook/addon-docs';
  
import FlipConfirm from "../components/FlipConfirm/FlipConfirm.react";

export default {
    title: "Design System/Buttons/FlipConfirm",
    component: FlipConfirm,
    argTypes: {
        backgroundColor: { control: "color" },
        fontSize: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        iconBtn: {
            control: "radio",
            options: [true, false],
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                </>
            ),
        },
    },
};

const Template = (args) => <FlipConfirm {...args} />;

export const Default = Template.bind({});
Default.parameters = {
    controls: { exclude: ["fontSize", "iconBtn"] },
};
Default.args = {
    label: "Delete",
    iconBtn: false,
};

export const IconBtn = Template.bind({});
IconBtn.parameters = { controls: { exclude: ["size", "iconBtn"] } };
IconBtn.args = {
    iconBtn: true,
};
