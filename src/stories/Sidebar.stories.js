import React from "react";
import Sidebar from "../components/Sidebar/Sidebar.react";

export default {
    title: "Design System/Sidebar/Sidebar",
    component: Sidebar,
    argTypes: {
        licenseType: "admin",
        asEmphasis: {
            control: "select",
            options: ["default", "editMode"],
        },
        label: "",
        noCourses: false,
        sidebarLocation: "",
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
            table: {
                category: "as-Flags",
            },
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
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
const Template = (args) => <Sidebar {...args} />;
export const Default = Template.bind({});
Default.args = {
    licenseType: "SuperAdmin",
    asEmphasis: "default",
    label: "Edit Mode",
    noCourses: false,
    sidebarLocation: "welcome",
    asVariant: "primary",
    asFloated: "inline",
    withColor: {
        backgroundColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "#13ff43",
    },
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<Button {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// EditMode
// -------------------------------------------------------------
const EditModeTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div >
            <Sidebar
                {...Object.assign({}, baseObj, {
                    asEmphasis: "editMode"
                })}
            />
        </div>
    );
};
export const EditMode = EditModeTemplate.bind({});
EditMode.parameters = {
    docs: {
        description: {
            story: "2 modes are supported in Sidebar.",
        },
        source: {
            code: `<Sidebar content:{}/>`,
        },
    },
};
// -------------------------------------------------------------
// variants
// -------------------------------------------------------------
const SidebarVariantsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <div style={{ margin: "1em" }}>
                <Sidebar
                    {...Object.assign({}, baseObj, {
                        asEmphasis: "default"
                    })}
                />
            </div>
            <div>
                <Sidebar
                    {...Object.assign({}, baseObj, {
                        asEmphasis: "editMode"
                    })}
                />
            </div>
        </div>
    );
};
export const SidebarVariants = SidebarVariantsTemplate.bind({});
SidebarVariants.parameters = {
    docs: {
        description: {
            story: "2 modes are supported in Sidebar.",
        },
        source: {
            code: `<Sidebar content:{}/>`,
        },
    },
};
// -------------------------------------------------------------
// AnimatiedVariants
// -------------------------------------------------------------
const AnimatedSidebarTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <div style={{ margin: "1em" }}>
                <Sidebar
                    {...Object.assign({}, baseObj, {
                        asEmphasis: "default",
                        withAnimation: {
                            animation: "slideRight",
                            duration: 0.5,
                            delay: 0,
                        },
                    })}
                />
            </div>
            <div>
                <Sidebar
                    {...Object.assign({}, baseObj, {
                        asEmphasis: "editMode",
                        withAnimation: {
                            animation: "slideLeft",
                            duration: 0.5,
                            delay: 0,
                        },
                    })}
                />
            </div>
        </div>
    );
};
export const AnimatedSidebar = AnimatedSidebarTemplate.bind({});
AnimatedSidebar.parameters = {
    docs: {
        description: {
            story: "2 modes are supported in Sidebar.",
        },
        source: {
            code: `<Sidebar content:{}/>`,
        },
    },
};

// -------------------------------------------------------------
// DifferentLocations
// -------------------------------------------------------------
const LocationTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
        }),
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <h2>SuperAdmin</h2>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: "100%", }}>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >welcome</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "SuperAdmin",
                            sidebarLocation: "welcome",
                            withAnimation: {
                                animation: "slideRight",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >content without courses</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "SuperAdmin",
                            sidebarLocation: "content",
                            noCourses: true,
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >content with courses</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "SuperAdmin",
                            sidebarLocation: "content",
                            noCourses: false,
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >blog</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "SuperAdmin",
                            sidebarLocation: "blog",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >social</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "SuperAdmin",
                            sidebarLocation: "social",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >admin</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "SuperAdmin",
                            sidebarLocation: "admin",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >analytics</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "SuperAdmin",
                            sidebarLocation: "analytics",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >help</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "SuperAdmin",
                            sidebarLocation: "help",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
            </div>
            <br></br>

            <h2>Admin</h2>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: "100%", }}>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >welcome</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Admin",
                            sidebarLocation: "welcome",
                            withAnimation: {
                                animation: "slideRight",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >content without courses</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Admin",
                            sidebarLocation: "content",
                            noCourses: true,
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >content with courses</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Admin",
                            sidebarLocation: "content",
                            noCourses: false,
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >blog</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Admin",
                            sidebarLocation: "blog",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >social</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Admin",
                            sidebarLocation: "social",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >admin</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Admin",
                            sidebarLocation: "admin",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >analytics</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Admin",
                            sidebarLocation: "analytics",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >help</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Admin",
                            sidebarLocation: "help",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
            </div>
            <br></br>

            <h2>Trainer</h2>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: "100%", }}>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >welcome</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Trainer",
                            sidebarLocation: "welcome",
                            withAnimation: {
                                animation: "slideRight",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >content without courses</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Trainer",
                            sidebarLocation: "content",
                            noCourses: true,
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >content with courses</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Trainer",
                            sidebarLocation: "content",
                            noCourses: false,
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >analytics</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Trainer",
                            sidebarLocation: "analytics",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >help</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Trainer",
                            sidebarLocation: "help",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
            </div>
            <br></br>

            <h2>Manager</h2>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: "100%", }}>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >welcome</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Manager",
                            sidebarLocation: "welcome",
                            withAnimation: {
                                animation: "slideRight",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >content without courses</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Manager",
                            sidebarLocation: "content",
                            noCourses: true,
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >content with courses</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Manager",
                            sidebarLocation: "content",
                            noCourses: false,
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >analytics</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Manager",
                            sidebarLocation: "analytics",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >help</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Manager",
                            sidebarLocation: "help",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
            </div>
            <br></br>

            <h2>Creator</h2>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: "100%", }}>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >welcome</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Creator",
                            sidebarLocation: "welcome",
                            withAnimation: {
                                animation: "slideRight",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >content without courses</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Creator",
                            sidebarLocation: "content",
                            noCourses: true,
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >content with courses</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Creator",
                            sidebarLocation: "content",
                            noCourses: false,
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >blog</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Creator",
                            sidebarLocation: "blog",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >social</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Creator",
                            sidebarLocation: "social",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >analytics</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Creator",
                            sidebarLocation: "analytics",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >help</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "Creator",
                            sidebarLocation: "help",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
            </div>
            <br></br>

            <h2>DataAdmin</h2>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: "100%", }}>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >welcome</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "DataAdmin",
                            sidebarLocation: "welcome",
                            withAnimation: {
                                animation: "slideRight",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }} >
                    <h3 style={{ position: "absolute", right: "0em", bottom: "0.4em", zIndex: 3, writingMode: "vertical-lr", transform: "rotate(180deg)" }} >analytics</h3>
                    <Sidebar
                        {...Object.assign({}, baseObj, {
                            asEmphasis: "default",
                            licenseType: "DataAdmin",
                            sidebarLocation: "analytics",
                            withAnimation: {
                                animation: "slideLeft",
                                duration: 0.5,
                                delay: 0,
                            },
                        })}
                    />
                </div>
            </div>
        </div>
    );
};
export const LocationsByLicenseType = LocationTemplate.bind({});
LocationsByLicenseType.parameters = {
    docs: {
        description: {
            story: "6 license types are supported with different different sidebar locations.",
        },
        source: {
            code: `<Sidebar content:{}/>`,
        },
    },
};
