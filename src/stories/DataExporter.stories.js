import React from "react";
import DataExpoter from "../components/DataExporter/DataExporter.react";

export default {
    title: "Design System/Exporter/DataExporter",
    component: DataExpoter,
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
};

const Template = (args) => <DataExpoter {...args} />;

export const Default = Template.bind({});
Default.parameters = {
    controls: { exclude: ["fontSize", "iconBtn"] },
};
Default.args = {
    label: "Export",
    iconBtn: false,
    data: [{ id: 1, name: "Test User1" }, { id: 2, name: "Test User2" }],
};

export const IconBtn = Template.bind({});
IconBtn.parameters = { controls: { exclude: ["size", "iconBtn"] } };
IconBtn.args = {
    iconBtn: true,
    data: [{ id: 1, name: "Test User1" }, { id: 2, name: "Test User2" }]
};
