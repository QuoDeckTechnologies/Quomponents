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

	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<VoiceoverSection
				asFloated="left"
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

	it("should open and close voice modal", () => {
		expect(component.find(".qui-ribbon-tools-menu-voiceover-modal").exists()).toBe(false)
		let backArrow = component.find("IconLink").at(0);
		backArrow.simulate("click");
		expect(component.find(".qui-ribbon-tools-menu-voiceover-modal").exists()).toBe(true)
		component.find(".qui-ribbon-tools-menu-voiceover-modal").simulate('click');
		expect(component.find(".qui-ribbon-tools-menu-voiceover-modal").exists()).toBe(false)
	})
});
