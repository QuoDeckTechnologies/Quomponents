import React from "react";
import RibbonHtmlMenu from "../components/RibbonMenu/htmlMenu//RibbonHtmlMenu.react";

const dictionary = JSON.stringify({
	en: {
		ribbonHtmlMenu: {
			saveExit: "Save & Exit",
			upload: "Upload",
			download: "Download",
			save: "Save",
			file: "File"
		}
	},
	hi: {
		ribbonHtmlMenu: {
			saveExit: "सेहेजे & बाहर निकले",
			upload: "अपलोड",
			download: "डाउनलोड",
			save: "सहेजें",
			file: "फ़ाइल"
		}
	}
});
export default {
	title: "Design System/RibbonMenu/RibbonHtmlMenu",
	component: RibbonHtmlMenu,
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
		componentSubtitle: "Displays a RibbonHtmlMenu for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RibbonHtmlMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
	asFloated: "left",
	withTranslation: {
		lang: "en",
		tgt: "ribbonHtmlMenu",
		dictionary: dictionary,
	},
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<RibbonHtmlMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

// -------------------------------------------------------------
// Translated RibbonHtmlMenu
// -------------------------------------------------------------
export const TranslatedRibbonHtmlMenu = Template.bind({});
TranslatedRibbonHtmlMenu.args = {
	...Default.args,
	withTranslation: {
		lang: "hi",
		tgt: "ribbonHtmlMenu",
		dictionary: dictionary
	},
};
TranslatedRibbonHtmlMenu.parameters = {
	docs: {
		description: {
			story:
				"Use to change the language that the text appears in. To make this work for the RibbonHtmlMenu, add a RibbonHtmlMenu:{} value to the dictionary.",
		},
		source: {
			code: `<RibbonHtmlMenu {...${JSON.stringify(
				TranslatedRibbonHtmlMenu.args,
				null,
				2
			)}}/>`,
		},
	},
};
