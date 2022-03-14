import React from "react";
import HtmlCarousel from "../components/Carousel/HtmlCarousel/HtmlCarousel.react";
export default {
    title: "Design System/Carousel/HtmlCarousel",
    component: HtmlCarousel,
    argTypes: {
        content: [{
            image: "",
            tag: "",
            content: "",
            props: {}
        }],
    },
    onClick: {
        table: {
            category: "Events",
            defaultValue: null,
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
            iframeHeight: 800,
        }
    },
};

let dataprops = {
    asVariant: "warning",
}
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <HtmlCarousel {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: [{
        image: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
        content: "This is HtmlCarousel, Imported from banner card.",
        tag: "new",
        props: {
            ...dataprops,
            asVariant: "primary",
        }
    },
    {
        image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
        tag: "premium",
        content: "This is HtmlCarousel, Imported from banner card.",
        props: {
            ...dataprops,
            asVariant: "secondary",
        }
    },
    {
        image: "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
        tag: "restricted",
        content: "This is HtmlCarousel, Imported from banner card.",
        props: {
            ...dataprops,
            asVariant: "warning",
        }
    }],
};
Default.parameters = {
    docs: {
        source: {
            code: `<HtmlCarousel {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// HtmlCarouselWithoutBox
// -------------------------------------------------------------
export const HtmlCarouselWithoutBox = Template.bind({});
HtmlCarouselWithoutBox.args = {
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
HtmlCarouselWithoutBox.parameters = {
    docs: {
        description: {
            story: "We can see the Square Carousel without any Box Header and Content",
        },
        source: {
            code: `<HtmlCarousel {...${JSON.stringify(HtmlCarouselWithoutBox.args, null, 2)}}/>`,
        },
    },
};


// -------------------------------------------------------------
// HtmlCarouselWithoutTag
// -------------------------------------------------------------
export const HtmlCarouselWithoutTag = Template.bind({});
HtmlCarouselWithoutTag.args = {
    content: [{
        image: " https://i.pinimg.com/564x/fc/cd/9f/fccd9ff066d6531ad19c042560cf78a0.jpg",
        content: "Play the contest and win to earn Flipkart vouchers.",
        props: {
            ...dataprops,
            asVariant: "secondary"
        }
    },
    {
        image: "https://i.pinimg.com/564x/68/ed/88/68ed881d5ff0dbe232ff8d4d2e186a99.jpg",
        content: " Play the contest and win to earn Flipkart vouchers",
        props: {
            ...dataprops,
        }
    },
    {
        image: "https://i.pinimg.com/564x/64/0b/57/640b5709e0cf312978a3912e736110e2.jpg",
        content: "Play the contest and win to earn Flipkart vouchers",
        props: {
            ...dataprops,
        }
    }],

};
HtmlCarouselWithoutTag.parameters = {
    docs: {
        description: {
            story: "We can see the Square Carousel without any Tag",
        },
        source: {
            code: `<HtmlCarousel {...${JSON.stringify(HtmlCarouselWithoutTag.args, null, 2)}}/>`,
        },
    },
};

