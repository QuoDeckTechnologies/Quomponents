import React from "react";
import QuoBarChart from "../components/BarChart/QuoBarChart.react";

const dictionary = JSON.stringify({
    hi: {
        barchart: {
            months: {
                january: "जनवरी",
                february: "फरवरी",
                march: "मार्च",
                april: "अप्रैल",
                may: "मई",
                june: "जून",
                july: "जुलाई",
                august: "अगस्त",
                september: "सितम्बर",
                october: "अक्टूबर",
                november: "नवम्बर",
                december: "दिसंबर"
            },
            activePlayers: "सक्रिय खिलाड़ी"
        },
    },
});
export default {
    title: "Design System/BarChart/BarChart",
    component: QuoBarChart,
    argTypes: {
        activeMonth: "",
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
        withAnimation: {
            table: {
                category: "with-Params",
                defaultValue: {
                    animation: "",
                    duration: 0,
                    delay: 0,
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
        componentSubtitle: "Displays a BarChart for showing active players by date of perticular month",
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
    activeMonth: "June",
    data: [
        { date: "10", activePlayer: 260 },
        { date: "11", activePlayer: 150 },
        { date: "12", activePlayer: 130 },
        { date: "13", activePlayer: 550 },
        { date: "14", activePlayer: 200 },
        { date: "15", activePlayer: 350 },
        { date: "16", activePlayer: 200 },
        { date: "17", activePlayer: 520 },
        { date: "18", activePlayer: 210 },
        { date: "19", activePlayer: 150 },
        { date: "20", activePlayer: 150 },
        { date: "21", activePlayer: 490 },
    ],
    withColor: {
        backgroundColor: "",
        activeBarColor: "#FFBF00",
        barColor: "#DDDDDD",
    },
    withTranslation: {
        lang: "en",
        tgt: "barchart",
        dictionary: dictionary,
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
// Translated Bar Chart
// -------------------------------------------------------------
export const TranslatedBarChart = Template.bind({});
TranslatedBarChart.args = {
    activeMonth: "June",
    data: [
        { date: "10", activePlayer: 260 },
        { date: "11", activePlayer: 150 },
        { date: "12", activePlayer: 130 },
        { date: "13", activePlayer: 550 },
        { date: "14", activePlayer: 200 },
        { date: "15", activePlayer: 350 },
        { date: "16", activePlayer: 200 },
        { date: "17", activePlayer: 520 },
        { date: "18", activePlayer: 210 },
        { date: "19", activePlayer: 150 },
        { date: "20", activePlayer: 150 },
        { date: "21", activePlayer: 590 },
    ],
    withColor: {
        backgroundColor: "",
        activeBarColor: "#FFBF00",
        barColor: "#DDDDDD",
    },
    withTranslation: {
        lang: "hi",
        tgt: "barchart",
        dictionary: dictionary,
    },
    isHidden: false,
};
TranslatedBarChart.parameters = {
    docs: {
        source: {
            code: `<QuoBarChart {...${JSON.stringify(TranslatedBarChart.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// colored Bar Chart
// -------------------------------------------------------------
export const ColoredBarChart = Template.bind({});
ColoredBarChart.args = {
    activeMonth: "June",
    data: [
        { date: "10", activePlayer: 260 },
        { date: "11", activePlayer: 150 },
        { date: "12", activePlayer: 130 },
        { date: "13", activePlayer: 550 },
        { date: "14", activePlayer: 200 },
        { date: "15", activePlayer: 350 },
        { date: "16", activePlayer: 200 },
        { date: "17", activePlayer: 520 },
        { date: "18", activePlayer: 210 },
        { date: "19", activePlayer: 150 },
        { date: "20", activePlayer: 150 },
        { date: "21", activePlayer: 590 },
    ],
    withColor: {
        backgroundColor: "#d5f1a8",
        activeBarColor: "#000000",
        barColor: "#FFBF00",
    },
    withTranslation: {
        lang: "en",
        tgt: "barchart",
        dictionary: dictionary,
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
// BarChartWith31Bars
// -------------------------------------------------------------
export const BarChartWith31Bars = Template.bind({});
BarChartWith31Bars.args = {
    activeMonth: "June",
    data: [
        { date: "1", activePlayer: 260 },
        { date: "2", activePlayer: 150 },
        { date: "3", activePlayer: 130 },
        { date: "4", activePlayer: 550 },
        { date: "5", activePlayer: 200 },
        { date: "6", activePlayer: 350 },
        { date: "7", activePlayer: 200 },
        { date: "8", activePlayer: 520 },
        { date: "9", activePlayer: 210 },
        { date: "10", activePlayer: 150 },
        { date: "11", activePlayer: 150 },
        { date: "12", activePlayer: 590 },
        { date: "13", activePlayer: 260 },
        { date: "14", activePlayer: 150 },
        { date: "15", activePlayer: 130 },
        { date: "16", activePlayer: 550 },
        { date: "17", activePlayer: 200 },
        { date: "18", activePlayer: 350 },
        { date: "19", activePlayer: 200 },
        { date: "20", activePlayer: 520 },
        { date: "21", activePlayer: 210 },
        { date: "22", activePlayer: 150 },
        { date: "23", activePlayer: 150 },
        { date: "24", activePlayer: 590 },
        { date: "25", activePlayer: 520 },
        { date: "26", activePlayer: 210 },
        { date: "27", activePlayer: 150 },
        { date: "28", activePlayer: 150 },
        { date: "29", activePlayer: 590 },
        { date: "30", activePlayer: 150 },
        { date: "31", activePlayer: 150 },
    ],
    withColor: {
        backgroundColor: "#d5f1a8",
        activeBarColor: "#000000",
        barColor: "#FFBF00",
    },
    withTranslation: {
        lang: "en",
        tgt: "barchart",
        dictionary: dictionary,
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