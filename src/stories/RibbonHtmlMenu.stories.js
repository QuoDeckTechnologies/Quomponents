import React from "react";
import RibbonHtmlMenu from "../components/RibbonMenu/htmlMenu//RibbonHtmlMenu.react";

export default {
	title: "Design System/RibbonMenu/RibbonHtmlMenu",
	component: RibbonHtmlMenu,
	argTypes: {
		actions: {},
		deckId: "",
		apiUrls: {},
		onSaveDeck: {
			table: {
				category: "Events",
				defaultValue: null,
			},
		},
		onAddQDF: {
			table: {
				category: "Events",
				defaultValue: null,
			},
		},
		params: {
			deckId: ""
		},
		asFloated: {
			control: "select",
			options: ["left", "right", "inline"],
			table: {
				category: "as-Flags",
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
	actions: {
		addPoints: (points) => { return points }
	},
	params: {
		deckId: "1"
	},
	deckId: "1",
	asFloated: "left",
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
