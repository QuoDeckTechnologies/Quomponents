import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import SlideSection from "../RibbonMenu/homeMenu/sections/SlideSection.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("SlideSection", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component, actions, deck;
	actions = {
		addSlide: jest.fn(),
		duplicateSlide: jest.fn(),
		deleteSlide: jest.fn(),
	};
	deck = {
		content: [{}, {}]
	};
	const dictionary = JSON.stringify({
		en: {
			SlideSection: {
				slide: "Slide",
				newSlide: "New Slide",
				duplicateSlide: "Duplicate Slide",
				deleteSlide: "Delete Slide"
			}
		},
		hi: {
			SlideSection: {
				slide: "स्लाइड",
				newSlide: "नई स्लाइड",
				duplicateSlide: "स्लाइड प्रतिलिपि करे",
				deleteSlide: "स्लाइड हटाए"
			}
		}
	});
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<SlideSection
				actions={actions}
				deck={deck}
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
				tgt: "SlideSection",
				dictionary: dictionary,
			},
		});
		expect(component.exists()).toBe(true);
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

	it("should add new slide", () => {
		component.find(IconLink).at(0).simulate('click')
	})

	it("should duplicate slide", () => {
		component.find(IconLink).at(1).simulate('click')
	})

	it("should delete slide", () => {
		component.find(IconLink).at(2).simulate('click')
	})

	it("should disable the delete button if there is only 1 slide in the deck", () => {
		expect(component.find(IconLink).at(2).props().isDisabled).toBe(false)
		let deck = {
			content: [{}]
		}
		component.setProps({ deck: deck })
		expect(component.find(IconLink).at(2).props().isDisabled).toBe(true)
	})
});
