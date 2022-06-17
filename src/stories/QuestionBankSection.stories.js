import React from "react";
import QuestionBankSection from "../components/RibbonMenu/toolsMenu/sections/QuestionBankSection.react";

const dictionary = JSON.stringify({
	en: {
		questionBankSection: {
			questionBank: 'Question Bank'
		}
	},
	hi: {
		questionBankSection: {
			questionBank: 'प्रश्न बैंक'
		}
	}
});
export default {
	title: "Design System/RibbonMenu/RibbonToolsMenu/QuestionBankSection",
	component: QuestionBankSection,
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
		componentSubtitle: "Displays a QuestionBankSection for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <QuestionBankSection {...args} />;
export const Default = Template.bind({});
Default.args = {
	asFloated: "left",
	withTranslation: {
		lang: "en",
		tgt: "questionBankSection",
		dictionary: dictionary
	},
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<QuestionBankSection {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

// -------------------------------------------------------------
// Translated QuestionBankSection
// -------------------------------------------------------------
export const TranslatedQuestionBankSection = Template.bind({});
TranslatedQuestionBankSection.args = {
	...Default.args,
	withTranslation: {
		lang: "hi",
		tgt: "questionBankSection",
		dictionary: dictionary
	},
};
TranslatedQuestionBankSection.parameters = {
	docs: {
		description: {
			story:
				"Use to change the language that the text appears in. To make this work for the QuestionBankSection, add a QuestionBankSection:{} value to the dictionary.",
		},
		source: {
			code: `<QuestionBankSection {...${JSON.stringify(
				TranslatedQuestionBankSection.args,
				null,
				2
			)}}/>`,
		},
	},
};