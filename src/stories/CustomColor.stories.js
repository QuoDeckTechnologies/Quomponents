import React from "react";
import CustomColor from "../components/CustomColor/CustomColor.react";

const dictionary = JSON.stringify({
    hi: {
        customColor: { title: "पृष्ठ रंग" },
    },
});

export default {
    title: "Design System/CustomColors/CustomColor",
    component: CustomColor,
    argTypes: {
        content: {
            table: {
                defaultValue: {
                    color: "",
                    title: "",
                },
            },
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
            table: {
                category: "as-Flags",
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
        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
            table: {
                category: "as-Flags",
            },
        },
        isDisabled: {
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
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays the diffrent diffrent color pickers",
        a11y: { disable: true },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CustomColor {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        title: "Page Color",
        color: "pink",
    },

    asSize: "normal",
    asFloated: "none",


    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "button",
        dictionary: dictionary,
    },

    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<CustomColor {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};



// -------------------------------------------------------------
// MultipleColorPicker
// -------------------------------------------------------------
export const MultipleColorPicker = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div className="qui-multiple-picker">
            <CustomColor
                {...Object.assign({}, baseObj, {
                    asSize: "normal",
                    content: {
                        title: "Page Color",
                        color: "red"
                    },
                    withAnimation: {
                        animation: "slideLeft",
                        duration: 0.5,
                        delay: 0,
                    },

                })}
            />
            <CustomColor
                {...Object.assign({}, baseObj, {
                    asSize: "normal",
                    content: {
                        title: "Header Color",
                        color: "green"
                    },
                    withAnimation: {
                        animation: "slideRight",
                        duration: 0.5,
                        delay: 0,
                    },

                })}
            />
            <CustomColor
                {...Object.assign({}, baseObj, {
                    asSize: "normal",
                    content: {
                        title: "Divider Color",
                        color: "yellow"
                    },
                    withAnimation: {
                        animation: "slideLeft",
                        duration: 0.5,
                        delay: 0,
                    },

                })}
            />
            <CustomColor
                {...Object.assign({}, baseObj, {
                    asSize: "normal",
                    content: {
                        title: "navigator Color",
                        color: "purple"
                    },
                    withAnimation: {
                        animation: "slideRight",
                        duration: 0.5,
                        delay: 0,
                    },

                })}
            />
        </div>
    );
};

// -------------------------------------------------------------
// AllSizeColorPicker
// -------------------------------------------------------------
export const AllSizeColorPicker = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div className="qui-multiple-picker">
            <CustomColor
                {...Object.assign({}, baseObj, {
                    asSize: "tiny",
                    content: {
                        title: "Page Color",
                        color: "voilet"
                    },
                    withAnimation: {
                        animation: "slideLeft",
                        duration: 0.5,
                        delay: 0,
                    },

                })}
            />
            <CustomColor
                {...Object.assign({}, baseObj, {
                    asSize: "small",
                    content: {
                        title: "Header Color",
                        color: "indigo"
                    },
                    withAnimation: {
                        animation: "slideRight",
                        duration: 0.5,
                        delay: 0,
                    },

                })}
            />
            <CustomColor
                {...Object.assign({}, baseObj, {
                    asSize: "normal",
                    content: {
                        title: "Divider Color",
                        color: "blue"
                    },
                    withAnimation: {
                        animation: "slideLeft",
                        duration: 0.5,
                        delay: 0,
                    },

                })}
            />
            <CustomColor
                {...Object.assign({}, baseObj, {
                    asSize: "big",
                    content: {
                        title: "navigator Color",
                        color: "green"
                    },
                    withAnimation: {
                        animation: "slideRight",
                        duration: 0.5,
                        delay: 0,
                    },

                })}
            />
            <CustomColor
                {...Object.assign({}, baseObj, {
                    asSize: "huge",
                    content: {
                        title: "Background Color",
                        color: "orange"
                    },
                    withAnimation: {
                        animation: "slideRight",
                        duration: 0.5,
                        delay: 0,
                    },

                })}
            />
            <CustomColor
                {...Object.assign({}, baseObj, {
                    asSize: "massive",
                    content: {
                        title: "Border Color",
                        color: "red"
                    },
                    withAnimation: {
                        animation: "slideRight",
                        duration: 0.5,
                        delay: 0,
                    },

                })}
            />
        </div>
    );
};

// -------------------------------------------------------------
// Translated Color Picker
// -------------------------------------------------------------
export const TranslatedColorPicker = Template.bind({});
TranslatedColorPicker.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "customColor",
        dictionary: dictionary,
    },
    withAnimation: {
        animation: "slideUp",
        duration: 0.5,
        delay: 0,
    },
};
TranslatedColorPicker.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the Custom color value to the dictionary.",
        },
        source: {
            code: `<CustomColor withTranslation={{lang: "hi", tgt: "customColor", dictionary: ${JSON.stringify(
                {
                    hi: {
                        customColor: { title: "पृष्ठ रंग" },
                    },
                }
            )}}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Animated Custom Color
// -------------------------------------------------------------
export const AnimatedCustomColor = Template.bind({});
AnimatedCustomColor.args = {
    content: {
        title: "Page Color",
        color: "pink",
    },

    asSize: "normal",
    asFloated: "none",


    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "button",
        dictionary: dictionary,
    },

    isHidden: false,
};
AnimatedCustomColor.parameters = {
    docs: {
        source: {
            code: `<CustomColor {...${JSON.stringify(AnimatedCustomColor.args, null, 2)}}/>`,
        },
    },
};
