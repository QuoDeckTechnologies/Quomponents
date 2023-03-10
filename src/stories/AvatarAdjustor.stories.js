import React from "react";
import AvatarAdjustor from "../components/AvatarAdjustor/AvatarAdjustor.react";

const dictionary = JSON.stringify({
    hi: {
        avatarAdjustor: {
            title: "तस्विर अपलोड करना",
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
        title: "Upload Image",
        image: "",
        isOpen: {
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
        onChange: {
            table: {
                category: "Events",
                defaultValue: null,
            },
        },
        handleClose: {
            table: {
                category: "Events",
                defaultValue: null,
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
    title: "Upload Image",
    image: "",
    isOpen: true,
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
        tgt: "avatarAdjustor",
        dictionary: dictionary,
    },
};
Default.parameters = {
    docs: {
        source: {
            code: `<AvatarAdjustor {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};