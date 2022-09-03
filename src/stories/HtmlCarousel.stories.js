import React from "react";
import HtmlCarousel from "../components/Carousel/HtmlCarousel/HtmlCarousel.react";

const dictionary = JSON.stringify({
    hi: {
        bannerCard: { header: "", content: "" },
        ribbon: {
            new: "नया",
            restricted: "प्रतिबंधित",
            premium: "अधिमूल्य",
            free: "नि: शुल्क",
        },
    },
});
export default {
    title: "Design System/Carousel/HtmlCarousel",
    component: HtmlCarousel,
    argTypes: {
        children: ["<div>Slide</>"],
    },
    onClick: {
        table: {
            category: "Events",
            defaultValue: null,
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
        componentSubheader: "Displays a Html carousel.",
        a11y: { disable: true },
        docs: {
            iframeHeight: 800,
        },
    },
};

let dataprops = {
    asVariant: "warning",
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <HtmlCarousel {...args} />;
export const Default = Template.bind({});
Default.args = {
    children: [<div>Slide1</div>, <div>Slide2</div>, <div>Slide3</div>],
    withTranslation: {
        lang: "en",
        tgt: "bannerCard",
        dictionary: dictionary,
    },
};
Default.parameters = {
    docs: {
        source: {
            code: `<HtmlCarousel {...${JSON.stringify(
                Default.args,
                null,
                2
            )}}/>`,
        },
    },
};
