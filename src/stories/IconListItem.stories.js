import React from "react";
import IconListItem from "../components/IconListItem/IconListItem/IconListItem.react";

export default {
    title: "Design System/IconListItem/IconListItem",
    component: IconListItem,
    argTypes: {
        content: [{
            title: "",
            image: ""
        }],

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
    },
    decorators: [
        (story) => (
            <div
                style={{
                    width: "100%",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a basic Icon and content for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 700 },
    },
};

const Template = (args) => <IconListItem {...args} />;
//----------------------------------------------------------
// Default
//---------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
    content: [{
        image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
        title: "The boot space in Hyundai Elantra is 420 L"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
        title: "The boot space in Hyundai Elantra is 420 L"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&usqp=CAU",
        title: "The boot space in Hyundai Elantra is 420 L"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
        title: "The boot space in Hyundai Elantra is 420 L"
    }

    ],
    asSize: "normal",
    asFloated: "none",
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
};
Default.parameters = {
    docs: {
        description: {
            story:
                "Any free fontawesome icon can be used as the NavBar icon definition. This component is combination of the Avatar component on a MenuBlock component, The MenuBlock icon can be changed with userImage with in withIcon prop , give a link of any profile image and it will replace the icon with it , On the other side which is a Ellipsis icon in menuBlock component which is a part of NavBar , this icon can also be change with other , and whole NavBarr is clickable",
        },
        source: {
            code: `<IconListItem {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Floated Variants
// -------------------------------------------------------------
const FloatedVariantsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {


        }),
    };
    return (
        <div>
            <IconListItem
                {...Object.assign({}, baseObj, {
                    asSize: "small",
                    asFloated: "none",


                })}
            />
            <IconListItem
                {...Object.assign({}, baseObj, {
                    asSize: "small",
                    asFloated: "left",
                })}
            />
            <IconListItem
                {...Object.assign({}, baseObj, {
                    asSize: "small",
                    asFloated: "right",

                })}
            />
        </div>
    );
};


export const FloatedVariants = FloatedVariantsTemplate.bind({});
FloatedVariants.parameters = {
    docs: {
        description: {
            story: "5 variants are supported. Use as per purpose noted here.",
        },
        source: {
            code: `<IconListItem asVariant="primary"/>`,
        },
    },
};
