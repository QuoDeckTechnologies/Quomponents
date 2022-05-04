import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import SaveExitSection from "../RibbonMenu/htmlMenu/sections/SaveExitSection.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("SaveExitSection", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component, actions, params;
	actions = {
		addPoints: jest.fn()
	}
	params = {
		deckId: "1"
	}
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<SaveExitSection
				actions={actions}
				deckId={"1"}
				onSaveDeck={jest.fn()}
				onAddQDF={jest.fn()}
				params={params}
				updatePoints={jest.fn()}
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

	it("should save & exit the deck", () => {
		component.find(IconLink).simulate('click');
		expect(component.exists()).toBe(true);
	});

	it("should close points modal", () => {
		component.find(IconLink).simulate('click');
		expect(component.find(".qui-ribbon-html-menu-points-modal").exists()).toBe(true);
		component.find(".qui-ribbon-html-menu-points-modal").simulate('click');
		expect(component.find(".qui-ribbon-html-menu-points-modal").exists()).toBe(false);
	})
});
