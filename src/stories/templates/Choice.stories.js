import React from "react";
import Choice from "../../components/Templates/Choice/Choice.react";

export default {
	title: "Design System/Templates/Choice/Choice",
	component: Choice,
	argTypes: {
		data: {
			title: "",
			subtitle: "",
			image: "",
			question: "",
			backgroundImage: "",
			choice: [
				{
					correct: "",
					text: "",
				},
				{
					correct: "",
					text: "",
				},
			],
		},
		slideId: 0,
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
					backgroundColor: "#ffffff",
					primaryBackgroundColor: "",
					secondaryBackgroundColor: "",
					accentColor: "",
					primaryTextColor: "",
					secondaryTextColor: "",
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
		isChoice: {
			table: {
				category: "is-Toggles",
				defaultValue: true,
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
			"Displays a Choice with a question, the user need to submit the correct option as answer, we can switch between the image and SlideHeader by adding or removing the image prop",
		a11y: { disable: true },
		docs: {
			iframeHeight: 650,
		},
	},
};
const Template = (args) => <Choice {...args} />;
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
	data: {
		title: "Neque porro quisquam est qui dolorem",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
		image:
			"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		backgroundImage: "",
		choice: [
			{
				correct: "checked",
				text: "Item1",
			},
			{
				correct: "",
				text: "Item2",
			},
		],
	},
	slideId: 0,
	asVariant: "warning",
	withColor: {
		questionColor: "#000000",
		slideHeaderTextColor: "#ffffff",
		slideHeaderAccentColor: "#AD2929",
		slideHeaderBackgroundColor: "#AD292980",
		backgroundColor: "#ffffff",
		primaryBackgroundColor: "",
		secondaryBackgroundColor: "",
		accentColor: "",
		primaryTextColor: "",
		secondaryTextColor: "",
	},
	withAnimation: {
		animation: "zoom",
		duration: 0.5,
		delay: 0,
	},
	isChoice: true,
	asEmphasis: "contained",
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<Choice {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// ChoiceWithSlideHeader
// -------------------------------------------------------------
export const ChoiceWithSlideHeader = Template.bind({});
ChoiceWithSlideHeader.args = {
	data: {
		title: "Neque porro quisquam est qui dolorem",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
		image: "",
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		backgroundImage: "",
		choice: [
			{
				correct: "checked",
				text: "Item1",
			},
			{
				correct: "",
				text: "Item2",
			},
		],
	},
	slideId: 0,
	isChoice: true,
	asVariant: "warning",
	withColor: {
		questionColor: "#000000",
		slideHeaderTextColor: "#ffffff",
		slideHeaderAccentColor: "#AD2929",
		slideHeaderBackgroundColor: "#AD292980",
		backgroundColor: "#ffffff",
		primaryBackgroundColor: "",
		secondaryBackgroundColor: "",
		accentColor: "",
		primaryTextColor: "",
		secondaryTextColor: "",
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
ChoiceWithSlideHeader.parameters = {
	docs: {
		source: {
			code: `<Choice {...${JSON.stringify(
				ChoiceWithSlideHeader.args,
				null,
				2
			)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// ChoiceWithSlideHeader
// -------------------------------------------------------------
export const ChoiceWithoutCircularOr = Template.bind({});
ChoiceWithoutCircularOr.args = {
	data: {
		title: "Neque porro quisquam est qui dolorem",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
		image: "",
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		backgroundImage: "",
		choice: [
			{
				correct: "checked",
				text: "Item1",
			},
			{
				correct: "",
				text: "Item2",
			},
		],
	},
	slideId: 0,
	isChoice: false,
	asVariant: "warning",
	withColor: {
		questionColor: "#000000",
		slideHeaderTextColor: "#ffffff",
		slideHeaderAccentColor: "#AD2929",
		slideHeaderBackgroundColor: "#AD292980",
		backgroundColor: "#ffffff",
		primaryBackgroundColor: "",
		secondaryBackgroundColor: "",
		accentColor: "",
		primaryTextColor: "",
		secondaryTextColor: "",
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
ChoiceWithoutCircularOr.parameters = {
	docs: {
		source: {
			code: `<Choice {...${JSON.stringify(
				ChoiceWithoutCircularOr.args,
				null,
				2
			)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// MultipleChoice
// -------------------------------------------------------------
export const MultipleChoice = (args) => {
	const baseObj1 = {
		...Object.assign({}, Default.args, {
			asVariant: "primary",
			withColor: {
				slideHeaderTextColor: "#ffffff",
				slideHeaderAccentColor: "#AD2929",
				slideHeaderBackgroundColor: "#AD292980",
				primaryBackgroundColor: "",
				secondaryBackgroundColor: "",
				accentColor: "",
				primaryTextColor: "",
				secondaryTextColor: "",
			},
			withAnimation: {
				animation: "slideRight",
				duration: 0.5,
				delay: 0,
			},
			asEmphasis: "text"
		})
	};
	const baseObj2 = {
		...Object.assign({}, Default.args, {
			asVariant: "warning",
			withColor: {
				slideHeaderTextColor: "#ffffff",
				slideHeaderAccentColor: "#AD2929",
				slideHeaderBackgroundColor: "#AD292980",
				primaryBackgroundColor: "",
				secondaryBackgroundColor: "",
				accentColor: "",
				primaryTextColor: "",
				secondaryTextColor: "",
			},
			withAnimation: {
				animation: "slideRight",
				duration: 0.5,
				delay: 0,
			},
			asEmphasis: "outlined"
		})
	};
	const baseObj3 = {
		...Object.assign({}, Default.args, {
			asVariant: "secondary",
			withColor: {
				slideHeaderTextColor: "#ffffff",
				slideHeaderAccentColor: "#AD2929",
				slideHeaderBackgroundColor: "#AD292980",
				primaryBackgroundColor: "",
				secondaryBackgroundColor: "",
				accentColor: "",
				primaryTextColor: "",
				secondaryTextColor: "",
			},
			withAnimation: {
				animation: "slideRight",
				duration: 0.5,
				delay: 0,
			},
			asEmphasis: "contained"
		})
	};
	return (
		<div style={{ display: "flex" }}>
			<Choice
				{...Object.assign({}, baseObj1, {
				})}
			/>
			<Choice
				{...Object.assign({}, baseObj2, {
				})}
			/>
			<Choice
				{...Object.assign({}, baseObj3, {
				})}
			/>
		</div>
	);
};

// -------------------------------------------------------------
// ColoredChoice
// -------------------------------------------------------------
export const ColoredChoice = (args) => {
	const baseObj1 = {
		...Object.assign({}, Default.args, {
			asVariant: "primary",
			withColor: {
				slideHeaderTextColor: "#ffffff",
				slideHeaderAccentColor: "#AD2929",
				slideHeaderBackgroundColor: "#AD292980",
				primaryBackgroundColor: "#AD2929",
				secondaryBackgroundColor: "#AD292980",
				accentColor: "",
				primaryTextColor: "#ffffff",
				secondaryTextColor: "#ffffff",
			},
			withAnimation: {
				animation: "slideRight",
				duration: 0.5,
				delay: 0,
			},
		})
	};
	const baseObj2 = {
		...Object.assign({}, Default.args, {
			asVariant: "warning",
			withColor: {
				slideHeaderTextColor: "#ffffff",
				slideHeaderAccentColor: "#AD2929",
				slideHeaderBackgroundColor: "#AD292980",
				primaryBackgroundColor: "#CCFF00",
				secondaryBackgroundColor: "#CCFF66",
				accentColor: "",
				primaryTextColor: "#000000",
				secondaryTextColor: "#000000",
			},
			withAnimation: {
				animation: "slideRight",
				duration: 0.5,
				delay: 0,
			},
		})
	};
	const baseObj3 = {
		...Object.assign({}, Default.args, {
			asVariant: "secondary",
			withColor: {
				slideHeaderTextColor: "#ffffff",
				slideHeaderAccentColor: "#AD2929",
				slideHeaderBackgroundColor: "#AD292980",
				primaryBackgroundColor: "#000066",
				secondaryBackgroundColor: "#003366",
				accentColor: "",
				primaryTextColor: "#ffffff",
				secondaryTextColor: "#ffffff",
			},
			withAnimation: {
				animation: "slideRight",
				duration: 0.5,
				delay: 0,
			},
		})
	};
	return (
		<div style={{ display: "flex" }}>
			<Choice
				{...Object.assign({}, baseObj1, {
				})}
			/>
			<Choice
				{...Object.assign({}, baseObj2, {
				})}
			/>
			<Choice
				{...Object.assign({}, baseObj3, {
				})}
			/>
		</div>
	);
};
