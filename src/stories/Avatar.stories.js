import React from "react";
import Avatar from "../components/OverlayMenu/Avatar/Avatar.react";


export default {
    title: "Design System/OverlayMenu/Avatar",
    component: Avatar,
    argTypes: {
        
        withUser: {
            table: {
                category: "with-Params",
                defaultValue:"",
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
                    backgroundColor: "",
                    textColor: "",
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

        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    icon: "",  
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
        componentSubtitle: "Displays a basic Icon for general-purpose use or change it for user image by giving a link of image in withUser prop.",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};
 
const Template = (args) => <Avatar {...args} />;
//----------------------------------------------------------
// Default
//---------------------------------------------------------
export const Default = Template.bind({});
Default.args = {

    asVariant: "primary",
    asSize: "huge",
    asFloated: "inline",
    
    withIcon: { icon: "fas fa-user" },
    withUser: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80", 
    withColor: {
        backgroundColor: "",
        textColor: "",
    },

    withLabel: {
        format: "caption",
        content: "Aruna Asrani",
        textColor: "#000000",
    },

    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        description: {
            story:
                "Any free fontawesome icon can be used as the Avatar icon definition. we can change the icon to profile image by adding a link to userImgae in withIcon prop."
        },
        source: {
            code: `<Avatar {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};