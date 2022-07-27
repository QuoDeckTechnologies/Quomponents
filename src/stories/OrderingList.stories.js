import React from "react";
import OrderingList from "../components/OrderingList/OrderingList/OrderingList.react";

export default {
    title: "Design System/OrderingList",
    component: OrderingList,
    argTypes: {
        content: [],
        purpose: "",
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
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
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
            table: {
                category: "as-Flags",
            },
        },
        asAligned: {
            control: "select",
            options: ["left", "right", "center"],
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
                    hoverBackgroundColor: "",
                    hoverTextColor: "",
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
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Display Options with up and down buttons to rank/ arrange options and submit the arranged options",
        a11y: { disable: true },
        docs: {
            iframeHeight: 550,
        },
    },
};
const Template = (args) => <OrderingList {...args} />;
//----------------------------------------------------------
// Default
//---------------------------------------------------------
export const Default = Template.bind({});
Default.args = {
    purpose: "",
    asVariant: "warning",
    asFloated: "none",
    asAligned: "center",
    asPadded: "fitted",
    content: ["PRIMARY BUTTON", "SECONDARY BUTTON", "THIRD BUTTON"],
    withColor: {
        backgroundColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        description: {
            story:
                "Any free fontawesome icon can be used as the OrderingList icon definition. This component is combination of the ordering Button  title component  and orderingList buuton  is clickable and ranking the title",
        },
        source: {
            code: `<OrderingList 
            purpose= ""
            asVariant= "warning"
            asFloated= "none"
            asAligned= "center"
            asPadded= "fitted"
            content= ["PRIMARY BUTTON", "SECONDARY BUTTON", "THIRD BUTTON"]
            withColor= {{
                backgroundColor: "",
                textColor: "",
                hoverBackgroundColor: "",
                hoverTextColor: "",
            }}
            isDisabled= {false}
            isHidden= {false}/>`,
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
            <OrderingList
                {...Object.assign({}, baseObj, {
                    asVariant: "primary",
                    purpose: "quiz",
                })}
            />
            <OrderingList
                {...Object.assign({}, baseObj, {
                    asVariant: "secondary",
                    purpose: "",
                })}
            />
            <OrderingList
                {...Object.assign({}, baseObj, {
                    asVariant: "success",
                })}
            />
            <OrderingList
                {...Object.assign({}, baseObj, {
                    asVariant: "warning",
                })}
            />
            <OrderingList
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
            code: `<OrderingList asVariant="primary"/>`,
        },
    },
};
