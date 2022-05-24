import React from "react";
import SerialPlayerAnalyticsTableRow from "../components/SerialPlayerAnalyticsTableRow/SerialPlayerAnalyticsTableRow.react";

export default {
  title: "Design System/SerialPlayerAnalyticsTableRow/SerialPlayerAnalyticsTableRow",
  component: SerialPlayerAnalyticsTableRow,
  argTypes: {
    content: {},
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          textColor: "#fff",
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
    componentSubtitle: "Displays a SerialPlayerAnalyticsTableRow with name, id , phone number , cohort name and wallet, in mobile view it only shows name, id , and wallet.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 650,
    },
  },
};
const Template = (args) => <SerialPlayerAnalyticsTableRow {...args} />;
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
  content: {
    name: "Kardin Herwitz",
    phone: "0000000000",
    daysPlayed: "12",
    cohort: "Unilever",
    wallet: "53000"
  },
  withColor: {
    textColor: "#000"
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
      code: `<SerialPlayerAnalyticsTableRow {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};


// -------------------------------------------------------------
// Different Variants SerialPlayerAnalyticsTableRow
// -------------------------------------------------------------
const Custom = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
      withColor: null,
    }),
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>

      <div style={{ border: "0.2em solid #00ff00", borderRadius: "1em", height: "30em", width: "22em", padding: "2.5em 0.5em 0.5em 0.5em", position: "relative" }}>
        <div style={{ border: "0.1em solid #00ff00", top: "2em", height: "27em", width: "21.7em", position: "absolute" }}> </div>
        <div style={{ position: "absolute", top: "0", fontWeight: "bold", left: "17%", paddingTop: "0.5em", fontSize: "0.8em", color: "#00ff00" }}>SerialPlayerAnalyticsTableRow-M</div>
        <SerialPlayerAnalyticsTableRow
          {...Object.assign({}, baseObj, {
            content: {
              name: "Kardin Herwitz",
              daysPlayed: "12",
              wallet: "53000"
            },
            withAnimation: null
          })}
        />
        <div style={{ border: "0.2em solid #00ff00", borderRadius: "50%", bottom: "0.4em", left: "45%", width: "2.5em", height: "2.5em", position: "absolute" }}></div>
      </div>
      <div style={{ border: "0.2em solid #00ff00", borderRadius: "1em", height: "30em", width: "40em", padding: "2.5em 0.5em 0.5em 0.5em", position: "relative" }}>
        <div style={{ border: "0.1em solid #00ff00", top: "2em", height: "27em", width: "39.6em", position: "absolute" }}> </div>
        <div style={{ position: "absolute", top: "0", fontWeight: "bold", left: "35%", paddingTop: "0.5em", fontSize: "0.8em", color: "#00ff00" }}>SerialPlayerAnalyticsTableRow-D</div>
        <SerialPlayerAnalyticsTableRow
          {...Object.assign({}, baseObj, {
            content: {
              name: "Kardin Herwitz",
              daysPlayed: "12",
              phone: "0000000000",
              cohort: "Unilever",
              wallet: "53000"
            },
            withAnimation: null
          })}
        />
        <div style={{ border: "0.2em solid #00ff00", borderRadius: "50%", bottom: "0.4em", left: "47%", width: "2.5em", height: "2.5em", position: "absolute" }}></div>
      </div>
    </div>
  );
};
export const differentVariantsOfSerialPlayerAnalyticsTableRow = Custom.bind({});
differentVariantsOfSerialPlayerAnalyticsTableRow.parameters = {
  docs: {
    description: {
      story: "Card Tags can be used with a parent div to show data.",
    },
    source: {
      code: ``,
    },
  },
};