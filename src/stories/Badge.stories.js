import React from "react";
import Badges from "../components/Badges/Badges.react";
import MailIcon from '@mui/icons-material/Mail';
import { grey } from '@mui/material/colors';

export default {
    title: "Design System/Badges/Badge",
    component: Badges,
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "secondary", "success", "info", "error", "warning"],
        },
        alignvertical: {
            control: "select",
            options: ["top", "bottom"],
        },
        alignhorizontal: {
            control: "select",
            options: ["left", "right"],
        }
    },
};

const Template = (args) => <div><Badges {...args} /></div>;

export const Icon = Template.bind({});
Icon.parameters = {
    controls: { exclude: ["fontSize", "iconBtn"] },
};
Icon.args = {
    number: 100,
    max: 50,
    color: "primary",
    alignvertical: "top",
    alignhorizontal: "right",
    content: <MailIcon sx={{ color: grey[900] }} onClick={() => console.log("Testing")} />
};

export const Text = Template.bind({});
Text.parameters = {
    controls: { exclude: ["fontSize", "iconBtn"] },
};
Text.args = {
    number: 5,
    max: 99,
    color: "success",
    alignvertical: "top",
    alignhorizontal: "right",
    content: "Notifications"
};

