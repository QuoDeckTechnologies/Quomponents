import React from "react";
import BannerCard from "../components/Carousel/BannerCard/BannerCard.react";

const dictionary = JSON.stringify({
    hi: {
        loading: "बस एक मिनट...",
        bannercard: { title: "बातचीत कक्ष", subTitle: "प्रतियोगिता खेलें और फ्लिपकार्ट वाउचर अर्जित करने के लिए जीतें।" },
        ribbon: {
            New: "नया",
            Restricted: "प्रतिबंधित",
            Premium: "अधिमूल्य",
            Free: "नि: शुल्क"
        }
    },
});

export default {
    title: "Design System/Carousel/BannerCard",
    component: BannerCard,
    argTypes: {
        data: {
            image: "",
            label: "",
            box: {
                title: "",
                subTitle: ""
            }
        },
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
            table: {
                category: "as-Flags",
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
                    accentColor: "",
                    textColor: "",
                    hoverBackgroundColor: "",
                    hoverTextColor: "",
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
        isDisabled: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        isHidden: {
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
        componentSubtitle: "Displays a basic button for general-purpose use",
        a11y: { disable: true },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
    return (
        <div style={{ height: "36vh" }}>
            <BannerCard {...args} />
        </div>
    );
}

export const Default = Template.bind({});
Default.args = {
    data: {
        image: "https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg",
        label: "Restricted",
        box: {
            title: "The Negotiation Room",
            subTitle: "Play the contest and win to earn Flipkart vouchers."
        }
    },
    asVariant: "warning",
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "button",
        dictionary: dictionary,
    },

    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<BannerCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};