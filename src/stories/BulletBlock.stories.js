import React from "react";
import BulletBlock from "../components/BulletBlock/BulletBlock.react";

export default {
    title: "Design System/BulletBlock",
    component: BulletBlock,
    argTypes: {
        content: ["label1"],
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
                    textColor: "",
                },
            },
        },

        isHidden: {
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

    },
    decorators: [
        (story) => (
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a BulletBlock with list of items for general-purpose use.",
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
    content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Quisque sed turpis vel lectus suscipit auctor",
        "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
    ],

    asSize: "small",
    asFloated: "inline",
    asPadded: "normal",
    asAligned: "left",

    withColor: {
        textColor: "#121212",
        backgroundColor: "",
    },

    isHidden: false,
    isFluid: false,
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
        backgroundColor: "#14213d",
        textColor: "#edb51c",
    },
};
ColoredBulletblock.parameters = {
    docs: {
        description: {
            story: "Use to override the standard colors of the contents.",
        },
        source: {
            code: `<BulletBlock {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// BulletblockWithAllVariant
// -------------------------------------------------------------
const AllvariantTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (<>
        <div>
            <BulletBlock
                {...Object.assign({}, baseObj, {
                    asSize: "tiny",
                    asAligned: "left",
                    asFloated: "inline",
                    withColor: {
                        textColor: "#121212",
                        backgroundColor: "",
                    },

                })}
            /></div>
        <div>
            <BulletBlock
                {...Object.assign({}, baseObj, {
                    asSize: "small",
                    asAligned: "right",
                    asFloated: "inline",
                    withColor: {
                        backgroundColor: "#C98787",
                        textColor: "#ffffff",
                    },

                })}
            /></div>
        <div>
            <BulletBlock
                {...Object.assign({}, baseObj, {
                    asSize: "normal",
                    asAligned: "center",
                    asFloated: "inline",
                    withColor: {
                        backgroundColor: "#87b7b6",
                        textColor: "#14213d",
                    },

                })}
            />
        </div>
    </>
    );
};

export const BulletblockWithAllVariant = AllvariantTemplate.bind({});
BulletblockWithAllVariant.parameters = {
    docs: {
        description: {
            story: "All Variants are supported in BulletBock.",
        },
        source: {
            code: `<BulletBlock {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
