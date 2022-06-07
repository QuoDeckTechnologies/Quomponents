import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import QuestionBankSection from "../RibbonMenu/toolsMenu/sections/QuestionBankSection.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("QuestionBankSection", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component;
	const dictionary = JSON.stringify({
		en: {
			QuestionBankSection: {
				questionBank: 'Question Bank'
			}
		},
		hi: {
			QuestionBankSection: {
				questionBank: 'प्रश्न बैंक'
			}
		}
	});
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<QuestionBankSection
				asFloated="left"
				withTranslation={null}
				isHidden={false}
				isDisabled={false}
				onClick={jest.fn()}
			/>
		);
	});

	it("should render correctly without throwing error", () => {
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed asFloated prop as left", () => {
		component.setProps({ asFloated: "left" });
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed asFloated prop as right", () => {
		component.setProps({ asFloated: "right" });
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed asFloated prop as inline", () => {
		component.setProps({ asFloated: "inline" });
		expect(component.exists()).toBe(true);
	});

	it("should render translation of component in hindi", () => {
		component.setProps({
			withTranslation: {
				lang: "hi",
				tgt: "QuestionBankSection",
				dictionary: dictionary,
			},
		});
		expect(component.find(".qui-ribbon-menu-label").text()).toBe("प्रश्न बैंक");
	});

	it("should render correctly when passed isHidden props as false", () => {
		component.setProps({ isHidden: false });
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed isHidden props as true", () => {
		component.setProps({ isHidden: true });
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed isDisabled props as false", () => {
		component.setProps({ isDisabled: false });
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed isDisabled props as true", () => {
		component.setProps({ isDisabled: true });
		expect(component.exists()).toBe(true);
	});

	it("should simulate question bank button", () => {
		component.find(IconLink).simulate('click');
		expect(component.exists()).toBe(true);
	})
});
