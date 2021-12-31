import React from "react";
import ToolbarDark from "../components/Buttons/ToolbarDark/ToolbarDark.react";

export default {
    title: "Design System/Buttons/ToolbarDark",
    component: ToolbarDark,
    argTypes: {

        content: [
            {
                icon: "",
                label: "label1",
                link: "",
            }
        ],

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
                    position: "center",
                },
            },
        },
        withLabel: {
            table: {
                category: "with-Params",
                defaultValue: {
                    format: "label",
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
                    animation: "zoom",
                    duration: 0.7,
                    delay: 1,
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
                    width: "100%",
                    textAlign: "left",
                    fontSize: "1em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays  ToolbarDark with Icons",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ToolbarDark {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: [
        {
            icon: "fa fa-share",
            label: "Certificate",
            link: "",
        },
        {
            icon: "fa fa-wallet",
            label: "Wallet",
            link: "",
        },
        {
            icon: "fa fa-gift",
            label: "Rewards",
            link: "",
        },
        {
            icon: "fa fa-chart-pie",
            label: "Reports",
            link: "",
        }
    ],

    asEmphasis: "text",
    isCircular: false,

    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asAligned: "center",

    withLabel: {
        format: "caption",
        content: "Home",
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
   
    isDisabled: false,
    isHidden: false,
    isFluid: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<ToolbarDark {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

export const AnimatedToolbar = Template.bind({});
AnimatedToolbar.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideDown",
        duration: 3,
        delay: 0,
    },
};
AnimatedToolbar.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of Toolbar",
        },
        source: {
            code: `<ToolbarDark {...${JSON.stringify(AnimatedToolbar.args, null, 2)}}/>`,
        },
    },
};



