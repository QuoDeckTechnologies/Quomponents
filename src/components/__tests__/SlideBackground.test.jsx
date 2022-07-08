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
import SlideBackground from "../RibbonMenu/designMenu/sections/SlideBackground.react";
import ImageUploadModal from "../ImageUploadModal/ImageUploadModal.react";

describe("SlideBackground", () => {
	 // -------------------------------------
    // Run common tests
    // -------------------------------------
    
    const args = {
        target: SlideBackground,
        translations: {
            tgt: "slideBackground",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
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
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("positions", args);

    hasValid("translations", args);

	hasValid("disabled", args);
    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

	let component, actions;
	actions = {
		updateDeck: jest.fn()
	};
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
