import React from "react";
import NavBar from "../components/NavBar /NavBar/NavBar.react";

const dictionary = JSON.stringify({
    en: {
        NavBar: {
            text: "Earn",
        },
    },
    hi: {
        NavBar: { text: "कमाये", label: "कमाये" },
    },
});

export default {
    title: "Design System/NavBar/NavBar",
    component: NavBar,
    argTypes: {
        content: "NavBar",
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
                    format: "",
                    content: "",
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
        componentSubtitle: "Displays a basic Icon and content for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 700 },
    },
};

const Template = (args) => <NavBar {...args} />;
//----------------------------------------------------------
// Default
//---------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
    content: "Earn",
    asVariant: "primary",
    asSize: "normal",
    withIcon: { icon: "fas fa-angle-left"},
    withUser: "", 
    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    withLabel: {
        content: "",
        textColor: "#000000",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "Content",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        description: {
            story:
                "Any free fontawesome icon can be used as the NavBar icon definition. This component is combination of the Avatar component on a MenuBlock component, The MenuBlock icon can be changed with userImage with in withIcon prop , give a link of any profile image and it will replace the icon with it , On the other side which is a Ellipsis icon in menuBlock component which is a part of NavBar , this icon can also be change with other , and whole NavBarr is clickable",
        },
        source: {
            code: `<NavBar {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// With UserNavBar
//---------------------------------------------------------
export const UserNavBar = Template.bind({});
UserNavBar.args = {
    content: "Earn",
    asSize: "normal",
    withIcon: { icon: "fas fa-angle-left"},
    withUser: "https://png.pngitem.com/pimgs/s/130-1300380_female-user-image-icon-hd-png-download.png",
    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isHidden: false,
};
UserNavBar.parameters = {
    docs: {
        description: {
            story:
                "Any free fontawesome icon can be used as the NavBar icon definition. This component is combination of the Avatar component on a MenuBlock component, The MenuBlock icon can be changed with userImage with in withIcon prop , give a link of any profile image and it will replace the icon with it , On the other side which is a Ellipsis icon in menuBlock component which is a part of NavBar , this icon can also be change with other , and whole NavBar is clickable",
        },
        source: {
            code: `<NavBar {...${JSON.stringify(UserNavBar.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// AllVariants
// -------------------------------------------------------------
const AllVariantsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
            
            
        }),
    };
    return (
        <div>
            <NavBar
                {...Object.assign({}, baseObj, {
                    asVariant: "primary",
                    asSize:"normal",
                    withIcon: { icon: "fas fa-angle-left"},

                })}
            />
            <NavBar
                {...Object.assign({}, baseObj, {
                    asVariant: "secondary",
                    asSize:"normal",
                    withIcon: { icon: "fas fa-angle-left"},
                })}
            />
            <NavBar
                {...Object.assign({}, baseObj, {
                    asVariant: "success",
                    asSize:"normal",
                    withIcon: { icon: "fas fa-angle-left"},
                })}
            />
            <NavBar
                {...Object.assign({}, baseObj, {
                    asVariant: "warning",
                    asSize:"normal",
                    withIcon: { icon: "fas fa-angle-left"},
                })}
            />
            <NavBar
                {...Object.assign({}, baseObj, {
                    asVariant: "error",
                    asSize:"normal",
                    withIcon: { icon: "fas fa-angle-left"},
                })}
            />
        </div>
    );
};


export const AllVariants= AllVariantsTemplate.bind({});
AllVariants.parameters = {
    docs: {
        description: {
            story: "5 variants are supported. Use as per purpose noted here.",
        },
        source: {
            code: `<NavBar asVariant="primary"/>`,
        },
    },
};
// -------------------------------------------------------------
// Translated NavBar
// -------------------------------------------------------------
export const TranslatedNavBar = Template.bind({});
TranslatedNavBar.args = {
    ...Default.args,
    content: "Earn",
    withTranslation: {
        lang: "hi",
        tgt: "NavBar",
        dictionary: dictionary,
    },
};
TranslatedNavBar.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the NavBar, add a NavBar:{text,label} value to the dictionary.",
        },
        source: {
            code: `<NavBAr  withTranslation={{lang: "hi", tgt: "NavBar", dictionary: ${JSON.stringify(
                {
                    hi: {

                        NavBar: {
                            text: "कमाये",
                            label: "कमाये",
                        },
                    },
                }
            )}}}}/>`,
        },
    },
};