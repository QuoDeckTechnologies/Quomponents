import React from "react";
import NavBar from "../components/NavBar /NavBar/NavBar.react";

const dictionary = JSON.stringify({
    hi: {
        navbar: {
            title: "कमाएँ",
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
        componentSubtitle: "Displays NavBar with appmenu & icons for general-purpose use",
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
        logoimg: "data:image/jpeg;base64,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",
        iconlink: [{
            icon: "fas fa-angle-left",
            link: "https://www.google.com/",
        }],
    },
    asVariant: "primary",
    withUser: "",
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
        logoimg: "data:image/jpeg;base64,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",
        iconlink: [{
            icon: "fas fa-angle-left",
            link: "https://www.google.com/",
        }],
    },
    withUser: "https://dp-client.com/CMS-NEW/assets/images/user/user11605616227.png",
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
            story: "5 variants are supported. Use as per purpose noted here.",
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
                "Use to change the language that the text appears in. To make this work for the NavBar, add a navbar:{title:''} value to the dictionary.",
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