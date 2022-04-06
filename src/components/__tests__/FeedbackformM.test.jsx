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
    it('should render and handle click event', () => {
        const wrapper = shallow(<FeedbackformM onClick={() => console.log("Testing FeedbackForm")} />);
        wrapper.find(".qui-feedback-toggle-button").simulate('click');
    });

});
