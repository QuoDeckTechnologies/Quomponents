import React from "react";
import Popuplist from "../../components/Templates/Popuplist/Popuplist.react";

export default {
	title: "Design System/Templates/Popuplist/Popuplist",
	component: Popuplist,
	argTypes: {
		data: {
			title: "",
			subtitle: "",
			image: {},
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
			"Displays a Popuplist with a Title and Subtitle, the user can navigate through each options by clicking on the buttons and see its given image and caption, we can switch between the image and SlideHeader by adding or removing the image prop",
		a11y: { disable: true },
		docs: {
			iframeHeight: 650,
		},
	},
};
const Template = (args) => <Popuplist {...args} />;
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
		popupitems: [
			{
				option: "Item 1",
				image: {
					id: "image-1",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
			{
				option: "Item 2",
				image: {
					id: "image-2",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
			{
				option: "Item 3",
				image: {
					id: "image-3",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
			{
				option: "Item 4",
				image: {
					id: "image-4",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
		],
	},
	slideId: 0,
	imageLibrary: [{
		id: "header-image",
		image:
			"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
	}, {
		id: "image-1",
		image:
			"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
	}, {
		id: "image-2",
		image:
			"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
	}, {
		id: "image-3",
		image:
			"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
	}, {
		id: "image-4",
		image:
			"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
	},],
	asVariant: "warning",
	withColor: {
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
			code: `<Popuplist {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// PopuplistWithSlideHeader
// -------------------------------------------------------------
export const PopuplistWithSlideHeader = Template.bind({});
PopuplistWithSlideHeader.args = {
	data: {
		title: "Neque porro quisquam est qui dolorem",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
		backgroundImage: { id: "", extention: "" },
		popupitems: [
			{
				option: "Item 1",
				image: {
					id: "image-1",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
			{
				option: "Item 2",
				image: {
					id: "image-2",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
			{
				option: "Item 3",
				image: {
					id: "image-3",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
			{
				option: "Item 4",
				image: {
					id: "image-4",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
		],
	},
	slideId: 0,
	asVariant: "primary",
	withColor: {
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
PopuplistWithSlideHeader.parameters = {
	docs: {
		source: {
			code: `<Popuplist {...${JSON.stringify(
				PopuplistWithSlideHeader.args,
				null,
				2
			)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// EmphasisPopuplist
// -------------------------------------------------------------
export const EmphasisPopuplist = Template.bind({});
EmphasisPopuplist.args = {
	data: {
		title: "Neque porro quisquam est qui dolorem",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
		image: { id: "header-image", extension: "" },
		backgroundImage: { id: "", extention: "" },
		popupitems: [
			{
				option: "Item 1",
				image: {
					id: "image-1",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
			{
				option: "Item 2",
				image: {
					id: "image-2",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
			{
				option: "Item 3",
				image: {
					id: "image-3",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
			{
				option: "Item 4",
				image: {
					id: "image-4",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
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
EmphasisPopuplist.parameters = {
	docs: {
		source: {
			code: `<Popuplist {...${JSON.stringify(
				EmphasisPopuplist.args,
				null,
				2
			)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// ColoredPopuplist
// -------------------------------------------------------------
export const ColoredPopuplist = Template.bind({});
ColoredPopuplist.args = {
	data: {
		title: "Neque porro quisquam est qui dolorem",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
		image: { id: "header-image", extension: "" },
		backgroundImage: { id: "", extention: "" },
		popupitems: [
			{
				option: "Item 1",
				image: {
					id: "image-1",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
			{
				option: "Item 2",
				image: {
					id: "image-2",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
			{
				option: "Item 3",
				image: {
					id: "image-3",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
			{
				option: "Item 4",
				image: {
					id: "image-4",
					extension: ".png"
				},
				caption: " Please put in a caption",
			},
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
ColoredPopuplist.parameters = {
	docs: {
		source: {
			code: `<Popuplist {...${JSON.stringify(
				ColoredPopuplist.args,
				null,
				2
			)}}/>`,
		},
	},
};