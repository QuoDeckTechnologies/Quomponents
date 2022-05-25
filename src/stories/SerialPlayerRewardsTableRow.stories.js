import React from "react";
import SerialPlayerRewardsTableRow from "../components/SerialPlayerRewardsTableRow/SerialPlayerRewardsTableRow.react";

export default {
  title: "Design System/SerialPlayerRewardsTableRow/SerialPlayerRewardsTableRow",
  component: SerialPlayerRewardsTableRow,
  argTypes: {
    content: {},
    withIcon: {
      table: {
        category: "with-Params",
        defaultValue: {
          name: ""
        },
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          textColor: "#fff",
          buttonTextColor: "",
          iconColor: "",
          dispatchButtonBackgroundColor: "",
          dispatchedButtonBackgroundColor: "",
          buttonHoverBackgroundColor: "",
          buttonHoverTextColor: "",
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
    componentSubtitle: "Displays a SerialPlayerRewardsTableRow with name, reward , phone number , cohort  and button, in mobile view it shows name, reward , and iconBlock. we can switch the status between dispatch and dispached",
    a11y: { disable: true },
    docs: {
      iframeHeight: 650,
    },
  },
};
const Template = (args) => <SerialPlayerRewardsTableRow {...args} />;
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
  content: {
    name: "Kardin Herwitz",
    phone: "0000000000",
    cohort: "Unilever",
    reward: "Branded Pen",
    status: "dispatch"
  },
  withIcon: { name: "fas fa-envelope", size: "1em", position: "left" },
  withColor: {
    textColor: "#000",
    buttonTextColor: "#000",
    iconColor: "#FFBF00",
    dispatchButtonBackgroundColor: "#FFBF00",
    dispatchButtonBackgroundColorM: "#666666",
    dispatchedButtonBackgroundColor: "#C1DC9E",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<SerialPlayerRewardsTableRow {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
