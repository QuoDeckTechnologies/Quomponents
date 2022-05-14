import React from "react";
import ViewSection from "../components/RibbonMenu/homeMenu/sections/ViewSection.react";

export default {
	title: "Design System/RibbonMenu/RibbonHomeMenu/ViewSection",
	component: ViewSection,
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
		componentSubtitle: "Displays a ViewSection for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ViewSection {...args} />;
export const Default = Template.bind({});
Default.args = {
	actions: {
		setUserOptions: (view) => { return view }
	},
	asFloated: "left",
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<ViewSection {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};
