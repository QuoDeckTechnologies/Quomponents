import React from "react";
import Upload from "../components/Buttons/Upload/Upload.react";

const dictionary = JSON.stringify({
    // en: {
    //     loading: "Please wait...",
    //     button: {
    //         text: "Button",
    //         label: "Do not press this repeatedly...",
    //     },
    // },
    hi: {
        loading: "बस एक मिनट...",
        upload: { text: "अपलोड", label: "फ़ाइल अपलोड करें" },
    },
});

export default {
    title: "Design System/Buttons/Upload",
    component: Upload,
    argTypes: {
        content: "Upload",
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
        withFile: {
            category: "with-Params",
            defaultValue: {
                type: "image/*",
                capture: ""
            }
        },
        isMultiple: {
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
            options: ["fitted", "compact", "normal", "relaxed","zero"],
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
        componentSubtitle: "Displays a button for upload-purpose use",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Upload {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "Upload",
    asEmphasis: "contained",
    isCircular: false,
    withFile: {
        type: "image/*",
        capture: ""
    },
    isMultiple: false,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "Do not press this button repeatedly...",
        textColor: "#000000",
    },
    withIcon: { icon: "fas fa-upload", size: "1em", position: "left" },
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
        tgt: "upload",
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
            code: `<Upload {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Variants
// -------------------------------------------------------------
export const AllVariants = Template.bind({});
AllVariants.args = {
    ...Default.args,
    asVariant: "secondary"
}
AllVariants.parameters = {
    docs: {
        description: {
            story: "5 variants are supported. Use as per purpose noted here.",
        },
        source: {
            code: `<Upload asVariant="secondary"/>`,
        },
    },
};


// -------------------------------------------------------------
// Single file uploader
// -------------------------------------------------------------
export const SingleFileUploader = Template.bind({});
SingleFileUploader.args = {
    ...Default.args,
    isMultiple: false,
    withFile: {
        type: "video/*",
        capture: "user"
    }
}
SingleFileUploader.parameters = {
    docs: {
        description: {
            story: "Upload single file which is defined by file type.",
        },
        source: {
            code: `<Upload asVariant="primary" withFile: {{ type: "video/*", capture: "user" }} isMultiple={false} />`,
        },
    },
};


// -------------------------------------------------------------
// Multiple file uploader
// -------------------------------------------------------------
export const MultipleFileUploader = Template.bind({});
MultipleFileUploader.args = {
    ...Default.args,
    isMultiple: true,
    withFile: {
        type: "image/*",
        capture: ""
    }
}
MultipleFileUploader.parameters = {
    docs: {
        description: {
            story: "Upload more than one files which are defined by file type.",
        },
        source: {
            code: `<Upload asVariant="primary"  withFile: {{ type: "image/*", capture: "" }} isMultiple={true}/>`,
        },
    },
};

// -------------------------------------------------------------
// Icon Button
// -------------------------------------------------------------
export const IconOnlyButton = Template.bind({});
IconOnlyButton.args = {
    ...Default.args,
    content: "",
    isCircular: true,
    withIcon: { icon: "fas fa-upload", size: "1em", position: "left" },
    withLabel: {
        format: "popover",
        content: "Click to upload file...",
        textColor: "",
    },
};
IconOnlyButton.parameters = {
    docs: {
        description: {
            story:
                "Any free fontawesome icon(upload icon) can be used as the icon definition.",
        },
        source: {
            code: `<Upload isCircular={true} withIcon={{ icon: "fas fa-upload", size: "1em", position: "left" }}} withLabel={{format: "popover",content: "Click to share this...",textColor: ""}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Fluid Button
// -------------------------------------------------------------
export const FluidUploadButton = Template.bind({});
FluidUploadButton.args = {
    ...Default.args,
    content: "Fluid Button",
    isFluid: true,
};
FluidUploadButton.parameters = {
    docs: {
        description: {
            story: "Typically used as the bottom of a modal or a container.",
        },
    },
    source: {
        code: `<Upload isFluid={true}/>`,
    },
};

// -------------------------------------------------------------
// Loading Button
// -------------------------------------------------------------
export const LoadingButton = Template.bind({});
LoadingButton.args = {
    ...Default.args,
    isLoading: true,
};
LoadingButton.parameters = {
    docs: {
        description: {
            story:
                "Use to indicate a loading state for the button when it stops being clickable. The loading text can be customized with the withTranslation option through a common loading:'' value in the dictionary.",
        },
        source: {
            code: `<Upload isLoading={true}/>`,
        },
    },
};

// -------------------------------------------------------------
// Colored Upload Button
// -------------------------------------------------------------
export const ColoredUplaodButton = Template.bind({});
ColoredUplaodButton.args = {
    ...Default.args,
    content: "Upload",
    withColor: {
        backgroundColor: "#ffc900",
        textColor: "#666666",
        hoverBackgroundColor: "#666666",
        hoverTextColor: "#ffc900",
    },
};
ColoredUplaodButton.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the button.",
        },
        source: {
            code: `<Upload withColor={{backgroundColor: "#ffc900", textColor: "#666666",hoverBackgroundColor: "#666666", hoverTextColor: "#ffc900"}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Animated Button
// -------------------------------------------------------------
export const AnimatedUploaderButton = Template.bind({});
AnimatedUploaderButton.args = {
    ...Default.args,
    content: "Upload",
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedUploaderButton.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the button with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<Upload withAnimation={{animation: "collapse", duration: 0.5, delay: 0}}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated Button
// -------------------------------------------------------------
export const TranslatedUploadButton = Template.bind({});
TranslatedUploadButton.args = {
    ...Default.args,
    content: "Translated Button",
    withTranslation: {
        lang: "hi",
        tgt: "upload",
        dictionary: dictionary,
    },
};
TranslatedUploadButton.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the button, add a button:{text,label} value to the dictionary.",
        },
        source: {
            code: `<Upload withTranslation={{lang: "hi", tgt: "upload", dictionary: ${JSON.stringify(
                {
                    hi: {
                        loading: "बस एक मिनट...",
                        button: {
                            text: "अपलोड",
                            label: "फ़ाइल अपलोड करें",
                        },
                    },
                }
            )}}}}/>`,
        },
    },
};
