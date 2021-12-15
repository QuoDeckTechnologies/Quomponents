import React from "react";
import BannerCarousel from "../components/Carousel/BannerCarousel/BannerCarousel.react";

const dictionary = JSON.stringify({
    hi: {
        loading: "बस एक मिनट...",
        bannercard: { title: "बातचीत कक्ष", subTitle: "प्रतियोगिता खेलें और फ्लिपकार्ट वाउचर अर्जित करने के लिए जीतें।" },
    },
});

export default {
    title: "Design System/Carousel/BannerCarousel",
    component: BannerCarousel,
    argTypes: {
        data: [{
            image: "",
            label: "",
            box: {
                title: "",
                subTitle: ""
            }
        }],
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

        isHidden: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },

        isLoading: {
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
        componentSubtitle: "Displays a basic button for general-purpose use",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <BannerCarousel {...args} />;
export const Default = Template.bind({});
Default.args = {
    data: [{
        image: "https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg",
        label: "New",
        box: {
            title: "The Negotiation Room",
            subTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
    },
    {
        image: "https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg",
        label: "Recommended",
        box: {
            title: "What is Lorem Ipsum",
            subTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
    },
    {
        image: "https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg",
        label: "New",
        box: {
            title: "The Negotiation Room",
            subTitle: "Play the contest and win to earn Flipkart vouchers."
        }
    }],
    asVariant: "primary",
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
    isLoading: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<BannerCarousel {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};