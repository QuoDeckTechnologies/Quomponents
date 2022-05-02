//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import RibbonMenu from "../RibbonMenu/RibbonMenu.react";
import RibbonDesignMenu from "../RibbonMenu/designMenu/RibbonDesignMenu.react";
import RibbonHomeMenu from "../RibbonMenu//homeMenu/RibbonHomeMenu.react";
import RibbonHtmlMenu from "../RibbonMenu/htmlMenu/RibbonHtmlMenu.react";
import RibbonToolsMenu from "../RibbonMenu/toolsMenu/RibbonToolsMenu.react";

describe("RibbonMenu", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component;

	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<RibbonMenu
				asEmphasis="html"
				actions={{
					updateDeck: jest.fn(),
					addPoints: jest.fn(),
					addSlide: jest.fn(),
					duplicateSlide: jest.fn(),
					deleteSlide: jest.fn(),
					changeSlideNav: jest.fn(),
					setUserOptions: jest.fn()
				}}
				deck={{
					navEnabled: false,
					snEnabled: false,
					voEnabled: false,
					content: [{}, {}, {}],
					currentSlide: 1
				}}
				params={{
					deckId: "1"
				}}
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

	it("should render HTML Menu when passed html in the tab props", () => {
		expect(component.find(RibbonHtmlMenu).exists()).toBe(true);
	});

	it("should render Design Menu when passed design in the tab props", () => {
		expect(component.find(RibbonDesignMenu).exists()).toBe(false);
		component.setProps({ asEmphasis: "design" });
		expect(component.find(RibbonDesignMenu).exists()).toBe(true);
	});

	it("should render Tools Menu when passed tools in the tab props", () => {
		expect(component.find(RibbonToolsMenu).exists()).toBe(false);
		component.setProps({ asEmphasis: "tools" });
		expect(component.find(RibbonToolsMenu).exists()).toBe(true);
	});

	it("should render Home Menu when passed home in the tab props", () => {
		expect(component.find(RibbonHomeMenu).exists()).toBe(false);
		component.setProps({ asEmphasis: "home" });
		expect(component.find(RibbonHomeMenu).exists()).toBe(true);
	});
});
