import React from "react";
import DeckSettingsSection from "../components/RibbonMenu/toolsMenu/sections/DeckSettingsSection.react";

const dictionary = JSON.stringify({
	en: {
		DeckSettingsSection: {
			settings: 'Settings',
			enableNavigation: "Enable Navigation",
			enableSlideList: "Enable Slide List",
			enableVoiceovers: "Enable Voiceovers"
		}
	},
	hi: {
		DeckSettingsSection: {
			settings: 'समायोजन',
			enableNavigation: "पथ प्रदर्शन सक्षम करें",
			enableSlideList: "स्लाइड सूची सक्षम करें",
			enableVoiceovers: "वॉयस ओवर सक्षम करें"
		}
	}
});
export default {
	title: "Design System/RibbonMenu/RibbonToolsMenu/DeckSettingsSection",
	component: DeckSettingsSection,
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
		componentSubtitle: "Displays a DeckSettingsSection for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <DeckSettingsSection {...args} />;
export const Default = Template.bind({});
Default.args = {
	actions: {
		updateDeck: (settingsObj) => { return settingsObj }
	},
	deck: {
		navEnabled: false,
		snEnabled: false,
		voEnabled: false
	},
	asFloated: "left",
	withTranslation: {
		lang: "en",
		tgt: "DeckSettingsSection",
		dictionary: dictionary,
	  },
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<DeckSettingsSection {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

// -------------------------------------------------------------
// Translated DeckSettingsSection
// -------------------------------------------------------------
export const TranslatedDeckSettingsSection = Template.bind({});
TranslatedDeckSettingsSection.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "DeckSettingsSection",
    dictionary: dictionary
  },
};
TranslatedDeckSettingsSection.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the DeckSettingsSection, add a DeckSettingsSection:{} value to the dictionary.",
    },
    source: {
      code: `<DeckSettingsSection {...${JSON.stringify(
        TranslatedDeckSettingsSection.args,
        null,
        2
      )}}/>`,
    },
  },
};
