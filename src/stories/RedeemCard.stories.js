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
                    accentColor: "",
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
        image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
        cost: "500",
        stock: {
            left: 500,
            total: 1000
        },
        label: "A beast on the road, this motorbike commands respect.",
        redemptionStatus: "redeem"
    },
    withColor: {
        accentColor: "#AD2929"
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
