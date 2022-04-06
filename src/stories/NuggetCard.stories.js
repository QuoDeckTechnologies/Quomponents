import React, { useState } from "react";
import NuggetCard from "../components/NuggetCard/NuggetCard.react";
import ArcMenu from "../components/ArcMenu/ArcMenu.react";
import Backdrop from '@mui/material/Backdrop'

export default {
    title: "Design System/NuggetCard/NuggetCard",
    component: NuggetCard,
    argTypes: {
        content: {
            published: false,
            tags: [],
            category: "",
            name: "",
            description: "",
            image: "",
            points: "",
            identifier: ""
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
            table: {
                category: "as-Flags",
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
        arcFn: {
            table: {
                category: "Events",
                defaultValue: null,
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
        published: false,
        tags: ["Tag1", "Tag2"],
        category: "profiler",
        name: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job",
        image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
        points: "200",
        identifier: "XrPmy_OAK"
    },
    asFloated: "inline",
    isDisabled: false,
    isHidden: false,
    arcFn: ()=>{console.log("Arc Menu")}
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
                published: false,
                tags: ["Tag1", "Tag2"],
                category: "Profiler",
                name: "Measure your sales readiness",
                description: "Take this quick profile test to check how well you are prepared for a sales job",
                image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
                points: "200",
                identifier: "XrPmy_OAK"
            },
        }),
    };
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ display: "flex", width: "375px", margin: "5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "481px", margin: "5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "769px", margin: "5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
            <div style={{ display: "flex", width: "1024px", margin: "5px" }}>
                <NuggetCard
                    {...Object.assign({}, baseObj1, {
                    })}
                />
            </div>
        </div>

    );
};

// -------------------------------------------------------------
// Menu button
// -------------------------------------------------------------
const ExampleTemplate = (args) => {
    const [openModalOne, setOpenModalOne] = useState(false);
    const [openModalTwo, setOpenModalTwo] = useState(false);
    return (<div>
        <NuggetCard arcFn={() => setOpenModalOne(true)} />
        <div style={{ position: "absolute" }}>
            <Backdrop open={openModalOne} sx={{ zIndex: 10 }} onClick={() => setOpenModalOne(false)} />
            <Backdrop open={openModalTwo} sx={{ zIndex: 21 }} onClick={() => setOpenModalTwo(false)} />
            {openModalOne && (
                <div className="qui-first-imported-component" style={{ position: 'absolute', zIndex: 20, left: '0', marginTop: '-10em', }}>
                    <div className="qui-test-component-element" style={{ width: '10em', backgroundColor: '#ffbf00', marginBottom: '0.1em', cursor: 'pointer' }} >Heading</div>
                    <a href="http://localhost:6006/?path=/story/design-system-accentline-accentline--default">
                        <div className="qui-test-component-element" style={{ width: '10em', backgroundColor: '#454545', color: 'white', marginBottom: '0.1em', cursor: 'pointer' }} >Redirects</div>
                    </a>
                    <div className="qui-test-component-element" style={{ width: '10em', backgroundColor: '#454545', color: 'white', cursor: 'pointer' }} onClick={() => setOpenModalTwo(true)}>Opens a modal</div>
                    <div className="qui-test-component-element" style={{ width: '10em', backgroundColor: '#d97575', marginTop: '0.1em', cursor: 'pointer' }} onClick={() => setOpenModalOne(false)}>Delete</div>
                </div>
            )}
            {openModalTwo && <div className="qui qui-second-imported-component" style={{ position: 'absolute', zIndex: 22, background: 'white', padding: '5em', marginTop: '-20em', }}>
                <h1>Testing Second Modal</h1>
                <ArcMenu
                    type="close"
                    arcIcon="close"
                    position="top-right"
                    onClick={() => setOpenModalTwo(false)}
                />
                <button onClick={(e) => args.onClick(e)}>Click</button>
            </div>
            }
        </div>
    </div>

    );
};
export const AddCloseButtonUseCase = ExampleTemplate.bind({});
AddCloseButtonUseCase.parameters = {
    docs: {
        source: {
            code: `<ArcMenu {...${JSON.stringify(AddCloseButtonUseCase.args, null, 2)}}/>`,
        },
    },
};
