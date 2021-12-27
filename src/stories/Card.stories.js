import React from "react";
import Card from "../components/CertificateCard/Card.react";

export default {
    title: "Design System/CertificateCard/Card",
    component: Card,
    argTypes: {
        asStatus: {
            control : 'select',
            options : [ "not started", "in progress", "completed", "certificate" ],
            table : {
                category : 'as-Flags'
            }
        },
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
            table: {
                category: "as-Flags",
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    accentColor: "",
                    textColor: "",
                },
            },
        },
        withIcon : {
            table : {
                category : 'with-Params',
                defaultValue : {
                    icon : '',
                    certificate : ''
                }
            }
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
        isDisabled: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        isHidden : {
            table : {
                category : 'is-Toggles',
                defaultValue : false,
            }
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
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a basic Card for general-purpose use",
        a11y: { disable: true },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Card {...args} />;
export const Default = Template.bind({});
Default.args = {

    asVariant: "primary",
    asStatus : 'not started',

    withLabel: {
        format: "caption",
        content: "Negotiation Skills 101",
        textColor: "#000000",
    },
    isDisabled : false,
    isHidden : false,
    withIcon: { icon: "", certificate : "https://media.istockphoto.com/vectors/certificate-template-vector-id1097299164" },
    withColor: {
        accentColor: "",
        textColor: "",
    },
    withAnimation: {
        animation: "collapse",
        duration: 0.5,
        delay: 0,
    },
    // withTranslation: {
    //     lang: "en",
    //     tgt: "Card",
    //     dictionary: dictionary,
    // },

};
Default.parameters = {
    docs: {
        source: {
            code: `<Card {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
