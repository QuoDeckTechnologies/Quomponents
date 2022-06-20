import React from "react";
import QuoCarousel from "../components/Carousel/QuoCarousel/QuoCarousel.react";
import HCard from "../components/HCard/HCard.react"
import VCardWithButton from "../components/VCardWithButton/VCardWithButton.react"

const dictionary = JSON.stringify({
    hi: {
        quoCarousel: {
            buttonText: "देखें",
        },
    },
});
export default {
    title: "Design System/Carousel/QuoCarousel",
    component: QuoCarousel,
    argTypes: {
        content: [{}],
        arrows: false,
        dots: false,
        autoPlay: false,
        infinite: true,
        slidesToShow: 1,
        initialSlide: 1,
        asNavFor: "",
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
        componentSubheader: "Displays a carousel with content.",
        a11y: { disable: true },
        docs: {
            iframeHeight: 600,
        }
    },
};


// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <QuoCarousel {...args} />
export const Default = Template.bind({});
Default.args = {
    content: [<HCard onClick={() => { }} content={{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    }}
        imageLibrary={[
            {
                id: "image-1",
                image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            }]} />,
    <HCard onClick={() => { }} content={{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    }}
        imageLibrary={[
            {
                id: "image-1",
                image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            }]} />,
    <HCard onClick={() => { }} content={{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    }}
        imageLibrary={[
            {
                id: "image-1",
                image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            }]}
    />],
    arrows: false,
    autoPlay: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    initialSlide: 1,
    asNavFor: "",
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
        tgt: "quoCarousel",
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
            code: `<QuoCarousel {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// VCard
// -------------------------------------------------------------
export const VCard = Template.bind({});
VCard.args = {
    content: [<VCardWithButton onClick={() => { }} content={{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    }}
        imageLibrary={[
            {
                id: "image-1",
                image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            }]} />,
    <VCardWithButton onClick={() => { }} content={{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    }}
        imageLibrary={[
            {
                id: "image-1",
                image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            }]} />,
    <VCardWithButton onClick={() => { }} content={{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    }}
        imageLibrary={[
            {
                id: "image-1",
                image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            }]}
    />,
    <VCardWithButton onClick={() => { }} content={{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    }}
        imageLibrary={[
            {
                id: "image-1",
                image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            }]}
    />,
    <VCardWithButton onClick={() => { }} content={{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    }}
        imageLibrary={[
            {
                id: "image-1",
                image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            }]}
    />,],
    arrows: true,
    autoPlay: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    initialSlide: 1,
    asNavFor: "",
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
        tgt: "quoCarousel",
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
VCard.parameters = {
    docs: {
        source: {
            code: `<QuoCarousel {...${JSON.stringify(VCard.args, null, 2)}}/>`,
        },
    },
};