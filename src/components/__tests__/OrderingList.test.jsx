//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import OrderingList from "../OrderingList/OrderingList/OrderingList.react";
import Button from "../Buttons/Button/Button.react"

describe("OrderingList", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        en: {
            templateActions: {
                checkAnswer: 'Check Answer',
                submitAnswer: 'Submit Answer',
                thanks: 'Thanks for your response',
                go: 'Go',
            }
        },
        hi: {
            templateActions: {
                checkAnswer: 'अपना उत्तर जाँच लें',
                submitAnswer: 'अपना जवाब सबमिट करें',
                thanks: 'आपके उत्तर के लिए धन्यवाद',
                go: 'आगे बढ़ें',
            }
        }
    });
    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <OrderingList
                content={["PRIMARY BUTTON", "SECONDARY BUTTON", "THIRD BUTTON"]}
                asVariant="primary"
                asSize="normal"
                asFloated="none"
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                isDisabled={false}
                isHidden={false}
                onClick={jest.fn()}
            />
        );
    });
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render translation of Check Answer with withTranslation prop and when passed purpose as quiz", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "templateActions",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render submitAnswer translation with withTranslation prop and when passed nothing in the purpose props", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "templateActions",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as primary", () => {
        component.setProps({ asVariant: "primary" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as secondary", () => {
        component.setProps({ asVariant: "secondary" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as warning", () => {
        component.setProps({ asVariant: "warning" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as error", () => {
        component.setProps({ asVariant: "error" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as none", () => {
        component.setProps({ asFloated: "none" })
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed isHidden prop as true", () => {
        component.setProps({ isHidden: true });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisable props as false", () => {
        component.setProps({ isDisable: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled prop as true", () => {
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
    });
    it("should render correctly without throwing error when clicked on button", () => {
        component.find(".qui-ordering-btn").at(0).simulate("click");
        component.find(".qui-ordering-btn").at(1).simulate("click");
        component.find(".qui-ordering-btn").at(2).simulate("click");
        component.find(".qui-ordering-btn").at(3).simulate("click");
        component.find(".qui-ordering-btn").at(4).simulate("click");
        component.find(".qui-ordering-btn").at(5).simulate("click");
    });
    it("should render correctly without throwing error when clicked on Submit button", () => {
        component.find('.qui-btn').at(0).simulate("click");
        component.find('.qui-btn').at(1).simulate("click");
        component.find('.qui-btn').at(2).simulate("click");
    });

    it("should render submit answer text in hindi", () => {
        component.setProps({
            purpose: "", withTranslation: {
                lang: "hi",
                tgt: "templateActions",
                dictionary: dictionary,
            },
        })
        expect(component.find(Button).text()).toBe("अपना जवाब सबमिट करें")
    });

    it("should render correctly if translation is not defined", () => {
		component.setProps({
			withTranslation: {
				lang: "mr",
				tgt: "templateActions",
				dictionary: dictionary,
			},
		});
		expect(component.exists()).toBe(true);
	});

    it("should render check answer text in hindi", () => {
        component.setProps({
            purpose: "quiz", withTranslation: {
                lang: "hi",
                tgt: "templateActions",
                dictionary: dictionary,
            },
        })
        expect(component.find(Button).text()).toBe("अपना उत्तर जाँच लें")
    });
});