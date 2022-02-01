import React from "react";
import SquareCarousel from "../components/Carousel/SquareCarousel/SquareCarousel.react";


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
    withAnimation: {
        animation: "slideLeft",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isHidden: false
}

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SquareCarousel {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: [{
        image: "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
        tag: "new",
        header: "The Negotiation Room",
        content: "Play the contest and win to earn Flipkart vouchers.",
        props: {
            ...dataprops,
            asVariant: "secondary"
        }
    },
    {
        image: "https://i.pinimg.com/564x/d7/eb/54/d7eb54f1760884ebea92519ac653aa19.jpg",
        tag: "premium",
        header: "The Negotiation Room",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        props: {
            ...dataprops,
        }
    },
    {
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        tag: "restricted",
        header: "What is Lorem Ipsum?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        props: {
            ...dataprops,
        }
    }],

    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },

};
Default.parameters = {
    docs: {
        source: {
            code: `<SquareCarousel {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// SquareCarouselSquareCarouselWithoutBox
// -------------------------------------------------------------
export const SquareCarouselWithoutBox = Template.bind({});
SquareCarouselWithoutBox.args = {
    content: [{
        image: " https://i.pinimg.com/564x/fc/cd/9f/fccd9ff066d6531ad19c042560cf78a0.jpg",
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
SquareCarouselWithoutBox.parameters = {
    docs: {
        description: {
            story: "We can see the Square Carousel without any Box Header and Content",
        },
        source: {
            code: `<SquareCarousel {...${JSON.stringify(SquareCarouselWithoutBox.args, null, 2)}}/>`,
        },
    },
};


// -------------------------------------------------------------
// SquareCarouselWithoutTag
// -------------------------------------------------------------
export const SquareCarouselWithoutTag = Template.bind({});
SquareCarouselWithoutTag.args = {
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
SquareCarouselWithoutTag.parameters = {
    docs: {
        description: {
            story: "We can see the Square Carousel without any Tag",
        },
        source: {
            code: `<SquareCarousel {...${JSON.stringify(SquareCarouselWithoutTag.args, null, 2)}}/>`,
        },
    },
};


export const AnimatedSquareCarousel = Template.bind({});
AnimatedSquareCarousel.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedSquareCarousel.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the SquareCarousel with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedSquareCarousel {...${JSON.stringify(
                AnimatedSquareCarousel.args,
                null,
                2
            )}}/>`,
        },
    },
};
