import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import AnalysisSection from "../RibbonMenu/toolsMenu/sections/AnalysisSection.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("AnalysisSection", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component;
	const dictionary = JSON.stringify({
		en: {
			AnalysisSection: {
				analysis: 'Check Answer'
			}
		},
		hi: {
			AnalysisSection: {
				analysis: 'अपना उत्तर जाँच लें'
			}
		}
	});
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<AnalysisSection
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
				tgt: "AnalysisSection",
				dictionary: dictionary,
			},
		});
		expect(component.find(".qui-ribbon-menu-label").text()).toBe("अपना उत्तर जाँच लें");
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

	it("should open and close Deck Analysis Modal", () => {
		component.find(IconLink).simulate('click');
	})
});
