import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import SaveSection from "../RibbonMenu/htmlMenu/sections/SaveSection.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("SaveSection", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component;

	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<SaveSection
				onSaveDeck={jest.fn()}
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

	it("should simulate upload button", () => {
		component.find(IconLink).at(0).simulate('click');
		expect(component.exists()).toBe(true);
	})

	it("should simulate download button", () => {
		component.find(IconLink).at(1).simulate('click');
		expect(component.exists()).toBe(true);
	})

	it("should simulate save button", () => {
		component.find(IconLink).at(2).simulate('click');
		expect(component.exists()).toBe(true);
	})
});
