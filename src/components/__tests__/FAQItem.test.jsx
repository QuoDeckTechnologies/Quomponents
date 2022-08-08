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
import FAQItem from "../FAQItem/FAQItem.react";

describe("FAQItem", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: FAQItem,
        required: {},
        translations: {
            tgt: "faqItem",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    faqItem: {
                        question: "प्र. सेल्स रेडीनेस और सेल्स इनेबलमेंट में क्या अंतर है?",
                        answer: "बिक्री शब्दावली की दुनिया में खो जाना आसान हो सकता है। किसी भी क्षेत्र की तरह, जब आपका पहली बार लिंगो से परिचय होता है, तो यह एक नई भाषा सीखने जैसा महसूस हो सकता है। समान शब्दों के बीच महत्वपूर्ण अंतर को समझना अपने आप में एक चुनौती हो सकती है।"
                    }
                },
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("positions", args);
    hasValid("alignment", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    hasValid("fluid", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------
    let component;
    let handleExpand = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <FAQItem
                question="question"
                answer="answer"
                asVariant="warning"
                asFloated="none"
                asAligned="center"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
                isFluid={false}
                handleExpand={handleExpand}
            />
        );
    });

    it("should render correctly when question and answer props has empty values", () => {
        component.setProps({ question: "", answer: "" });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when question and answer props contain values", () => {
        component.setProps({ question: "question", answer: "answer" });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when click done", () => {
        component.find(".qui-faq-item-question").at(0).simulate("click");
        component.find(".qui-faq-item-question").at(0).simulate("click");
        expect(component.exists()).toBe(true);
    });
});
