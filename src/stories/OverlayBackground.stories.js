import React from "react";
import OverlayBackground from "../components/RibbonMenu/designMenu/sections/OverlayBackground.react";

export default {
	title: "Design System/RibbonMenu/RibbonDesignMenu/OverlayBackground",
	component: OverlayBackground,
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
		updateDeck:(value)=>{return value}
	},
	asFloated: "left",
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
