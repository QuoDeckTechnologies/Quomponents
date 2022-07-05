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
            content: {
                name: "What is Sales Pitching?",
                icon: "fas fa-book"
            },
            onClick: () => console.log("Button Testing"),
        },
    };

    hasValid("defaults", args);
    hasValid("alignment", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("toggles", args);
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

    it("should render Deck component when passed both, name and icon in the content props", () => {
        let content = {
            name: "This is DeckLine",
            icon: "fas fa-book"
        }
        component.setProps({ content: content });
        expect(component.find(".qui-deck-line").exists()).toBe(true);
    });

    it("should render TopicLine compponent when only passing the name in the content props", () => {
        let content = {
            name: "This is TopicLine",
            icon: ""
        }
        component.setProps({ content: content });
        expect(component.find(".qui-topic-line").exists()).toBe(true);
    });

    it("should simulate the content line component", () => {
        component.setProps({ isActive: false, isDisabled: false });
        component.find(".qui-content-line-container").simulate('click');
        expect(mockFn).toBeCalledTimes(1);
    });
});
