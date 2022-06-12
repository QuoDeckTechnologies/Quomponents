import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from 'enzyme';
import { render, fireEvent } from "@testing-library/react";
//--------------------------------------
// Import Components
// -------------------------------------
import QuoBarChart from "../BarChart/QuoBarChart.react"
import {
    Tooltip,
    BarChart,
    XAxis,
    Bar,
    Cell,
    ResponsiveContainer
} from "recharts";

describe("QuoBarChart", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

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
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <QuoBarChart
                activeMonth="June"
                data={[
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
                ]}
                withColor={null}
                isHidden={false}
                isFluid={false}
            />
        );
    });

    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
    it("should render correctly when passed withColor props", () => {
        let colors = {
            accentColor: "#FF0000",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "January",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when click on Bar", () => {
        component.setProps({
            activeMonth: "January",
            data:
                [
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
                ]
        });
        component.find("Bar").simulate('click')
    });
    it("should render correctly with tooltip", () => {
        component.setProps({
            activeMonth: "January",
            data:
                [
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
                ]
        });
        component.find(".recharts-tooltip-wrapper")
        component.find('.qui-custom-tooltip')
        component.find('qui-tooltip-tringle')
        component.find('.qui-custom-tooltip-arrow')
        component.find('.fas fa-users')
        component.find('.qui-bar-player-count')
    });
    it("should render correctly when mouseOver on Bar", () => {
        let data = {
            x: 619.9545454545455,
            y: 115.91666666666669,
            activePlayer: 590,
            date: 29,
            payload: {
                date: 21,
                activePlayer: 590
            }
        }
        component.find("Bar").simulate('mouseOver', data, true)
    });
    it("should render tooltip data when hover on bar", () => {
        let payload = {
            payload: {
                datae: 21,
                activePlayer: 399
            }
        }
        component.find("Bar").simulate('mouseOver', 20, 30, payload.payload)
        let tooltip = component.find("Tooltip").props()
        // expect(typeof tooltip.customToolTip).toBe("function");
        console.log(tooltip)
    });
});
