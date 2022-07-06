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
import RibbonHomeMenu from "../RibbonMenu/homeMenu/RibbonHomeMenu.react";

describe("RibbonHomeMenu", () => {
	// -------------------------------------
	// Run common tests
	// -------------------------------------

	const args = {
		target: RibbonHomeMenu,
		translations: {
			tgt: "ribbonHomeMenu",
			lang: { valid: "hi", invalid: "xx" },
			dictionary: JSON.stringify({
				en: {
					ribbonHomeMenu: {
						slide: "Slide",
						newSlide: "New Slide",
						duplicateSlide: "Duplicate Slide",
						deleteSlide: "Delete Slide",
						view: "View",
						sorter: "Sorter",
						mobile: "Mobile",
						desktop: "Desktop",
						comments: "Comments",
						settings: "Settings",
						enableBackArrow: "Enable Back Arrow",
						enableNextArrow: "Enable Next Arrow",
						saveExit: "Save & Exit",
						upload: "Upload",
						download: "Download",
						save: "Save",
						file: "File"
					}
				},
				hi: {
					ribbonHomeMenu: {
						slide: "स्लाइड",
						newSlide: "नई स्लाइड",
						duplicateSlide: "स्लाइड प्रतिलिपि करे",
						deleteSlide: "स्लाइड हटाए",
						view: "दृश्य",
						sorter: "छँटाईकर्ता",
						mobile: "मोबाइल",
						desktop: "डेस्कटॉप",
						comments: "टिप्पणियाँ",
						settings: 'समायोजन',
						enableBackArrow: "वापस तीर सक्षम करें",
						enableNextArrow: "अगला तीर सक्षम करें",
						saveExit: "सेहेजे & बाहर निकले",
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

	hasValid("translations", args);

	hasValid("toggles", args);

	// -------------------------------------
	// Run component specific tests
	// -------------------------------------

	let component, actions, deck;
	actions = {
		addSlide: jest.fn(),
		duplicateSlide: jest.fn(),
		deleteSlide: jest.fn(),
		changeSlideNav: jest.fn(),
		setUserOptions: jest.fn()
	};

	deck = {
		content: [{}, {}],
		currentSlide: 0
	}
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<RibbonHomeMenu
				actions={actions}
				deck={deck}
				asFloated="left"
				withTranslation={null}
				onClick={jest.fn()}
			/>
		);
	});
});
