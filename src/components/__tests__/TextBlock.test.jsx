//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import TextBlock from "../TextBlock/TextBlock.react";

describe("TextBlock", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <TextBlock
                content=""
                opacity=""
                position="left-top"
                conversation={true}
                asFloated="inline"
                withColor={{
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                }}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
            />
        );
    });
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with position is changed", () => {
        component.setProps({
            position: "left-top"
        })
    });
    it("should render correctly with position is changed to right-top", () => {
        component.setProps({
            position: "right-top"
        })
    });
    it("should render correctly with position is changed to right-bottom", () => {
        component.setProps({
            position: "right-bottom"
        })
    });
    it("should render correctly with position is changed to left-bottom", () => {
        component.setProps({
            position: "left-bottom"
        })
    });
    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly with content", () => {
        component.setProps({
            content: "",
            children: "Children",
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors })
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
    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed conversation props as true", () => {
        component.setProps({ conversation: true })
        expect(component.exists()).toBe(true);
    })
});
