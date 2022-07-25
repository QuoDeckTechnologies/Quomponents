import React from "react";
import LeaderboardRow from "../components/LeaderboardRow/LeaderboardRow.react";

export default {
    title: "Design System/LeaderboardRow/LeaderboardRow",
    component: LeaderboardRow,
    argTypes: {
        rank: 0,
        content: {},
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
        }
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
    content: {
        name: 'Rohit Dhende',
        points: 1000
    },
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
            code: `<LeaderboardRow {...${JSON.stringify(Default.args, null, 2)}}/>`,
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
            content: {
                name: 'Rohit Dhende',
                points: 5000
            }
        },
        {
            rank: 1,
            content: {
                name: 'Rahul Verma',
                points: 4500
            }
        },
        {
            rank: 2,
            content: {
                name: 'Krishna Pant',
                points: 3900
            }
        },
        {
            rank: 3,
            content: {
                name: 'Udhav Varma',
                points: 3900
            }
        },
        {
            rank: 4,
            content: {
                name: 'Ganesh Devkar',
                points: 3611
            }
        },
        {
            rank: 5,
            content: {
                name: 'Apurva Surve',
                points: 3244
            }
        },
        {
            rank: 7,
            content: {
                name: 'Shobha Shelke',
                points: 3000
            }
        },
        {
            rank: 8,
            content: {
                name: 'Prabhat Pandey',
                points: 2900
            }
        },
        {
            rank: 9,
            content: {
                name: 'Ravi Singh',
                points: 2500
            }
        },
        {
            rank: 10,
            content: {
                name: 'Samuel James Dharmavaram',
                points: 2400
            }
        },
    ]
    return (
        <div>
            {
                users.map((user, index) => {
                    return (
                        <LeaderboardRow
                            key={index}
                            rank={user.rank}
                            content={user.content}
                            withColor={{
                                backgroundColor: '#FFBF00',
                                textColor: '#000'
                            }}
                            withAnimation={{
                                animation: "zoom",
                                duration: 0.5,
                                delay: 0,
                            }}
                        />
                    )
                })
            }
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
            content: {
                name: 'Rohit Dhende'
            }
        },
        {
            rank: 1,
            content: {
                name: 'Rahul Verma'
            }
        },
        {
            rank: 2,
            content: {
                name: 'Krishna Pant'
            }
        },
        {
            rank: 3,
            content: {
                name: 'Udhav Varma'
            }
        },
        {
            rank: 4,
            content: {
                name: 'Ganesh Devkar'
            }
        },
        {
            rank: 5,
            content: {
                name: 'Apurva Surve'
            }
        },
        {
            rank: 7,
            content: {
                name: 'Shobha Shelke'
            }
        },
        {
            rank: 8,
            content: {
                name: 'Prabhat Pandey'
            }
        },
        {
            rank: 9,
            content: {
                name: 'Ravi Singh'
            }
        },
        {
            rank: 10,
            content: {
                name: 'Samuel James Dharmavaram'
            }
        },
    ]
    return (
        <div>
            {
                users.map((user, index) => {
                    return (
                        <LeaderboardRow
                            key={index}
                            rank={user.rank}
                            content={user.content}
                            withColor={{
                                backgroundColor: '#FFBF00',
                                textColor: '#000'
                            }}
                            withAnimation={{
                                animation: "zoom",
                                duration: 0.5,
                                delay: 0,
                            }}
                        />
                    )
                })
            }
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
            content: {
                name: 'Rohit Dhende'
            }
        },
        {
            rank: 1,
            content: {
                name: 'Rahul Verma'
            }
        },
        {
            rank: 2,
            content: {
                name: 'Krishna Pant'
            }
        },
        {
            rank: 3,
            content: {
                name: 'Udhav Varma'
            }
        },
        {
            rank: 4,
            content: {
                name: 'Ganesh Devkar'
            }
        },
        {
            rank: 5,
            content: {
                name: 'Apurva Surve'
            }
        },
        {
            rank: 7,
            content: {
                name: 'Shobha Shelke'
            }
        },
        {
            rank: 8,
            content: {
                name: 'Prabhat Pandey'
            }
        },
        {
            rank: 9,
            content: {
                name: 'Ravi Singh'
            }
        },
        {
            rank: 10,
            content: {
                name: 'Samuel James Dharmavaram'
            }
        },
    ]
    return (
        <div style={{ width: "290px" }}>
            {
                users.map((user, index) => {
                    return (
                        <LeaderboardRow
                            key={index}
                            rank={user.rank}
                            content={user.content}
                            withColor={{
                                backgroundColor: '#FFBF00',
                                textColor: '#000'
                            }}
                            withAnimation={{
                                animation: "zoom",
                                duration: 0.5,
                                delay: 0,
                            }}
                        />
                    )
                })
            }
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
            content: {
                name: 'Rohit Dhende',
                points: 5000
            }
        },
        {
            rank: 1,
            content: {
                name: 'Rahul Verma',
                points: 4500
            }
        },
        {
            rank: 2,
            content: {
                name: 'Krishna Pant',
                points: 3900
            }
        },
        {
            rank: 3,
            content: {
                name: 'Udhav Varma',
                points: 3900
            }
        },
        {
            rank: 4,
            content: {
                name: 'Ganesh Devkar',
                points: 3611
            }
        },
        {
            rank: 5,
            content: {
                name: 'Apurva Surve',
                points: 3244
            }
        },
        {
            rank: 7,
            content: {
                name: 'Shobha Shelke',
                points: 3000
            }
        },
        {
            rank: 8,
            content: {
                name: 'Prabhat Pandey',
                points: 2900
            }
        },
        {
            rank: 9,
            content: {
                name: 'Ravi Singh',
                points: 2500
            }
        },
        {
            rank: 10,
            content: {
                name: 'Samuel James Dharmavaram',
                points: 2400
            }
        },
    ]
    return (
        <div style={{ width: "290px" }}>
            {
                users.map((user, index) => {
                    return (
                        <LeaderboardRow
                            key={index}
                            rank={user.rank}
                            content={user.content}
                            withColor={{
                                backgroundColor: '#FFBF00',
                                textColor: '#000'
                            }}
                            withAnimation={{
                                animation: "zoom",
                                duration: 0.5,
                                delay: 0,
                            }}
                        />
                    )
                })
            }
        </div>
    );
};