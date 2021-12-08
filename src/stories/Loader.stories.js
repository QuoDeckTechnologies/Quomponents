import React from "react";
import Loader from "../components/Loaders/Loader/Loader.react";

const dictionary = JSON.stringify({
    // en: {
    //     loading: "Please wait...",
    //     loader: {
    //         header: "Did you know ?",
    //         content: [
    //             "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
    //             "Virtual training takes 40-60% less time to complete than classroom training.",
    //             "eLearning produces an 18% increase in employee engagement in the workplace.",
    //             "eLearning courses consume 90% less energy than traditional learning.",
    //             "IBM saved $200 million by adopting a virtual training program for its employees.",
    //         ],
    //     },
    // },
    hi: {
        loading: "बस एक मिनट...",
        loader: {
            header: "क्या तुम्हें पता था ?",
            content: [
                "गैर-मोबाइल डिवाइस उपयोगकर्ताओं के विपरीत मोबाइल डिवाइस (स्मार्टफोन, टैबलेट, स्मार्टवॉच, आदि) का उपयोग करने पर उत्पादकता में 43% की वृद्धि होती है।",
                "आभासी प्रशिक्षण कक्षा प्रशिक्षण की तुलना में 40-60% कम समय लेता है।",
                "ई-लर्निंग कार्यस्थल में कर्मचारियों की व्यस्तता में 18% की वृद्धि करता है।",
                "ई-लर्निंग पाठ्यक्रम पारंपरिक शिक्षा की तुलना में 90% कम ऊर्जा की खपत करते हैं।",
                "आईबीएम ने अपने कर्मचारियों के लिए वर्चुअल ट्रेनिंग प्रोग्राम को अपनाकर 200 मिलियन डॉलर की बचत की।",
            ],
        },
    },
});

export default {
    title: "Design System/Loaders/Loader",
    component: Loader,
    argTypes: {
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
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
            table: {
                category: "as-Flags",
            },
        },
        withColor: {
            defaultValue: {
                backgroundColor: "",
                accentColor: "",
                textColor: "",
            },
            table: {
                category: "with-Params",
            },
        },
        withIcon: {
            defaultValue: {
                icon: "",
                size: "",
            },
            table: {
                category: "with-Params",
            },
        },
        withLabel: {
            defaultValue: {
                format: "label",
                header: "",
                content: [],
            },
            table: {
                category: "with-Params",
            },
        },
        withAnimation: {
            defaultValue: {
                animation: "",
                duration: 0,
                delay: 0,
            },
            table: {
                category: "with-Params",
            },
        },
        withTranslation: {
            defaultValue: {
                lang: "",
                tgt: "",
                dictionary: "",
            },
            table: {
                category: "with-Params",
            },
        },
        isHidden: {
            defaultValue: false,
            table: {
                category: "is-Toggles",
            },
        },
        isFluid: {
            defaultValue: false,
            table: {
                category: "is-Toggles",
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
        componentSubtitle: "Displays a loader for general-purpose use",
        a11y: { disable: true },
    },
};

const Template = (args) => <Loader {...args} />;
export const Default = Template.bind({});
Default.args = {
    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asAligned: "center",
    withIcon: { icon: "fa fa-asterisk fa-spin", size: "" },
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    withLabel: {
        format: "caption",
        header: "Did you know?",
        content: [
            "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
            "Virtual training takes 40-60% less time to complete than classroom training.",
            "eLearning produces an 18% increase in employee engagement in the workplace.",
            "eLearning courses consume 90% less energy than traditional learning.",
            "IBM saved $200 million by adopting a virtual training program for its employees.",
        ],
        textColor: "#000000",
    },
    withAnimation: {
        animation: "",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "loader",
        dictionary: dictionary,
    },
    isHidden: false,
    isFluid: false,
};

Default.parameters = {
    docs: {
        description: {
            story: "Default loader for general purpose use",
        },
    },
};

export const GifLoader = Template.bind({});
GifLoader.args = {
    ...Default.args,
    withIcon: {
        icon: "https://acegif.com/wp-content/uploads/loading-42.gif",
        size: "128px",
    },
};

GifLoader.parameters = {
    docs: {
        description: {
            story: "Image based loader icon",
        },
    },
};

export const TranslatedLoader = Template.bind({});
TranslatedLoader.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "loader",
        dictionary: dictionary,
    },
};

