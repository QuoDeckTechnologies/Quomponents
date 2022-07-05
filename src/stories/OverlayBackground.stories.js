import React from "react";
import OverlayBackground from "../components/RibbonMenu/designMenu/sections/OverlayBackground.react";

const dictionary = JSON.stringify({
	en: {
		overlayBackground: {
			overlayBackground: "Overlay Background",
			setBackground: "Set",
			removeBackground: "Remove"
		}
	},
	hi: {
		overlayBackground: {
			overlayBackground: "उपरिशायी पृष्ठभूमि",
			setBackground: "सेट",
			removeBackground: "निकाले"
		}
	}
});
export default {
	title: "Design System/RibbonMenu/RibbonDesignMenu/OverlayBackground",
	component: OverlayBackground,
	argTypes: {
		actions: {},
		asFloated: {
			control: "select",
			options: ["left", "right", "none", "inline"],
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
		}
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
		componentSubtitle: "Displays a OverlayBackground for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <OverlayBackground {...args} />;
export const Default = Template.bind({});
Default.args = {
	actions: {
		updateDeck: (value) => { return value }
	},
	asFloated: "left",
	withTranslation: {
		lang: "en",
		tgt: "overlayBackground",
		dictionary: dictionary,
	},
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<OverlayBackground {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

// -------------------------------------------------------------
// Translated OverlayBackground
// -------------------------------------------------------------
export const TranslatedOverlayBackground = Template.bind({});
TranslatedOverlayBackground.args = {
	...Default.args,
	withTranslation: {
		lang: "hi",
		tgt: "overlayBackground",
		dictionary: dictionary
	},
};
TranslatedOverlayBackground.parameters = {
	docs: {
		description: {
			story:
				"Use to change the language that the text appears in. To make this work for the OverlayBackground, add a OverlayBackground:{} value to the dictionary.",
		},
		source: {
			code: `<OverlayBackground {...${JSON.stringify(
				TranslatedOverlayBackground.args,
				null,
				2
			)}}/>`,
		},
	},
};