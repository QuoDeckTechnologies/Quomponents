import React from "react";
import LeaderboardRow from "../components/LeaderboardRow/LeaderboardRow.react";

export default {
    title: "Design System/LeaderboardRow/LeaderboardRow",
    component: LeaderboardRow,
    argTypes: {
        position: 0,
        record: {},
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
        isDisabled: {
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
                    fontSize: "1.25em",
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
    position: 0,
    record: {
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
    isDisabled: false,
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
            position: 0,
            record: {
                name: 'Rohit Dhende',
                points: 5000
            }
        },
        {
            position: 1,
            record: {
                name: 'Rahul Verma',
                points: 4500
            }
        },
        {
            position: 2,
            record: {
                name: 'Krishna Pant',
                points: 3900
            }
        },
        {
            position: 3,
            record: {
                name: 'Udhav Varma',
                points: 3900
            }
        },
        {
            position: 4,
            record: {
                name: 'Ganesh Devkar',
                points: 3611
            }
        },
        {
            position: 5,
            record: {
                name: 'Apurva Surve',
                points: 3244
            }
        },
        {
            position: 7,
            record: {
                name: 'Shobha Shelke',
                points: 3000
            }
        },
        {
            position: 8,
            record: {
                name: 'Prabhat Pandey',
                points: 2900
            }
        },
        {
            position: 9,
            record: {
                name: 'Ravi Singh',
                points: 2500
            }
        },
        {
            position: 10,
            record: {
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
                            position={user.position}
                            record={user.record}
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
            position: 0,
            record: {
                name: 'Rohit Dhende'
            }
        },
        {
            position: 1,
            record: {
                name: 'Rahul Verma'
            }
        },
        {
            position: 2,
            record: {
                name: 'Krishna Pant'
            }
        },
        {
            position: 3,
            record: {
                name: 'Udhav Varma'
            }
        },
        {
            position: 4,
            record: {
                name: 'Ganesh Devkar'
            }
        },
        {
            position: 5,
            record: {
                name: 'Apurva Surve'
            }
        },
        {
            position: 7,
            record: {
                name: 'Shobha Shelke'
            }
        },
        {
            position: 8,
            record: {
                name: 'Prabhat Pandey'
            }
        },
        {
            position: 9,
            record: {
                name: 'Ravi Singh'
            }
        },
        {
            position: 10,
            record: {
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
                            position={user.position}
                            record={user.record}
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
            position: 0,
            record: {
                name: 'Rohit Dhende'
            }
        },
        {
            position: 1,
            record: {
                name: 'Rahul Verma'
            }
        },
        {
            position: 2,
            record: {
                name: 'Krishna Pant'
            }
        },
        {
            position: 3,
            record: {
                name: 'Udhav Varma'
            }
        },
        {
            position: 4,
            record: {
                name: 'Ganesh Devkar'
            }
        },
        {
            position: 5,
            record: {
                name: 'Apurva Surve'
            }
        },
        {
            position: 7,
            record: {
                name: 'Shobha Shelke'
            }
        },
        {
            position: 8,
            record: {
                name: 'Prabhat Pandey'
            }
        },
        {
            position: 9,
            record: {
                name: 'Ravi Singh'
            }
        },
        {
            position: 10,
            record: {
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
                            position={user.position}
                            record={user.record}
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
            position: 0,
            record: {
                name: 'Rohit Dhende',
                points: 5000
            }
        },
        {
            position: 1,
            record: {
                name: 'Rahul Verma',
                points: 4500
            }
        },
        {
            position: 2,
            record: {
                name: 'Krishna Pant',
                points: 3900
            }
        },
        {
            position: 3,
            record: {
                name: 'Udhav Varma',
                points: 3900
            }
        },
        {
            position: 4,
            record: {
                name: 'Ganesh Devkar',
                points: 3611
            }
        },
        {
            position: 5,
            record: {
                name: 'Apurva Surve',
                points: 3244
            }
        },
        {
            position: 7,
            record: {
                name: 'Shobha Shelke',
                points: 3000
            }
        },
        {
            position: 8,
            record: {
                name: 'Prabhat Pandey',
                points: 2900
            }
        },
        {
            position: 9,
            record: {
                name: 'Ravi Singh',
                points: 2500
            }
        },
        {
            position: 10,
            record: {
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
                            position={user.position}
                            record={user.record}
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