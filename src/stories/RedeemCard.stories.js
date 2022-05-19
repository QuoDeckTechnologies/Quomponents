import React from "react";
import RedeemCard from "../components/RedeemCard/RedeemCard.react";

export default {
    title: "Design System/RedeemCard/RedeemCard",
    component: RedeemCard,
    argTypes: {
        content: {
            name: "",
            image: "",
            cost: "",
            stock: {},
            label: "",
            redemptionStatus: false
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
                    backgroundColor: "#fff",
                },
            },
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
            table: {
                category: "as-Flags",
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
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a RedeemCard",
        a11y: { disable: true },
        docs: { iframeHeight: 570 },
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
        label: "A beast on the road, this motorbike commands respect.",
        redemptionStatus: "redeem"
    },
    withColor: {
        textColor: "",
        accentColor: "#AD2929",
        buttonTextColor: "",
        buttonBackgroundColor: "",
        buttonHoverBackgroundColor: "",
        buttonHoverTextColor: "",
        backgroundColor: "",
    },
    asFloated: "inline",
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<RedeemCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
