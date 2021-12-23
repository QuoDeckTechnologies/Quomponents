// import React from "react";
// import InnerCard from '../components/CertificateCard/InnerCard.react'



// export default {
//     title : 'Design System/Certificate Card/Inner Card',
//     component : InnerCard,
//     argTypes : {
//         asStatus: {
//             control : 'select',
//             options : [ 'not started','started','complete','certificate' ],
//             table : {
//                 category : 'as-Toggles'
//             }
//         },
//         withIcon : {
//             table : {
//                 category : 'with-Params',
//                 defaultValue : {
//                     icon : '',
//                     certificate : ''
//                 }
//             }
//         }
//     },
//     decorators: [
//         (story) => (
//             <div
//                 style={{
//                     width: "100%",
//                     textAlign: "center",
//                     fontSize: "1.25em",
//                 }}
//             >
//                 {story()}
//             </div>
//         ),
//     ],
// }

// const Template = (args) => <InnerCard {...args} />
// export const Default = Template.bind({})
// Default.args = {
//     asStatus : 'completed',
//     withIcon : {
//         icon : 'icon',
//         certificate : 'cert'
//     }
// }



import React from "react";
import InnerCard from "../components/CertificateCard/InnerCard.react";

export default {
    title: "Design System/Certificate card/Inner card",
    component: InnerCard,
    argTypes: {
        asStatus: {
            control : 'select',
            options : [ 'not started','started','completed','certificate' ],
            table : {
                category : 'as-Toggles'
            }
        },
        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    icon: "",
                    size: "",
                    position: "left",
                },
            },
        },
        onClick : {
            table : {
                category : 'actions'
            }
        }
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
        // componentSubtitle: "Displays a basic button for general-purpose use",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <InnerCard {...args} />;
export const Default = Template.bind({});
Default.args = {
    asStatus : 'completed',
    withIcon: { icon: "",certificate:'cert.jpg' },
};
// Default.parameters = {
//     docs: {
//         source: {
//             code: `<Button {...${JSON.stringify(Default.args, null, 2)}}/>`,
//         },
//     },
// };