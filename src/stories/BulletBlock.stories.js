import React from "react";
import BulletBlock from "../components/BulletBlock/BulletBlock.react";

export default {
    title: "Design System/BulletBlock/BulletBlock",
    component: BulletBlock,
    argTypes: {
        content: {
            items: ["label1"],
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
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    backgroundColor: "",
                    accentColor: "",
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
        isDisabled: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        isHidden: {
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
                    textAlign: "",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a BulletBlock with list of items.",
        a11y: { disable: true },
        docs: {
            iframeHeight: 600,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
    return <BulletBlock {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    content: {
        items: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."],
    },
    asVariant: "primary",
    asSize: "normal",
    withColor: {
        textColor: "#121212",
        backgroundColor: "",
        accentColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<BulletBlock {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Colored Toolbar
// -------------------------------------------------------------
export const ColoredBulletblock = Template.bind({});
ColoredBulletblock.args = {
    ...Default.args,
    withColor: {
        backgroundColor: "#C98787",
        textColor: "#ffffff",
        accentColor: "",
    },
};
ColoredBulletblock.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the Icon.",
        },
        source: {
            code: `<Bulletblock withColor={{backgroundColor: "orange", textColor: "gray"}}/>`,
        },
    },
};

//-------------------------------------------------------------
// Animated Toolbar
// -------------------------------------------------------------
export const AnimatedBulletblock = Template.bind({});
AnimatedBulletblock.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideDown",
        duration: 1,
        delay: 0,
    },
};
AnimatedBulletblock.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of Toolbar",
        },
        source: {
            code: `<Bulletblock {...${JSON.stringify(
                AnimatedBulletblock.args,
                null,
                2
            )}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Allvariant
// -------------------------------------------------------------
const AllvariantTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div>
            <BulletBlock
                {...Object.assign({}, baseObj, {
                    asVariant: "primary",
                    withColor: {
                        textColor: "#121212",
                        backgroundColor: "",
                        accentColor: "",
                    },

                })}
            />
            <BulletBlock
                {...Object.assign({}, baseObj, {
                    asVariant: "secondary",
                    withColor: {
                        backgroundColor: "#C98787",
                        textColor: "#ffffff",
                        accentColor: "",
                    },

                })}
            />
        </div>
    );
};

export const Allvariant = AllvariantTemplate.bind({});
Allvariant.parameters = {
    docs: {
        description: {
            story: "6 sizes are supported. Use as per purpose noted here.",
        },
        source: {
            code: `<AppMenu asVariant="secondary"/>`,
        },
    },
};
