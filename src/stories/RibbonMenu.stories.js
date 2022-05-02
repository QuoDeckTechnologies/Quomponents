import React from "react";
import RibbonMenu from "../components/RibbonMenu/RibbonMenu.react";

export default {
    title: "Design System/RibbonMenu/RibbonMenu",
    component: RibbonMenu,
    argTypes: {
        actions: {},
        deck: {},
        asEmphasis: {
            control: "select",
            options: ["html", "home", "tools", "design"],
            table: {
                category: "as-Flags",
            },
        },
        onSaveDeck: {
			table: {
				category: "Events",
				defaultValue: null,
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
        componentSubtitle: "Displays a RibbonMenu for general-purpose use",
        a11y: { disable: true },
        docs: {
            iframeHeight: 300,
        },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <RibbonMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
    asEmphasis: "html",
    actions: {
        updateDeck: (settingsObj) => { return settingsObj },
		addPoints: (points) => { return points },
        addSlide: (value) => { return value },
		duplicateSlide: (value) => { return value },
		deleteSlide: (value) => { return console.log(value) },
		changeSlideNav: (navObj) => { return navObj },
		setUserOptions: (view) => { return view }
	},
    deck: {
        navEnabled: false,
        snEnabled: false,
        voEnabled: false,
        content: [{}, {}, {}],
		currentSlide: 1
    },
	params: {
		deckId: "1"
	},
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<RibbonMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
