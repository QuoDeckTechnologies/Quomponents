import React from "react";
import QuoBarChart from "../components/BarChart/QuoBarChart.react";

export default {
    title: "Design System/BarChart",
    component: QuoBarChart,
    argTypes: {
        title: "",
        subtitle: "",
        data: [{}],
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    activeBarColor: "",
                    barColor: "",
                    backgroundColor: "",
                },
            },
        },
        isHidden: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
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
        componentSubtitle: "Displays a QuoBarChart for showing active players by date of perticular month",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <QuoBarChart {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: "June",
    subtitle: "Active Players",
    data: [
        { label: "1", count: 2000 },
        { label: "2", count: 2500 },
        { label: "3", count: 3000 },
        { label: "4", count: 2500 },
        { label: "5", count: 2000 },
        { label: "6", count: 2000 },
        { label: "7", count: 2500 },
        { label: "8", count: 3000 },
        { label: "9", count: 2500 },
        { label: "10", count: 2000 },
        { label: "11", count: 2000 },
        { label: "12", count: 2500 },
        { label: "13", count: 3000 },
        { label: "14", count: 2500 },
        { label: "15", count: 2000 },
        { label: "16", count: 2000 },
        { label: "17", count: 2500 },
        { label: "18", count: 3000 },
        { label: "19", count: 2500 },
        { label: "20", count: 2000 },
        { label: "21", count: 2000 },
    ],
    withColor: {
        backgroundColor: "",
        activeBarColor: "#FFBF00",
        barColor: "#DDDDDD",
    },
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<QuoBarChart {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// colored Bar Chart
// -------------------------------------------------------------
export const ColoredBarChart = Template.bind({});
ColoredBarChart.args = {
    title: "June",
    subtitle: "Active Players",
    data: [
        { label: "1", count: 2000 },
        { label: "2", count: 2500 },
        { label: "3", count: 3000 },
        { label: "4", count: 2500 },
        { label: "5", count: 2000 },
        { label: "6", count: 2000 },
        { label: "7", count: 2500 },
        { label: "8", count: 3000 },
        { label: "9", count: 2500 },
        { label: "10", count: 2000 },
        { label: "11", count: 2000 },
        { label: "12", count: 2500 },
        { label: "13", count: 3000 },
        { label: "14", count: 2500 },
        { label: "15", count: 2000 },
        { label: "16", count: 2000 },
        { label: "17", count: 2500 },
        { label: "18", count: 3000 },
        { label: "19", count: 2500 },
        { label: "20", count: 2000 },
        { label: "21", count: 2000 },
    ],
    withColor: {
        backgroundColor: "#d5f1a8",
        activeBarColor: "#000000",
        barColor: "#FFBF00",
    },
    isHidden: false,
};
ColoredBarChart.parameters = {
    docs: {
        source: {
            code: `<QuoBarChart {...${JSON.stringify(ColoredBarChart.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// QuoBarChartWith31Bars
// -------------------------------------------------------------
export const BarChartWith31Bars = Template.bind({});
BarChartWith31Bars.args = {
    title: "June",
    subtitle: "Active Players",
    data: [
        { label: "1", count: 2000 },
        { label: "2", count: 3000 },
        { label: "3", count: 4000 },
        { label: "4", count: 2000 },
        { label: "5", count: 3000 },
        { label: "6", count: 4000 },
        { label: "7", count: 2000 },
        { label: "8", count: 3000 },
        { label: "9", count: 4000 },
        { label: "10", count: 2000 },
        { label: "11", count: 3000 },
        { label: "12", count: 4000 },
        { label: "13", count: 2000 },
        { label: "14", count: 3000 },
        { label: "15", count: 4000 },
        { label: "16", count: 2000 },
        { label: "17", count: 3000 },
        { label: "18", count: 4000 },
        { label: "19", count: 2000 },
        { label: "20", count: 3000 },
        { label: "21", count: 4000 },
        { label: "22", count: 2000 },
        { label: "23", count: 3000 },
        { label: "24", count: 4000 },
        { label: "25", count: 2000 },
        { label: "26", count: 3000 },
        { label: "27", count: 4000 },
        { label: "28", count: 2000 },
        { label: "29", count: 3000 },
        { label: "30", count: 4000 },
        { label: "31", count: 2000 },
    ],
    withColor: {
        backgroundColor: "#d5f1a8",
        activeBarColor: "#000000",
        barColor: "#FFBF00",
    },
    isHidden: false,
};
BarChartWith31Bars.parameters = {
    docs: {
        source: {
            code: `<QuoBarChart {...${JSON.stringify(BarChartWith31Bars.args, null, 2)}}/>`,
        },
    },
};