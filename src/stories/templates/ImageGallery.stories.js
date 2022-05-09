import React from "react";
import ImageGallery from "../../components/Templates/ImageGallery/ImageGallery.react";

export default {
    title: "Design System/Templates/ImageGallery/ImageGallery",
    component: ImageGallery,
    argTypes: {
        data: {
            title: "",
            subtitle: "",
            image: { id: "", extention: "" },
            backgroundImage: { id: "", extention: "" },
            cards: [],
        },
        imageLibrary: [],
        slideId: 0,
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
                    slideHeaderTextColor: "",
                    slideHeaderAccentColor: "",
                    slideHeaderBackgroundColor: "",
                    textBlockTextColor: "",
                    textBlockBackgroundColor: "",
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
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a ImageGallery for general-purpose use.",
        a11y: { disable: true },
        docs: {
            iframeHeight: 650,
        },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ImageGallery {...args} />;
export const Default = Template.bind({});
Default.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        cards: [
            {
                image: {
                    id: "text-image-1",
                    extention: "",
                },
                text: "one porro quisquam est qui dolorem",
            },
            {
                image: {
                    id: "text-image-2",
                    extention: "",
                },
                text: "two porro quisquam est qui dolorem",
            },
            {
                image: {
                    id: "text-image-3",
                    extention: "",
                },
                text: "three porro quisquam est qui dolorem",
            },
        ]
    },
    imageLibrary: [
        {
            image: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
            id: "text-image-1"
        },
        {
            image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            id: "text-image-2"
        },
        {
            image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            id: "text-image-3"
        },
        {
            id: "header-image",
            image:
                "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        },
        {
            image: "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
            id: "background-image"
        }
    ],
    slideId: 0,
    withColor: {
        backgroundColor: "#f5efef",
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
        textBlockTextColor: "#454545",
        textBlockBackgroundColor: "#FFFF",
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
            code: `<ImageGallery {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
//-------------------------------------------------------------
// Colored ImageGallery
// -------------------------------------------------------------
export const ColoredImageGallery = Template.bind({});
ColoredImageGallery.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#F3E5F5",
        slideHeaderTextColor: "#FFFF",
        slideHeaderAccentColor: "#9C27B0",
        slideHeaderBackgroundColor: "#AB47BC",
        textBlockTextColor: "#fff",
        textBlockBackgroundColor: "#AD292980",
    },
};
ColoredImageGallery.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the component.",
        },
        source: {
            code: `<ImageGallery {...${JSON.stringify(
                ColoredImageGallery.args,
                null,
                2
            )}}/>`,
        },
    },
};
//-------------------------------------------------------------
// Animated ImageGallery
// -------------------------------------------------------------
export const AnimatedImageGallery = Template.bind({});
AnimatedImageGallery.args = {
    ...Default.args,
    withAnimation: {
        animation: "fade",
        duration: 2,
        delay: 0,
    },
};
AnimatedImageGallery.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of ImageGallery",
        },
        source: {
            code: `<ImageGallery {...${JSON.stringify(
                AnimatedImageGallery.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// With Background Image ImageGallery
// -------------------------------------------------------------
export const WithHeaderImageImageGallery = Template.bind({});
WithHeaderImageImageGallery.args = {
    ...Default.args,
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: {
            id: "header-image",
            extention: "",
        },
        cards: [
            {
                image: {
                    id: "text-image-1",
                    extention: "",
                },
                text: "one porro quisquam est qui dolorem",
            },
            {
                image: {
                    id: "text-image-2",
                    extention: "",
                },
                text: "two porro quisquam est qui dolorem",
            },
            {
                image: {
                    id: "text-image-3",
                    extention: "",
                },
                text: "three porro quisquam est qui dolorem",
            },
        ]
    },
};
WithHeaderImageImageGallery.parameters = {
    docs: {
        description: {
            story: "Use to show ImageGallery with BackgroundImage.",
        },
        source: {
            code: `<ImageGallery {...${JSON.stringify(WithHeaderImageImageGallery.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// With Background Image ImageGallery
// -------------------------------------------------------------
export const WithBackgroundImageImageGallery = Template.bind({});
WithBackgroundImageImageGallery.args = {
    ...Default.args,
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        backgroundImage: {
            id: "background-image",
            extention: "",
        },
        cards: [
            {
                image: {
                    id: "text-image-1",
                    extention: "",
                },
                text: "one porro quisquam est qui dolorem",
            },
            {
                image: {
                    id: "text-image-2",
                    extention: "",
                },
                text: "two porro quisquam est qui dolorem",
            },
            {
                image: {
                    id: "text-image-3",
                    extention: "",
                },
                text: "three porro quisquam est qui dolorem",
            },
        ]
    },
};
WithBackgroundImageImageGallery.parameters = {
    docs: {
        description: {
            story: "Use to show ImageGallery with BackgroundImage.",
        },
        source: {
            code: `<ImageGallery {...${JSON.stringify(WithBackgroundImageImageGallery.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// With Background Image and SlideHeader ImageGallery
// -------------------------------------------------------------
export const BackgroundImageWithHeaderImage = Template.bind({});
BackgroundImageWithHeaderImage.args = {
    ...Default.args,
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: {
            id: "header-image",
            extention: "",
        },
        backgroundImage: {
            id: "background-image",
            extention: "",
        },
        cards: [
            {
                image: {
                    id: "text-image-1",
                    extention: "",
                },
                text: "one porro quisquam est qui dolorem",
            },
            {
                image: {
                    id: "text-image-2",
                    extention: "",
                },
                text: "two porro quisquam est qui dolorem",
            },
            {
                image: {
                    id: "text-image-3",
                    extention: "",
                },
                text: "three porro quisquam est qui dolorem",
            },
        ]
    },
};
BackgroundImageWithHeaderImage.parameters = {
    docs: {
        description: {
            story: "Use to show ImageGallery with BackgroundImage and SlideHeader.",
        },
        source: {
            code: `<ImageGallery {...${JSON.stringify(BackgroundImageWithHeaderImage.args, null, 2)}}/>`,
        },
    },
};