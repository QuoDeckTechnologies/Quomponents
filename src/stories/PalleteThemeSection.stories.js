import React from "react";
import PalleteThemeSection from "../components/RibbonMenu/designMenu/sections/PalleteThemeSection.react";

export default {
	title: "Design System/RibbonMenu/RibbonDesignMenu/PalleteThemeSection",
	component: PalleteThemeSection,
	argTypes: {
		actions: {},
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
		componentSubtitle: "Displays a PalleteThemeSection for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <PalleteThemeSection {...args} />;
export const Default = Template.bind({});
Default.args = {
	actions: {
		updateDeck:(value)=>{return console.log(value)}
	},
	asFloated:"left",
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<PalleteThemeSection {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};
