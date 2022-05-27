import React from "react";
import RedeemCard from "../components/RedeemCard/RedeemCard.react";

const dictionary = JSON.stringify({
    hi: {
        RedeemCard: {
            button: "मोचन",
            inprogress: "आपका मोचन अनुरोध प्रक्रिया में है",
            completed: "आपने इस ऑफ़र को भुना लिया है"
        }
    },
    en: {
        RedeemCard: {
            button: "Redeem",
            inprogress: "YOUR REDEMPTION REQUEST IS IN PROCESS",
            completed: "YOU HAVE REDEEMED THIS OFFER"
        }
    }
});

export default {
    title: "Design System/RedeemCard/RedeemCard",
    component: RedeemCard,
    argTypes: {
        content: {
            name: "",
            description: "",
            image: "",
            cost: "",
            stock: {},
            status: false
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    textColor: "",
                    accentColor: "",
                    buttonTextColor: "",
                    buttonBackgroundColor: "",
                    buttonHoverBackgroundColor: "",
                    buttonHoverTextColor: "",
                    backgroundColor: "#fff"
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
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
            table: {
                category: "as-Flags",
            }
        },
        isHidden: {
            table: {
                category: "is-Toggles",
                defaultValue: false
            }
        },
        isDisabled: {
            table: {
                category: "is-Toggles",
                defaultValue: false
            },
        },
        onClick: {
            table: {
                category: "Events",
                defaultValue: null
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
        componentSubtitle: "Displays a RedeemCard with offer details and display status as 'Pending','InProgress','Completed'",
        a11y: { disable: true },
        docs: { iframeHeight: 570 }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RedeemCard {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        name: "Yamaha FZ16 Bike",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
        cost: 500,
        stock: {
            left: 500,
            total: 1000
        },
        description: "A beast on the road, this motorbike commands respect.",
        status: "Pending"
    },
    withColor: {
        textColor: "",
        accentColor: "#AD2929",
        buttonTextColor: "",
        buttonBackgroundColor: "",
        buttonHoverBackgroundColor: "",
        buttonHoverTextColor: "",
        backgroundColor: ""
    },
    withTranslation: {
        lang: "en",
        tgt: "RedeemCard",
        dictionary: dictionary,
    },
    asFloated: "inline",
    isDisabled: false,
    isHidden: false
};
Default.parameters = {
    docs: {
        source: {
            code: `<RedeemCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// ColoredRedeemCard
// -------------------------------------------------------------
export const ColoredRedeemCard = Template.bind({});
ColoredRedeemCard.args = {
    content: {
        name: "Yamaha FZ16 Bike",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
        cost: 600,
        stock: {
            left: 1,
            total: 1000
        },
        description: "A beast on the road, this motorbike commands respect.",
        status: "Pending"
    },
    withColor: {
        textColor: "#000",
        accentColor: "#AD2929",
        buttonTextColor: "",
        buttonBackgroundColor: "#2C5F2DFF",
        buttonHoverBackgroundColor: "",
        buttonHoverTextColor: "",
        backgroundColor: "#FFE77AFF"
    },
    withTranslation: {
        lang: "en",
        tgt: "RedeemCard",
        dictionary: dictionary,
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0
    },
    asFloated: "inline",
    isDisabled: false,
    isHidden: false,
};
ColoredRedeemCard.parameters = {
    docs: {
        source: {
            code: `<RedeemCard {...${JSON.stringify(
                ColoredRedeemCard.args,
                null,
                2
            )}}/>`,
        },
    },
};

export const AllVariantsTemplate = (args) => {
    const baseObj1 = {
        content: {
            name: "Yamaha FZ16 Bike",
            description: "A beast on the road, this motorbike commands respect.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
            cost: 600,
            stock: {
                left: 1,
                total: 1000
            },
            status: "Pending"
        },
        withColor: {
            textColor: "",
            accentColor: "#AD2929",
            buttonTextColor: "",
            buttonBackgroundColor: "#2C5F2DFF",
            buttonHoverBackgroundColor: "",
            buttonHoverTextColor: "",
            backgroundColor: "",
        },
        withTranslation: {
            lang: "en",
            tgt: "RedeemCard",
            dictionary: dictionary,
        },
        withAnimation: {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        },
        asFloated: "inline",
        isDisabled: false,
        isHidden: false,
    };
    const baseObj2 = {
        content: {
            name: "Yamaha FZ16 Bike",
            description: "A beast on the road, this motorbike commands respect.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
            cost: 600,
            stock: {
                left: 1,
                total: 1000
            },
            status: "InProgress"
        },
        withColor: {
            textColor: "",
            accentColor: "#AD2929",
            buttonTextColor: "",
            buttonBackgroundColor: "#2C5F2DFF",
            buttonHoverBackgroundColor: "",
            buttonHoverTextColor: "",
            backgroundColor: "",
        },
        withTranslation: {
            lang: "en",
            tgt: "RedeemCard",
            dictionary: dictionary,
        },
        withAnimation: {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        },
        asFloated: "inline",
        isDisabled: false,
        isHidden: false,
    };
    const baseObj3 = {
        content: {
            name: "Yamaha FZ16 Bike",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
            cost: 600,
            stock: {
                left: 1,
                total: 1000
            },
            description: "A beast on the road, this motorbike commands respect.",
            status: "Completed"
        },
        withColor: {
            textColor: "",
            accentColor: "#AD2929",
            buttonTextColor: "",
            buttonBackgroundColor: "#2C5F2DFF",
            buttonHoverBackgroundColor: "",
            buttonHoverTextColor: "",
            backgroundColor: "",
        },
        withTranslation: {
            lang: "en",
            tgt: "RedeemCard",
            dictionary: dictionary,
        },
        withAnimation: {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        },
        asFloated: "inline",
        isDisabled: false,
        isHidden: false,
    };
    return (
        <div>
            <RedeemCard
                {...Object.assign({}, baseObj1, {
                })}
            />
            <RedeemCard
                {...Object.assign({}, baseObj2, {
                })}
            />
            <RedeemCard
                {...Object.assign({}, baseObj3, {
                })}
            />
        </div>
    );
};

// -------------------------------------------------------------
// Translated RedeemCard
// -------------------------------------------------------------
export const TranslatedRedeemCard = Template.bind({});
TranslatedRedeemCard.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "RedeemCard",
        dictionary: dictionary,
    },
};
TranslatedRedeemCard.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the RedeemCard, add a content:{text:{title, subTitle},label} value to the dictionary.",
        },
        source: {
            code: `<RedeemCard {...${JSON.stringify(
                TranslatedRedeemCard.args,
                null,
                2
            )}}/>`,
        },
    },
};