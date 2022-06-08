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
	const dictionary = JSON.stringify({
		en: {
			RibbonHomeMenu: {
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
			RibbonHomeMenu: {
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
	});
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
				tgt: "RibbonHomeMenu",
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
});
