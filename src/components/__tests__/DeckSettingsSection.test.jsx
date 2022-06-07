import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import DeckSettingsSection from "../RibbonMenu/toolsMenu/sections/DeckSettingsSection.react";

describe("DeckSettingsSection", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component, actions, deck;
	actions = {
		updateDeck: (settingsObj) => { return settingsObj }
	};
	deck = {
		navEnabled: false,
		snEnabled: false,
		voEnabled: false
	};
	const dictionary = JSON.stringify({
		en: {
			DeckSettingsSection: {
				settings: 'Settings',
				enableNavigation: "Enable Navigation",
				enableSlideList: "Enable Slide List",
				enableVoiceovers: "Enable Voiceovers"
			}
		},
		hi: {
			DeckSettingsSection: {
				settings: 'समायोजन',
				enableNavigation: "पथ प्रदर्शन सक्षम करें",
				enableSlideList: "स्लाइड सूची सक्षम करें",
				enableVoiceovers: "वॉयस ओवर सक्षम करें"
			}
		}
	});
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<DeckSettingsSection
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
				tgt: "DeckSettingsSection",
				dictionary: dictionary,
			},
		});
		expect(component.find(".qui-ribbon-menu-label").at(0).text()).toBe("पथ प्रदर्शन सक्षम करें");
		expect(component.find(".qui-ribbon-menu-label").at(1).text()).toBe("स्लाइड सूची सक्षम करें");
		expect(component.find(".qui-ribbon-menu-label").at(2).text()).toBe("वॉयस ओवर सक्षम करें");
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

	it("should enable navigation by clicking on Icon", () => {
		let backArrow = component.find("IconLink").at(0);
		backArrow.simulate("click");
	});

	it("should enable navigation by clicking on text", () => {
		let backArrow = component.find(".qui-ribbon-menu-label").at(0);
		backArrow.simulate("click");
	});

	it("should enable slide list by clicking on Icon", () => {
		let slideList = component.find("IconLink").at(1);
		slideList.simulate("click");
	});

	it("should enable slide list by clicking on text", () => {
		let slideList = component.find(".qui-ribbon-menu-label").at(1);
		slideList.simulate("click");
	});

	it("should enable voiceover by clicking on Icon", () => {
		let voiceover = component.find("IconLink").at(2);
		voiceover.simulate("click");
	});

	it("should enable voiceover by clicking on text", () => {
		let voiceover = component.find(".qui-ribbon-menu-label").at(2);
		voiceover.simulate("click");
	});
});
