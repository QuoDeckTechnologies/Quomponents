import React from "react";
import SearchBar from "../components/SearchBar/SearchBar.react";

const dictionary = JSON.stringify({
    hi: {
        searchBar: {
            placeHolder: "खोजें...",
        }
    },
});
export default {
    title: "Design System/SearchBar/SearchBar",
    component: SearchBar,
    placeHolder: "Search...",
    argTypes: {
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
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
                    textColor: "",
                },
            },
        },
        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    name: "fas fa-search"
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
        isFluid: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        isClosed: {
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
        componentSubtitle: "Display a basic ribbon for general-purpose use",
        a11y: { disable: true },
        docs: {
            iframeHeight: 300,
        }
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SearchBar {...args} />;
export const Default = Template.bind({});
Default.args = {
    placeHolder: "Search...",
    asFloated: "left",
    asSize: "normal",
    withIcon: { name: "fas fa-search" },
    withColor: {
        backgroundColor: "",
        textColor: "",
    },
    isDisabled: false,
    isFluid: false,
    isClosed: false,
    isHidden: false,
    withTranslation: {
        lang: "",
        tgt: "searchBar",
        dictionary: dictionary,
    },
};
Default.parameters = {
    docs: {
        docs: {
            source: {
                code: `<SearchBar {...${JSON.stringify(Default.args, null, 2)}}/>`,
            },
        },
    },

};
//Closed Search Bar
export const ClosedSearchBar = Template.bind({});
ClosedSearchBar.args = {
    ...Default.args,
    isClosed: true
};

//All Variants
export const AllVariantsTemplate = (args) => {
    const baseObj1 = {
        ...Object.assign({}, Default.args, args, {
            isClosed: false
        }),
    };
    const baseObj2 = {
        ...Object.assign({}, Default.args, args, {
            isClosed: true
        }),
    };
    return (
        <div>
            <SearchBar
                {...Object.assign({}, baseObj1, {
                })}
            />
            <SearchBar
                {...Object.assign({}, baseObj2, {
                })}
            />
        </div>
    );
};
// -------------------------------------------------------------
// Translated ActionButton
// -------------------------------------------------------------
export const TranslatedSearchBar = Template.bind({});
TranslatedSearchBar.args = {
    ...Default.args,
    withTranslation: {
        lang: "hi",
        tgt: "searchBar",
        dictionary: dictionary,
    },
};
TranslatedSearchBar.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the SearchBar, add a SearchBar:{placeHolder} value to the dictionary.",
        },
        source: {
            code: `<SearchBar {...${JSON.stringify(
                TranslatedSearchBar.args,
                null,
                2
            )}}/>`,
        },
    },
};
