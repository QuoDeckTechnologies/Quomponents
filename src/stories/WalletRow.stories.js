import React from "react";
import WalletRow from "../components/WalletRow/WalletRow.react";

const dictionary = JSON.stringify({
    hi: {
        walletRow: {
            months: {
                Jan: "जनवरी",
                Feb: "फ़रवरी",
                Mar: "मार्च",
                Apr: "अप्रैल",
                May: "मई",
                Jun: "जून",
                Jul: "जुलाई",
                Aug: "अगस्त",
                Sep: "सितम्बर",
                Oct: "अक्टूबर",
                Nov: "नवम्बर",
                Dec: "दिसम्बर",
            },
            coins: "सिक्के"
        },
    },
});
export default {
    title: "Design System/WalletRow",
    component: WalletRow,
    argTypes: {
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
        withTranslation: {
            table: {
                category: "with-Params",
                defaultValue: {
                    lang: "",
                    tgt: "",
                    dictionary: "",
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
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a WalletRow with date and player's coins",
        a11y: { disable: true },
        docs: { iframeHeight: 500 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <WalletRow {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        date: '2016-01-04 10:34:23',
        coins: 1000
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
    withTranslation: {
        lang: "en",
        tgt: "walletRow",
        dictionary: dictionary,
    },
    isHidden: false
};
Default.parameters = {
    docs: {
        source: {
            code: `<WalletRow {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// MultipleWalletRow
// -------------------------------------------------------------
export const MultipleWalletRow = (args) => {
    let data = [
        {
            content: {
                date: '2016-01-04 10:34:23',
                coins: 5000
            }
        },
        {
            content: {
                date: '2016-01-05 10:34:23',
                coins: 4500
            }
        },
        {
            content: {
                date: '2017-04-11 10:34:23',
                coins: 3900
            }
        },
        {
            content: {
                date: '2018-12-22 10:34:23',
                coins: 3900
            }
        },
        {
            content: {
                date: '2019-11-16 10:34:23',
                coins: 3611
            }
        },
        {
            content: {
                date: '2020-12-07 10:34:23',
                coins: 3244
            }
        },
        {
            content: {
                date: '2020-01-03 10:34:23',
                coins: 3000
            }
        }
    ]
    return (
        <div>
            {
                data.map((user, index) => {
                    return (
                        <WalletRow
                            key={index}
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
                            withTranslation={{
                                lang: "en",
                                tgt: "walletRow",
                                dictionary: dictionary,
                            }}
                        />
                    )
                })
            }
        </div>
    );
};
// -------------------------------------------------------------
// MultipleWalletRowsWithFixedDivSize
// -------------------------------------------------------------
export const MultipleWalletRowsWithFixedDivSize = (args) => {
    let data = [
        {
            content: {
                date: '2016-01-04 10:34:23',
                coins: 5000
            }
        },
        {
            content: {
                date: '2016-01-05 10:34:23',
                coins: 4500
            }
        },
        {
            content: {
                date: '2017-04-11 10:34:23',
                coins: 3900
            }
        },
        {
            content: {
                date: '2018-12-22 10:34:23',
                coins: 3900
            }
        },
        {
            content: {
                date: '2019-11-16 10:34:23',
                coins: 3611
            }
        },
        {
            content: {
                date: '2020-12-07 10:34:23',
                coins: 3244
            }
        },
        {
            content: {
                date: '2020-01-03 10:34:23',
                coins: 3000
            }
        }
    ]
    return (
        <div style={{ width: "290px" }}>
            {
                data.map((user, index) => {
                    return (
                        <WalletRow
                            key={index}
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
                            withTranslation={{
                                lang: "en",
                                tgt: "walletRow",
                                dictionary: dictionary,
                            }}
                        />
                    )
                })
            }
        </div>
    );
};
// -------------------------------------------------------------
// Translated AmplayfierDateBlock
// -------------------------------------------------------------
export const TranslatedWalletRow = Template.bind({});
TranslatedWalletRow.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "walletRow",
        dictionary: dictionary,
    },
};
TranslatedWalletRow.parameters = {
    docs: {
        source: {
            code: `<TranslatedWalletRow {...${JSON.stringify(
                TranslatedWalletRow.args,
                null,
                2
            )}}/>`,
        },
    },
};
