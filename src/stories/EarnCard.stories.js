import React from "react";
import EarnCard from "../components/EarnCard/EarnCard.react";

export default {
    title: "Design System/EarnCard/EarnCard",
    component: EarnCard,
    argTypes: {
        content: {
            image: "",
            tag: "",
            title :"",
            description :"",
            icon :"",
            dates:{
                end_date:"",
                start_date:"",
              },
            topics :[]
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
                    accentColor: "",
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
        isDisabled: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        isHidden: {
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
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a EarnCard with text and tag",
        a11y: { disable: true },
        docs: {
            iframeHeight: 600,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
    return (
        <EarnCard {...args} />
    );
}

export const Default = Template.bind({});
Default.args = {
    content: {
        image: "static/media/Image.62bfb45a.png",
        tag: "restricted",
        title : 'QuoDeck Emerging Leadership Program',
        description : 'Win a chance to apply for this exclusive opportunity for taking your career to the stars',
        icon : 'fas fa-square',
        dates: {
            end_date: "3rd May",
            start_date: "28th Feb"
          },
        topics : [
            {
                name : 'Name One',
                contentList : [],
                checked : true
            },
            {
                name : 'Name Two',
                contentList : [],
                checked : false
            },
            {
                name : 'Name Three',
                contentList : [],
                checked : false
            },
            {
                name : 'Name Four',
                contentList : [],
                checked : false
            },
            {
                name : 'Name Five',
                contentList : [],
                checked : true
            },
            {
                name : 'Name Six',
                contentList : [],
                checked : false
            },
        ]
    },
    asVariant: "primary",
    asSize : 'normal',
    withColor: {
        backgroundColor: "",
        accentColor: "",
        textColor: "#b60d17",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<EarnCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
