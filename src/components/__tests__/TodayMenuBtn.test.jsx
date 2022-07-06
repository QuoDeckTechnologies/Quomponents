import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import TodayMenuBtn from "../TodayMenuBtn/TodayMenuBtn.react";

describe("TodayMenuBtn", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: TodayMenuBtn,
        required: {
            onClick: () => { },
        },
    };

    hasValid("defaults", args);

    hasValid("positions", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("disabled", args);
    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component, onClick;

    onClick = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <TodayMenuBtn
                content=""
                withIcon={{
                    name: "",
                    size: "",
                    position: ""
                }}
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

    it("should render only Icon when passed withIcon", () => {
        component.setProps({
            withIcon: {
                name: "fas fa-home",
                size: "1em",
                position: "left"
            }
        });
        expect(component.find(".qui-today-menu-btn-text").exists()).toBe(false);
        expect(component.find(".qui-today-menu-btn-icon").exists()).toBe(true);
    });

    it("should render only Text when passed content", () => {
        component.setProps({ content: "Home" });
        expect(component.find(".qui-today-menu-btn-text").exists()).toBe(true);
        expect(component.find(".qui-today-menu-btn-icon").exists()).toBe(false);
    });

    it("should render both when passed withIcon and content", () => {
        component.setProps({
            content: "Home",
            withIcon: {
                name: "fas fa-home",
                size: "1em",
                position: "left"
            }
        });
        expect(component.find(".qui-today-menu-btn-text").exists()).toBe(true);
        expect(component.find(".qui-today-menu-btn-icon").exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        component.setProps({
            content: "Home",
            withIcon: {
                name: "fas fa-home",
                size: "1em",
                position: "left"
            },
            withColor: {
                backgroundColor: "#C1DC9E",
                textColor: "#FFFFFF",
                iconColor: "#000000"
            }
        });
        expect(component.find(".qui-today-menu-btn-text").exists()).toBe(true);
        expect(component.find(".qui-today-menu-btn-icon").exists()).toBe(true);
    });
});