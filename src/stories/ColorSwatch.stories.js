import React from "react";
import ColorSwatch from "../components/ColorSwatch/ColorSwatch.react";

export default {
    title: "Design System/ColorSwatch",
    component: ColorSwatch,
    argTypes: {
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
            table: {
                category: "as-Flags",
            },
        },
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed", "zero","zero"],
            table: {
                category: "as-Flags",
            },
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "inline", "none"],
            table: {
                category: "as-Flags",
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    primaryColor: "",
                    accentColor: "",
                    pageColor: "",
                    secondaryColor: ""
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
                    width: "100%",
                    textAlign: "center",
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a basic button for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <ColorSwatch {...args} />;
export const Default = Template.bind({});
Default.args = {
    asSize: "normal",
    asFloated: "inline",
    asPadded: "normal",
    withColor: {
        primaryColor: "",
        accentColor: "",
        pageColor: "",
        secondaryColor: ""
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<ColorSwatch {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

export const AllVariantsTemplate = (args) => {
    const baseObj1 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#F88A8A",
                accentColor: "#EF2929",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj2 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#E58E72",
                accentColor: "#EF8829",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj3 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#F8CC8A",
                accentColor: "#EF8829",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj4 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#55771E",
                accentColor: "#274708",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj5 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#87D9AD",
                accentColor: "#87D9AD",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj6 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#8AF8F8",
                accentColor: "#29B4EF",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj7 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#8AB6F8",
                accentColor: "#293DEF",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj8 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#9A8AF8",
                accentColor: "#4529EF",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj9 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#CE8AF8",
                accentColor: "#8029EF",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj10 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#D955EF",
                accentColor: "#B029EF",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj11 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#6B3894",
                accentColor: "#6B3894",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj12 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#211F8A",
                accentColor: "#22335F",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj13 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#D41717",
                accentColor: "#D41717",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj14 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#9E1212",
                accentColor: "#ED8B8B",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj15 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#E5DADA",
                accentColor: "#534F4F",
                secondaryColor: "#685555",
                pageColor: "#FFFFFF",
            }
        }),
    };
    const baseObj16 = {
        ...Object.assign({}, Default.args, args, {
            withColor: {
                primaryColor: "#FCF6F6",
                accentColor: "#AAAAAA",
                secondaryColor: "#685555",
                pageColor: "#454545",
            }
        }),
    };
    return (
        <div>
            <ColorSwatch
                {...Object.assign({}, baseObj1, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj2, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj3, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj4, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj5, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj6, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj7, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj8, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj9, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj10, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj11, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj12, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj13, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj14, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj15, {
                })}
            />
            <ColorSwatch
                {...Object.assign({}, baseObj16, {
                })}
            />
        </div>
    );
};


