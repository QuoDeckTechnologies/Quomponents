import React from "react";
import SlideSettings from "../components/RibbonMenu/homeMenu/sections/SlideSettings.react";

const dictionary = JSON.stringify({
	en: {
		slideSettings: {
			settings: "Settings",
			enableBackArrow: "Enable Back Arrow",
			enableNextArrow: "Enable Next Arrow"
		}
	},
	hi: {
		slideSettings: {
			settings: 'समायोजन',
			enableBackArrow: "वापस तीर सक्षम करें",
			enableNextArrow: "अगला तीर सक्षम करें"
		}
	}
});
export default {
	title: "Design System/RibbonMenu/RibbonHomeMenu/SlideSettings",
	component: SlideSettings,
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
		componentSubtitle: "Displays a SlideSettings for general-purpose use",
		a11y: { disable: true },
		docs: {
			iframeHeight: 300,
		},
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SlideSettings {...args} />;
export const Default = Template.bind({});
Default.args = {
	actions: { changeSlideNav: (navObj) => { return navObj } },
	deck: {
		content: [{}, {}, {}],
		currentSlide: 1
	},
	asFloated: "left",
	withTranslation: {
		lang: "en",
		tgt: "slideSettings",
		dictionary: dictionary,
	},
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<SlideSettings {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

export const SlideSettingsWithThreeSlides = (args) => {
	const baseObj1 = {
		...Object.assign({}, Default.args, args, {
			actions: { changeSlideNav: (navObj) => { return navObj } },
			deck: {
				content: [{}, {}, {}],
				currentSlide: 1
			},
		}),
	};
	return (
		<div>
			<SlideSettings
				{...Object.assign({}, baseObj1, {
				})}
			/>
		</div>
	);
};
SlideSettingsWithThreeSlides.parameters = {
	docs: {
		description: {
			story: "If there are 3 slides and user is at second slide then the next and back arrows will be able to enable",
		},
		source: {
			code: `<SlideSettings {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

export const SlideSettingsWithOneSlide = (args) => {
	const baseObj1 = {
		...Object.assign({}, Default.args, args, {
			actions: { changeSlideNav: (navObj) => { return navObj } },
			deck: {
				content: [{}],
				currentSlide: 0
			},
		}),
	};
	return (
		<div>
			<SlideSettings
				{...Object.assign({}, baseObj1, {
				})}
			/>
		</div>
	);
};
SlideSettingsWithOneSlide.parameters = {
	docs: {
		description: {
			story: "If there is only 1 slide then user will not be able to enable next and back arrows",
		},
		source: {
			code: `<SlideSettings {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

export const WhenAtSecondSlide = (args) => {
	const baseObj1 = {
		...Object.assign({}, Default.args, args, {
			actions: { changeSlideNav: (navObj) => { return navObj } },
			deck: {
				content: [{}, {}],
				currentSlide: 1
			},
		}),
	};
	return (
		<div>
			<SlideSettings
				{...Object.assign({}, baseObj1, {
				})}
			/>
		</div>
	);
};
WhenAtSecondSlide.parameters = {
	docs: {
		description: {
			story: "If there are only 2 slides and user is at second slide, next arrow will get disabled",
		},
		source: {
			code: `<SlideSettings {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

export const WhenAtFirstSlide = (args) => {
	const baseObj1 = {
		...Object.assign({}, Default.args, args, {
			actions: { changeSlideNav: (navObj) => { return navObj } },
			deck: {
				content: [{}, {}],
				currentSlide: 0
			},
		}),
	};
	return (
		<div>
			<SlideSettings
				{...Object.assign({}, baseObj1, {
				})}
			/>
		</div>
	);
};
WhenAtFirstSlide.parameters = {
	docs: {
		description: {
			story: "If there are only 2 slides and user is at second slide, back arrow will get disabled",
		},
		source: {
			code: `<SlideSettings {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// Translated SlideSettings
// -------------------------------------------------------------
export const TranslatedSlideSettings = Template.bind({});
TranslatedSlideSettings.args = {
	...Default.args,
	withTranslation: {
		lang: "hi",
		tgt: "SlideSettings",
		dictionary: dictionary
	},
};
TranslatedSlideSettings.parameters = {
	docs: {
		description: {
			story:
				"Use to change the language that the text appears in. To make this work for the SlideSettings, add a SlideSettings:{} value to the dictionary.",
		},
		source: {
			code: `<SlideSettings {...${JSON.stringify(
				TranslatedSlideSettings.args,
				null,
				2
			)}}/>`,
		},
	},
};