import React from "react";
import RewardUploader from "../components/RewardUploader/RewardUploader.react";

const dictionary = JSON.stringify({
    hi: {
        rewardUploadModal: {
            title: "एक इनाम बनाएँ",
            hititle: "पुरस्कार विवरण",
            buttons: {
                chooseFile: "फाइलें चुनें",
                cancel: "रद्द करें",
                save: "स्वीकार",
            },
        },
    },
});

export default {
    title: "Design System/RewardUploader",
    component: RewardUploader,
    argTypes: {
        title: "Create a Reward",
        image: "",
        rewardName: "",
        rewardHeader: "",
        rewardContent: "",
        isOpen: {
            table: {
                category: "is-Toggles",
                defaultValue: true,
            },
        },
        isEditable: {
            table: {
                category: "is-Toggles",
                defaultValue: true,
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    textColor: "",
                    accentColor: "",
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
    },
    decorators: [
        (story) => (
            <div>
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a basic RewardUploader for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RewardUploader {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: "Create a Reward",
    image: "",
    rewardName: "Name",
    rewardHeader: "Header",
    rewardContent: "Content",
    isOpen: true,
    isEditable: true,
    withColor: {
        textColor: "#121212",
        accentColor: "#bdbdbd",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "rewardUploadModal",
        dictionary: dictionary,
    },
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<RewardUploader {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};