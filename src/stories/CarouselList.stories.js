import React from "react";
import CarouselList from "../components/CarouselList/CarouselList.react";

export default {
    title: "Design System/CarouselList/CarouselList",
    component: CarouselList,
    argTypes: {
        data: {
            title: "",
            subtitle: "",
            image: "",
            carouselContent: [{
                carouselTitle: "",
                carouselimage: "",
                carouselTag: "",
            }]
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
                    questionColor: "",
                    answerColor: "",
                    slideHeaderTextColor: "",
                    slideHeaderAccentColor: "",
                    slideHeaderBackgroundColor: "",
                    inputFieldTextColor: "",
                    inputFieldAccentColor: "",
                    inputFieldBackgroundColor: "",
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
        componentSubtitle: "Displays a CarouselList with a question and jumbled answer, the user need to submit the correct word as answer, we can switch the header image with slideHeader by giving the title and subtitle from prop, and by removing the title and subtitle we can see an image. If the title, subtitle, and image are provided together, only the slideHeader is visible",
        a11y: { disable: true },
        docs: {
            iframeHeight: 650,
        },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CarouselList {...args} />;
export const Default = Template.bind({});
Default.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        carouselContent:[
            {
                carouselTitle:"This is title",
                carouselTag:"",
                carouselImage: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
            },
            {
                carouselTitle:"This is title",
                carouselImage: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
            },
            {
                carouselTitle:"This is title",
                carouselImage: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
            },
        ]
    },
    slideId: 0,
    asVariant: "warning",
    withColor: {
        questionColor: "#000000",
        answerColor: "#000000",
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
        inputFieldTextColor: "",
        inputFieldAccentColor: "",
        inputFieldBackgroundColor: "",
        buttonTextColor: "",
        buttonBackgroundColor: "",
        buttonHoverBackgroundColor: "",
        buttonHoverTextColor: "",
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
            code: `<CarouselList {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// CarouselListWithSlideHeader
// -------------------------------------------------------------
export const CarouselListWithSlideHeader = Template.bind({});
CarouselListWithSlideHeader.args = {
    data: {
        title: "",
        subtitle: "",
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Answer",
        purpose: ""
    },
    slideId: 0,
    asVariant: "warning",
    withColor: {
        questionColor: "#000000",
        answerColor: "#000000",
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#AD292980",
        inputFieldTextColor: "",
        inputFieldAccentColor: "",
        inputFieldBackgroundColor: "",
        buttonTextColor: "",
        buttonBackgroundColor: "",
        buttonHoverBackgroundColor: "",
        buttonHoverTextColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isHidden: false,
};
CarouselListWithSlideHeader.parameters = {
    docs: {
        source: {
            code: `<CarouselList {...${JSON.stringify(CarouselListWithSlideHeader.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// MultipleCarouselList
// -------------------------------------------------------------
const MultipleCarouselListTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
            <div style={{ margin: "1em", width: "25em" }}>
                <CarouselList
                    {...Object.assign({}, baseObj, {
                        asVariant: 'warning',
                        withAnimation: {
                            animation: "slideRight",
                            duration: 0.5,
                            delay: 0,
                        },
                    })}
                />
            </div>
            <div style={{ margin: "1em", width: "25em" }}>
                <CarouselList
                    {...Object.assign({}, baseObj, {
                        asVariant: 'warning',
                        withAnimation: {
                            animation: "slideUp",
                            duration: 0.5,
                            delay: 0.8,
                        },
                    })}
                />
            </div>
            <div style={{ margin: "1em", width: "25em" }}>
                <CarouselList
                    {...Object.assign({}, baseObj, {
                        asVariant: 'warning',
                        withAnimation: {
                            animation: "slideLeft",
                            duration: 0.5,
                            delay: 0.5,
                        },
                    })}
                />
            </div>
        </div>
    );
};
export const MultipleCarouselList = MultipleCarouselListTemplate.bind({});
MultipleCarouselList.parameters = {
    docs: {
        description: {
            story: "Multiple CarouselList.",
        },
        source: {
            code: `<CarouselList content={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      label: "RAWNES",}/>`,
        },
    },
};
// -------------------------------------------------------------
// ColoredCarouselList
// -------------------------------------------------------------
const ColoredCarouselListTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
            <div style={{ margin: "1em", width: "25em" }}>
                <CarouselList
                    {...Object.assign({}, baseObj, {
                        asVariant: 'warning',
                        withColor: {
                            questionColor: "#5072a4",
                            answerColor: "#ff0000",
                            slideHeaderTextColor: "#ffffff",
                            slideHeaderAccentColor: "#AD2929",
                            slideHeaderBackgroundColor: "#AD292980",
                            inputFieldTextColor: "#12ff00",
                            inputFieldAccentColor: "#00ff17",
                            inputFieldBackgroundColor: "#000000",
                            buttonTextColor: "#00ffa4",
                            buttonBackgroundColor: "#000000",
                            buttonHoverBackgroundColor: "#FF0000",
                            buttonHoverTextColor: "#0000ff",
                        },
                        withAnimation: {
                            animation: "slideRight",
                            duration: 0.5,
                            delay: 0,
                        },
                    })}
                />
            </div>
            <div style={{ margin: "1em", width: "25em" }}>
                <CarouselList
                    {...Object.assign({}, baseObj, {
                        asVariant: 'warning',
                        withColor: {
                            questionColor: "#FFFF00",
                            answerColor: "#000000",
                            slideHeaderTextColor: "#ffffff",
                            slideHeaderAccentColor: "#AD2929",
                            slideHeaderBackgroundColor: "#AD292980",
                            inputFieldTextColor: "#0000ff",
                            inputFieldAccentColor: "#FF0000",
                            inputFieldBackgroundColor: "#FF00FF",
                            buttonTextColor: "#ffff17",
                            buttonBackgroundColor: "#12ff00",
                            buttonHoverBackgroundColor: "#ff0000",
                            buttonHoverTextColor: "#5072a4",
                        },
                        withAnimation: {
                            animation: "slideUp",
                            duration: 0.5,
                            delay: 0.8,
                        },
                    })}
                />
            </div>
            <div style={{ margin: "1em", width: "25em" }}>
                <CarouselList
                    {...Object.assign({}, baseObj, {
                        asVariant: 'warning',
                        withColor: {
                            questionColor: "#ffff00",
                            answerColor: "#0f00f0",
                            slideHeaderTextColor: "#ffffff",
                            slideHeaderAccentColor: "#AD2929",
                            slideHeaderBackgroundColor: "#AD292980",
                            inputFieldTextColor: "",
                            inputFieldAccentColor: "",
                            inputFieldBackgroundColor: "",
                            buttonTextColor: "",
                            buttonBackgroundColor: "",
                            buttonHoverBackgroundColor: "",
                            buttonHoverTextColor: "",
                        },
                        withAnimation: {
                            animation: "slideLeft",
                            duration: 0.5,
                            delay: 0.5,
                        },
                    })}
                />
            </div>
        </div>
    );
};
export const ColoredCarouselList = ColoredCarouselListTemplate.bind({});
ColoredCarouselList.parameters = {
    docs: {
        description: {
            story: "displays Colored CarouselList.",
        },
        source: {
            code: `<CarouselList content={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      label: "RAWNES",}
      withColor: {
        questionColor: "#FFFF00",
        answerColor: "#000000",
        inputFieldTextColor: "#0000ff",
        inputFieldAccentColor: "#FF0000",
        inputFieldBackgroundColor: "#FF00FF",
        buttonTextColor: "#ffff17",
        buttonBackgroundColor: "#12ff00",
        buttonHoverBackgroundColor: "#ff0000",
        buttonHoverTextColor: "#5072a4",
      },/>`,
        },
    },
};