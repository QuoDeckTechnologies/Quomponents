import React from "react";
import CertificateCard from "../components/CertificateCard/CertificateCard.react";


const dictionary = JSON.stringify({
    hi: {
        CertificateCard: { text: {
            notstarted : 'शुरू नही हुआ',
            completed : 'पूरा है',
            inprogress : 'चालू है'
        },
        label: "बातचीत कौशल 101" },
    },
});

export default {
    title: "Design System/CertificateCard/CertificateCard",
    component: CertificateCard,
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
                    certificate : ''
                }
            }
        },
        withLabel: {
            table: {
                category: "with-Params",
                defaultValue: {
                    content: "",
                },
            },
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
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
        isHidden : {
            table : {
                category : 'is-Toggles',
                defaultValue : false,
            }
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
        componentSubtitle: "Certificate Card displays status of completion or certificate if available",
        a11y: { disable: true },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CertificateCard {...args} />;
export const Default = Template.bind({});
Default.args = {

    asVariant: "primary",
    asStatus : 'not started',
    asSize: "normal",
    withLabel: {
        content: "Negotiation Skills 101",
    },

    isHidden : false,
    withIcon: { certificate : "https://media.istockphoto.com/vectors/certificate-template-vector-id1097299164" },
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
    //     lang: "hi",
    //     tgt: "CertificateCard",
    //     dictionary: dictionary,
    // },
};
Default.parameters = {
    docs: {
        source: {
            code: `<CertificateCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
export const TranslatedCard = Template.bind({})
TranslatedCard.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "CertificateCard",
        dictionary: dictionary,
    },
}
TranslatedCard.parameters = {
    docs: {
        source: {
            code: `<TranslatedCard {...${JSON.stringify(TranslatedCard.args, null, 2)}}/>`,
        },
    },
};