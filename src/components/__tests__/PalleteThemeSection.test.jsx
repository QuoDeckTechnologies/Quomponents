import React from "react";
import { ChromePicker } from "react-color";
import { render, fireEvent } from "@testing-library/react";

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
	let component, actions;
	actions = {
		updateDeck: jest.fn()
	}
	const dictionary = JSON.stringify({
		en: {
			palleteThemeSection: {
				settings: "Settings",
				pageColor: "Page Color",
				primaryColor: "Primary Color",
				accentColor: "Accent Color",
				secondaryColor: "Secondary Color"
			}
		},
		hi: {
			palleteThemeSection: {
				settings: "समायोजन",
				pageColor: "पृष्ठ रंग",
				primaryColor: "प्राथमिक रंग",
				accentColor: "स्वरोंका रंग",
				secondaryColor: "द्वितीयक रंग"
			}
		}
	});
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<PalleteThemeSection
				actions={actions}
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
				tgt: "palleteThemeSection",
				dictionary: dictionary,
			},
		});
		expect(component.exists()).toBe(true);
	});


	it("should render correctly if translation is not defined", () => {
		component.setProps({
			withTranslation: {
				lang: "mr",
				tgt: "palleteThemeSection",
				dictionary: dictionary,
			},
		});
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

	it("should open color picker of Page Color", () => {
		let palleteButton = component
			.find(".qui-ribbon-design-menu-custom-color-button")
			.at(0);
		palleteButton.simulate("click");
		expect(component.find(ChromePicker).exists()).toBe(true);

		let pallete = component.find(".qui-ribbon-design-menu-chrome-picker").at(0);
		pallete.simulate("changeComplete", { update: "#fff" });

		const onClick = jest.fn();
		render(<PalleteThemeSection onClick={onClick} />);
		component.find(".qui-ribbon-menu-color-pallete-section").at(0).simulate("click");
		fireEvent.click(document.body);
	});

	it("should open color picker of Primary Color", () => {
		let palleteButton = component
			.find(".qui-ribbon-design-menu-custom-color-button")
			.at(1);
		palleteButton.simulate("click");
		expect(component.find(ChromePicker).exists()).toBe(true);

		let pallete = component.find(".qui-ribbon-design-menu-chrome-picker").at(0);
		pallete.simulate("changeComplete", { update: "#fff" });

		const onClick = jest.fn();
		render(<PalleteThemeSection onClick={onClick} />);
		component.find(".qui-ribbon-menu-color-pallete-section-child").at(0).simulate("click");
		fireEvent.click(document.body);
	});

	it("should open color picker of Accent Color", () => {
		let palleteButton = component
			.find(".qui-ribbon-design-menu-custom-color-button")
			.at(2);
		palleteButton.simulate("click");
		expect(component.find(ChromePicker).exists()).toBe(true);

		let pallete = component.find(".qui-ribbon-design-menu-chrome-picker").at(0);
		pallete.simulate("changeComplete", { update: "#fff" });

		const onClick = jest.fn();
		render(<PalleteThemeSection onClick={onClick} />);
		component.find(".qui-ribbon-menu-color-pallete-section-child").at(0).simulate("click");
		fireEvent.click(document.body);
	});

	it("should open color picker of Secondary Color", () => {
		let palleteButton = component
			.find(".qui-ribbon-design-menu-custom-color-button")
			.at(3);
		palleteButton.simulate("click");
		expect(component.find(ChromePicker).exists()).toBe(true);

		let pallete = component.find(".qui-ribbon-design-menu-chrome-picker").at(0);
		pallete.simulate("changeComplete", { update: "#fff" });

		fireEvent.click(document.body)
	});
});
