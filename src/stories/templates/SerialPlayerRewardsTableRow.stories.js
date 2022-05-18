import React from "react";
import SerialPlayerRewardsTableRow from "../../components/Templates/SerialPlayerRewardsTableRow/SerialPlayerRewardsTableRow.react";

export default {
  title: "Design System/Templates/SerialPlayerRewardsTableRow/SerialPlayerRewardsTableRow",
  component: SerialPlayerRewardsTableRow,
  argTypes: {
    content: {},
    slideId: 0,
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          textColor: "#fff",
          buttonTextColor: "",
          buttonBackgroundColor: "",
          buttonHoverBackgroundColor: "",
          buttonHoverTextColor: "",
        },
      },
    },
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
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
    componentSubtitle: "Displays a SerialPlayerRewardsTableRow with name, label , contact number , company name and points, in mobile view it only shows name, label , and points.",
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
    label: "Branded Pen",
    contact: "0000000000",
    company: "Unilever",
  },
  withColor: {
    textColor: "#000",
    buttonTextColor: "#000",
    buttonBackgroundColor: "",
    buttonHoverBackgroundColor: "",
    buttonHoverTextColor: "",
  },
  asVariant: "warning",
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


// -------------------------------------------------------------
// Different Variants SerialPlayerRewardsTableRow
// -------------------------------------------------------------
const Custom = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
      withColor: null,
    }),
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>

      <div style={{ border: "0.2em solid #00ff00", borderRadius: "1em", height: "30em", width: "18em", padding: "2.5em 0.5em 0.5em 0.5em", position: "relative" }}>
        <div style={{ border: "0.1em solid #00ff00", top: "2em", height: "27em", width: "17.6em", position: "absolute" }}> </div>
        <div style={{ position: "absolute", top: "0", fontWeight: "bold", left: "17%", paddingTop: "0.5em", fontSize: "0.8em", color: "#00ff00" }}>SerialPlayerRewardsTableRow-M</div>
        <SerialPlayerRewardsTableRow
          {...Object.assign({}, baseObj, {
            content: {
              name: "Kardin Herwitz",
              id: "12",
              points: "53000"
            },
            withAnimation: null
          })}
        />
        <div style={{ border: "0.2em solid #00ff00", borderRadius: "50%", bottom: "0.4em", left: "40%", width: "2.5em", height: "2.5em", position: "absolute" }}></div>
      </div>
      <div style={{ border: "0.2em solid #00ff00", borderRadius: "1em", height: "30em", width: "40em", padding: "2.5em 0.5em 0.5em 0.5em", position: "relative" }}>
        <div style={{ border: "0.1em solid #00ff00", top: "2em", height: "27em", width: "39.6em", position: "absolute" }}> </div>
        <div style={{ position: "absolute", top: "0", fontWeight: "bold", left: "35%", paddingTop: "0.5em", fontSize: "0.8em", color: "#00ff00" }}>SerialPlayerRewardsTableRow-D</div>
        <SerialPlayerRewardsTableRow
          {...Object.assign({}, baseObj, {
            content: {
              name: "Kardin Herwitz",
              id: "12",
              contact: "0000000000",
              company: "Unilever",
              points: "53000"
            },
            withAnimation: null
          })}
        />
        <div style={{ border: "0.2em solid #00ff00", borderRadius: "50%", bottom: "0.4em", left: "47%", width: "2.5em", height: "2.5em", position: "absolute" }}></div>
      </div>
    </div>
  );
};
export const differentVariantsOfSerialPlayerRewardsTableRow = Custom.bind({});
differentVariantsOfSerialPlayerRewardsTableRow.parameters = {
  docs: {
    description: {
      story: "Card Tags can be used with a parent div to show data.",
    },
    source: {
      code: ``,
    },
  },
};