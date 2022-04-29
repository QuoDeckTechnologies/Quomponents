import React from "react";
import ImageWithCaption from "../components/Templates/ImageWithCaption/ImageWithCaption.react";

export default {
    title: "Design System/Templates/ImageWithCaption/ImageWithCaption",
    component: ImageWithCaption,
    argTypes: {
        data: {
            title: "",
            subtitle: "",
            caption: "",
            image: "",
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
        componentSubtitle: "Displays a ImageWithCaption with SlideHeader, TextBlock and Button for general-purpose use.",
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
    return <ImageWithCaption {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    data: {
        title: 'Lorem ipsum dolor sit amet',
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
    },
    slideId: 0,
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#C98787",
        captionTextColor: "#ffffff",
        captionBackgroundColor: "#C98787",
        buttonTextColor: "#121212",
        buttonBackgroundColor: "#F6BF33",
        buttonHoverBackgroundColor: "#121212",
        buttonHoverTextColor: "#F6BF33",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<ImageWithCaption {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};


//-------------------------------------------------------------
// Colored ImageWithCaption
// -------------------------------------------------------------
export const ColoredImageWithCaption = Template.bind({});
ColoredImageWithCaption.args = {
    ...Default.args,
    withColor: {
        slideHeaderTextColor: "#454545",
        slideHeaderAccentColor: "#C1DC9E",
        slideHeaderBackgroundColor: "#DBDBDB",
        captionTextColor: "#454545",
        captionBackgroundColor: "#DBDBDB",
        buttonTextColor: "#F6BF33",
        buttonBackgroundColor: "#121212",
        buttonHoverBackgroundColor: "#F6BF33",
        buttonHoverTextColor: "#121212",
    },
};
ColoredImageWithCaption.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the component.",
        },
        source: {
            code: `<ImageWithCaption withColor={{backgroundColor: "#C98787", accentColor: "#D3D3D3", textColor: "#ffffff"}}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Animated ImageWithCaption
// -------------------------------------------------------------
export const AnimatedImageWithCaption = Template.bind({});
AnimatedImageWithCaption.args = {
    ...Default.args,
    withAnimation: {
        animation: "fade",
        duration: 2,
        delay: 0,
    },
};
AnimatedImageWithCaption.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of ImageWithCaption",
        },
        source: {
            code: `<ImageWithCaption {...${JSON.stringify(
                AnimatedImageWithCaption.args,
                null,
                2
            )}}/>`,
        },
    },
};



