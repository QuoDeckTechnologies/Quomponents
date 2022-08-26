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
import SaveSection from "../RibbonMenu/htmlMenu/sections/SaveSection.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("SaveSection", () => {
	// -------------------------------------
	// Run common tests
	// -------------------------------------
	const args = {
		target: SaveSection,
		translations: {
			tgt: "saveSection",
			lang: { valid: "hi", invalid: "xx" },
			dictionary: JSON.stringify({
				en: {
					saveSection: {
						upload: "Upload",
						download: "Download",
						save: "Save",
						file: "File"
					}
				},
				hi: {
					saveSection: {
						upload: "अपलोड",
						download: "डाउनलोड",
						save: "सहेजें",
						file: "फ़ाइल"
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
	let component;
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<SaveSection
				asFloated="left"
				withTranslation={null}
				isHidden={false}
				isDisabled={false}
				onClick={jest.fn()}
			/>
		);
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
