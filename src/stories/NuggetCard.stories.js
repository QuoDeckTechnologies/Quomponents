import React from "react";
import NuggetCard from "../components/NuggetCard/NuggetCard.react";

export default {
  title: "Design System/NuggetCard/NuggetCard",
  component: NuggetCard,
  argTypes: {
    content: {
      published: false,
      tags: [],
      category: "",
      name: "",
      description: "",
      image: "",
      points: "",
      identifier: "",
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
    componentSubtitle: "Displays a NuggetCard",
    a11y: { disable: true },
    docs: { iframeHeight: 570 },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <NuggetCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    published: false,
    tags: ["Sales"],
    category: "profiler",
    name: "Measure your sales readiness",
    description:
      "Take this quick profile test to check how well you are prepared for a sales job",
    image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
    points: "200",
    identifier: "XrPmy_OAK",
    menuContent: [
      {
        list: [
          { title: "EDIT DETAILS", func: () => {} },
          { title: "EDIT CONTENT", func: () => {} },
          { title: "MANAGE LEARNERS", func: () => {} },
          { title: "VIEW ANALYTICS", func: () => {} },
          { title: "DELETE COURSE", func: () => {} },
        ],
      },
    ],
  },
  asFloated: "inline",
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<NuggetCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Nugget Card With Many Tags
// -------------------------------------------------------------
export const NuggetCardWithManyTags = Template.bind({});
NuggetCardWithManyTags.args = {
	...Default.args,
	content: {
		published: false,
		tags: ["Article", "Cataloing", "Returns Management", "Orders Management", "Payments and Settlements", "Customer", "Latest", "Pneumonoultramicroscopicsilicovolcanoconiosis", "Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7", "Tag 8", "Tag 9", "Tag 10", "Tag 11", "Tag 12", "Tag 13", "Tag 14", "Tag 15", "Tag 16", "Tag 17", "Tag 18", "Tag 19", "Tag 20", "Tag 21", "Tag 22", "Tag 23", "Tag 24"],
		category: "profiler",
		name: "Measure your sales readiness",
		description: "Take this quick profile test to check how well you are prepared for a sales job",
		image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
		points: "200",
		identifier: "XrPmy_OAK",
	},
	asFloated: "inline",
	isDisabled: false,
	isHidden: false,
};
NuggetCardWithManyTags.parameters = {
	docs: {
		description: {
			story: "Use to override the standard colors of the component.",
		},
		source: {
			code: `<NuggetCardWithManyTags {...${JSON.stringify(
				NuggetCardWithManyTags.args,
				null,
				2
			)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// Published Nugget Card
// -------------------------------------------------------------
export const PublishedNuggetCard = Template.bind({});
PublishedNuggetCard.args = {
	...Default.args,
	content: {
		published: true,
		tags: ["Sales1", "Sales2"],
		category: "profiler",
		name: "Measure your sales readiness",
		description: "Take this quick profile test to check how well you are prepared for a sales job",
		image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
		points: "200",
		identifier: "XrPmy_OAK",
	},
	asFloated: "inline",
	isDisabled: false,
	isHidden: false,
};
PublishedNuggetCard.parameters = {
	docs: {
		description: {
			story: "Use to override the standard colors of the component.",
		},
		source: {
			code: `<PublishedNuggetCard {...${JSON.stringify(
				PublishedNuggetCard.args,
				null,
				2
			)}}/>`,
		},
	},
};
// -------------------------------------------------------------
// NuggetCard With Extra Content in Name and Description
// -------------------------------------------------------------
export const NuggetCardWithExtraContent = Template.bind({});
NuggetCardWithExtraContent.args = {
	...Default.args,
	content: {
		published: true,
		tags: ["Sales1", "Sales2"],
		category: "profiler",
		name: "Measure your sales readiness Measure your sales readiness",
		description: "Take this quick profile test to check how well you are prepared for a sales job. Take this quick profile test to check how well you are prepared for a sales job",
		image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
		points: "200",
		identifier: "XrPmy_OAK",
	},
	asFloated: "inline",
	isDisabled: false,
	isHidden: false,
};
NuggetCardWithExtraContent.parameters = {
	docs: {
		description: {
			story: "Use to override the standard colors of the component.",
		},
		source: {
			code: `<NuggetCardWithExtraContent {...${JSON.stringify(
				NuggetCardWithExtraContent.args,
				null,
				2
			)}}/>`,
		},
	},
};