import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import TodayMenuBtn from "../TodayMenuBtn/TodayMenuBtn.react";

describe("TodayMenuBtn", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component, onClick;

    onClick = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <TodayMenuBtn
                content=""
                withIcon=""
                asEmphasis="Default"
                asFloated="none"
                withColor={{
                    backgroundColor: "",
                    textColor: "",
                    iconColor: ""
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                isDisabled={false}
                isHidden={false}
                onClick={onClick}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as none", () => {
        component.setProps({ asFloated: "none" });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true });
        expect(component.exists()).toBe(true);
    });

    it("should render only Icon when passed withIcon", () => {
        component.setProps({ asEmphasis: "Default", withIcon: "fas fa-home" });
        expect(component.find(".qui-content-line-text").exists()).toBe(false);
        expect(component.find(".qui-content-line-icon").exists()).toBe(true);
    });

    it("should render only Text when passed content", () => {
        component.setProps({ asEmphasis: "Default", content: "Home" });
        expect(component.find(".qui-content-line-text").exists()).toBe(true);
        expect(component.find(".qui-content-line-icon").exists()).toBe(false);
    });

    it("should render both when passed withIcon and content", () => {
        component.setProps({ asEmphasis: "Default", content: "Home", withIcon: "fas fa-home" });
        expect(component.find(".qui-content-line-text").exists()).toBe(true);
        expect(component.find(".qui-content-line-icon").exists()).toBe(true);
    });

    it("should render correct styling when passed withColor props to default component", () => {
        component.setProps({ asEmphasis: "Default", withColor: { backgroundColor: "#fff", textColor: "#000", iconColor: "#000" }, content: "Home", withIcon: "fas fa-home" });
        expect(component.find(".qui-today-menu-btn-container").props().style.backgroundColor).toBe("#fff");
        expect(component.find(".qui-content-line-text").props().style.color).toBe("#000");
        expect(component.find(".qui-content-line-icon").props().style.color).toBe("#000");
    });

    it("should render correct styling of component when passed Complete in asEmphasis props", () => {
        component.setProps({ asEmphasis: "Complete", content: "Home", withIcon: "fas fa-home" });
        expect(component.find(".qui-today-menu-btn-container").props().style.backgroundColor).toBe("#C1DC9E");
        expect(component.find(".qui-content-line-text").props().style.color).toBe("#454545");
        expect(component.find(".qui-content-line-icon").props().style.color).toBe("#52AF50");
    });

    it("should render correct styling of component when passed Active in asEmphasis props", () => {
        component.setProps({ asEmphasis: "Active", content: "Home", withIcon: "fas fa-home" });
        expect(component.find(".qui-today-menu-btn-container").props().style.backgroundColor).toBe("#222A35");
        expect(component.find(".qui-content-line-text").props().style.color).toBe("#FFFFFF");
        expect(component.find(".qui-content-line-icon").props().style.color).toBe("#FFCA36");
    });

    it("should render correct styling of component when passed Default in asEmphasis props", () => {
        component.setProps({ asEmphasis: "Default", content: "Home", withIcon: "fas fa-home" });
        expect(component.find(".qui-today-menu-btn-container").props().style.backgroundColor).toBe("#ED6E6E");
        expect(component.find(".qui-content-line-text").props().style.color).toBe("#FFFFFF");
        expect(component.find(".qui-content-line-icon").props().style.color).toBe("#FFFFFF");
    });
});