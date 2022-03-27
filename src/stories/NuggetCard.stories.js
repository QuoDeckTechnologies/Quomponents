import React from "react";
import NuggetCard from "../components/NuggetCard/NuggetCard.react";

export default {
    title: "Design System/NuggetCard/NuggetCard",
    component: NuggetCard,
    argTypes: {
        content: {
            title: "",
            description: "",
            baseImage: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
            tag: []
        },
        baseImage: "",
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
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
            table: {
                category: "as-Flags",
            },
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
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
        componentSubtitle: "Displays a basic button for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <NuggetCard {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        title: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job",
        baseImage: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
        tag: ["SAles", "Sales2"]
    },
    asVariant: "primary",
    asSize: "normal",
    asFloated: "inline",
    asPadded: "normal",
    asAligned: "center",
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
Default.parameters = {
    docs: {
        source: {
            code: `<NuggetCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// MobileView
// -------------------------------------------------------------

export const DifferentResolution = (args) => {
    const baseObj1 = {
        ...Object.assign({}, Default.args, args, {
            content: {
                title: "Measure your sales readiness",
                description: "Take this quick profile test to check how well you are prepared for a sales job",
                baseImage: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
                tag: ["SAles", "Sales2"]
            },
        }),
    };
    return (
        <div style={{display:"flex", flexWrap:"wrap"}}>
            <div style={{ display: "flex", width: "375px", margin:"5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "481px", margin:"5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "769px", margin:"5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "1024px", margin:"5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
        </div>

    );
};