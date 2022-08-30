import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from 'enzyme';
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import QuoBarChart from "../BarChart/QuoBarChart.react"

describe("QuoBarChart", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: QuoBarChart,
    };
    hasValid("defaults", args);
    hasValid("colors", args);
    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <QuoBarChart
                title="June"
                data={[
                    { label: "10", count: 260 },
                    { label: "11", count: 150 },
                    { label: "12", count: 130 },
                    { label: "13", count: 550 },
                    { label: "14", count: 200 },
                    { label: "15", count: 350 },
                    { label: "16", count: 200 },
                    { label: "17", count: 520 },
                    { label: "18", count: 210 },
                    { label: "19", count: 150 },
                    { label: "20", count: 150 },
                    { label: "21", count: 590 },
                ]}
            />
        );
    });
    it("should render correctly when click on Bar", () => {
        component.find("Bar").simulate('click')
    });
    it("should render correctly when mouseOver on Bar", () => {
        let data = {
            data: {
                x: 619.9545454545455,
                y: 115.91666666666669,
                count: 590,
                label: 29,
                payload: {
                    label: 21,
                    count: 590
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
                count: 590,
                label: 29,
                payload: {
                    label: 21,
                    count: 590
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
            title="June"
            data={[
                { label: "10", count: 260 },
                { label: "11", count: 150 },
                { label: "12", count: 130 },
                { label: "13", count: 550 },
                { label: "14", count: 200 },
                { label: "15", count: 350 },
                { label: "16", count: 200 },
                { label: "17", count: 520 },
                { label: "18", count: 210 },
                { label: "19", count: 150 },
                { label: "20", count: 150 },
                { label: "21", count: 590 },
            ]}
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
        global.innerHeight = 300;
        act(() => {
            global.dispatchEvent(new Event("resize"));
        });
        global.innerHeight = 600;
        act(() => {
            global.dispatchEvent(new Event("resize"));
        });
        global.innerHeight = 1000;
        act(() => {
            global.dispatchEvent(new Event("resize"));
        });
        global.innerHeight = 1200;
        act(() => {
            global.dispatchEvent(new Event("resize"));
        });
    });
    it("should render correctly without throwing error when component unmounts", () => {
        const { unmount } = render(
            <QuoBarChart
                title="June"
                data={[
                    { label: "10", count: 260 },
                    { label: "11", count: 150 },
                    { label: "12", count: 130 },
                    { label: "13", count: 550 },
                    { label: "14", count: 200 },
                    { label: "15", count: 350 },
                    { label: "16", count: 200 },
                    { label: "17", count: 520 },
                    { label: "18", count: 210 },
                    { label: "19", count: 150 },
                    { label: "20", count: 150 },
                    { label: "21", count: 590 },
                ]}
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
    it("should render correctly without throwing error when window is resized", () => {
        global.innerHeight = 300;
        act(() => {
            global.dispatchEvent(new Event("resize"));
        });
    });
    it("should render correctly without throwing error when window is resized to larger viewport", () => {
        global.innerHeight = 600;
        act(() => {
            global.dispatchEvent(new Event("resize"));
        });
    });
});