export const MinimalLoader = Template.bind({});
MinimalLoader.args = {
    ...Default.args,
    withLabel: null,
    withIcon: null,
};

TranslatedLoader.parameters = {
    docs: {
        description: {
            story: "Translated loader component",
        },
    },
};

export const ColoredLoader = Template.bind({});

ColoredLoader.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#666666",
        textColor: "#ffffff",
        accentColor: "#ffbf00",
    },
};
ColoredLoader.parameters = {
    docs: {
        description: {
            story: "Custom colored Loader",
        },
    },
};

export const AnimatedLoader = Template.bind({});
AnimatedLoader.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};

AnimatedLoader.parameters = {
    docs: {
        description: {
            story: "Loader with animated captions",
        },
    },
};

// export const HiddenContent = Template.bind({});
// HiddenContent.args = {
//     ...Default.args,
//     isHidden: true,
// };

// HiddenContent.parameters = {
//     docs: {
//         description: {
//             story: "Loader with hidden text and thoughts",
//         },
//     },
// };

// export const FluidContent = Template.bind({});
// FluidContent.args = {
//     ...Default.args,
//     isFluid: true,
// };

// FluidContent.parameters = {
//     docs: {
//         description: {
//             story: "Loader with fluid thoughts",
//         },
//     },
// };

// // varient stories
// export const VariantLoader = Template.bind({});

// VariantLoader.args = {
//     ...Default.args,
//     asVariant: "secondary",
// };

// VariantLoader.parameters = {
//     docs: {
//         description: {
//             story: "5 variants are supported. Use as per purpose noted here.",
//         },
//     },
// };

// export const ImageOnlyLoader = Template.bind({});
// ImageOnlyLoader.args = {
//     ...Default.args,
//     content: {
//         image:
//             "https://icons8.com/preloaders/preloaders/829/Yin%20and%20Yang.gif",
//         format: "caption",
//         text: "Did you know ? ",
//         content: [
//             "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
//             "Virtual training takes 40-60% less time to complete than classroom training.",
//             "eLearning produces an 18% increase in employee engagement in the workplace.",
//             "eLearning courses consume 90% less energy than traditional learning.",
//             "IBM saved $200 million by adopting a virtual training program for its employees.",
//         ],
//     },
// };
// ImageOnlyLoader.parameters = {
//     docs: {
//         description: {
//             story:
//                 "Any external image/gif link can be passed as a loading image",
//         },
//     },
// };

// export const IconOnlyLoader = Template.bind({});
// IconOnlyLoader.args = {
//     ...Default.args,
//     content: {
//         image: null,
//         format: "caption",
//         text: "Did you know ? ",
//         content: [
//             "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
//             "Virtual training takes 40-60% less time to complete than classroom training.",
//             "eLearning produces an 18% increase in employee engagement in the workplace.",
//             "eLearning courses consume 90% less energy than traditional learning.",
//             "IBM saved $200 million by adopting a virtual training program for its employees.",
//         ],
//     },
// };
// IconOnlyLoader.parameters = {
//     docs: {
//         description: {
//             story: "If image is null loader icon will be seen",
//         },
//     },
// };

// export const LabelContent = Template.bind({});
// LabelContent.args = {
//     ...Default.args,
//     content: {
//         image: null,
//         format: "label",
//         text: "Did you know ? ",
//         content: [
//             "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
//             "Virtual training takes 40-60% less time to complete than classroom training.",
//             "eLearning produces an 18% increase in employee engagement in the workplace.",
//             "eLearning courses consume 90% less energy than traditional learning.",
//             "IBM saved $200 million by adopting a virtual training program for its employees.",
//         ],
//     },
// };
// LabelContent.parameters = {
//     docs: {
//         description: {
//             story:
//                 "If content format is label the content will be shown above loader icon or image",
//         },
//     },
// };
