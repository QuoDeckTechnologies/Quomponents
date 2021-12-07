import React from "react";
import Loader from "../components/Loader/Loader.react";
import quodeckdark from '../components/Loader/quodeck-loader-dark.gif';

const dictionary = JSON.stringify({
    en: {
        loader: {
            text: "Did you know ?", thoughts: [
                "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
                "Virtual training takes 40-60% less time to complete than classroom training.",
                "eLearning produces an 18% increase in employee engagement in the workplace.",
                "eLearning courses consume 90% less energy than traditional learning.",
                "IBM saved $200 million by adopting a virtual training program for its employees."
            ]
        }
    },
    hi: {
        loader: {
            text: "क्या तुम्हें पता था ?", thoughts: [
                "गैर-मोबाइल डिवाइस उपयोगकर्ताओं के विपरीत मोबाइल डिवाइस (स्मार्टफोन, टैबलेट, स्मार्टवॉच, आदि) का उपयोग करने पर उत्पादकता में 43% की वृद्धि होती है।",
                "आभासी प्रशिक्षण कक्षा प्रशिक्षण की तुलना में 40-60% कम समय लेता है।",
                "ई-लर्निंग कार्यस्थल में कर्मचारियों की व्यस्तता में 18% की वृद्धि करता है।",
                "ई-लर्निंग पाठ्यक्रम पारंपरिक शिक्षा की तुलना में 90% कम ऊर्जा की खपत करते हैं।",
                "आईबीएम ने अपने कर्मचारियों के लिए वर्चुअल ट्रेनिंग प्रोग्राम को अपनाकर 200 मिलियन डॉलर की बचत की।"
            ]
        }
    }
});


export default {
    title: "Design System/Loaders/Loader",
    component: Loader,
    argTypes: {
        isTheme: {
            control: "select",
            options: ["light", "dark"],
        },
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
            table: {
                category: "as-Flags",
            }
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
            table: {
                category: "as-Flags",
            }
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
            table: {
                category: "as-Flags",
            }
        },
        asAligned: {
            control: "select",
            options: ["left", "right", "center"],
            table: {
                category: "as-Flags",
            }
        },
        withColor: {
            defaultValue: {
                backgroundColor: "",
                accentColor: "",
                textColor: "",
                hoverBackgroundColor: "",
                hoverTextColor: "",
            },
            table: {
                category: "with-Params",
            },
        },
        withIcon: {
            defaultValue: {
                icon: "",
                size: "",
                position: "",
            },
            table: {
                category: "with-Params",
            }
        },
        withLabel: {
            defaultValue: {
                format: "label",
                content: "",
                textColor: "",
            },
            table: {
                category: "with-Params",
            }
        },
        withAnimation: {
            defaultValue: {
                animation: "",
                duration: 0,
                delay: 0,
            },
            table: {
                category: "with-Params",
            }
        },
        withTranslation: {
            defaultValue: {
                lang: "",
                tgt: "",
                dictionary: "",
            },
            table: {
                category: "with-Params",
            }
        },
        isHidden: {
            defaultValue: false,
            table: {
                category: "is-Toggles",
            }
        },
        isFluid: {
            defaultValue: false,
            table: {
                category: "is-Toggles",
            }
        }
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
        docs: {
            source: {
                type: "auto",
            },
        },
    },
};


const Template = (args) => <Loader {...args} />;
export const Default = Template.bind({});
Default.args = {
    isTheme: "light",
    content: {
        image: "https://icons8.com/preloaders/preloaders/829/Yin%20and%20Yang.gif",
        format: "caption",
        text: "Did you know ? ",
        thoughts: [
            "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
            "Virtual training takes 40-60% less time to complete than classroom training.",
            "eLearning produces an 18% increase in employee engagement in the workplace.",
            "eLearning courses consume 90% less energy than traditional learning.",
            "IBM saved $200 million by adopting a virtual training program for its employees."
        ]
    },
    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asAligned: "center",
    withIcon: { icon: "fa fa-spinner fa-spin", size: "", position: "left" },
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
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

export const TranslatedLoader = Template.bind({});
TranslatedLoader.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "loader",
        dictionary: dictionary,
    }
};

