//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import RibbonHomeMenu from "../RibbonMenu/homeMenu/RibbonHomeMenu.react";

describe("RibbonHomeMenu", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component, toggleBackChecked, toggleNextChecked;
	toggleBackChecked = jest.fn();
	toggleNextChecked = jest.fn();
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<RibbonHomeMenu
				toggleBackChecked={toggleBackChecked}
				toggleNextChecked={toggleNextChecked}
				onClick={() => {
					console.log("Testing RibbonHomeMenu");
				}}
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
});
