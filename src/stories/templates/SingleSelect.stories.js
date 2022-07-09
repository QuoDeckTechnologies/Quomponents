import React from "react";
import SingleSelect from "../../components/Templates/SingleSelect/SingleSelect.react";

export default {
	title: "Design System/Templates/SingleSelect",
	component: SingleSelect,
	argTypes: {
		data: {
			title: "",
			subtitle: "",
			image: {},
			question: "",
			backgroundImage: {}
		},
		slideId: 0,
		imageLibrary: [],
		asVariant: {
			control: "select",
			options: ["primary", "secondary", "success", "warning", "error"],
			table: {
				category: "as-Flags",
			},
		},
		withColor: {
			table: {
				category: "with-Params",
				defaultValue: {
					questionColor: "",
					slideHeaderTextColor: "",
					slideHeaderAccentColor: "",
					slideHeaderBackgroundColor: "",
					buttonBackgroundColor: "",
					buttonTextColor: "",
					buttonHoverBackgroundColor: "",
					buttonHoverTextColor: ""
				},
			},
		},
		withAnimation: {
			table: {
				category: "with-Params",
				defaultValue: {
					animation: "",
					duration: 0,
					delay: 0,
				},
			},
		},
		asEmphasis: {
			control: "select",
			options: ["text", "outlined", "contained"],
			table: {
				category: "as-Flags",
			},
		},
		isDisabled: {
			table: {
				category: "is-Toggles",
				defaultValue: false,
			},
		},
		isHidden: {
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
				}}
			>
				{story()}
			</div>
		),
	],
	parameters: {
		componentSubtitle:
			"Displays a SingleSelect with a question, the user need to submit the correct option as answer, we can switch between the image and SlideHeader by adding or removing the image prop",
		a11y: { disable: true },
		docs: {
			iframeHeight: 650,
		},
	},
};
const Template = (args) => <SingleSelect {...args} />;
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
	data: {
		title: "Neque porro quisquam est qui dolorem",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
		image: { id: "header-image", extension: "" },
		backgroundImage: { id: "", extention: "" },
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		options: [
			{ correct: "checked", text: "Item 1" },
			{ correct: "", text: "Item 2" },
			{ correct: "", text: "Item 3" },
			{ correct: "", text: "Item 4" }
		],
	},
	slideId: 0,
	imageLibrary: [{
		id: "header-image",
		image:
			"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
	}],
	asVariant: "warning",
	withColor: {
		questionColor: "#000000",
		slideHeaderTextColor: "#ffffff",
		slideHeaderAccentColor: "#AD2929",
		slideHeaderBackgroundColor: "#AD292980",
		buttonBackgroundColor: "#ad292980",
		buttonTextColor: "",
		buttonHoverBackgroundColor: "#AD2929",
		buttonHoverTextColor: "",
		backgroundColor: "#AD292"
	},
	withAnimation: {
		animation: "zoom",
		duration: 0.5,
		delay: 0,
	},
	asEmphasis: "contained",
	isDisabled: false,
	isHidden: false
};
Default.parameters = {
	docs: {
		source: {
			code: `<SingleSelect {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// SingleSelectWithSlideHeader
// -------------------------------------------------------------
export const SingleSelectWithSlideHeader = Template.bind({});
SingleSelectWithSlideHeader.args = {
	data: {
		title: "Neque porro quisquam est qui dolorem",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
		backgroundImage: { id: "", extention: "" },
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		options: [
			{ correct: "checked", text: "Item 1" },
			{ correct: "", text: "Item 2" },
			{ correct: "", text: "Item 3" },
			{ correct: "", text: "Item 4" }
		],
	},
	slideId: 0,
	asVariant: "primary",
	withColor: {
		questionColor: "#000000",
		slideHeaderTextColor: "#ffffff",
		slideHeaderAccentColor: "#AD2929",
		slideHeaderBackgroundColor: "#AD292980",
		buttonBackgroundColor: "",
		buttonTextColor: "",
		buttonHoverBackgroundColor: "",
		buttonHoverTextColor: "",
		backgroundColor: "#AD292"
	},
	withAnimation: {
		animation: "zoom",
		duration: 0.5,
		delay: 0,
	},
	asEmphasis: "contained",
	isDisabled: false,
	isHidden: false,
};
SingleSelectWithSlideHeader.parameters = {
	docs: {
		source: {
			code: `<SingleSelect {...${JSON.stringify(
				SingleSelectWithSlideHeader.args,
				null,
				2
			)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// EmphasisSingleSelect
// -------------------------------------------------------------
export const EmphasisSingleSelect = Template.bind({});
EmphasisSingleSelect.args = {
	data: {
		title: "Neque porro quisquam est qui dolorem",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
		image: { id: "header-image", extension: "" },
		backgroundImage: { id: "", extention: "" },
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		options: [
			{ correct: "checked", text: "Item 1" },
			{ correct: "", text: "Item 2" },
			{ correct: "", text: "Item 3" },
			{ correct: "", text: "Item 4" }
		],
	},
	slideId: 0,
	imageLibrary: [{
		id: "header-image",
		image:
			"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
	}],
	asVariant: "secondary",
	withColor: {
		questionColor: "#000000",
		slideHeaderTextColor: "#ffffff",
		slideHeaderAccentColor: "#AD2929",
		slideHeaderBackgroundColor: "#AD292980",
		buttonBackgroundColor: "",
		buttonTextColor: "",
		buttonHoverBackgroundColor: "",
		buttonHoverTextColor: "",
		backgroundColor: "#AD292"
	},
	withAnimation: {
		animation: "zoom",
		duration: 0.5,
		delay: 0,
	},
	asEmphasis: "outlined",
	isDisabled: false,
	isHidden: false,
};
EmphasisSingleSelect.parameters = {
	docs: {
		source: {
			code: `<SingleSelect {...${JSON.stringify(
				EmphasisSingleSelect.args,
				null,
				2
			)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// ColoredSingleSelect
// -------------------------------------------------------------
export const ColoredSingleSelect = Template.bind({});
ColoredSingleSelect.args = {
	data: {
		title: "Neque porro quisquam est qui dolorem",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
		image: { id: "header-image", extension: "" },
		backgroundImage: { id: "", extention: "" },
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		options: [
			{ correct: "checked", text: "Item 1" },
			{ correct: "", text: "Item 2" },
			{ correct: "", text: "Item 3" },
			{ correct: "", text: "Item 4" }
		],
	},
	slideId: 0,
	imageLibrary: [{
		id: "header-image",
		image:
			"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
	}],
	asVariant: "primary",
	withColor: {
		slideHeaderTextColor: "#ffffff",
		slideHeaderAccentColor: "#AD2929",
		slideHeaderBackgroundColor: "#AD292980",
		buttonBackgroundColor: "#AD2929",
		buttonTextColor: "#ffffff",
		buttonHoverBackgroundColor: "#AD292980",
		buttonHoverTextColor: "#AD2929",
		backgroundColor: "#AD292"
	},
	withAnimation: {
		animation: "zoom",
		duration: 0.5,
		delay: 0,
	},
	asEmphasis: "contained",
	isDisabled: false,
	isHidden: false,
};
ColoredSingleSelect.parameters = {
	docs: {
		source: {
			code: `<SingleSelect {...${JSON.stringify(
				ColoredSingleSelect.args,
				null,
				2
			)}}/>`,
		},
	},
};