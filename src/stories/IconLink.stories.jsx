import React from "react";
import IconLink from "../components/Buttons/IconLink/IconLink.react";

const dictionary = JSON.stringify({

    hi: {
        loading: "बस एक मिनट...",
        icon: { label: "होम आइकन" },
    },
});

export default {
    title: "Design System/Buttons/IconLink",
    component: IconLink,
    argTypes: {

        asEmphasis: {
            control: "select",
            options: ["text", "outlined", "contained"],
            table: {
                category: "as-Flags",
            },
        },
        isCircular: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },

        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning"],
            table: {
                category: "as-Flags",
            },
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
            table: {
                category: "as-Flags",
            },
        },
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
            table: {
                category: "as-Flags",
            },
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
            table: {
                category: "as-Flags",
            },
        },
        asAligned: {
            control: "select",
            options: ["left", "right", "center"],
            table: {
                category: "as-Flags",
            },
        },

        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
                    accentColor: "",
                    textColor: "",
                    hoverBackgroundColor: "",
                    hoverTextColor: "",
                },
            },
        },
        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    icon: "",
                    size: "",
                    position: "left",
                },
            },
        },
        withLabel: {
            table: {
                category: "with-Params",
                defaultValue: {
                    format: "label",
                    content: "",
                    textColor: "",
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
        isFluid: {
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
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays icon with a link",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <IconLink {...args} />;
export const FirstIcon = Template.bind({});
FirstIcon.args = {
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "label",
        content: "Home",
        textColor: "#000000",
    },
    withIcon: { icon: "fa fa-home icon", size: "2em" },
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "gray",
        hoverTextColor: "black",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "icon",
        dictionary: dictionary,
    },

    isDisabled: false,
    isHidden: false,
    isFluid: false,
};
FirstIcon.parameters = {
    docs: {
        source: {
            code: `<IconLink {...${JSON.stringify(FirstIcon.args, null, 2)}}/>`,
        },
    },
};








// // -------------------------------------------------------------
// // Variants
// // -------------------------------------------------------------
// const AllVariantsTemplate = (args) => {
//     const baseObj = {
//         ...Object.assign({}, FirstIcon.args, args, {
//             asFloated: "inline",
//             withIcon: null,
//             withTranslation: null,
//             withColor: null,
//         }),
//     };
//     return (
//         <div>
//             <IconLink
//                 {...Object.assign({}, baseObj, {
//                     content: "",
//                     asVariant: "error",
//                     withLabel: {
//                         format: "caption",
//                         content: "Left",
//                         textColor: "#000000",
//                     },
//                 })}

//             ><i className="fas fa-angle-double-left"></i></IconLink>{" "}{" "}
//             <IconLink
//                 {...Object.assign({}, baseObj, {
//                     content: "",
//                     asVariant: "primary",
//                     withLabel: {
//                         format: "caption",
//                         content: "Home",
//                         textColor: "#000000",

//                     },
//                 })}

//             ><i className="fa fa-home"></i></IconLink>{" "}{" "}

    
//             <IconLink
//                 {...Object.assign({}, baseObj, {
//                     content: "",
//                     asVariant: "primary",
//                     withLabel: {
//                         format: "caption",
//                         content: "Share",
//                         textColor: "#000000",
//                     },
//                 })}

//             ><i className="fa fa-share"></i></IconLink>{" "}{" "}

//             <IconLink
//                 {...Object.assign({}, baseObj, {
//                     content: "",
//                     asVariant: "success",
//                     withLabel: {
//                         format: "caption",
//                         content: "Right",
//                         textColor: "#000000",
//                     },
//                 })}

//             ><i className="fas fa-angle-double-right"></i></IconLink>{" "}{" "}


//  </div>
//     );
// };
// export const AllVariants = AllVariantsTemplate.bind({});
// AllVariants.parameters = {
//     docs: {
//         description: {
//             story: "5 variants are supported. Use as per purpose noted here.",
//         },
//         source: {
//             code: `<IconLink asVariant="primary"/>`,
//         },
//     },
// };





// -------------------------------------------------------------
// Colored Icon
// -------------------------------------------------------------
export const ColoredIcon = Template.bind({});
ColoredIcon.args = {
    ...FirstIcon.args,
    withColor: {
        backgroundColor: "black",
        textColor: "white",
        hoverBackgroundColor: "orange",
        hoverTextColor: "black",
    },
};
ColoredIcon.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the Icon.",
        },
        source: {
            code: `<Icon withColor={{backgroundColor: "black", textColor: "white",hoverBackgroundColor: "orange", hoverTextColor: "black"}}}/>`,
        },
    },
};




// -------------------------------------------------------------
// Fluid Icon
// -------------------------------------------------------------
export const FluidIcon = Template.bind({});
FluidIcon.args = {
    ...FirstIcon.args,
    isFluid: true,
};
FluidIcon.parameters = {
    docs: {
        description: {
            story: "Typically used as the bottom of a modal or a container.",
        },
    },
    source: {
        code: `<IconLink isFluid={true}/>`,
    },
};



// -------------------------------------------------------------
// Animated Icon
// -------------------------------------------------------------
export const AnimatedIcon = Template.bind({});
AnimatedIcon.args = {
    ...FirstIcon.args,
    withAnimation: {
        animation: "collapse",
        duration: .8,
        delay: 0,
    },
};
AnimatedIcon.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the Icon with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<IconLink withAnimation={{animation: "collapse", duration: 0., delay: 0}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated Icon
// -------------------------------------------------------------
export const TranslatedIcon = Template.bind({});
TranslatedIcon.args = {
    ...FirstIcon.args,
    withTranslation: {
        lang: "hi",
        tgt: "icon",
        dictionary: dictionary,
    },
};
TranslatedIcon.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the Icon, add a Icon:{text,label} value to the dictionary.",
        },
        source: {
            code: `<IconLink withTranslation={{lang: "hi", tgt: "icon", dictionary: ${JSON.stringify(
                {
                    hi: {
                        loading: "बस एक मिनट...",
                        icon: {
                            label: "होम आइकन",
                        },
                    },
                }
            )}}}}/>`,
        },
    },
};
