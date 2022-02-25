import React from "react";
import CustomColor from "../components/CustomColor/CustomColor.react";

const dictionary = JSON.stringify({
    // en: {
    //     loading: "Please wait...",
    //     button: {
    //         text: "CustomColor",
    //         label: "Do not press this repeatedly...",
    //     },
    // },
    hi: {
        customColor: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
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
        asAligned: {
            control: "select",
            options: ["left", "right", "center"],
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

    withLabel: {
        format: "caption",
        content: "Do not press this button repeatedly...",
        textColor: "#000000",
    },
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
    isFluid: false,
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
const MultipleColorPicker = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div>
            <CustomColor
                {...Object.assign({}, baseObj, {
                    asSize: "normal",
                    content: {
                        title: "Page Color",
                        color: "red"
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

                })}
            />
            <CustomColor
                {...Object.assign({}, baseObj, {
                    asSize: "normal",
                    content: {
                        title: "Divider Color",
                        color: "yellow"
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

                })}
            />
        </div>
    );
};
