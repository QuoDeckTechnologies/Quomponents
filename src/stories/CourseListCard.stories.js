import React from "react";
import CourseListCard from "../components/CourseListCard/CourseListCard.react";

export default {
  title: "Design System/CourseListCard/CourseListCard",
  component: CourseListCard,
  argTypes: {
    content: {},
    asFloated: {
      control: "select",
      options: ["left", "right", "none", "inline"],
      table: {
        category: "as-Flags",
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          accentColor: "",
          accentBackgroundColor: "",
          textColor: "",
          pathColor: "",
          trailColor: "",
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
    componentSubtitle:
      "Displays a basic CourseListCard for general-purpose use",
    a11y: { disable: true },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CourseListCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    id: "1",
    name: "BALLOON BURST",
    description:
      "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
    buttonText: "try game",
    checked: true,
    percent: "80",
    image: { id: "background-image", extention: "" },
  },
  imageLibrary: [
    {
      id: "background-image",
      image:
        "https://images.unsplash.com/photo-1653844124305-6606b561dee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ],
  asFloated: "none",
  withColor: {
    backgroundColor: "",
    accentColor: "",
    accentBackgroundColor: "",
    textColor: "",
    pathColor: "",
    trailColor: "",
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
      code: `<CourseListCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Course List Card without image
// -------------------------------------------------------------
export const CourselistcardWithoutImage = Template.bind({});
CourselistcardWithoutImage.args = {
  ...Default.args,
  content: {
    id: "",
    name: "BALLOON BURST",
    description:
      "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
    buttonText: "try game",
    checked: true,
    percent: "80",
    image: { id: "background-", extention: "" },
  },
};
CourselistcardWithoutImage.parameters = {
  docs: {
    description: {
      story: "Displays a CourseListCard without image/default image",
    },
    source: {
      code: `<CourseListCard {...${JSON.stringify(
        CourselistcardWithoutImage.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Unchecked Course List Card
// -------------------------------------------------------------
export const UncheckedCourselistcard = Template.bind({});
UncheckedCourselistcard.args = {
  ...Default.args,
  content: {
    id: "",
    name: "BALLOON BURST",
    description:
      "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
    buttonText: "try game",
    checked: false,
    percent: "80",
    image: { id: "background-image", extention: "" },
  },
};
UncheckedCourselistcard.parameters = {
  docs: {
    description: {
      story: "Displays a CourseListCard with checked props set as false",
    },
    source: {
      code: `<CourseListCard {...${JSON.stringify(
        UncheckedCourselistcard.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Colored Course List Card
// -------------------------------------------------------------
export const ColoredCourselistcard = Template.bind({});
ColoredCourselistcard.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#fefae0",
    accentColor: "#606c38",
    accentBackgroundColor: "#fefae0",
    textColor: "#bc6c25",
    pathColor: "#00bcd4",
    trailColor: "#3f51b5",
  },
};
ColoredCourselistcard.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<CourseListCard {...${JSON.stringify(
        ColoredCourselistcard.args,
        null,
        2
      )}}/>`,
    },
  },
};
