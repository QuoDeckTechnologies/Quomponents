//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import ContentLine from "../ContentLine/ContentLine.react";

describe("ContentLine", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component, content;
    content = {
        name: "What is Sales Pitching?",
        icon: "fas fa-book"
    };
    let mockFn = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ContentLine
                content={content}
                isActive={false}
                withColor={{
                    backgroundColor: "",
                    textColor: ""
                }}
                withAnimation={{
                    animation: "slideDown",
                    duration: 0.5,
                    delay: 0,
                }}
                isHidden={false}
                isDisabled={false}
                onClick={mockFn}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        };
        component.setProps({ withAnimation: animation });
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

    it("should render active content line with the backgroundColor and textColor passed", () => {
        component.setProps({
            isActive: true,
            withColor: {
                backgroundColor: "#ED6E6E",
                textColor: "#FFFFFF"
            }
        });
        expect(component.find(".qui-content-line-container").props().style).toStrictEqual({ "backgroundColor": "#ED6E6E", "color": "#FFFFFF" });
    });

    it("should render active content line with the default backgroundColor and textColor", () => {
        component.setProps({
            isActive: true,
            withColor: {
                backgroundColor: "",
                textColor: ""
            }
        });
        expect(component.find(".qui-content-line-container").props().style).toStrictEqual({ "backgroundColor": "#FFBF00CC", "color": "#454545" });
    });

    it("should render inactive content line", () => {
        component.setProps({ isActive: false, isDisabled: false });
        expect(component.find(".qui-content-line-container").props().style).toStrictEqual({ "backgroundColor": "#FFFFFF", "color": "#454545" });
    });

    it("should simulate the content line component", () => {
        component.setProps({ isActive: false, isDisabled: false });
        component.find(".qui-content-line-container").simulate('click');
        expect(mockFn).toBeCalledTimes(1);
    });
});
