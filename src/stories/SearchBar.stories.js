import React from "react";
import SearchBar from "../components/SearchBar/SearchBar.react";

const dictionary = JSON.stringify({
    en: {
        searchBar: {
            placeholder: "Search..."
        }
    },
    hi: {
        searchBar: {
            placeholder: "खोजें..."
        }
    },
});
export default {
    title: "Design System/SearchBar/SearchBar",
    component: SearchBar,
    placeholder: "Search...",
    argTypes: {
        dictionaryOptions: [],
        isAutoSearch: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
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
                    accentColor: "",
                },
            },
        },
        withIcon: {
            table: {
                category: "with-Params",
                defaultValue: {
                    icon: "fas fa-search"
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
        componentSubtitle: "Display a basic SearchBar for general-purpose use",
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
    dictionaryOptions: ['QuoDeck', 'Amplayfy', 'Gamiquo', 'Gamifix', 'Quomponents', 'Demo', 'Migration', 'Explore', 'Sandbox'],
    placeholder: "Search...",
    isAutoSearch: false,
    asFloated: "left",
    asSize: "normal",
    withIcon: { icon: "fas fa-search" },
    withColor: {
        backgroundColor: "",
        textColor: "",
        accentColor: "",
    },
    isDisabled: false,
    isFluid: false,
    isClosed: false,
    isHidden: false,
    withTranslation: {
        lang: "en",
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
            isClosed: false,
            isAutoSearch: true,
            withTranslation: {
                lang: "en",
                tgt: "searchBar",
                dictionary: dictionary,
            },
        }),
    };
    const baseObj2 = {
        ...Object.assign({}, Default.args, args, {
            isClosed: true,
            isAutoSearch: false,
            withTranslation: {
                lang: "en",
                tgt: "searchBar",
                dictionary: dictionary,
            },
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
                "Use to change the language that the text appears in. To make this work for the SearchBar, add a SearchBar:{placeholder} value to the dictionary.",
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
