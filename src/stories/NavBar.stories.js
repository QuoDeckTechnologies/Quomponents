import React from "react";
import NavBar from "../components/NavBar/NavBar/NavBar.react";
import ShortLogo from "../assets/amplayfier-logo-short.png"

const dictionary = JSON.stringify({
    hi: {
        navbar: {
            title: "कमाये",
            content: "कॅटलॉग",
        },
    },
});

export default {
    title: "Design System/NavBar/NavBar",
    component: NavBar,
    argTypes: {
        content: {
            table: {
                defaultValue: {
                    title: "",
                    logoimg: "",
                    iconlink: [],
                },
            },
        },
        withUser: {
            table: {
                category: "with-Params",
                defaultValue: "",
            },
        },
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
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
        componentSubtitle: "Displays NavBar with AppMenu, Icons and Image for general-purpose use",
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
    content: {
        title: "earn",
        logoimg: ShortLogo,
        iconlink: [{
            icon: "fas fa-angle-left",
            link: "https://www.google.com/",
        }],
    },
    asVariant: "primary",
    withUser: "",
    withLabel: {
        content: "Catalog",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    withTranslation: {
        lang: "en",
        tgt: "navbar",
        dictionary: dictionary,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        description: {
            story:
                "Any free fontawesome icon can be used as the NavBar icon definition."
        },
        source: {
            code: `<NavBar {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// With UserNavBar
//---------------------------------------------------------
export const UserNavbar = Template.bind({});
UserNavbar.args = {
    content: {
        title: "earn",
        logoimg: ShortLogo,
        iconlink: [{
            icon: "fas fa-angle-left",
            link: "https://www.google.com/",
        }],
    },
    withUser: "https://dp-client.com/CMS-NEW/assets/images/user/user11605616227.png",
    withLabel: {
        content: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isHidden: false,
};
UserNavbar.parameters = {
    docs: {
        description: {
            story:
                "Any image can be used as the NavBar image definition.",
        },
        source: {
            code: `<NavBar {...${JSON.stringify(UserNavbar.args, null, 2)}}/>`,
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
                })}
            />
            <NavBar
                {...Object.assign({}, baseObj, {
                    asVariant: "secondary",
                })}
            />
            <NavBar
                {...Object.assign({}, baseObj, {
                    asVariant: "success",
                })}
            />
            <NavBar
                {...Object.assign({}, baseObj, {
                    asVariant: "warning",
                })}
            />
            <NavBar
                {...Object.assign({}, baseObj, {
                    asVariant: "error",
                })}
            />
        </div>
    );
};
export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.parameters = {
    docs: {
        description: {
            story: "All variants are supported. Use as per purpose noted here.",
        },
        source: {
            code: `<NavBar asVariant="primary"/>`,
        },
    },
}
//-------------------------------------------------------------
// Animated Navbar
// -------------------------------------------------------------
export const AnimatedNavbar = Template.bind({});
AnimatedNavbar.args = {
    ...Default.args,
    withAnimation: {
        animation: "fade",
        duration: 1,
        delay: 0,
    },
};
AnimatedNavbar.parameters = {
    docs: {
        description: {
            story: "We can animate the appearance of Navbar",
        },
        source: {
            code: `<NavbarDark {...${JSON.stringify(
                AnimatedNavbar.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Translated NavBar
// -------------------------------------------------------------
export const TranslatedNavBar = Template.bind({});
TranslatedNavBar.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "navbar",
        dictionary: dictionary,
    },
};
TranslatedNavBar.parameters = {
    docs: {
        description: {
            story:
                "We can translate the language of NavBar if dictionary is provided",
        },
        source: {
            code: `<TranslatedNavBar {...${JSON.stringify(
                TranslatedNavBar.args,
                {
                    navbar: { content: "कमाये" }
                }
            )}}/>`,
        },
    },
};