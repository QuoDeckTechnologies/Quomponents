import React from "react";
import RedeemCard from "../components/RedeemCard/RedeemCard.react";

const dictionary = JSON.stringify({
    hi: {
        redeemCard: {
            button: "मोचन",
            inprogress: "आपका मोचन अनुरोध प्रक्रिया में है",
            completed: "आपने इस ऑफ़र को भुना लिया है",
            left: "शेष"
        }
    },
    en: {
        redeemCard: {
            button: "Redeem",
            inprogress: "YOUR REDEMPTION REQUEST IS IN PROCESS",
            completed: "YOU HAVE REDEEMED THIS OFFER",
            left: "left"
        }
    }
});

export default {
    title: "Design System/RedeemCard",
    component: RedeemCard,
    argTypes: {
        id: "",
        name: "",
        description: "",
        image: "",
        cost: "",
        stock: {},
        status: {
            control: "select",
            options: ["Pending", "InProgress", "Completed"]
        },
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
                    accentColor: "",
                    textColor: "",
                    backgroundColor: "#fff",
                    hoverTextColor: "",
                    hoverBackgroundColor: "",
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
        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
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
            <div>
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a RedeemCard with offer details and display status as 'Pending','InProgress','Completed'",
        a11y: { disable: true },
        docs: { iframeHeight: 400 }
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RedeemCard {...args} />;
export const Default = Template.bind({});
Default.args = {
    id: "",
    name: "Yamaha FZ16 Bike",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
    cost: 500,
    stock: {
        left: 500,
        total: 1000
    },
    description: "A beast on the road, this motorbike commands respect.",
    status: "Pending",
    asPadded: "normal",
    withColor: {
        accentColor: "#AD2929",
        textColor: "#FFFFFF",
        backgroundColor: "#222A35",
        hoverTextColor: "",
        hoverBackgroundColor: "",
    },
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "redeemCard",
        dictionary: dictionary,
    },
    asFloated: "inline",
    isDisabled: false,
    isHidden: false
};
Default.parameters = {
    docs: {
        source: {
            code: `<RedeemCard 
            id= ""
            name= "Yamaha FZ16 Bike"
            image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU"
            cost= {500}
            stock= {{
                left: 500,
                total: 1000
            }}
            description= "A beast on the road, this motorbike commands respect."
            status= "Pending"
            asPadded= "normal"
            withColor= {{
                accentColor: "#AD2929",
                textColor: "#FFFFFF",
                backgroundColor: "#222A35",
                hoverTextColor: "",
                hoverBackgroundColor: "",
            }}
            withAnimation= {{
                animation: "collapse",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "en",
                tgt: "redeemCard",
                dictionary: dictionary,
            }}
            asFloated= "inline"
            isDisabled= {false}
            isHidden= {false}/>`,
        },
    },
};
// -------------------------------------------------------------
// ColoredRedeemCard
// -------------------------------------------------------------
export const ColoredRedeemCard = Template.bind({});
ColoredRedeemCard.args = {
    name: "Yamaha FZ16 Bike",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
    cost: 600,
    stock: {
        left: 1,
        total: 1000
    },
    description: "A beast on the road, this motorbike commands respect.",
    status: "Pending",
    withColor: {
        accentColor: "#AD2929",
        textColor: "#000",
        backgroundColor: "#FFE77AFF",
        hoverTextColor: "",
        hoverBackgroundColor: "",
    },
    withTranslation: {
        lang: "en",
        tgt: "redeemCard",
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
            code: `<RedeemCard 
            id= ""
            name= "Yamaha FZ16 Bike"
            image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU"
            cost= {600}
            stock= {{
                left: 1,
                total: 1000
            }}
            description= "A beast on the road, this motorbike commands respect."
            status= "Pending"
            asPadded= "normal"
            withColor= {{
                accentColor: "#AD2929",
                textColor: "#000",
                backgroundColor: "#FFE77AFF",
                hoverTextColor: "",
                hoverBackgroundColor: "",
            }}
            withAnimation= {{
                animation: "collapse",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "en",
                tgt: "redeemCard",
                dictionary: dictionary,
            }}
            asFloated= "inline"
            isDisabled= {false}
            isHidden= {false}/>`,
        },
    },
};

export const AllVariantsTemplate = (args) => {
    const baseObj1 = {
        name: "Yamaha FZ16 Bike",
        description: "A beast on the road, this motorbike commands respect.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
        cost: 600,
        stock: {
            left: 1,
            total: 1000
        },
        status: "Pending",
        withColor: {
            accentColor: "#AD2929",
            textColor: "",
            backgroundColor: "",
            hoverTextColor: "",
            hoverBackgroundColor: "",
        },
        withTranslation: {
            lang: "en",
            tgt: "redeemCard",
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
        name: "Yamaha FZ16 Bike",
        description: "A beast on the road, this motorbike commands respect.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
        cost: 600,
        stock: {
            left: 1,
            total: 1000
        },
        status: "InProgress",
        withColor: {
            accentColor: "#AD2929",
            textColor: "",
            backgroundColor: "",
            hoverTextColor: "",
            hoverBackgroundColor: "",
        },
        withTranslation: {
            lang: "en",
            tgt: "redeemCard",
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
        name: "Yamaha FZ16 Bike",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
        cost: 600,
        stock: {
            left: 1,
            total: 1000
        },
        description: "A beast on the road, this motorbike commands respect.",
        status: "Completed",
        withColor: {
            accentColor: "#AD2929",
            textColor: "",
            backgroundColor: "",
            hoverTextColor: "",
            hoverBackgroundColor: "",
        },
        withTranslation: {
            lang: "en",
            tgt: "redeemCard",
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
        tgt: "redeemCard",
        dictionary: dictionary,
    },
};
TranslatedRedeemCard.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the RedeemCard, add a  RedeemCard: {button, inprogress, completed, left } value to the dictionary.",
        },
        source: {
            code: `<RedeemCard 
            id= ""
            name= "Yamaha FZ16 Bike"
            image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU"
            cost= {500}
            stock= {{
                left: 500,
                total: 1000
            }}
            description= "A beast on the road, this motorbike commands respect."
            status= "Pending"
            asPadded= "normal"
            withColor= {{
                accentColor: "#AD2929",
                textColor: "#FFFFFF",
                backgroundColor: "#222A35",
                hoverTextColor: "",
                hoverBackgroundColor: "",
            }}
            withAnimation= {{
                animation: "collapse",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "hi",
                tgt: "redeemCard",
                dictionary: dictionary,
            }}
            asFloated= "inline"
            isDisabled= {false}
            isHidden= {false}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated RedeemCard
// -------------------------------------------------------------
export const AnimatedRedeemCard = Template.bind({});
AnimatedRedeemCard.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedRedeemCard.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the RedeemCard with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<RedeemCard 
            id= ""
            name= "Yamaha FZ16 Bike"
            image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU"
            cost= {500}
            stock= {{
                left: 500,
                total: 1000
            }}
            description= "A beast on the road, this motorbike commands respect."
            status= "Pending"
            asPadded= "normal"
            withColor= {{
                accentColor: "#AD2929",
                textColor: "#FFFFFF",
                backgroundColor: "#222A35",
                hoverTextColor: "",
                hoverBackgroundColor: "",
            }}
            withAnimation= {{
                animation: "slideRight",
                duration: 0.5,
                delay: 0,
            }}
            withTranslation= {{
                lang: "en",
                tgt: "redeemCard",
                dictionary: dictionary,
            }}
            asFloated= "inline"
            isDisabled= {false}
            isHidden= {false}/>`,
        },
    },
};
