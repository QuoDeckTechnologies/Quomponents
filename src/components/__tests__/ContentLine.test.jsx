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
import ContentLine from "../ContentLine/ContentLine.react";

describe("ContentLine", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: ContentLine,
        required: {
            onClick: () => {},
        },
    };

    hasValid("defaults", args);

    hasValid("padding", args);

    hasValid("colors", args);
    hasValid("icons", args);
    hasValid("animations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let mockFn = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ContentLine
                name="What is Sales Pitching?"
                isActive={false}
                asPadded="normal"
                withColor={null}
                withIcon={null}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
                onClick={mockFn}
            />
        );
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
        component.setProps({ isActive: true });
        expect(component.find(".qui-content-line-container").props().style).toStrictEqual({ "backgroundColor": "#FFBF00CC", "color": "#454545" });
    });

    it("should render inactive content line", () => {
        component.setProps({ isActive: false, isDisabled: false });
        expect(component.find(".qui-content-line-container").props().style).toStrictEqual({ "backgroundColor": "#FFFFFF", "color": "#454545" });
    });

    it("should render Deck component when passed both, name and withIcon props", () => {
        component.setProps({ name: "This is DeckLine", withIcon: { icon: "fas fa book" } });
        expect(component.find(".qui-deck-line").exists()).toBe(true);
    });

    it("should render TopicLine compponent when only passing the name props", () => {
        component.setProps({ name: "This is TopicLine" });
        expect(component.find(".qui-topic-line").exists()).toBe(true);
    });

    it("should simulate the content line component", () => {
        component.setProps({ isActive: false, isDisabled: false });
        component.find(".qui-content-line-container").simulate('click');
        expect(mockFn).toBeCalledTimes(1);
    });
});
