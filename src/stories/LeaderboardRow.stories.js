import React from "react";
import LeaderboardRow from "../components/LeaderboardRow/LeaderboardRow.react";

export default {
  title: "Design System/LeaderboardRow",
  component: LeaderboardRow,
  argTypes: {
    rank: 0,
    firstName: "",
    lastName: "",
    asPadded: {
      control: "select",
      options: ["fitted", "compact", "normal", "relaxed"],
      table: {
        category: "as-Flags",
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          textColor: "",
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
    componentSubtitle: "Displays a LeaderboardRow",
    a11y: { disable: true },
    docs: { iframeHeight: 500 },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <LeaderboardRow {...args} />;
export const Default = Template.bind({});
Default.args = {
  rank: 0,
  firstName: "Quodeck",
  lastName: "Technology",
  points: null,
  asPadded: "normal",
  withColor: {
    backgroundColor: "",
    textColor: "",
  },
  withAnimation: {
    animation: "slideDown",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<LeaderboardRow  rank={0}
            firstName= "Quodeck"
            lastName= "Technology"
            points= {null}
            asPadded= "normal"
            withColor={{
                backgroundColor: "",
                textColor: "",
            }}
            withAnimation={{
                animation: "slideDown",
                duration: 0.5,
                delay: 0,
            }}
            isHidden={false}
            />`,
    },
  },
};
// -------------------------------------------------------------
// MultipleLeaderboardRow
// -------------------------------------------------------------
export const MultipleLeaderboardRow = (args) => {
  let users = [
    {
      rank: 0,
      firstName: "Rohit",
      lastName: "Dhende",
      points: 5000,
    },
    {
      rank: 1,
      firstName: "Rahul",
      lastName: "Verma",
      points: 4500,
    },
    {
      rank: 2,
      firstName: "Krishna",
      lastName: "Pant",
      points: 3900,
    },
    {
      rank: 3,
      firstName: "Udhav",
      lastName: "Varma",
      points: 3900,
    },
    {
      rank: 4,
      firstName: "Ganesh",
      lastName: "Devkar",
      points: 3611,
    },
    {
      rank: 5,
      firstName: "Apurva",
      lastName: "Surve",
      points: 3244,
    },
    {
      rank: 7,
      firstName: "Shobha",
      lastName: "Shelke",
      points: 3000,
    },
    {
      rank: 8,
      firstName: "Prabhat",
      lastName: "Pandey",
      points: 2900,
    },
    {
      rank: 9,
      firstName: "Ravi",
      lastName: "Singh",
      points: 2500,
    },
  ];
  return (
    <div>
      {users.map((user, index) => {
        return (
          <LeaderboardRow
            key={index}
            rank={user.rank}
            firstName={user.firstName}
            lastName={user.lastName}
            points={user.points}
            withColor={{
              backgroundColor: "#FFBF00",
              textColor: "#000",
            }}
            withAnimation={{
              animation: "zoom",
              duration: 0.5,
              delay: 0,
            }}
          />
        );
      })}
    </div>
  );
};
// -------------------------------------------------------------
// MultipleLeaderboardRowsWithoutPoints
// -------------------------------------------------------------
export const MultipleLeaderboardRowsWithoutPoints = (args) => {
  let users = [
    {
      rank: 0,
      firstName: "Rohit",
      lastName: "Dhende",
    },
    {
      rank: 1,
      firstName: "Rahul",
      lastName: "Verma",
    },
    {
      rank: 2,
      firstName: "Krishna",
      lastName: "Pant",
    },
    {
      rank: 3,
      firstName: "Udhav",
      lastName: "Varma",
    },
    {
      rank: 4,
      firstName: "Ganesh",
      lastName: "Devkar",
    },
    {
      rank: 5,
      firstName: "Apurva",
      lastName: "Surve",
    },
    {
      rank: 7,
      firstName: "Shobha",
      lastName: "Shelke",
    },
    {
      rank: 8,
      firstName: "Prabhat",
      lastName: "Pandey",
    },
    {
      rank: 9,
      firstName: "Ravi",
      lastName: "Singh",
    },
  ];
  return (
    <div>
      {users.map((user, index) => {
        return (
          <LeaderboardRow
            key={index}
            rank={user.rank}
            firstName={user.firstName}
            lastName={user.lastName}
            withColor={{
              backgroundColor: "#FFBF00",
              textColor: "#000",
            }}
            withAnimation={{
              animation: "zoom",
              duration: 0.5,
              delay: 0,
            }}
          />
        );
      })}
    </div>
  );
};
// -------------------------------------------------------------
// MultipleLeaderboardRowsWithoutPointsandFixedDivSize
// -------------------------------------------------------------
export const MultipleLeaderboardRowsWithoutPointsAndFixedDivSize = (args) => {
  let users = [
    {
      rank: 0,
      firstName: "Rohit",
      lastName: "Dhende",
    },
    {
      rank: 1,
      firstName: "Rahul",
      lastName: "Verma",
    },
    {
      rank: 2,
      firstName: "Krishna",
      lastName: "Pant",
    },
    {
      rank: 3,
      firstName: "Udhav",
      lastName: "Varma",
    },
    {
      rank: 4,
      firstName: "Ganesh",
      lastName: "Devkar",
    },
    {
      rank: 5,
      firstName: "Apurva",
      lastName: "Surve",
    },
    {
      rank: 7,
      firstName: "Shobha",
      lastName: "Shelke",
    },
    {
      rank: 8,
      firstName: "Prabhat",
      lastName: "Pandey",
    },
    {
      rank: 9,
      firstName: "Ravi",
      lastName: "Singh",
    },
  ];
  return (
    <div style={{ width: "290px" }}>
      {users.map((user, index) => {
        return (
          <LeaderboardRow
            key={index}
            rank={user.rank}
            firstName={user.firstName}
            lastName={user.lastName}
            withColor={{
              backgroundColor: "#FFBF00",
              textColor: "#000",
            }}
            withAnimation={{
              animation: "zoom",
              duration: 0.5,
              delay: 0,
            }}
          />
        );
      })}
    </div>
  );
};
// -------------------------------------------------------------
// MultipleLeaderboardRowsWithFixedDivSize
// -------------------------------------------------------------
export const MultipleLeaderboardRowsWithFixedDivSize = (args) => {
  let users = [
    {
      rank: 0,
      firstName: "Rohit",
      lastName: "Dhende",
      points: 5000,
    },
    {
      rank: 1,
      firstName: "Rahul",
      lastName: "Verma",
      points: 4500,
    },
    {
      rank: 2,
      firstName: "Krishna",
      lastName: "Pant",
      points: 3900,
    },
    {
      rank: 3,
      firstName: "Udhav",
      lastName: "Varma",
      points: 3900,
    },
    {
      rank: 4,
      firstName: "Ganesh",
      lastName: "Devkar",
      points: 3611,
    },
    {
      rank: 5,
      firstName: "Apurva",
      lastName: "Surve",
      points: 3244,
    },
    {
      rank: 7,
      firstName: "Shobha",
      lastName: "Shelke",
      points: 3000,
    },
    {
      rank: 8,
      firstName: "Prabhat",
      lastName: "Pandey",
      points: 2900,
    },
    {
      rank: 9,
      firstName: "Ravi",
      lastName: "Singh",
      points: 2500,
    },
  ];
  return (
    <div style={{ width: "290px" }}>
      {users.map((user, index) => {
        return (
          <LeaderboardRow
            key={index}
            rank={user.rank}
            firstName={user.firstName}
            lastName={user.lastName}
            points={user.points}
            withColor={{
              backgroundColor: "#FFBF00",
              textColor: "#000",
            }}
            withAnimation={{
              animation: "zoom",
              duration: 0.5,
              delay: 0,
            }}
          />
        );
      })}
    </div>
  );
};
