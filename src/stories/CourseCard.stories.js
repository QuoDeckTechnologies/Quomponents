import React from "react";
import CourseCard from "../components/CourseCard/CourseCard.react";

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
			points: "",
			identifier: "",
			date: {
				start_date: "",
				end_date: "",
			},
			sequential: false,
		},
		withAnimation: {
			table: {
				courseType: "with-Params",
				defaultValue: {
					animation: "",
					duration: 0,
					delay: 0,
				},
			},
		},
		asFloated: {
			control: "select",
			options: ["left", "right", "inline"],
			table: {
				category: "as-Flags",
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
		arcFn: {
			table: {
				courseType: "Events",
				defaultValue: null,
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
		componentSubtitle: "Displays a basic button for general-purpose use",
		a11y: { disable: true },
		docs: { iframeHeight: 200 },
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
		description:
			"Take this quick profile test to check how well you are prepared for a sales job",
		courseImage:
			"https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
		points: "200",
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
export const CourseCardWithManyTags = (args) => {
	const baseObj1 = {
		...Object.assign({}, Default.args, args, {
			content: {
				published: false,
				courseType: "standard",
				wrapper: "carnival",
				tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6"],
				courseName: "Measure your sales readiness",
				description:
					"Take this quick profile test to check how well you are prepared for a sales job",
				courseImage:
					"https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
				points: "200",
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
		}),
	};
	return (
		<div>
			<CourseCard {...Object.assign({}, baseObj1, {})} />
		</div>
	);
};
