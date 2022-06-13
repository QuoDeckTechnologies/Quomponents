import React from "react";
import RibbonHomeMenu from "../components/RibbonMenu/homeMenu//RibbonHomeMenu.react";

export default {
	title: "Design System/RibbonMenu/RibbonHomeMenu",
	component: RibbonHomeMenu,
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
		componentSubtitle: "Displays a RibbonHomeMenu for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RibbonHomeMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
	actions: {
		addSlide: (value) => { return value },
		duplicateSlide: (value) => { return value },
		deleteSlide: (value) => { return console.log(value) },
		changeSlideNav: (navObj) => { return navObj },
		setUserOptions: (view) => { return view }
	},
	deck: {
		content: [{}, {}, {}],
		currentSlide: 1
	},
	asFloated: "left",
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<RibbonHomeMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};
