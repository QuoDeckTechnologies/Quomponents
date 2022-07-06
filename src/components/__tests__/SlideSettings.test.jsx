import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import SlideSettings from "../RibbonMenu/homeMenu/sections/SlideSettings.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("SlideSettings", () => {
	// -------------------------------------
	// Run common tests
	// -------------------------------------

	const args = {
		target: SlideSettings,
		translations: {
			tgt: "slideSettings",
			lang: { valid: "hi", invalid: "xx" },
			dictionary: JSON.stringify({
				en: {
					slideSettings: {
						settings: "Settings",
						enableBackArrow: "Enable Back Arrow",
						enableNextArrow: "Enable Next Arrow"
					}
				},
				hi: {
					slideSettings: {
						settings: 'समायोजन',
						enableBackArrow: "वापस तीर सक्षम करें",
						enableNextArrow: "अगला तीर सक्षम करें"
					}
				}
			}),
		},
	};

	hasValid("defaults", args);

	hasValid("positions", args);

	hasValid("translations", args);

	hasValid("toggles", args);

	// -------------------------------------
	// Run component specific tests
	// -------------------------------------

	let component, actions, deck;
	actions = {
		changeSlideNav: jest.fn()
	};

	deck = {
		currentSlide: 1,
		content: [{}, {}, {}]
	};

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
