import React from "react";
import OverlayMenu from "../components/OverlayMenu/OverlayMenu.react";

const dictionary = JSON.stringify({
    en: {
        OverlayMenu: { label: "Aruna Asrani" },
    },
    hi: {
        OverlayMenu: { label: "अरुणा असरानी" },
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
        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
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

    withUser: "https://i.pinimg.com/564x/03/ac/ad/03acadd2b6688879394e4c15a1eed7d4.jpg",


    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",

    withLabel: {
        format: "caption",
        content: "Aruna Asrani",
        textColor: "",
        hoverTextColor: "",
    },
    withIcon: { icon: "fa fa-home" },
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "white",
        hoverBackgroundColor: "",
        hoverTextColor: "white",
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
};
Default.parameters = {
    docs: {
        source: {
            code: `<OverlayMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
export const TranslatedOverlayMenu = Template.bind({});
TranslatedOverlayMenu.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "OverlayMenu",
        dictionary: dictionary,
    },
};
TranslatedOverlayMenu.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in OverlayMenu. To make this work for the OverlayMenu, add a OverlayMenu:{label} value to the dictionary.",
        },
        source: {
            code: `<TranslatedOverlayMenu {...${JSON.stringify(
                TranslatedOverlayMenu.args,
                null,
                2
            )}}/>`,
        },
    },
};

export const AnimatedOverlayMenu = Template.bind({});
AnimatedOverlayMenu.args = {
    ...Default.args,
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedOverlayMenu.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the OverlayMenu with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedOverlayMenu {...${JSON.stringify(
                AnimatedOverlayMenu.args,
                null,
                2
            )}}/>`,
        },
    },
};

