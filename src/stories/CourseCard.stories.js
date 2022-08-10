import React from "react";
import CourseCard from "../components/CourseCard/CourseCard.react";

export default {
  title: "Design System/CourseCard",
  component: CourseCard,
  argTypes: {
    published: false,
    type: {
      control: "select",
      options: ["standard", "exam"],
    },
    wrapper: "",
    tags: [],
    name: "",
    description: "",
    link: "",
    image: "",
    points: 0,
    identifier: "",
    date: {
      start_date: "",
      end_date: "",
    },
    sequential: false,
    asFloated: {
      control: "select",
      options: ["left", "right", "inline", "none"],
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
  published: false,
  type: "standard",
  wrapper: "carnival",
  tags: ["Tag1", "Tag2"],
  name: "Measure your sales readiness",
  description:
    "Take this quick profile test to check how well you are prepared for a sales job",
  link: "https://www.quodeck.com/",
  image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
  points: 200,
  identifier: "XrPmy_OAK",
  date: {
    start_date: "2016-01-04 10:34:23",
    end_date: "2016-03-15 10:34:23",
  },
  sequential: false,
  asFloated: "inline",
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<CourseCard
          published={false}
          type="standard"
          wrapper="carnival"
          tags={["Tag1", "Tag2"]}
          name="Measure your sales readiness"
          description="Take this quick profile test to check how well you are prepared for a sales job"
          link= "https://www.quodeck.com/",
          image="https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png"
          points={200}
          identifier="XrPmy_OAK"
          date={{
            start_date: "2016-01-04 10:34:23",
            end_date: "2016-03-15 10:34:23",
          }}
          sequential={false}
          asFloated="inline"
          isDisabled={false}
          isHidden={false}
          onClick={() => {}}
        />`,
    },
  },
};

// -------------------------------------------------------------
// Course Card With Many Tags
// -------------------------------------------------------------
export const CourseCardWithManyTags = Template.bind({});
CourseCardWithManyTags.args = {
  ...Default.args,
  published: false,
  type: "standard",
  wrapper: "carnival",
  tags: [
    "Article",
    "Cataloing",
    "Returns Management",
    "Orders Management",
    "Payments and Settlements",
    "Customer",
    "Latest",
    "Pneumonoultramicroscopicsilicovolcanoconiosis",
    "Tag 1",
    "Tag 2",
    "Tag 3",
    "Tag 4",
    "Tag 5",
    "Tag 6",
    "Tag 7",
    "Tag 8",
    "Tag 9",
    "Tag 10",
    "Tag 11",
    "Tag 12",
    "Tag 13",
    "Tag 14",
    "Tag 15",
    "Tag 16",
    "Tag 17",
    "Tag 18",
    "Tag 19",
    "Tag 20",
    "Tag 21",
    "Tag 22",
    "Tag 23",
    "Tag 24",
  ],
  name: "Measure your sales readiness",
  description:
    "Take this quick profile test to check how well you are prepared for a sales job",
  link: "https://www.quodeck.com/",
  image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
  points: 200,
  identifier: "XrPmy_OAK",
  date: {
    start_date: "2016-01-04 10:34:23",
    end_date: "2016-03-15 10:34:23",
  },
  sequential: false,
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
      story: "Use to show some extra tags in the component.",
    },
    source: {
      code: `<CourseCard
          published={false}
          type="standard"
          wrapper="carnival"
          tags={[
            "Article",
            "Cataloing",
            "Returns Management",
            "Orders Management",
            "Payments and Settlements",
            "Customer",
            "Latest",
            "Pneumonoultramicroscopicsilicovolcanoconiosis",
            "Tag 1",
            "Tag 2",
            "Tag 3",
            "Tag 4",
            "Tag 5",
            "Tag 6",
            "Tag 7",
            "Tag 8",
            "Tag 9",
            "Tag 10",
            "Tag 11",
            "Tag 12",
            "Tag 13",
            "Tag 14",
            "Tag 15",
            "Tag 16",
            "Tag 17",
            "Tag 18",
            "Tag 19",
            "Tag 20",
            "Tag 21",
            "Tag 22",
            "Tag 23",
            "Tag 24",
          ]}
          name="Measure your sales readiness"
          description="Take this quick profile test to check how well you are prepared for a sales job"
          link= "https://www.quodeck.com/"
          image="https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png"
          points={200}
          identifier="XrPmy_OAK"
          date={{
            start_date: "2016-01-04 10:34:23",
            end_date: "2016-03-15 10:34:23",
          }}
          sequential={false}
          withAnimation={{
            animation: "zoom",
            duration: 0.5,
            delay: 0,
          }}
          asFloated="inline"
          isDisabled={false}
          isHidden={false}
          onClick={() => {}}
        />`,
    },
  },
};

// -------------------------------------------------------------
// Published Course Card
// -------------------------------------------------------------
export const PublishedCourseCard = Template.bind({});
PublishedCourseCard.args = {
  ...Default.args,
  published: true,
  type: "standard",
  wrapper: "carnival",
  tags: ["Tag1", "Tag2"],
  name: "Measure your sales readiness",
  description:
    "Take this quick profile test to check how well you are prepared for a sales job",
  link: "https://www.quodeck.com/",
  image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
  points: 200,
  identifier: "XrPmy_OAK",
  date: {
    start_date: "2016-01-04 10:34:23",
    end_date: "2016-03-15 10:34:23",
  },
  sequential: false,
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
      story: "Use to show the published course card with passing published prop to true.",
    },
    source: {
      code: `<CourseCard
          published={true}
          type="standard"
          wrapper="carnival"
          tags={["Tag1", "Tag2"]}
          name="Measure your sales readiness"
          description="Take this quick profile test to check how well you are prepared for a sales job"
          link= "https://www.quodeck.com/"
          image="https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png"
          points={200}
          identifier="XrPmy_OAK"
          date={{
            start_date: "2016-01-04 10:34:23",
            end_date: "2016-03-15 10:34:23",
          }}
          withAnimation={{
            animation: "zoom",
            duration: 0.5,
            delay: 0,
          }}
          sequential={false}
          asFloated="inline"
          isDisabled={false}
          isHidden={false}
          onClick={() => {}}
        />`,
    },
  },
};

// -------------------------------------------------------------
// CourseCard With Extra Content in Name and Description
// -------------------------------------------------------------
export const CourseCardWithExtraContent = Template.bind({});
CourseCardWithExtraContent.args = {
  ...Default.args,
  published: true,
  type: "standard",
  wrapper: "carnival",
  tags: ["Tag1", "Tag2"],
  name: "Measure your sales readiness",
  description:
    "Take this quick profile test to check how well you are prepared for a sales job",
  link: "https://www.quodeck.com/",
  image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
  points: 200,
  identifier: "XrPmy_OAK",
  date: {
    start_date: "2016-01-04 10:34:23",
    end_date: "2016-03-15 10:34:23",
  },
  sequential: false,
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
      story: "Use to show some extra content in courseCard with published prop to true.",
    },
    source: {
      code: `<CourseCard
          published={true}
          type="standard"
          wrapper="carnival"
          tags={["Tag1", "Tag2"]}
          name="Measure your sales readiness"
          description="Take this quick profile test to check how well you are prepared for a sales job"
          link= "https://www.quodeck.com/"
          image="https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png"
          points={200}
          identifier="XrPmy_OAK"
          date={{
            start_date: "2016-01-04 10:34:23",
            end_date: "2016-03-15 10:34:23",
          }}
          withAnimation={{
            animation: "zoom",
            duration: 0.5,
            delay: 0,
          }}
          sequential={false}
          asFloated="inline"
          isDisabled={false}
          isHidden={false}
          onClick={() => {}}
        />`,
    },
  },
};
