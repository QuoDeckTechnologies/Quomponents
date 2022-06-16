import React from "react";
import OverlayMenu from "../components/OverlayMenu/OverlayMenu.react";

const dictionary = JSON.stringify({

    hi: {
        overlayMenu: {
            content: [
                { label: "प्रोफ़ाइल संपादित करें" },
                { label: "खाता" },
                { label: "प्रोफ़ाइल संपादित करें" },
                { label: "खाता" },
                { label: "प्रोफ़ाइल संपादित करें" },
                { label: "खाता" },
                { label: "खाता" },
                { label: "प्रोफ़ाइल संपादित करें" },
                { label: "खाता" },
            ]
        },
    },
});

export default {
    title: "Design System/OverlayMenu/OverlayMenu",
    component: OverlayMenu,
    argTypes: {
        isOpen: {
            defaultValue: true,
        },
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
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    accentColor: "",
                    backgroundColor: "",
                    textColor: "",
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
        onClose: {
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
        docs: { iframeHeight: 700 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <OverlayMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    content: [
        {
            icon: "fas fa-user-edit",
            label: "Edit Profile",
            format: "caption",
        },
        {
            icon: "fas fa-home",
            label: "Account",
            format: "caption",
        },

        {
            icon: "fas fa-igloo",
            label: "Edit Profile",
            format: "caption",
        },
        {
            icon: "fas fa-adjust",
            label: "Account",
            format: "caption",
        },

        {
            icon: "fab fa-apple",
            label: "Edit Profile",
            format: "caption",
        },
        {
            icon: "fas fa-address-book",
            label: "Account",
            format: "caption",
        },
        {
            icon: "fas fa-bus",
            label: "Account",
            format: "caption",
        },

        {
            icon: "fas fa-certificate",
            label: "Edit Profile",
            format: "caption",
        },
        {
            icon: "fas fa-camera-retro",
            label: "Account",
            format: "caption",
        },

    ],

    withUser: "https://i.pinimg.com/564x/66/b7/b0/66b7b0cc1927986a85a41d754a360727.jpg",

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",

    withLabel: {
        format: "caption",
        content: "Aruna Asrani",
        textColor: "",
    },
    withIcon: { icon: "fa fa-user" },
    withColor: {
        accentColor: "",
        backgroundColor: "",
        textColor: "white",
        hoverTextColor: "white",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "overlayMenu",
        dictionary: dictionary,
    },

    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        description: {
            story: "OverlayMenu Profile can contain the profile image of the user and it has userIcon by default if profile imgae is not avialable ,with the Caption",
        },
        source: {
            code: `<OverlayMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// TranslatedOverlayMenu
// -------------------------------------------------------------
export const TranslatedOverlayMenu = Template.bind({});
TranslatedOverlayMenu.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "overlayMenu",
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


// -------------------------------------------------------------
// OverlayMenuWithBackgroundColor
// -------------------------------------------------------------

export const OverlayMenuWithBackgroundColor = Template.bind({});
OverlayMenuWithBackgroundColor.args = {
    ...Default.args,
    withColor: {
        accentColor: "purple",
        backgroundColor: "yellow",
        textColor: "yellow",
        hoverTextColor: "white",
    },
    withLabel: {
        format: "caption",
        content: "Aruna Asrani",
        textColor: "purple",
    },

};
OverlayMenuWithBackgroundColor.parameters = {
    docs: {
        description: {
            story:
                "You can change the background colors , hover colors with the props ",
        },
        source: {
            code: `<OverlayMenuWithBackgroundColor {...${JSON.stringify(
                OverlayMenuWithBackgroundColor.args,
                null,
                2
            )}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Primary variant
// -------------------------------------------------------------

export const PrimaryVariant = Template.bind({});
PrimaryVariant.args = {
    ...Default.args,

    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    withColor: {
        accentColor: "",
        backgroundColor: "",
        textColor: "white",
        hoverTextColor: "white",
    },
    withLabel: {
        format: "caption",
        content: "Aruna Asrani",
        textColor: "purple",
    },

};
PrimaryVariant.parameters = {
    docs: {
        description: {
            story:
                "Uses one of the five , Primary variant",
        },
        source: {
            code: `<PrimaryVariant {...${JSON.stringify(
                PrimaryVariant.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Secondary variant
// -------------------------------------------------------------

export const SecondaryVariant = Template.bind({});
SecondaryVariant.args = {
    ...Default.args,

    asVariant: "secondary",
    asSize: "normal",
    asFloated: "none",
    withColor: {
        accentColor: "",
        backgroundColor: "",
        textColor: "white",
        hoverTextColor: "white",
    },
    withLabel: {
        format: "caption",
        content: "Aruna Asrani",
        textColor: "purple",
    },

};
SecondaryVariant.parameters = {
    docs: {
        description: {
            story:
                "Uses one of the five , Secondary variant",
        },
        source: {
            code: `<SecondaryVariant {...${JSON.stringify(
                SecondaryVariant.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// warning variant
// -------------------------------------------------------------

export const WarningVariant = Template.bind({});
WarningVariant.args = {
    ...Default.args,

    asVariant: "warning",
    asSize: "normal",
    asFloated: "none",
    withColor: {
        accentColor: "",
        backgroundColor: "",
        textColor: "purple",
        hoverTextColor: "black",
    },
    withLabel: {
        format: "caption",
        content: "Aruna Asrani",
        textColor: "purple",
    },

};
WarningVariant.parameters = {
    docs: {
        description: {
            story:
                "Uses one of the five , Warning variant",
        },
        source: {
            code: `<WarningVariant {...${JSON.stringify(
                WarningVariant.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// success variant
// -------------------------------------------------------------

export const SuccessVariant = Template.bind({});
SuccessVariant.args = {
    ...Default.args,

    asVariant: "success",
    asSize: "normal",
    asFloated: "none",
    withColor: {
        accentColor: "",
        backgroundColor: "",
        textColor: "",
        hoverTextColor: "",
    },
    withLabel: {
        format: "caption",
        content: "Aruna Asrani",
        textColor: "",
    },

};
SuccessVariant.parameters = {
    docs: {
        description: {
            story:
                "Uses one of the five , success variant",
        },
        source: {
            code: `<SuccessVariant {...${JSON.stringify(
                SuccessVariant.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// ErrorVariant
// -------------------------------------------------------------

export const ErrorVariant = Template.bind({});
ErrorVariant.args = {
    ...Default.args,

    asVariant: "error",
    asSize: "normal",
    asFloated: "none",
    withColor: {
        accentColor: "",
        backgroundColor: "",
        textColor: "",
        hoverTextColor: "",
    },
    withLabel: {
        format: "caption",
        content: "Aruna Asrani",
        textColor: "",
    },

};
ErrorVariant.parameters = {
    docs: {
        description: {
            story:
                "Uses one of the five , Error variant",
        },
        source: {
            code: `<ErrorVariant {...${JSON.stringify(
                ErrorVariant.args,
                null,
                2
            )}}/>`,
        },
    },
};