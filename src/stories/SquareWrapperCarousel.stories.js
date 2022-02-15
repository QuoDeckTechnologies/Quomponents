import React from "react";
import SquareWrapperCarousel from "../components/Carousel/SquareWrapperCarousel/SquareWrapperCarousel.react";


export default {
    title: "Design System/Carousel/SquareWrapperCarousel",
    component: SquareWrapperCarousel,
    argTypes: {
        content: [{
            image: "",
            tag: "",
            topics: [],
            header: "",
            props: {}
        }],
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
    isDisabled: false,
    isHidden: false
}

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SquareWrapperCarousel {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: [{
        image: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
        header: "Balloon Burst",
        tag: "new",
        checked: true,
        props: {
            ...dataprops,
            asVariant: "secondary"
        }
    },
    {
        image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
        tag: "premium",
        checked: true,
        header: "Cityscape",
        props: {
            ...dataprops,
        }
    },
    {
        image: "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
        tag: "restricted",
        checked: false,
        header: "GhostBuster",
        props: {
            ...dataprops,
        }
    }],

    // withAnimation: {
    //     animation: "slideRight",
    //     duration: 0.5,
    //     delay: 0,
    // },

};
Default.parameters = {
    docs: {
        source: {
            code: `<SquareWrapperCarousel {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// SquareWrapperCarouselWithoutBox
// -------------------------------------------------------------
export const SquareWrapperCarouselWithoutBox = Template.bind({});
SquareWrapperCarouselWithoutBox.args = {
    content: [{
        image: "https://i.pinimg.com/564x/fc/cd/9f/fccd9ff066d6531ad19c042560cf78a0.jpg",
        tag: "new",
        props: {
            ...dataprops,
            asVariant: "secondary"
        }
    },
    {
        image: "https://i.pinimg.com/564x/68/ed/88/68ed881d5ff0dbe232ff8d4d2e186a99.jpg",
        tag: "premium",
        props: {
            ...dataprops,
        }
    },
    {
        image: "https://i.pinimg.com/564x/64/0b/57/640b5709e0cf312978a3912e736110e2.jpg",
        tag: "restricted",
        props: {
            ...dataprops,
        }
    }],

};
SquareWrapperCarouselWithoutBox.parameters = {
    docs: {
        description: {
            story: "We can see the Square Carousel without any Box Header and Content",
        },
        source: {
            code: `<SquareWrapperCarousel {...${JSON.stringify(SquareWrapperCarouselWithoutBox.args, null, 2)}}/>`,
        },
    },
};


// -------------------------------------------------------------
// SquareWrapperCarouselWithoutTag
// -------------------------------------------------------------
export const SquareWrapperCarouselWithoutTag = Template.bind({});
SquareWrapperCarouselWithoutTag.args = {
    content: [{
        image: " https://i.pinimg.com/564x/fc/cd/9f/fccd9ff066d6531ad19c042560cf78a0.jpg",
        header: "The Negotiation Room",
        content: "Play the contest and win to earn Flipkart vouchers.",
        props: {
            ...dataprops,
            asVariant: "secondary"
        }
    },
    {
        image: "https://i.pinimg.com/564x/68/ed/88/68ed881d5ff0dbe232ff8d4d2e186a99.jpg",
        header: "The Negotiation Room",
        content: "  ",
        props: {
            ...dataprops,
        }
    },
    {
        image: "https://i.pinimg.com/564x/64/0b/57/640b5709e0cf312978a3912e736110e2.jpg",
        header: "What is Negotiation Room?",
        content: "Play the contest and win to earn Flipkart vouchers",
        props: {
            ...dataprops,
        }
    }],

};
SquareWrapperCarouselWithoutTag.parameters = {
    docs: {
        description: {
            story: "We can see the Square Carousel without any Tag",
        },
        source: {
            code: `<SquareWrapperCarousel {...${JSON.stringify(SquareWrapperCarouselWithoutTag.args, null, 2)}}/>`,
        },
    },
};


export const AnimatedSquareWrapperCarousel = Template.bind({});
AnimatedSquareWrapperCarousel.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedSquareWrapperCarousel.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the SquareWrapperCarousel with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedSquareWrapperCarousel {...${JSON.stringify(
                AnimatedSquareWrapperCarousel.args,
                null,
                2
            )}}/>`,
        },
    },
};
