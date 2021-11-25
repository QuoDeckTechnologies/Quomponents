import React from "react";
import DataExpoter from "../components/DataExporter/DataExporter.react";

export default {
    title: "Design System/Buttons/DataExporter",
    component: DataExpoter,
    argTypes: {
        backgroundColor: { control: "color" },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        iconBtn: {
            control: "radio",
            options: [true, false],
        },
    },
};

const Template = (args) => <DataExpoter {...args} />;

export const Default = Template.bind({});
Default.parameters = {
    controls: { exclude: ["iconBtn"] },
};
Default.args = {
    label: "Export",
    iconBtn: false,
    data: [
        { id: 1, name: "Test User1" },
        { id: 2, name: "Test User2" },
    ],
};

export const IconBtn = Template.bind({});
IconBtn.parameters = { controls: { exclude: ["size", "iconBtn"] } };
IconBtn.args = {
    label: "",
    iconBtn: true,
    data: [
        { id: 1, name: "Test User1" },
        { id: 2, name: "Test User2" },
    ],
};
