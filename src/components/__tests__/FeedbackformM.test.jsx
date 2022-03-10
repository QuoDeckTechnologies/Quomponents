//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import FeedbackformM from "../FeedbackformM/FeedbackformM/FeedbackformM.react";

describe("FeedbackformM", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component
    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <FeedbackformM
                asVariant="primary"
                asSize="normal"
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                isDisabled={false}
                isHidden={false}
                onClick={() => console.log("FeedbackformM testing")}
            />
        );
    });

    it("should render correctly if isHidden toggled as true",
        () => {
            component.setProps({ isHidden: true });
            expect(component.exists()).toBe(true);
        });
    it("should render correctly if asSize is 'normal' and asVariant is 'primary' ",
        () => {
            component.setProps({
                asSize: "normal",
                asVariant: "primary",
            });
            expect(component.exists()).toBe(true);
        });
    it("should render correctly if isDisabled toggled as true",
        () => {
            component.setProps({ isDisabled: true });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

});
