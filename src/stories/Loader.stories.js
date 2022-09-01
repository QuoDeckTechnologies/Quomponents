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
    title: "Design System/Loader",
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
            options: ["fitted", "compact", "normal", "relaxed","zero"],
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
                },
            },
        },
        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    icon: "",
                    size: "",
                },
            },
        },
        withLabel: {
            table: {
                category: "with-Params",
                defaultValue: {
                    format: "label",
                    header: "",
                    content: [],
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
        componentSubtitle: "Displays a loader for general-purpose use",
        a11y: { disable: true },
        docs: {
            iframeHeight: 300,
        },
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

export const IconOnlyLoader = Template.bind({});
IconOnlyLoader.args = {
    ...Default.args,
    withIcon: {
        icon: "https://acegif.com/wp-content/uploads/loading-42.gif",
        size: "512px",
    },
    withLabel: null,
};

IconOnlyLoader.parameters = {
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

MinimalLoader.parameters = {
    docs: {
        description: {
            story: "Minimal loader component",
        },
    },
};

export const ColoredLoader = Template.bind({});

ColoredLoader.args = {
    ...Default.args,
    asPadded: "relaxed",
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

export const FullPageLoader = Template.bind({});
FullPageLoader.args = {
    ...Default.args,
    isFluid: true,
};

FullPageLoader.parameters = {
    docs: {
        description: {
            story: "Full Page Loader",
        },
        iframeHeight: 768,
    },
};
