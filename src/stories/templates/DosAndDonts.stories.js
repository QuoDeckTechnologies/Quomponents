import React from "react";
import DosAndDonts from "../../components/Templates/DosAndDonts/DosAndDonts.react";

export default {
    title: "Design System/Templates/DosAndDonts/DosAndDonts",
    component: DosAndDonts,
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
                    bulletBlockTextdColor: "",
                    bulletBlockBackgroundColor: "",
                    backgroundColor: "",
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
        componentSubtitle: "Displays a Captioned Bullet List with TextBlock, BulletBlock and a SlideHeader, we can switch the slideHeader with header image by removing the title and subtitle from prop, and by giving the image link as prop we can see an image. If the title, subtitle, and image are provided together, only the slideHeader is visible",
        a11y: { disable: true },
        docs: {
            iframeHeight: 400,
        },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <DosAndDonts {...args} />;
export const Default = Template.bind({});
Default.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: "",
        options: [{
            correct: "checked",
            text: "Item 1",
        }, {
            correct: "",
            text: "Item 2",
        }],
        backgroundImage: "",
        bullets: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ]
    },
    slideId: 0,
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#ff000000",
        bulletBlockTextColor: "#ffffff",
        bulletBlockBackgroundColor: "#ad292980",
        backgroundColor: "#fff",
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
            code: `<DosAndDonts {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// DosAndDontsWithImage
// -------------------------------------------------------------
export const DosAndDontsWithImage = Template.bind({});
DosAndDontsWithImage.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        backgroundImage: "",
        bullets: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ]
    },
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#2d92a4",
        textBlockTextColor: "#fff",
        bulletBlockTextColor: "#ffffff",
        bulletBlockBackgroundColor: "#ad292980",
        backgroundColor: "#fff",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
};
DosAndDontsWithImage.parameters = {
    docs: {
        source: {
            code: `<DosAndDonts {...${JSON.stringify(DosAndDontsWithImage.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// DosAndDontsWithBackgroundImage
// -------------------------------------------------------------
export const DosAndDontsWithBackgroundImage = Template.bind({});
DosAndDontsWithBackgroundImage.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        backgroundImage: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
        bullets: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ]
    },
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#2d92a4",
        textBlockTextColor: "#fff",
        bulletBlockTextColor: "#ffffff",
        bulletBlockBackgroundColor: "#ad292980",
        backgroundColor: "#fff",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
};
DosAndDontsWithBackgroundImage.parameters = {
    docs: {
        source: {
            code: `<DosAndDonts {...${JSON.stringify(DosAndDontsWithBackgroundImage.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// MultipleDosAndDonts
// -------------------------------------------------------------
const MultipleDosAndDontsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
            <div style={{ margin: "1em", width: "25em" }}>
                <DosAndDonts
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
                <DosAndDonts
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
                <DosAndDonts
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
export const MultipleDosAndDonts = MultipleDosAndDontsTemplate.bind({});
MultipleDosAndDonts.parameters = {
    docs: {
        description: {
            story: "Multiple DosAndDonts.",
        },
        source: {
            code: `<DosAndDonts data={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      title: "Neque porro quisquam est qui dolorem",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem", ,}/>`,
        },
    },
};

// -------------------------------------------------------------
// ColoredDosAndDonts
// -------------------------------------------------------------
const ColoredDosAndDontsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#454545" }}>
            <div style={{ margin: "1em", width: "25em" }}>
                <DosAndDonts
                    {...Object.assign({}, baseObj, {
                        asVariant: 'warning',
                        withColor: {
                            slideHeaderTextColor: "#ffffff",
                            slideHeaderAccentColor: "#AD2929",
                            slideHeaderBackgroundColor: "#AD292980",
                            textBlockTextColor: "#ffffff",
                            textBlockBackgroundColor: "#2d92a4",
                            bulletBlockTextColor: "#12ff00",
                            bulletBlockBackgroundColor: "#000000",
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
                <DosAndDonts
                    {...Object.assign({}, baseObj, {
                        asVariant: 'warning',
                        withColor: {
                            slideHeaderTextColor: "#ffffff",
                            slideHeaderAccentColor: "#AD2929",
                            textBlockTextColor: "#ffffff",
                            textBlockBackgroundColor: "#a42f2d",
                            slideHeaderBackgroundColor: "#AD292980",
                            bulletBlockTextColor: "#0000ff",
                            bulletBlockBackgroundColor: "#FF00FF",
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
                <DosAndDonts
                    {...Object.assign({}, baseObj, {
                        asVariant: 'warning',
                        withColor: {
                            slideHeaderTextColor: "#ffffff",
                            slideHeaderAccentColor: "#AD2929",
                            textBlockTextColor: "#ffffff",
                            textBlockBackgroundColor: "#7ea42d",
                            slideHeaderBackgroundColor: "#AD292980",
                            bulletBlockTextColor: "",
                            bulletBlockBackgroundColor: "",
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
export const ColoredDosAndDonts = ColoredDosAndDontsTemplate.bind({});
ColoredDosAndDonts.parameters = {
    docs: {
        description: {
            story: "displays Colored DosAndDonts.",
        },
        source: {
            code: `<DosAndDonts data={image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      title: "Neque porro quisquam est qui dolorem",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",}
      withColor: {
        slideHeaderTextColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        textBlockTextColor:"#ffffff",
        textBlockBackgroundColor:"#7ea42d",
        slideHeaderBackgroundColor: "#AD292980",
        bulletBlockTextColor: "",
        bulletBlockBackgroundColor: "",
      },/>`,
        },
    },
};