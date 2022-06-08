import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import SlideSettings from "../RibbonMenu/homeMenu/sections/SlideSettings.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("SlideSettings", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component, actions, deck;
	actions = {
		changeSlideNav: jest.fn()
	};

	deck = {
		currentSlide: 1,
		content: [{}, {}, {}]
	};

	const dictionary = JSON.stringify({
		en: {
			SlideSettings: {
				settings: "Settings",
				enableBackArrow: "Enable Back Arrow",
				enableNextArrow: "Enable Next Arrow"
			}
		},
		hi: {
			SlideSettings: {
				settings: 'समायोजन',
				enableBackArrow: "वापस तीर सक्षम करें",
				enableNextArrow: "अगला तीर सक्षम करें"
			}
		}
	});
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<SlideSettings
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
				tgt: "SlideSettings",
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

	it("should enable back arrow by clicking on Icon", () => {
		let backArrow = component.find("IconLink").at(0);
		backArrow.simulate("click");
	});

	it("should enable back arrow by clicking on text", () => {
		let backArrow = component.find(".qui-ribbon-menu-label").at(0);
		backArrow.simulate("click");
	});

	it("should enable next arrow by clicking on Icon", () => {
		let nextArrow = component.find("IconLink").at(1);
		nextArrow.simulate("click");
	});

	it("should enable next arrow by clicking on text", () => {
		let nextArrow = component.find(".qui-ribbon-menu-label").at(1);
		nextArrow.simulate("click");
	});

	it("should disable backarrow when there are 3 slides in the content and user is editing the first slide", () => {
		deck = {
			currentSlide: 0,
			content: [{}, {}, {}]
		}
		component.setProps({ deck: deck });
		expect(component.find(IconLink).at(0).props().isDisabled).toBe(true);
		expect(component.find(IconLink).at(1).props().isDisabled).toBe(false);
	});

	it("should disable nextarrow when there are 3 slides in the content and user is editing the third slide", () => {
		deck = {
			currentSlide: 2,
			content: [{}, {}, {}]
		}
		component.setProps({ deck: deck });
		expect(component.find(IconLink).at(0).props().isDisabled).toBe(false);
		expect(component.find(IconLink).at(1).props().isDisabled).toBe(true);
	});

	it("should be able to enable backarrow and nextarrow when there are 3 slides in the content and user is editing the second slide", () => {
		deck = {
			currentSlide: 1,
			content: [{}, {}, {}]
		}
		component.setProps({ deck: deck })
		expect(component.find(IconLink).at(0).props().isDisabled).toBe(false);
		expect(component.find(IconLink).at(1).props().isDisabled).toBe(false)
	})
});
