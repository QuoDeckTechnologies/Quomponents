//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";

//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";

//--------------------------------------
// Import Components
// -------------------------------------
import FeedbackForm from "../FeedbackForm/FeedbackForm.react";

describe("FeedbackForm", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: FeedbackForm,
        required: {
            onEnter: () => { },
        },
        translations: {
            tgt: "feedbackForm",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    feedbackForm: {
                        content: "प्रतिक्रिया दिखाएं",
                        correct: "यदि सही है",
                        incorrect: "यदि गलत है"
                    }
                },
            })
        },
    };

    hasValid("defaults", args);
    hasValid("colors", args);
    hasValid("variants", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);

    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component
    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <FeedbackForm
                onEnter={() => { }}
            />
        );
    });
    it('should render and handle click event', () => {
        const wrapper = shallow(<FeedbackForm onEnter={() => { }} />);
        wrapper.find("legend").children().simulate('click');
    });
    it('should render when content is null', () => {
        component.setProps({ content: "" })
        expect(component.exists()).toBe(true);
    });
    it('should render when content is not null', () => {
        component.setProps({ content: "Show Content" })
        expect(component.exists()).toBe(true);
    });
});
