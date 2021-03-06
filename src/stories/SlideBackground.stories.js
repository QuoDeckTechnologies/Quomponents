import React from "react";
import SlideBackground from "../components/RibbonMenu/designMenu/sections/SlideBackground.react";

const dictionary = JSON.stringify({
	en: {
		slideBackground: {
			slideBackground: "Slide Background",
			setBackground: "Set",
			removeBackground: "Remove"
		}
	},
	hi: {
		slideBackground: {
			slideBackground: "स्लाइड पृष्ठभूमि",
			setBackground: "सेट",
			removeBackground: "निकाले"
		}
	}
});
export default {
	title: "Design System/RibbonMenu/RibbonDesignMenu/SlideBackground",
	component: SlideBackground,
	argTypes: {
		actions: {},
		deck: {},
		asFloated: {
			control: "select",
			options: ["left", "right", "none", "inline"],
			table: {
				category: "as-Flags",
			},
		},
		withTranslation: {
			table: {
				category: "with-Params",
				defaultValue: {
					lang: "",
					tgt: "",
					dictionary: "",
				},
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
		updateDeck: {
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
		componentSubtitle: "Displays a SlideBackground for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SlideBackground {...args} />;
export const Default = Template.bind({});
Default.args = {
	actions: {
		updateDeck: (value) => { return value }
	},
	deck: {
		backgroundImage: ""
	},
	asFloated: "left",
	withTranslation: {
		lang: "en",
		tgt: "slideBackground",
		dictionary: dictionary,
	},
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<SlideBackground {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

export const SlideWithBackgroundImage = (args) => {
	const baseObj1 = {
		...Object.assign({}, Default.args, args, {
			deck: {
				backgroundImage: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg"
			},
		}),
	};
	return (
		<div>
			<SlideBackground
				{...Object.assign({}, baseObj1, {
				})}
			/>
		</div>
	);
};
SlideWithBackgroundImage.parameters = {
	docs: {
		description: {
			story: "If there exist a background image",
		},
		source: {
			code: `<SlideBackground {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

// -------------------------------------------------------------
// Translated SlideBackground
// -------------------------------------------------------------
export const TranslatedSlideBackground = Template.bind({});
TranslatedSlideBackground.args = {
	...Default.args,
	withTranslation: {
		lang: "hi",
		tgt: "slideBackground",
		dictionary: dictionary
	},
};
TranslatedSlideBackground.parameters = {
	docs: {
		description: {
			story:
				"Use to change the language that the text appears in. To make this work for the SlideBackground, add a SlideBackground:{} value to the dictionary.",
		},
		source: {
			code: `<SlideBackground {...${JSON.stringify(
				TranslatedSlideBackground.args,
				null,
				2
			)}}/>`,
		},
	},
};