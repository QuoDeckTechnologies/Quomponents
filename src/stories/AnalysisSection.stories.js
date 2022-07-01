import React from "react";
import AnalysisSection from "../components/RibbonMenu/toolsMenu/sections/AnalysisSection.react";

const dictionary = JSON.stringify({
	en: {
		analysisSection: {
			analysis: 'Analysis'
		}
	},
	hi: {
		analysisSection: {
			analysis: 'विश्लेषण'
		}
	}
});
export default {
	title: "Design System/RibbonMenu/RibbonToolsMenu/AnalysisSection",
	component: AnalysisSection,
	argTypes: {
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
		componentSubtitle: "Displays a AnalysisSection for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <AnalysisSection {...args} />;
export const Default = Template.bind({});
Default.args = {
	asFloated: "left",
	withTranslation: {
		lang: "en",
		tgt: "analysisSection",
		dictionary: dictionary,
	},
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<AnalysisSection {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

// -------------------------------------------------------------
// Translated AnalysisSection
// -------------------------------------------------------------
export const TranslatedAnalysisSection = Template.bind({});
TranslatedAnalysisSection.args = {
	...Default.args,
	withTranslation: {
		lang: "hi",
		tgt: "analysisSection",
		dictionary: dictionary
	},
};
TranslatedAnalysisSection.parameters = {
	docs: {
		description: {
			story:
				"Use to change the language that the text appears in. To make this work for the AnalysisSection, add a AnalysisSection:{} value to the dictionary.",
		},
		source: {
			code: `<AnalysisSection {...${JSON.stringify(
				TranslatedAnalysisSection.args,
				null,
				2
			)}}/>`,
		},
	},
};