import React from "react";
import SquareCarousel from "../components/Carousel/SquareCarousel/SquareCarousel.react";

const dictionary = JSON.stringify({
    hi: {
        loading: "बस एक मिनट...",
        squarecarousel: { header: "बातचीत कक्ष", content: "प्रतियोगिता खेलें और फ्लिपकार्ट वाउचर अर्जित करने के लिए जीतें।" },
        ribbon: {
            new: "नया",
            restricted: "प्रतिबंधित",
            premium: "अधिमूल्य",
            free: "नि: शुल्क"
        }
    },
});

export default {
    title: "Design System/Carousel/SquareCarousel",
    component: SquareCarousel,
    argTypes: {
        content: [{
            image: "",
            tag: "",
            header: "",
            content: "",
            props: {}
        }],
    },
    decorators: [
        (story) => (
            <div
                style={{
                    width: "100%",
                    textAlign: "center"
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubheader: "Displays a banner carousel.",
        a11y: { disable: true },
        docs: {
            iframeHeight: 600,
        }
    },
};

let dataprops = {
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
    isHidden: false
}

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SquareCarousel {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: [{
        image:" https://i.pinimg.com/564x/fc/cd/9f/fccd9ff066d6531ad19c042560cf78a0.jpg",
        tag: "new",
        header: "The Negotiation Room",
        content: "Play the contest and win to earn Flipkart vouchers.",
        props: {
            ...dataprops,
            asVariant: "secondary"
        }
    },
    {
        image: "https://i.pinimg.com/564x/68/ed/88/68ed881d5ff0dbe232ff8d4d2e186a99.jpg",
        tag: "premium",
        header: "The Negotiation Room",
        content: "  ",
        props: {
            ...dataprops,
        }
    },
    {
        image: "https://i.pinimg.com/564x/64/0b/57/640b5709e0cf312978a3912e736110e2.jpg",
        tag: "restricted",
        header: "What is Lorem Ipsum?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        props: {
            ...dataprops,
        }
    }],

};
Default.parameters = {
    docs: {
        source: {
            code: `<SquareCarousel {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

