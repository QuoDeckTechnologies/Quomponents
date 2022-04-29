import React from "react";
import CaptionedParagraph from "../components/Templates/CaptionedParagraph/CaptionedParagraph.react";

export default {
    title: "Design System/Templates/CaptionedParagraph/CaptionedParagraph",
    component: CaptionedParagraph,
    argTypes: {
        data: {
            title: "",
            subtitle: "",
            label: "",
            caption: "",
            image: "",
            backgroundImage: "",
        },
        slideId: 0,
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
                    slideHeaderTextColor: "",
                    slideHeaderAccentColor: "",
                    slideHeaderBackgroundColor: "",
                    captionTextColor: "",
                    captionBackgroundColor: "",
                    buttonTextColor: "",
                    buttonBackgroundColor: "",
                    buttonHoverBackgroundColor: "",
                    buttonHoverTextColor: "",
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
        isHidden: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
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
        componentSubtitle: "Displays a CaptionedParagraph with SlideHeader and TextBlocks for general-purpose use.",
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
    return <CaptionedParagraph {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    data: {
        title: 'Lorem ipsum dolor sit amet',
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl, ut aliquet orci. Mauris id sapien felis. Nullam elementum enim tincidunt, facilisis lacus vitae, volutpat ligula.",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        backgroundImage: "https://www.mmppicture.co.in/wp-content/uploads/2020/08/CB-Background-43.jpg",
    },
    slideId: 0,
    asVariant: "warning",
    withColor: {
        backgroundColor: "",
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#C98787",
        captionTextColor: "#ffffff",
        captionBackgroundColor: "#C98787",
        textblockTextColor: "#121212",
        textblockBackgroundColor: "#ffffff",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<CaptionedParagraph {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Colored CaptionedParagraph
// -------------------------------------------------------------
export const ColoredCaptionedParagraph = Template.bind({});
ColoredCaptionedParagraph.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#7d8384",
        slideHeaderTextColor: "#454545",
        slideHeaderAccentColor: "#C1DC9E",
        slideHeaderBackgroundColor: "#DBDBDB",
        captionTextColor: "#454545",
        captionBackgroundColor: "#DBDBDB",
        textblockTextColor: "#AD2929",
        textblockBackgroundColor: "#C1DC9E",
    },
};
ColoredCaptionedParagraph.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the component.",
        },
        source: {
            code: `<CaptionedParagraph withColor={{backgroundColor: "#C98787", accentColor: "#D3D3D3", textColor: "#ffffff"}}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Animated CaptionedParagraph
// -------------------------------------------------------------
export const AnimatedCaptionedParagraph = Template.bind({});
AnimatedCaptionedParagraph.args = {
    ...Default.args,
    withAnimation: {
        animation: "fade",
        duration: 2,
        delay: 0,
    },
};
AnimatedCaptionedParagraph.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of CaptionedParagraph",
        },
        source: {
            code: `<CaptionedParagraph {...${JSON.stringify(
                AnimatedCaptionedParagraph.args,
                null,
                2
            )}}/>`,
        },
    },
};


