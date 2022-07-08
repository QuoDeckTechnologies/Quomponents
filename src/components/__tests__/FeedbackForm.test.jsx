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
            onClick: () => console.log("Button Testing"),
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
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                withColor={null}
                onClick={() => console.log("FeedbackForm testing")}
            />
        );
    });
    it("should render correctly when passed withColor props", () => {
        let colors = {
            toggleBarColor: "#454545",
            toggleActiveColor: "#FFAB00",
            toggleLabelColor: "",
            inputBackgroundColor: "#ffab000d",
            inputAccentColor: "#ffab00",
            inputTextColor: "#666666",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })
    it('should render and handle click event', () => {
        const wrapper = shallow(<FeedbackForm onSubmit={() => console.log("Testing FeedbackForm")} />);
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
