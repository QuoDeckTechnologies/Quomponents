import React from "react";
import SingleSelect from "../../components/Templates/SingleSelect/SingleSelect.react";

export default {
	title: "Design System/Templates/SingleSelect/SingleSelect",
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
		isSingleSelect: {
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
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
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
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
	},
	slideId: 0,
	isSingleSelect: true,
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
// MultipleSingleSelect
// -------------------------------------------------------------
export const MultipleSingleSelect = (args) => {
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
			asEmphasis: "text",
			onClick: () => { }
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
			asEmphasis: "outlined",
			onClick: () => { }
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
			asEmphasis: "contained",
			onClick: () => { }
		})
	};
	return (
		<div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
			<div style={{ margin: "1em", width: "25em" }}>
				<SingleSelect
					{...Object.assign({}, baseObj1, {
					})}
				/>
			</div>
			<div style={{ margin: "1em", width: "25em" }}>
				<SingleSelect
					{...Object.assign({}, baseObj2, {
					})}
				/>
			</div>
			<div style={{ margin: "1em", width: "25em" }}>
				<SingleSelect
					{...Object.assign({}, baseObj3, {
					})}
				/>
			</div>
		</div>
	);
};
// -------------------------------------------------------------
// ColoredSingleSelect
// -------------------------------------------------------------
export const ColoredSingleSelect = (args) => {
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
			onClick: () => { }
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
			onClick: () => { }
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
			onClick: () => { }
		})
	};
	return (
		<div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
			<div style={{ margin: "1em", width: "25em" }}>
				<SingleSelect
					{...Object.assign({}, baseObj1, {
					})}
				/>
			</div>
			<div style={{ margin: "1em", width: "25em" }}>
				<SingleSelect
					{...Object.assign({}, baseObj2, {
					})}
				/>
			</div>
			<div style={{ margin: "1em", width: "25em" }}>
				<SingleSelect
					{...Object.assign({}, baseObj3, {
					})}
				/>
			</div>
		</div>
	);
};
