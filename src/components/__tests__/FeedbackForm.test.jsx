//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import FeedbackForm from "../FeedbackForm/FeedbackForm.react";

describe("FeedbackForm", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component
    const dictionary = JSON.stringify({
        hi: {
            feedbackForm: {
                content: "प्रतिक्रिया दिखाएं",
                correct: "यदि सही है",
                incorrect: "यदि गलत है"
            }
        },
    });
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
                withTranslation={null}
                isDisabled={false}
                isHidden={false}
                onSubmit={() => { }}
            />
        );
    });
    it("should render correctly if isHidden toggled as true",
        () => {
            component.setProps({ isHidden: true });
            expect(component.exists()).toBe(true);
        });
    it("should render correctly if isDisabled toggled as true",
        () => {
            component.setProps({ isDisabled: true });
            expect(component.exists()).toBe(true);
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
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
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
    it("should render translation  with withTranslation prop ", () => {
        component.setProps({
            data: {
                content: "Show Feedback"
            },
            withTranslation: {
                lang: "hi",
                tgt: "feedbackForm",
                dictionary: dictionary,
            },
        });
    });

    it("should render correctly if translation is not defined ", () => {
        component.setProps({
            data: {
                content: "Show Feedback"
            },
            withTranslation: {
                lang: "mr",
                tgt: "feedbackForm",
                dictionary: dictionary,
            },
        });
    });
});
