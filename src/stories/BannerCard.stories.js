import React from "react";
import BannerCard from "../components/Carousel/BannerCard/BannerCard.react";

const dictionary = JSON.stringify({
    hi: {
        loading: "बस एक मिनट...",
        bannercard: { title: "बातचीत कक्ष", subTitle: "प्रतियोगिता खेलें और फ्लिपकार्ट वाउचर अर्जित करने के लिए जीतें।" },
        ribbon: {
            new: "नया",
            restricted: "प्रतिबंधित",
            premium: "अधिमूल्य",
            free: "नि: शुल्क"
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
        componentSubtitle: "Displays a banner card with box for text and label",
        a11y: { disable: true },
        docs: {
            iframeHeight: 600,
        },
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
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        label: "restricted",
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

export const CardWithoutLabel = Template.bind({});
CardWithoutLabel.args = {
    ...Default.args,
    data: {
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        label: "",
        box: {
            title: "The Negotiation Room",
            subTitle: "Play the contest and win to earn Flipkart vouchers."
        }
    }
};
CardWithoutLabel.parameters = {
    docs: {
        description: {
            story: "We can pass image in url base64 format or pass an imported image.",
        },
        source: {
            code: `<BannerCard {...${JSON.stringify(CardWithoutLabel.args, null, 2)}}/>`,
        },
    },
};

export const CardWithoutBox = Template.bind({});
CardWithoutBox.args = {
    ...Default.args,
    data: {
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        label: "new"
    }
};
CardWithoutBox.parameters = {
    docs: {
        source: {
            code: `<BannerCard {...${JSON.stringify(CardWithoutBox.args, null, 2)}}/>`,
        },
    },
};

export const TranslatedCard = Template.bind({});
TranslatedCard.args = {
    ...Default.args,
    data: {
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        label: "new",
        box: {
            title: "The Negotiation Room",
            subTitle: "Play the contest and win to earn Flipkart vouchers."
        }
    },
    withTranslation: {
        lang: "hi",
        tgt: "bannercard",
        dictionary: dictionary,
    },
};
TranslatedCard.parameters = {
    docs: {
        description: {
            story: "We can translate the text of card",
        },
        source: {
            code: `<BannerCard {...${JSON.stringify(TranslatedCard.args, null, 2)}}/>`,
        },
    },
};

export const AnimatedBox = Template.bind({});
AnimatedBox.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedBox.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of text box",
        },
        source: {
            code: `<BannerCard {...${JSON.stringify(AnimatedBox.args, null, 2)}}/>`,
        },
    },
};