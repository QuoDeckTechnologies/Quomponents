import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import VoiceoverSection from "../RibbonMenu/toolsMenu/sections/VoiceoverSection.react";

describe("VoiceoverSection", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component;
	const dictionary = JSON.stringify({
		en: {
			VoiceoverSection: {
				upload: "Upload",
				copySlidesToScript: "Copy Slides to Script",
				downloadScript: "Download Script"
			}
		},
		hi: {
			VoiceoverSection: {
				voiceover: "पार्श्व स्वर",
				upload: "अपलोड",
				copySlidesToScript: "स्लाइड को स्क्रिप्ट में कॉपी करें",
				downloadScript: "स्क्रिप्ट डाउनलोड करें"
			}
		}
	});
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<VoiceoverSection
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
				tgt: "VoiceoverSection",
				dictionary: dictionary,
			},
		});
		expect(component.find(".qui-ribbon-menu-label-file").text()).toBe("पार्श्व स्वर");
		expect(component.find(".qui-ribbon-menu-label").text()).toBe("अपलोड");
		expect(component.find(".qui-ribbon-menu-tool-label").at(0).text()).toBe("स्लाइड को स्क्रिप्ट में कॉपी करें");
		expect(component.find(".qui-ribbon-menu-tool-label").at(1).text()).toBe("स्क्रिप्ट डाउनलोड करें");
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
		let backArrow = component.find(".qui-ribbon-menu-tool-label").at(0);
		backArrow.simulate("click");
	});

	it("should enable slide list by clicking on Icon", () => {
		let nextArrow = component.find("IconLink").at(1);
		nextArrow.simulate("click");
	});

	it("should enable slide list by clicking on text", () => {
		let nextArrow = component.find(".qui-ribbon-menu-tool-label").at(1);
		nextArrow.simulate("click");
	});
});
