import React from "react";
import AnalysisSection from "../components/RibbonMenu/toolsMenu/sections/AnalysisSection.react";

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
		componentSubtitle: "Displays a loader for general-purpose use",
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
