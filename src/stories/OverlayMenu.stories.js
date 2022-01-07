import React from "react";
import OverlayMenu from "../components/OverlayMenu/OverlayMenu.react";

const dictionary = JSON.stringify({
    en: {
        icon: { label: "Home" },
    },
    hi: {
        icon: { label: "होम आइकन" },
    },
});

export default {
    title: "Design System/OverlayMenu/OverlayMenu",
    component: OverlayMenu,
    argTypes: {
        content: [
            {
                icon: "",
                label: "",
            },
        ],
        withUser: {
            table: {
                category: "with-Params",
                defaultValue: "",
            },
        },

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

        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning"],
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
            options: ["fitted", "compact", "normal", "relaxed"],
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
                    format: "caption",
                    content: "",
                    textColor: "",
                    hoverTextColor: "",
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
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays icon with a link",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <OverlayMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
    asEmphasis: "contained",
    isCircular: false,
    content: [
        {
            icon: "fas fa-user-edit",
            label: "Edit Profile",
            format: "caption",
        },
        {
            icon: "fas fa-user-edit",
            label: "Account",
            format: "caption",
        },
    ],

    withUser: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPOVdk7wUJEgo42hvQ3g2Ge2DIDRuEI8x6Q&usqp=CAU",


    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "",
        textColor: "",
        hoverTextColor: "",
    },
    withIcon: { icon: "fa fa-home" },
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
        tgt: "icon",
        dictionary: dictionary,
    },

    isDisabled: false,
    isHidden: false,
    isFluid: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<OverlayMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
