import React from "react";
import AppMenu from "../components/AppMenu/AppMenu/AppMenu.react";

export default {
    title: "Design System/Appmenu/Appmenu",
    component: AppMenu,
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

const Template = (args) => <AppMenu {...args} />;
//----------------------------------------------------------
// Default
//---------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
    asVariant: "primary",
    asSize: "normal",
    asFloated: "inline", 
    withIcon: { icon: "fas fa-ellipsis-v" ,userImage: "", position: "right" },
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
                "Any free fontawesome icon can be used as the Avatar icon definition. This component is combination of the Avatar component on a MenuBlock component, The Avatar icon can be changed with userImage with in withIcon prop , give a link of any profile image and it will replace the icon with it , On the other side which is a Ellipsis icon in menuBlock component which is a part of menu block , this icon can also be change with other , and whole menublock is clickable",
        },
        source: {
            code: `<AppMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

//----------------------------------------------------------
// With UserImage
//---------------------------------------------------------
export const UserImage = Template.bind({});
UserImage.args = {
    asVariant: "warning",
    asSize: "normal",
    asFloated: "inline", 
    withIcon: { icon: "fas fa-ellipsis-v" ,userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPOVdk7wUJEgo42hvQ3g2Ge2DIDRuEI8x6Q&usqp=CAU", position: "right" },
    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    isDisabled: false,
    isHidden: false,
};
UserImage.parameters = {
    docs: {
        description: {
            story:
                "Any free fontawesome icon can be used as the Avatar icon definition. This component is combination of the Avatar component on a MenuBlock component, The Avatar icon can be changed with userImage with in withIcon prop , give a link of any profile image and it will replace the icon with it , On the other side which is a Ellipsis icon in menuBlock component which is a part of menu block , this icon can also be change with other , and whole menublock is clickable",
        },
        source: {
            code: `<AppMenu {...${JSON.stringify(UserImage.args, null, 2)}}/>`,
        },
    },
};
