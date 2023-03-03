import React from "react";
import AvatarAdjustor from "../components/AvatarAdjustor/AvatarAdjustor.react";

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
    title: "Design System/AvatarAdjustor",
    component: AvatarAdjustor,
    argTypes: {
        title: "Create a Reward",
        image: "",
        rewardName: "",
        rewardHeader: "",
        rewardContent: "",
        aspectRatio: 1,
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
        componentSubtitle: "Displays a basic AvatarAdjustor for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <AvatarAdjustor {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: "Create a Reward",
    image: "",
    rewardName: "Name",
    rewardHeader: "Header",
    rewardContent: "Content",
    aspectRatio: 1,
    isOpen: true,
    isEditable: true,
    withColor: {
        textColor: "#121212",
        accentColor: "#bdbdbd",
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
            code: `<AvatarAdjustor {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};