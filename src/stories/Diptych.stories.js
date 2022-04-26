import React from "react";
import Diptych from "../components/Diptych/Diptych.react";

export default {
    title: "Design System/Diptych/Diptych",
    component: Diptych,
    argTypes: {
        data: {},
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
        isHidden: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        isDisabled: {
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
        componentSubtitle: "Displays a Diptych with SlideHeader, 2 clickableImages and a TextBlock, one can switch the slideHeader with header image by removing the title and subtitle from prop, and by giving the image link as headerImage prop we can see an image. If the title, subtitle, and image are provided together, only the slideHeader is visible , both images in mid section is clickable ,if any of image1 and image2 prop is not given so the default image will appear",
        a11y: { disable: true },
        docs: {
            iframeHeight: 700,
        },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Diptych {...args} />;
export const Default = Template.bind({});
Default.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        headerImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        image1: "https://i.pinimg.com/564x/b1/cf/f8/b1cff858c4af57889d959e03668aada3.jpg",
        image2: "https://i.pinimg.com/564x/02/74/fd/0274fdd7ab782768e111db0fd7387fcb.jpg",
    },
    slideId: 0,
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#AD292980",
        textBlockTextColor: "#ffffff",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    isDisabled: false,

};
Default.parameters = {
    docs: {
        description: {
            story: "Diptych component have clickable images in between SliderHeader and TextBlock.",
        },
        source: {
            code: `<Diptych {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// DiptychWithImage
// -------------------------------------------------------------
export const DiptychWithImage = Template.bind({});
DiptychWithImage.args = {
    data: {
        title: "",
        subtitle: "",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        headerImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        image1: "https://i.pinimg.com/564x/b1/cf/f8/b1cff858c4af57889d959e03668aada3.jpg",
        image2: "https://i.pinimg.com/564x/02/74/fd/0274fdd7ab782768e111db0fd7387fcb.jpg",
    },
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#2d92a4",
        textBlockTextColor: "#fff",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
};
DiptychWithImage.parameters = {
    docs: {
        source: {
            code: `<Diptych {...${JSON.stringify(DiptychWithImage.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// MultipleDiptych
// -------------------------------------------------------------
const MultipleDiptychTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
            <div style={{ margin: "1em", width: "25em" }}>
                <Diptych
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
                <Diptych
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
                <Diptych
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
export const MultipleDiptych = MultipleDiptychTemplate.bind({});
MultipleDiptych.parameters = {
    docs: {
        description: {
            story: "Multiple Diptych.",
        },
        source: {
            code: `<Diptych data={
      title: "Neque porro quisquam est qui dolorem",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
      headerImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      image1: "https://i.pinimg.com/564x/b1/cf/f8/b1cff858c4af57889d959e03668aada3.jpg",
      image2: "https://i.pinimg.com/564x/02/74/fd/0274fdd7ab782768e111db0fd7387fcb.jpg",}/>`,
        },
    },
};

// -------------------------------------------------------------
// ColoredDiptych
// -------------------------------------------------------------
const ColoredDiptychTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
            <div style={{ margin: "1em", width: "25em" }}>
                <Diptych
                    {...Object.assign({}, baseObj, {
                        asVariant: 'warning',
                        withColor: {
                            slideHeaderTextColor: "#ffffff",
                            slideHeaderAccentColor: "#AD2929",
                            slideHeaderBackgroundColor: "#AD292980",
                            textBlockTextColor: "#ffffff",
                            textBlockBackgroundColor: "#2d92a4",
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
                <Diptych
                    {...Object.assign({}, baseObj, {
                        asVariant: 'warning',
                        withColor: {
                            slideHeaderTextColor: "#ffffff",
                            slideHeaderAccentColor: "#AD2929",
                            textBlockTextColor: "#ffffff",
                            textBlockBackgroundColor: "#a42f2d",
                            slideHeaderBackgroundColor: "#AD292980",
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
                <Diptych
                    {...Object.assign({}, baseObj, {
                        asVariant: 'warning',
                        withColor: {
                            slideHeaderTextColor: "#ffffff",
                            slideHeaderAccentColor: "#AD2929",
                            textBlockTextColor: "#ffffff",
                            textBlockBackgroundColor: "#7ea42d",
                            slideHeaderBackgroundColor: "#AD292980",
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
export const ColoredDiptych = ColoredDiptychTemplate.bind({});
ColoredDiptych.parameters = {
    docs: {
        description: {
            story: "displays Colored Diptych.",
        },
        source: {
            code: `<Diptych data={
      title: "Neque porro quisquam est qui dolorem",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
      headerImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      image1: "https://i.pinimg.com/564x/b1/cf/f8/b1cff858c4af57889d959e03668aada3.jpg",
      image2: "https://i.pinimg.com/564x/02/74/fd/0274fdd7ab782768e111db0fd7387fcb.jpg",}
      withColor: {
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        textBlockTextColor:"#ffffff",
        textBlockBackgroundColor:"#7ea42d",
        slideHeaderBackgroundColor: "#AD292980",
      },/>`,
        },
    },
};