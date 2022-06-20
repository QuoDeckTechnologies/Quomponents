import React from "react";
import SaveExitSection from "../components/RibbonMenu/htmlMenu/sections/SaveExitSection.react";

const dictionary = JSON.stringify({
	en: {
		saveExitSection: {
			saveExit: "Save & Exit"
		}
	},
	hi: {
		saveExitSection: {
			saveExit: "सेहेजे & बाहर निकले"
		}
	}
});
export default {
	title: "Design System/RibbonMenu/RibbonHtmlMenu/SaveExitSection",
	component: SaveExitSection,
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
		componentSubtitle: "Displays a SaveExitSection for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SaveExitSection {...args} />;
export const Default = Template.bind({});
Default.args = {
	asFloated: "left",
	withTranslation: {
		lang: "en",
		tgt: "saveExitSection",
		dictionary: dictionary
	},
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<SaveExitSection {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

// -------------------------------------------------------------
// Translated SaveExitSection
// -------------------------------------------------------------
export const TranslatedSaveExitSection = Template.bind({});
TranslatedSaveExitSection.args = {
	...Default.args,
	withTranslation: {
		lang: "hi",
		tgt: "saveExitSection",
		dictionary: dictionary
	},
};
TranslatedSaveExitSection.parameters = {
	docs: {
		description: {
			story:
				"Use to change the language that the text appears in. To make this work for the SaveExitSection, add a SaveExitSection:{} value to the dictionary.",
		},
		source: {
			code: `<SaveExitSection {...${JSON.stringify(
				TranslatedSaveExitSection.args,
				null,
				2
			)}}/>`,
		},
	},
};