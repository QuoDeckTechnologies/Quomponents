import React from "react";
import RibbonHomeMenu from "../components/RibbonMenu/homeMenu//RibbonHomeMenu.react";

const dictionary = JSON.stringify({
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
});
export default {
	title: "Design System/RibbonMenu/RibbonHomeMenu",
	component: RibbonHomeMenu,
	argTypes: {
		actions: {},
		asFloated: {
			control: "select",
			options: ["left", "right", "inline"],
			table: {
				category: "as-Flags",
			},
		},
		withTranslation: {
			table: {
				category: "with-Params",
				defaultValue: {
					lang: "",
					tgt: "",
					dictionary: "",
				},
			},
		},
		isHidden: {
			table: {
				category: "is-Toggles",
				defaultValue: false,
			},
		},
		isDisabled: {
			table: {
				category: "is-Toggles",
				defaultValue: false,
			},
		},
		onClick: {
			table: {
				category: "Events",
				defaultValue: null,
			},
		},
	},
	decorators: [
		(story) => (
			<div
				style={{
					width: "100%",
					textAlign: "center",
					fontSize: "1.25em",
				}}
			>
				{story()}
			</div>
		),
	],
	parameters: {
		componentSubtitle: "Displays a RibbonHomeMenu for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RibbonHomeMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
	actions: {
		addSlide: (value) => { return value },
		duplicateSlide: (value) => { return value },
		deleteSlide: (value) => { return console.log(value) },
		changeSlideNav: (navObj) => { return navObj },
		setUserOptions: (view) => { return view }
	},
	deck: {
		content: [{}, {}, {}],
		currentSlide: 1
	},
	asFloated: "left",
	withTranslation: {
		lang: "en",
		tgt: "ribbonHomeMenu",
		dictionary: dictionary,
	},
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<RibbonHomeMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

// -------------------------------------------------------------
// Translated RibbonHomeMenu
// -------------------------------------------------------------
export const TranslatedRibbonHomeMenu = Template.bind({});
TranslatedRibbonHomeMenu.args = {
	...Default.args,
	withTranslation: {
		lang: "hi",
		tgt: "ribbonHomeMenu",
		dictionary: dictionary
	},
};
TranslatedRibbonHomeMenu.parameters = {
	docs: {
		description: {
			story:
				"Use to change the language that the text appears in. To make this work for the RibbonHomeMenu, add a RibbonHomeMenu:{} value to the dictionary.",
		},
		source: {
			code: `<RibbonHomeMenu {...${JSON.stringify(
				TranslatedRibbonHomeMenu.args,
				null,
				2
			)}}/>`,
		},
	},
};
