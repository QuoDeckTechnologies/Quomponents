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
                    data: [
                        {
                            question: "प्र. सेल्स रेडीनेस और सेल्स इनेबलमेंट में क्या अंतर है?",
                            answer: "बिक्री शब्दावली की दुनिया में खो जाना आसान हो सकता है। किसी भी क्षेत्र की तरह, जब आपका पहली बार लिंगो से परिचय होता है, तो यह एक नई भाषा सीखने जैसा महसूस हो सकता है। समान शब्दों के बीच महत्वपूर्ण अंतर को समझना अपने आप में एक चुनौती हो सकती है।"
                        },
                        {
                            question: "123प्र. सेल्स रेडीनेस और सेल्स इनेबलमेंट में क्या अंतर है?",
                            answer: "123बिक्री शब्दावली की दुनिया में खो जाना आसान हो सकता है। किसी भी क्षेत्र की तरह, जब आपका पहली बार लिंगो से परिचय होता है, तो यह एक नई भाषा सीखने जैसा महसूस हो सकता है। समान शब्दों के बीच महत्वपूर्ण अंतर को समझना अपने आप में एक चुनौती हो सकती है।"
                        },
                    ]
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
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------
    let component;
    let handleExpand = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <FAQItem
                data={[{
                    question: "question",
                    answer: "answer",
                }]}
                asVariant="warning"
                asFloated="none"
                asAligned="center"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
                handleExpand={handleExpand}
            />
        );
    });

    it("should render correctly when data props has empty values", () => {
        let Data = [{}]
        component.setProps({ data: Data });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when data props contain values", () => {
        let Data = [
            {
                question: "Q1. What is the difference between Sales Readiness and Sales Enablement",
                answer: "It can be easy to get lost in the world of sales terminology. As with any field, when you’re first introduced to the lingo, it can feel like learning a new language. Understanding the key differences between similar terms can be a challenge in its own right.",
            },
            {
                question: "Q2. What is the difference between Sales Readiness and Sales Enablement",
                answer: "1. It can be easy to get lost in the world of sales terminology. As with any field, when you’re first introduced to the lingo, it can feel like learning a new language. Understanding the key differences between similar terms can be a challenge in its own right.",
            }
        ]
        component.setProps({ data: Data });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when click done", () => {
        component.find(".qui-faq-item-question").at(0).simulate("click");
        component.find(".qui-faq-item-question").at(0).simulate("click");
        expect(component.exists()).toBe(true);
    });
});
