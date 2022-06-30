import React from "react";
import PageHeader from "../components/PageHeader/PageHeader.react";

const dictionary = JSON.stringify({
    hi: {
        pageheader: { text: "शीर्षणी" },
    },
});

export default {
    title: "Design System/PageHeader/PageHeader",
    component: PageHeader,
    argTypes: {
        content: "HEADER",
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
    },
    decorators: [
        (story) => (
            <div
                style={{
                    textAlign: "",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle:
            "Default PageHeader for general purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 100 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <PageHeader {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: "HEADER",
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "none",
    asAligned: "center",
    withColor: {
        textColor: "#AAAAAA",
    },
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<PageHeader {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored PageHeader
// -------------------------------------------------------------
export const ColoredPageHeader = Template.bind({});
ColoredPageHeader.args = {
    ...Default.args,
    withColor: {
        textColor: "#fffff",
    },
};
ColoredPageHeader.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the PageHeader.",
        },
        source: {
            code: `<ColoredPageHeader {...${JSON.stringify(
                ColoredPageHeader.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated PageHeader
// -------------------------------------------------------------
export const AnimatedPageHeader = Template.bind({});
AnimatedPageHeader.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedPageHeader.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the PageHeader with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedPageHeader {...${JSON.stringify(
                AnimatedPageHeader.args,
                null,
                2
            )}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated PageHeader
// -------------------------------------------------------------
export const TranslatedPageHeader = Template.bind({});
TranslatedPageHeader.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "pageheader",
        dictionary: dictionary,
    },
};
TranslatedPageHeader.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the PageHeader with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<PageHeader 
            withTranslation={{
                lang: "en",
                tgt: "button",
                dictionary: dictionary,
            }}
            />`,
        },
    },
}; 