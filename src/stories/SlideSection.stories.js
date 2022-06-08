import React from "react";
import SlideSection from "../components/RibbonMenu/homeMenu/sections/SlideSection.react";

const dictionary = JSON.stringify({
	en: {
		SlideSection: {
			slide: "Slide",
			newSlide: "New Slide",
			duplicateSlide: "Duplicate Slide",
			deleteSlide: "Delete Slide"
		}
	},
	hi: {
		SlideSection: {
			slide: "स्लाइड",
			newSlide: "नई स्लाइड",
			duplicateSlide: "स्लाइड प्रतिलिपि करे",
			deleteSlide: "स्लाइड हटाए"
		}
	}
});
export default {
	title: "Design System/RibbonMenu/RibbonHomeMenu/SlideSection",
	component: SlideSection,
	argTypes: {
		actions: {},
		deck: {},
		asFloated: {
			control: "select",
			options: ["left", "right", "inline"],
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
		componentSubtitle: "Displays a SlideSection for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SlideSection {...args} />;
export const Default = Template.bind({});
Default.args = {
	actions: {
		addSlide: (value) => { return value },
		duplicateSlide: (value) => { return value },
		deleteSlide: (value) => { return console.log(value) }
	},
	deck: {
		content: [{}, {}]
	},
	asFloated: "left",
	withTranslation: {
		lang: "en",
		tgt: "SlideSection",
		dictionary: dictionary,
	},
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<SlideSection {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

export const SlideSectionWithOneContent = (args) => {
	const baseObj1 = {
		...Object.assign({}, Default.args, args, {
			deck: {
				content: [{}]
			},
		}),
	};
	return (
		<div>
			<SlideSection
				{...Object.assign({}, baseObj1, {
				})}
			/>
		</div>
	);
};
SlideSectionWithOneContent.parameters = {
	docs: {
		description: {
			story: "If there is only one content(slide) in the deck it will not get deleted. The delete button will get disabled.",
		},
		source: {
			code: `<SlideSection {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

// -------------------------------------------------------------
// Translated SlideSection
// -------------------------------------------------------------
export const TranslatedSlideSection = Template.bind({});
TranslatedSlideSection.args = {
	...Default.args,
	withTranslation: {
		lang: "hi",
		tgt: "SlideSection",
		dictionary: dictionary
	},
};
TranslatedSlideSection.parameters = {
	docs: {
		description: {
			story:
				"Use to change the language that the text appears in. To make this work for the SlideSection, add a SlideSection:{} value to the dictionary.",
		},
		source: {
			code: `<SlideSection {...${JSON.stringify(
				TranslatedSlideSection.args,
				null,
				2
			)}}/>`,
		},
	},
};