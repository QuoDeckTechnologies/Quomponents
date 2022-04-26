import React from "react";
import { fireEvent } from "@testing-library/react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import PalleteThemeSection from "../RibbonMenu/designMenu/sections/PalleteThemeSection.react";

describe("PalleteThemeSection", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component;

	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<PalleteThemeSection
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

	it("should select color pallete theme", () => {
		let pallete = component
			.find(".qui-ribbon-menu-color-pallete-section-child")
			.at(0);
		pallete.simulate("click");
		expect(component.exists()).toBe(true);
	});

	it("should open color picker", () => {
		let pallete = component
			.find(".qui-ribbon-design-menu-custom-color-button")
			.at(0);
		pallete.simulate("click");
		expect(component.exists()).toBe(true);
	});

	it("should open color picker of Page Color", () => {
		let palleteButton = component
			.find(".qui-ribbon-design-menu-custom-color-button")
			.at(0);
		palleteButton.simulate("click");
		expect(component.exists()).toBe(true);

		let pallete = component.find(".qui-ribbon-design-menu-chrome-picker").at(0);
		pallete.simulate("changeComplete", { update: "#fff" });
		expect(component.exists()).toBe(true);
		fireEvent.mouseDown(document.body);
	});

	it("should open color picker of Primary Color", () => {
		let palleteButton = component
			.find(".qui-ribbon-design-menu-custom-color-button")
			.at(1);
		palleteButton.simulate("click");
		expect(component.exists()).toBe(true);

		let pallete = component.find(".qui-ribbon-design-menu-chrome-picker").at(0);
		pallete.simulate("changeComplete", { update: "#fff" });
		expect(component.exists()).toBe(true);
		fireEvent.mouseDown(document.body);
	});

	it("should open color picker of Accent Color", () => {
		let palleteButton = component
			.find(".qui-ribbon-design-menu-custom-color-button")
			.at(2);
		palleteButton.simulate("click");
		expect(component.exists()).toBe(true);

		let pallete = component.find(".qui-ribbon-design-menu-chrome-picker").at(0);
		pallete.simulate("changeComplete", { update: "#fff" });
		expect(component.exists()).toBe(true);

		let ref = component.find(".qui-ribbon-design-menu-custom-color-container").at(2)
		ref.simulate("click")
		fireEvent.mouseDown(document.body);
	});

	it("should open color picker of Secondary Color", () => {
		let palleteButton = component
			.find(".qui-ribbon-design-menu-custom-color-button")
			.at(3);
		palleteButton.simulate("click");
		expect(component.exists()).toBe(true);

		let pallete = component.find(".qui-ribbon-design-menu-chrome-picker").at(0);
		pallete.simulate("changeComplete", { update: "#fff" });
		expect(component.exists()).toBe(true);
		fireEvent.mouseDown(document.body);
	});
});
