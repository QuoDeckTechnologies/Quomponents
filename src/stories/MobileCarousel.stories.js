import React from "react";
import MobileCarousel from "../components/Carousel/MobileCarousel/MobileCarousel.react";
const dictionary = JSON.stringify({
    hi: {
        mobileCarousel: {
            buttonText: "देखें",
        },
    },
});
export default {
    title: "Design System/Carousel/MobileCarousel",
    component: MobileCarousel,
    argTypes: {
        content: [{}],
    },
    asEmphasis: {
        control: "select",
        options: ["text", "outlined", "contained"],
        table: {
            category: "as-Flags",
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
    withColor: {
        table: {
            category: "with-Params",
            defaultValue: {
                backgroundColor: "",
                accentColor: "",
                accentBackgroundColor: "",
                textColor: "",
                buttonBackgroundColor: "",
                buttonTextColor: "",
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
    isCircular: {
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
    onClick: {
        table: {
            category: "Events",
            defaultValue: null,
        },
    },
    parameters: {
        componentSubheader: "Displays a mobile carousel with HCards.",
        a11y: { disable: true },
        docs: {
            iframeHeight: 600,
        }
    },
};


// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <MobileCarousel {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: [{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    },
    {
        image: {
            id: "image-2",
            extention: "",
        },
        name: "Pipeline Tracking",
        description: "Some important tips to optimize and power up your pipeline",
        buttonText: "Check",
    },
    {
        image: {
            id: "image-3",
            extention: "",
        },
        name: "GhostBuster",
        description: "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
        buttonText: "Check",
    }],
    imageLibrary: [
        {
            id: "image-1",
            image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
        }, {
            id: "image-2",
            image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",

        }, {
            id: "image-3",
            image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
        },
    ],
    asEmphasis: "contained",
    isCircular: false,
    withColor: {
        backgroundColor: "",
        accentColor: "",
        accentBackgroundColor: "",
        textColor: "",
        buttonBackgroundColor: "",
        buttonTextColor: "",
    },
    withTranslation: {
        lang: "en",
        tgt: "mobileCarousel",
        dictionary: dictionary,
    },
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<MobileCarousel {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// TranslatedMobileCarousel
// -------------------------------------------------------------
export const TranslatedMobileCarousel = Template.bind({});
TranslatedMobileCarousel.args = {
    content: [{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    },
    {
        image: {
            id: "image-2",
            extention: "",
        },
        name: "Pipeline Tracking",
        description: "Some important tips to optimize and power up your pipeline",
        buttonText: "Check",
    },
    {
        image: {
            id: "image-3",
            extention: "",
        },
        name: "GhostBuster",
        description: "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
        buttonText: "Check",
    }],
    imageLibrary: [
        {
            id: "image-1",
            image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
        }, {
            id: "image-2",
            image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",

        }, {
            id: "image-3",
            image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
        },
    ],
    isCircular: false,
    withColor: {
        backgroundColor: "",
        accentColor: "",
        accentBackgroundColor: "",
        textColor: "",
        buttonBackgroundColor: "",
        buttonTextColor: "",
    },
    withTranslation: {
        lang: "hi",
        tgt: "mobileCarousel",
        dictionary: dictionary,
    },
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isHidden: false,
};
TranslatedMobileCarousel.parameters = {
    docs: {
        source: {
            code: `<MobileCarousel {...${JSON.stringify(TranslatedMobileCarousel.args, null, 2)}}/>`,
        },
    },
};