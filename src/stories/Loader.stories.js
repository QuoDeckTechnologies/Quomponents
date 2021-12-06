import React from "react";
import Loader from "../components/Loader/Loader.react";

const dictionary = JSON.stringify({
    en: {
        loader: {
            image: null, text: "Did you know ?", thoughts: [
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
            image: null, text: "क्या तुम्हें पता था ?", thoughts: [
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
            options: ["light", "dark"]
        },
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
        },
        // asPadded: {
        //     control: "select",
        //     options: ["fitted", "compact", "normal", "relaxed"],
        // },
        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
        },
        asAligned: {
            control: "select",
            options: ["left", "right", "center"],
        },

        withColor: {
            backgroundColor: "",
            accentColor: "",
            textColor: "",
            hoverBackgroundColor: "",
            hoverTextColor: "",
        },
        withIcon: {
            icon: "",
            size: "",
            position: "",
        },
        withLabel: {
            format: "label",
            content: "",
            textColor: "",
        },
        withAnimation: {
            animation: "",
            duration: 0,
            delay: 0,
        },
        withTranslation: {
            lang: "",
            tgt: "",
            dictionary: "",
        },

        isHidden: false,
        isDisabled: false,
        // isFluid: false
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
    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",
    withLabel: {
        format: "caption",
        content: {
            text: "Did you know ? ",
            thoughts: [
                "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
                "Virtual training takes 40-60% less time to complete than classroom training.",
                "eLearning produces an 18% increase in employee engagement in the workplace.",
                "eLearning courses consume 90% less energy than traditional learning.",
                "IBM saved $200 million by adopting a virtual training program for its employees."
            ]
        },
        textColor: "#000000",
    },
    withIcon: { icon: "fa fa-spinner fa-spin", size: "", position: "" },
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
        tgt: "button",
        dictionary: dictionary,
    },
    isHidden: false,
    isFluid: false,
};

Default.parameters = {
    docs: {
        description: {
            story: "Default loader for general purpose useu",
        },
    },
};
