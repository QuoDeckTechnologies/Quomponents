import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import SlideBackground from "../RibbonMenu/designMenu/sections/SlideBackground.react";
import ImageUploadModal from "../ImageUploadModal/ImageUploadModal.react";

describe("SlideBackground", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component, actions;
	actions = {
		updateDeck: jest.fn()
	};
	const dictionary = JSON.stringify({
		en: {
			slideBackground: {
				slideBackground: "Slide Background",
				setBackground: "Set",
				removeBackground: "Remove"
			}
		},
		hi: {
			slideBackground: {
				slideBackground: "स्लाइड पृष्ठभूमि",
				setBackground: "सेट",
				removeBackground: "निकाले"
			}
		}
	});
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<SlideBackground
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
				tgt: "slideBackground",
				dictionary: dictionary,
			},
		});
		expect(component.exists()).toBe(true);
	});

	it("should render correctly if translation is not defined", () => {
		component.setProps({
			withTranslation: {
				lang: "mr",
				tgt: "slideBackground",
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

	it("should open image modal when clicked on set button", () => {
		component.find(".qui-ribbon-menu-label-set").simulate('click')
		expect(component.find(ImageUploadModal).exists()).toBe(true)
	});

	it("should set image when clicked on save button", () => {
		component.find(".qui-ribbon-menu-label-set").simulate('click')
		expect(component.find(ImageUploadModal).exists()).toBe(true)
		component.find(ImageUploadModal).simulate('click');
	});

	it("should remove image when click on remove button", () => {
		component.find(".qui-ribbon-menu-label-remove").simulate('click')
	});

	it("should close the modal when clicked on close button", () => {
		component.find(".qui-ribbon-menu-label-set").simulate('click');
		expect(component.find(ImageUploadModal).exists()).toBe(true)
		component.find(ImageUploadModal).simulate('close');
		expect(component.find(ImageUploadModal).exists()).toBe(false)
	});

	it("should display grey background color when no backgroundImage passed", () => {
		let deck = {
			backgroundImage: ""
		}
		component.setProps({ deck: deck });
		expect(component.find(".qui-ribbon-design-menu-slide-background-image").exists()).toBe(false)
	});

	it("should display background image when backgroundImage is passed", () => {
		let deck = {
			backgroundImage: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg"
		}
		component.setProps({ deck: deck });
		expect(component.find(".qui-ribbon-design-menu-slide-background-image").exists()).toBe(true)
	});
});
