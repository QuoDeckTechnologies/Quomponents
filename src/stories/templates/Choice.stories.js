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
			"Displays a Choice with a question, the user need to submit the correct word as answer, we can switch between the image and SlideHeader by adding or removing the image prop",
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
// MultipleChoice
// -------------------------------------------------------------
const MultipleChoiceTemplate = (args) => {
	const baseObj = {
		...Object.assign({}, Default.args, args, {}),
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#454545",
			}}
		>
			<div style={{ margin: "1em", width: "25em" }}>
				<Choice
					{...Object.assign({}, baseObj, {
						asVariant: "warning",
						withAnimation: {
							animation: "slideRight",
							duration: 0.5,
							delay: 0,
						},
					})}
				/>
			</div>
			<div style={{ margin: "1em", width: "25em" }}>
				<Choice
					{...Object.assign({}, baseObj, {
						asVariant: "warning",
						withAnimation: {
							animation: "slideUp",
							duration: 0.5,
							delay: 0.8,
						},
					})}
				/>
			</div>
			<div style={{ margin: "1em", width: "25em" }}>
				<Choice
					{...Object.assign({}, baseObj, {
						asVariant: "warning",
						withAnimation: {
							animation: "slideLeft",
							duration: 0.5,
							delay: 0.5,
						},
					})}
				/>
			</div>
		</div>
	);
};
export const MultipleChoice = MultipleChoiceTemplate.bind({});
MultipleChoice.parameters = {
	docs: {
		description: {
			story: "Multiple Choice.",
		},
		source: {
			code: `<Choice content={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"}/>`,
		},
	},
};
// -------------------------------------------------------------
// ColoredChoice
// -------------------------------------------------------------
const ColoredChoiceTemplate = (args) => {
	const baseObj = {
		...Object.assign({}, Default.args, args, {}),
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#454545",
			}}
		>
			<div style={{ margin: "1em", width: "25em" }}>
				<Choice
					{...Object.assign({}, baseObj, {
						asVariant: "warning",
						withColor: {
							questionColor: "#5072a4",
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
					})}
				/>
			</div>
			<div style={{ margin: "1em", width: "25em" }}>
				<Choice
					{...Object.assign({}, baseObj, {
						asVariant: "warning",
						withColor: {
							questionColor: "#FFFF00",
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
							animation: "slideUp",
							duration: 0.5,
							delay: 0.8,
						},
					})}
				/>
			</div>
			<div style={{ margin: "1em", width: "25em" }}>
				<Choice
					{...Object.assign({}, baseObj, {
						asVariant: "warning",
						withColor: {
							questionColor: "#ffff00",
							slideHeaderTextColor: "#ffffff",
							slideHeaderAccentColor: "#AD2929",
							slideHeaderBackgroundColor: "#AD292980",
						},
						withAnimation: {
							animation: "slideLeft",
							duration: 0.5,
							delay: 0.5,
						},
					})}
				/>
			</div>
		</div>
	);
};
export const ColoredChoice = ColoredChoiceTemplate.bind({});
ColoredChoice.parameters = {
	docs: {
		description: {
			story: "displays Colored Choice.",
		},
		source: {
			code: `<Choice content={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"}
      withColor: {
        questionColor: "#FFFF00",
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
        primaryBackgroundColor: "",
        secondaryBackgroundColor: "",
        accentColor: "",
        primaryTextColor: "",
        secondaryTextColor: "",
      },/>`,
		},
	},
};
