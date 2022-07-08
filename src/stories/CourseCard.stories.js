import React from "react";
import CourseCard from "../components/CourseCard/CourseCard.react";

const dictionary = JSON.stringify({
	hi: {
		courseCard: {
			isSequential: {
				true: "अनुक्रमिक पाठ्यक्रम",
				false: "गैर अनुक्रमिक पाठ्यक्रम"
			},
			months: {
				Jan: "जनवरी",
				Feb: "फ़रवरी",
				Mar: "मार्च",
				Apr: "अप्रैल",
				May: "मई",
				Jun: "जून",
				Jul: "जुलाई",
				Aug: "अगस्त",
				Sep: "सितम्बर",
				Oct: "अक्टूबर",
				Nov: "नवम्बर",
				Dec: "दिसम्बर",
			},
			share: "शेयर",
			rewardLabel: "पूर्ण करे जीतने के लिए",
			arcMenu: [
				"विवरण संपादित करें",
				"सामग्री संपादित करें",
				"शिक्षार्थियों को प्रबंधित करें",
				"विश्लेषण देखें",
				"पाठ्यक्रम हटाएं"
			]
		}
	}
});
export default {
	title: "Design System/CourseCard/CourseCard",
	component: CourseCard,
	argTypes: {
		content: {
			published: false,
			courseType: "",
			wrapper: "",
			tags: [],
			courseName: "",
			description: "",
			courseImage: "",
			points: null,
			identifier: "",
			date: {
				start_date: "",
				end_date: "",
			},
			sequential: false,
		},
		asFloated: {
			control: "select",
			options: ["left", "right", "inline", "none"],
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
				courseType: "is-Toggles",
				defaultValue: false,
			},
		},
		isDisabled: {
			table: {
				courseType: "is-Toggles",
				defaultValue: false,
			},
		},
		onClick: {
			table: {
				courseType: "Events",
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
		componentSubtitle: "Displays a CourseCard",
		a11y: { disable: true },
		docs: { iframeHeight: 570 },
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CourseCard {...args} />;
export const Default = Template.bind({});
Default.args = {
	content: {
		published: false,
		courseType: "standard",
		wrapper: "carnival",
		tags: ["Tag1", "Tag2"],
		courseName: "Measure your sales readiness",
		description: "Take this quick profile test to check how well you are prepared for a sales job",
		courseImage: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
		points: 200,
		identifier: "XrPmy_OAK",
		date: {
			start_date: "2016-01-04 10:34:23",
			end_date: "2016-03-15 10:34:23",
		},
		sequential: false,
	},
	withTranslation: {
		lang: "en",
		tgt: "courseCard",
		dictionary: dictionary,
	},
	asFloated: "inline",
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<CourseCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Course Card With Many Tags
// -------------------------------------------------------------
export const CourseCardWithManyTags = Template.bind({});
CourseCardWithManyTags.args = {
	...Default.args,
	content: {
		published: false,
		courseType: "standard",
		wrapper: "carnival",
		tags: ["Article", "Cataloing", "Returns Management", "Orders Management", "Payments and Settlements", "Customer", "Latest", "Pneumonoultramicroscopicsilicovolcanoconiosis", "Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7", "Tag 8", "Tag 9", "Tag 10", "Tag 11", "Tag 12", "Tag 13", "Tag 14", "Tag 15", "Tag 16", "Tag 17", "Tag 18", "Tag 19", "Tag 20", "Tag 21", "Tag 22", "Tag 23", "Tag 24"],
		courseName: "Measure your sales readiness",
		description: "Take this quick profile test to check how well you are prepared for a sales job",
		courseImage: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
		points: 200,
		identifier: "XrPmy_OAK",
		date: {
			start_date: "2016-01-04 10:34:23",
			end_date: "2016-03-15 10:34:23",
		},
		sequential: false,
	},
	withAnimation: {
		animation: "zoom",
		duration: 0.5,
		delay: 0,
	},
	asFloated: "inline",
	isDisabled: false,
	isHidden: false,
};
CourseCardWithManyTags.parameters = {
	docs: {
		description: {
			story: "Use to override the standard colors of the component.",
		},
		source: {
			code: `<CourseCardWithManyTags {...${JSON.stringify(
				CourseCardWithManyTags.args,
				null,
				2
			)}}/>`,
		},
	},
};

// -------------------------------------------------------------
// Published Course Card
// -------------------------------------------------------------
export const PublishedCourseCard = Template.bind({});
PublishedCourseCard.args = {
	...Default.args,
	content: {
		published: true,
		courseType: "standard",
		wrapper: "carnival",
		tags: ["Tag1", "Tag2"],
		courseName: "Measure your sales readiness",
		description: "Take this quick profile test to check how well you are prepared for a sales job",
		courseImage: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
		points: 200,
		identifier: "XrPmy_OAK",
		date: {
			start_date: "2016-01-04 10:34:23",
			end_date: "2016-03-15 10:34:23",
		},
		sequential: false,
	},
	withAnimation: {
		animation: "zoom",
		duration: 0.5,
		delay: 0,
	},
	asFloated: "inline",
	isDisabled: false,
	isHidden: false,
};
PublishedCourseCard.parameters = {
	docs: {
		description: {
			story: "Use to override the standard colors of the component.",
		},
		source: {
			code: `<PublishedCourseCard {...${JSON.stringify(
				PublishedCourseCard.args,
				null,
				2
			)}}/>`,
		},
	},
};

// -------------------------------------------------------------
// CourseCard With Extra Content in Name and Description
// -------------------------------------------------------------
export const CourseCardWithExtraContent = Template.bind({});
CourseCardWithExtraContent.args = {
	...Default.args,
	content: {
		published: true,
		courseType: "standard",
		wrapper: "carnival",
		tags: ["Tag1", "Tag2"],
		courseName: "Measure your sales readiness",
		description: "Take this quick profile test to check how well you are prepared for a sales job",
		courseImage: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
		points: 200,
		identifier: "XrPmy_OAK",
		date: {
			start_date: "2016-01-04 10:34:23",
			end_date: "2016-03-15 10:34:23",
		},
		sequential: false,
	},
	withAnimation: {
		animation: "zoom",
		duration: 0.5,
		delay: 0,
	},
	asFloated: "inline",
	isDisabled: false,
	isHidden: false,
};
CourseCardWithExtraContent.parameters = {
	docs: {
		description: {
			story: "Use to override the standard colors of the component.",
		},
		source: {
			code: `<CourseCardWithExtraContent {...${JSON.stringify(
				CourseCardWithExtraContent.args,
				null,
				2
			)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// Translated CourseCard
// -------------------------------------------------------------
export const TranslatedCourseCard = Template.bind({});
TranslatedCourseCard.args = {
	...Default.args,
	withTranslation: {
		lang: "hi",
		tgt: "courseCard",
		dictionary: dictionary
	},
};
TranslatedCourseCard.parameters = {
	docs: {
		description: {
			story:
				"Use to change the language that the text appears in. To make this work for the CourseCard, add a CourseCard:{isSequential:{true, false}} value to the dictionary.",
		},
		source: {
			code: `<CourseCard {...${JSON.stringify(
				TranslatedCourseCard.args,
				null,
				2
			)}}/>`,
		},
	},
};