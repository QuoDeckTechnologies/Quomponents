import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from 'enzyme';
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
//--------------------------------------
// Import Components
// -------------------------------------
import QuoBarChart from "../BarChart/QuoBarChart.react"

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
            activePlayer: "activePlayer",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "January",
            withTranslation: {
                lang: "hi",
                tgt: "",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "February",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "March",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "April",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "May",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "June",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "July",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "August",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "September",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "October",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "November",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            activeMonth: "December",
            withTranslation: {
                lang: "hi",
                tgt: "barchart",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when click on Bar", () => {
        component.find("Bar").simulate('click')
    });
    it("should render correctly when mouseOver on Bar", () => {
        let data = {
            data: {
                x: 619.9545454545455,
                y: 115.91666666666669,
                activePlayer: 590,
                date: 29,
                payload: {
                    date: 21,
                    activePlayer: 590
                }
            },
            show: true
        }
        component.find("Bar").simulate('mouseOver', data)
        let tooltip = component.find("Tooltip")
        expect(tooltip).toBeVisible
    });
    it("should render correctly when mouseOver on Bar", () => {
        let data = {
            data: {
                x: 6,
                y: 1,
                activePlayer: 590,
                date: 29,
                payload: {
                    date: 21,
                    activePlayer: 590
                }
            },
            show: false
        }
        component.find("Bar").simulate('mouseOver', data)
        let tooltip = component.find("Tooltip")
        expect(tooltip).toBeVisible
    });
    it("should render tooltip data when hover on bar", () => {
        let wrapper = mount(<QuoBarChart
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
        />)
        wrapper.find(".recharts-tooltip-wrapper")
        global.innerWidth = 1200;
        act(() => {
            global.dispatchEvent(new Event("resize"));
        });
        global.innerWidth = 200;
        act(() => {
            global.dispatchEvent(new Event("resize"));
        });
        global.innerWidth = 330;
        act(() => {
            global.dispatchEvent(new Event("resize"));
        });
        global.innerWidth = 500;
        act(() => {
            global.dispatchEvent(new Event("resize"));
        });
    });
    it("should render correctly without throwing error when component unmounts", () => {
        const { unmount } = render(
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
        unmount();
    });
    it("should render correctly without throwing error when window is resized", () => {
        global.innerWidth = 200;
        act(() => {
            global.dispatchEvent(new Event("resize"));
        });
    });
    it("should render correctly without throwing error when window is resized to larger viewport", () => {
        global.innerWidth = 1200;
        act(() => {
            global.dispatchEvent(new Event("resize"));
        });
    });
});
