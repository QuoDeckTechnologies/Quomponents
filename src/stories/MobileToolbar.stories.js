import React from "react";
import MobileToolbar from "../components/MobileToolbar/MobileToolbar.react";
const dictionary = JSON.stringify({
    hi: {
        mobileToolbar: {
            title: "संपादन मोड",
            content: [
                { label: "पाठ्यक्रम" },
                { label: "नगेट्स" },
                { label: "परीक्षण" },
                { label: "प्रतियोगिता" },
                { label: "संदेश" },
            ]
        },
    },
});
export default {
    title: "Design System/MobileToolbar",
    component: MobileToolbar,
    argTypes: {
        title: "Edit Mode",
        content: [
            {
                icon: "",
                label: "label1",
                link: "",
            },
        ],
        asEmphasis: {
            control: "select",
            options: ["default", "editing"],
            table: {
                category: "as-Flags",
            },
        },
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
            table: {
                category: "as-Flags",
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    textColor: "",
                    accentColor: "",
                    backgroundColor: "",
                    hoverBackgroundColor: "",
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
        isCircular: {
            table: {
                category: "is-Toggles",
                defaultValue: true,
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
        componentSubtitle:
            "Default MobileToolbar for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 150 },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <MobileToolbar {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: "Edit Mode",
    content: [
        {
            icon: "fa fa-receipt",
            label: "Courses",
            format: "caption",
            link: "https://quodeck.com/",
        },
        {
            icon: "fa fa-crown",
            label: "Nuggets",
            format: "caption",
            link: "https://www.google.com/",
        },
        {
            icon: "fa fa-file",
            label: "Test",
            format: "caption",
            link: "https://github.com/",
        },
        {
            icon: "fa fa-trophy",
            label: "Contest",
            format: "caption",
            link: "https://www.youtube.com/",
        },
        {
            icon: "fa fa-envelope-open-text",
            label: "Post",
            format: "caption",
            link: "https://www.whatsapp.com/",
        },
    ],
    asEmphasis: "default",
    asVariant: "primary",
    withColor: {
        textColor: "",
        accentColor: "",
        backgroundColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "mobileToolbar",
        dictionary: dictionary,
    },
    isCircular: false,
    isHidden: false,
    isDisabled: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<MobileToolbar {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Colored MobileToolbar
// -------------------------------------------------------------
export const ColoredToolbar = Template.bind({});
ColoredToolbar.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#666666",
        textColor: "#EB6146",
        accentColor: "#48D1CC",
        hoverBackgroundColor: "#666666",
        hoverTextColor: "#EB6146",
    },
};
ColoredToolbar.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the component.",
        },
        source: {
            code: `<MobileToolbar withColor={{backgroundColor: "#D3D3D3" , textColor: "#EB6146", accentColor: "#48D1CC"}}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Animated MobileToolbar
// -------------------------------------------------------------
export const AnimatedToolbar = Template.bind({});
AnimatedToolbar.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideDown",
        duration: 1,
        delay: 0,
    },
};
AnimatedToolbar.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of MobileToolbar",
        },
        source: {
            code: `<MobileToolbar {...${JSON.stringify(
                AnimatedToolbar.args,
                null,
                2
            )}}/>`,
        },
    },
};

// -------------------------------------------------------------
// WithoutLabelMobileToolbar
// -------------------------------------------------------------
export const WithoutLabelMobileToolbar = Template.bind({});
WithoutLabelMobileToolbar.args = {
    ...Default.args,
    label: "",
    content: [
        {
            icon: "fa fa-receipt",
            label: "",
            format: "label",
            link: "https://quodeck.com/",
        },
        {
            icon: "fa fa-crown",
            label: "",
            format: "label",
            link: "https://www.google.com/",
        },
        {
            icon: "fa fa-file",
            label: "",
            format: "label",
            link: "https://github.com/",
        },
        {
            icon: "fa fa-trophy",
            label: "",
            format: "label",
            link: "https://www.youtube.com/",
        },
        {
            icon: "fa fa-envelope-open-text",
            label: "",
            format: "label",
            link: "https://www.whatsapp.com/",
        },
    ],
    asVariant: "warning"
};
WithoutLabelMobileToolbar.parameters = {
    docs: {
        description: {
            story:
                "Show MobileToolbar component without caption/label with asVarient:'warning'",
        },
        source: {
            code: `<MobileToolbar {...${JSON.stringify(
                WithoutLabelMobileToolbar.args,
                null,
                2
            )}}/>`,
        },
    },
};

// -------------------------------------------------------------
// IconsWithPopoverFormatMobilteToolbar
// -------------------------------------------------------------
export const IconsWithPopoverFormatMobilteToolbar = Template.bind({});
IconsWithPopoverFormatMobilteToolbar.args = {
    ...Default.args,
    content: [
        {
            icon: "fa fa-receipt",
            label: "Courses",
            format: "popover",
            link: "https://quodeck.com/",
        },
        {
            icon: "fa fa-crown",
            label: "Nuggets",
            format: "popover",
            link: "https://www.google.com/",
        },
        {
            icon: "fa fa-file",
            label: "Test",
            format: "popover",
            link: "https://github.com/",
        },
        {
            icon: "fa fa-trophy",
            label: "Contest",
            format: "popover",
            link: "https://www.youtube.com/",
        },
        {
            icon: "fa fa-envelope-open-text",
            label: "Post",
            format: "popover",
            link: "https://www.whatsapp.com/",
        },
    ],
    asEmphasis: "default",
};
IconsWithPopoverFormatMobilteToolbar.parameters = {
    docs: {
        source: {
            code: `<MobileToolbar {...${JSON.stringify(IconsWithPopoverFormatMobilteToolbar.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// IconsWithCaptionMobilteToolbar
// -------------------------------------------------------------
export const IconsWithCaptionMobilteToolbar = Template.bind({});
IconsWithCaptionMobilteToolbar.args = {
    ...Default.args,
    content: [
        {
            icon: "fa fa-receipt",
            label: "Courses",
            format: "label",
            link: "https://quodeck.com/",
        },
        {
            icon: "fa fa-crown",
            label: "Nuggets",
            format: "label",
            link: "https://www.google.com/",
        },
        {
            icon: "fa fa-file",
            label: "Test",
            format: "label",
            link: "https://github.com/",
        },
        {
            icon: "fa fa-trophy",
            label: "Contest",
            format: "label",
            link: "https://www.youtube.com/",
        },
        {
            icon: "fa fa-envelope-open-text",
            label: "Post",
            format: "label",
            link: "https://www.whatsapp.com/",
        },
    ],
    asEmphasis: "default",
};
IconsWithCaptionMobilteToolbar.parameters = {
    docs: {
        source: {
            code: `<MobileToolbar {...${JSON.stringify(IconsWithCaptionMobilteToolbar.args, null, 2)}}/>`,
        },
    },
};


// -------------------------------------------------------------
// MobileToolbarWithAllVariants
// -------------------------------------------------------------
const MobileToolbarWithAllVariantsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div>
            <MobileToolbar
                {...Object.assign({}, baseObj, {
                    asVariant: "primary",
                    asEmphasis: "default"
                })}
            />
            <MobileToolbar
                {...Object.assign({}, baseObj, {
                    asVariant: "secondary",
                    asEmphasis: "editing"
                })}
            />
        </div>
    );
};
export const MobileToolbarWithAllVariants = MobileToolbarWithAllVariantsTemplate.bind({});
MobileToolbarWithAllVariants.parameters = {
    docs: {
        description: {
            story: "all variants are supported in MobileToolbar.",
        },
        source: {
            code: `<MobileToolbar asEmphasis=""/>`,
        },
    },
};

// -------------------------------------------------------------
// TranslatedMobileToolbar
// -------------------------------------------------------------
export const TranslatedMobileToolbar = Template.bind({});
TranslatedMobileToolbar.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "mobileToolbar",
        dictionary: dictionary,
    },
};
TranslatedMobileToolbar.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in MobileToolbar. ",
        },
        source: {
            code: `<TranslatedMobileToolbar {...${JSON.stringify(
                TranslatedMobileToolbar.args,
                null,
                2
            )}}/>`,
        },
    },
};
