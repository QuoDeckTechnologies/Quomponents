import React from "react";
import Icon from "../components/Icons/Icon/Icon.react";

const dictionary = JSON.stringify({
    // en: {
    //     loading: "Please wait...",
    //     Icon: {
    //         text: "Icon",
    //         label: "Do not press this repeatedly...",
    //     },
    // },
    hi: {
        loading: "बस एक मिनट...",
        Icon: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
    },
});

export default {
    title: "Icons/Icon",
    component: Icon,
    argTypes: {
        content: "Icon",
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
            options: ["primary", "secondary", "success", "warning", "error"],
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
        isLoading: {
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
        componentSubtitle: "Displays a basic Icon for general-purpose use",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Icon className="icon" {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "Default Icon",
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "Press & perform Action...",
        textColor: "#042544",
    },
    withIcon: { icon: "fas fa-bars", size: "1em", position: "left" },
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "Icon",
        dictionary: dictionary,
    },

    isDisabled: false,
    isLoading: false,
    isHidden: false,
    isFluid: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<Icon {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Variants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
            asFloated: "inline",
            withLabel: null,
            withIcon: null,
            withTranslation: null,
            withColor: null,
        }),
    };
    
    
    return (
        <div>
        

        <Icon 
         {...Object.assign({}, baseObj, {
                    content: "",
                    asVariant: "error",
                    withLabel: {
                        format: "caption",
                        content: "Left",
                        textColor: "#000000",
                    },
                })}

        ><i className="fas fa-angle-double-left"></i></Icon>{" "}{" "}
        <Icon
         {...Object.assign({}, baseObj, {
                    content: "",
                    asVariant: "primary",
                    withLabel: {
                        format: "caption",
                        content: "Home",
                        textColor: "#000000",
                    },
                })}

        ><i className="fa fa-home"></i></Icon>{" "}{" "}

        <Icon
        {...Object.assign({}, baseObj, {
                   content: "",
                   asVariant: "secondary",
                   withLabel: {
                    format: "caption",
                    content: "Bars",
                    textColor: "#000000",
                },
               })}

       ><i className="fa fa-bars tilt"></i></Icon> {" "}{" "} 
       
       <Icon
         {...Object.assign({}, baseObj, {
                    content: "",
                    asVariant: "primary",
                    withLabel: {
                        format: "caption",
                        content: "Share",
                        textColor: "#000000",
                    },
                })}

        ><i className="fa fa-share"></i></Icon>{" "}{" "}

        <Icon
          {...Object.assign({}, baseObj, {
                     content: "",
                     asVariant: "secondary",
                     withLabel: {
                        format: "caption",
                        content: "Trash",
                        textColor: "#000000",
                    },
                 })}
 
         ><i className="fa fa-trash"></i></Icon>


       <Icon
         {...Object.assign({}, baseObj, {
                    content: "",
                    asVariant: "success",
                    withLabel: {
                        format: "caption",
                        content: "Right",
                        textColor: "#000000",
                    },
                })}

        ><i className="fas fa-angle-double-right"></i></Icon>{" "}{" "}


         

       
            
        </div>
    );
};
export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
    docs: {
        description: {
            story: "5 variants are supported. Use as per purpose noted here.",
        },
        source: {
            code: `<Icon asVariant="primary"/>`,
        },
    },
};

// -------------------------------------------------------------
// Icon Icon
// -------------------------------------------------------------
export const IconOnlyIcon = Template.bind({});
IconOnlyIcon.args = {
    ...Default.args,
    content: "",
    isCircular: true,
    withIcon: { icon: "fas fa-bars", size: "1em", position: "left" },
    withLabel: {
        format: "popover",
        content: "Click to share this...",
        textColor: "",
    },
};
IconOnlyIcon.parameters = {
    docs: {
        description: {
            story:
                "Any free fontawesome icon can be used as the icon definition. This component is typically used in a bank of Icons or for standalone floating actions. Use isCircular to toggle the rounding.",
        },
        source: {
            code: `<Icon isCircular={true} withIcon={{ icon: "fas fa-share", size: "1em", position: "left" }}} withLabel={{format: "popover",content: "Click to share this...",textColor: ""}}}/>`,
        },
    },
};
