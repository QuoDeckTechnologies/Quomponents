import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import SlideSettings from "../RibbonMenu/homeMenu/sections/SlideSettings.react";

describe("SlideSettings", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component;
	let toggleStatus = {
		backArrow:true,
		nextArrow: false,
	};

	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<SlideSettings
				asFloated="left"
				isHidden={false}
				isDisabled={false}
				onClick={jest.fn(toggleStatus)}
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
});
