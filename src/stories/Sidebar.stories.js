import React from "react";
import Sidebar from "../components/Sidebar/Sidebar.react";

export default {
    title: "Design System/Sidebar/Sidebar",
    component: Sidebar,
    argTypes: {
        asEmphasis: {
            control: "select",
            options: ["default", "editMode"],
            table: {
                category: "as-Flags",
            },
        },
        content: {
            title:"",
            image: "",
            sections: {}
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
            options: ["left", "right", "inline"],
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
                    textColor:"",
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
    asEmphasis: "default",
    content: {
        title:"Edit Mode",
        image: "https://media.glassdoor.com/sqll/1666177/quodeck-squarelogo-1519202233122.png",
        sections: {
            Courses: {
                link: "/social",
                name: "Courses",
                icon: "fas fa-award",
                show: ["admin", "creator", "learner"]
            },
            Nuggets: {
                link: "/socialone",
                name: "Nuggets",
                icon: "fas fa-braille",
                show: ["admin", "creator", "learner"]
            },
            Tests: {
                link: "/socialtwo",
                name: "Tests",
                icon: "fas fa-paste",
                show: ["admin", "creator", "learner"]
            },
            Contests: {
                link: "/socialthree",
                name: "Contests",
                icon: "fas fa-trophy",
                show: ["admin", "creator", "learner"]
            },
            Posts: {
                link: "/socialfour",
                name: "Posts",
                icon: "fas fa-comment-alt",
                show: ["admin", "creator", "learner"]
            }
        }
    },
    asVariant: "primary",
    asSize: "normal",
    asFloated: "inline",
    asAligned: "center",
    withColor: {
        backgroundColor: "",
        textColor: "",
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
            code: `<SideBar content:{}/>`,
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
            code: `<SideBar content:{}/>`,
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
            code: `<SideBar content:{}/>`,
        },
    },
};