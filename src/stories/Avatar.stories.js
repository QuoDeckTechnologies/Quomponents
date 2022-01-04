import React from "react";
import Avatar from "../components/AppMenu/Avatar/Avatar.react";


export default {
    title: "Design System/Appmenu/Avatar",
    component: Avatar,
    argTypes: {
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
        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    icon: "", 
                    userImage: "", 
                    position: "left",
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
        componentSubtitle: "Displays a basic Icon for general-purpose use",
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
    asSize: "normal",
    asFloated: "inline",
    
    withIcon: { icon: "fas fa-user" ,userImage: "", position: "left" },
    withColor: {
        backgroundColor: "",
        textColor: "",
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

//----------------------------------------------------------
// Profile icon
//---------------------------------------------------------
export const  ProfileIcon = Template.bind({});
ProfileIcon.args = {

    asVariant: "warning",
    asSize: "normal",
    asFloated: "inline",
    
    withIcon: { icon: "fas fa-user" ,userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPOVdk7wUJEgo42hvQ3g2Ge2DIDRuEI8x6Q&usqp=CAU", position: "left" },

    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    isDisabled: false,
    isHidden: false,
};
ProfileIcon.parameters = {
    docs: {
        description: {
            story: "Profile default icon can change to profile image",
        },
        source: {
            code: `<Avatar {...${JSON.stringify(ProfileIcon.args, null, 2)}}/>`,
        },
    },
};
