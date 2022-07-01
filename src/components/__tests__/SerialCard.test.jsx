//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import SerialCard from "../SerialCard/SerialCard.react";

describe("SerialCard", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let handelevent = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SerialCard
                content={{
                    title: "5th May 2022",
                    description:
                        "What are Mutual Funds?",
                    image: "image",
                    backImage: "image",
                    playerIcon: "fa fa-users",
                    playersValue: 20539,
                    iconOpt: ["fa fa-book", "fa fa-gamepad", "fa fa-trophy"]
                }}
                asVariant="primary"
                asSize="normal"
                let colors={{
                    backgroundColor: "red",
                    accentColor: "green",
                    textColor: "blue",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                isDisabled={false}
                isHidden={false}
                onClick={() => { }}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "red",
            accentColor: "green",
            textColor: "blue",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asVariant prop as primary", () => {
        component.setProps({ asVariant: "primary" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asVariant prop as secondary", () => {
        component.setProps({ asVariant: "secondary" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asVariant prop as warning", () => {
        component.setProps({ asVariant: "warning" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asVariant prop as error", () => {
        component.setProps({ asVariant: "error" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    })
    it("should call onMouseDown when click", () => {
        component.find(".qui-serialcard-icon").at(0).simulate("mousedown");
        component.find(".qui-serialcard-icon").at(1).simulate("mousedown");
        component.find(".qui-serialcard-icon").at(2).simulate("mousedown");
    });
});