TranslatedLoader.parameters = {
    docs: {
        description: {
            story: "Translated loader for general purpose use",
        },
    },
};

export const DarkLoader = Template.bind({});
DarkLoader.args = {
    ...Default.args,
    isTheme: "dark",
    content: {
        image: quodeckdark,
        format: "caption",
        text: "Did you know ? ",
        thoughts: [
            "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
            "Virtual training takes 40-60% less time to complete than classroom training.",
            "eLearning produces an 18% increase in employee engagement in the workplace.",
            "eLearning courses consume 90% less energy than traditional learning.",
            "IBM saved $200 million by adopting a virtual training program for its employees."
        ]
    },
};

DarkLoader.parameters = {
    docs: {
        description: {
            story: "Dark Themed loader for general purpose use",
        },
    },
};

export const Animated = Template.bind({});
Animated.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    }
};

Animated.parameters = {
    docs: {
        description: {
            story: "Loader with animated thoughts",
        },
    },
};


export const HiddenContent = Template.bind({});
HiddenContent.args = {
    ...Default.args,
    isHidden: true
};

HiddenContent.parameters = {
    docs: {
        description: {
            story: "Loader with hidden text and thoughts",
        },
    },
};

export const FluidContent = Template.bind({});
FluidContent.args = {
    ...Default.args,
    isFluid: true
};

FluidContent.parameters = {
    docs: {
        description: {
            story: "Loader with fluid thoughts",
        },
    },
};

// varient stories
export const VariantLoader = Template.bind({});

VariantLoader.args = {
    ...Default.args,
    asVariant: "secondary",
};

VariantLoader.parameters = {
    docs: {
        description: {
            story: "5 variants are supported. Use as per purpose noted here.",
        },
    },
};

// Custome background-color stories
export const ColoredLoader = Template.bind({});

ColoredLoader.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#db9f14",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
};
ColoredLoader.parameters = {
    docs: {
        description: {
            story: "Use to override the standard color.",
        },
    },
};

export const ImageOnlyLoader = Template.bind({});
ImageOnlyLoader.args = {
    ...Default.args,
    content: {
        image: "https://icons8.com/preloaders/preloaders/829/Yin%20and%20Yang.gif",
        format: "caption",
        text: "Did you know ? ",
        thoughts: [
            "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
            "Virtual training takes 40-60% less time to complete than classroom training.",
            "eLearning produces an 18% increase in employee engagement in the workplace.",
            "eLearning courses consume 90% less energy than traditional learning.",
            "IBM saved $200 million by adopting a virtual training program for its employees."
        ]
    },
};
ImageOnlyLoader.parameters = {
    docs: {
        description: {
            story:
                "Any external image/gif link can be passed as a loading image",
        },
    },
};


export const IconOnlyLoader = Template.bind({});
IconOnlyLoader.args = {
    ...Default.args,
    content: {
        image: null,
        format: "caption",
        text: "Did you know ? ",
        thoughts: [
            "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
            "Virtual training takes 40-60% less time to complete than classroom training.",
            "eLearning produces an 18% increase in employee engagement in the workplace.",
            "eLearning courses consume 90% less energy than traditional learning.",
            "IBM saved $200 million by adopting a virtual training program for its employees."
        ]
    },
};
IconOnlyLoader.parameters = {
    docs: {
        description: {
            story:
                "If image is null loader icon will be seen",
        },
    },
};


export const LabelContent = Template.bind({});
LabelContent.args = {
    ...Default.args,
    content: {
        image: null,
        format: "label",
        text: "Did you know ? ",
        thoughts: [
            "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
            "Virtual training takes 40-60% less time to complete than classroom training.",
            "eLearning produces an 18% increase in employee engagement in the workplace.",
            "eLearning courses consume 90% less energy than traditional learning.",
            "IBM saved $200 million by adopting a virtual training program for its employees."
        ]
    },
};
LabelContent.parameters = {
    docs: {
        description: {
            story:
                "If content format is label the content will be shown above loader icon or image",
        },
    },
};