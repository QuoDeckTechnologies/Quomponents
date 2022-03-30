import React from "react";
import TreeItem from "../components/TreeBarOpen/TreeBarOpen.react";

const dictionary = JSON.stringify({
    hi: {
        TreeBarOpen: {
            pageHeader: "पाठ्यक्रम"
        },
        SearchBar: {
            placeHolder: "यहां पाठ्यक्रम चुनें...",
        }
    },
});

export default {
    title: "Design System/TreeBar/TreeBarOpen",
    component: TreeItem,
    argTypes: {
        pageHeader: "Page Header",
        content: { TreeData: {}, props: {} },
        selectData: {
            table: {
                category: "Events",
                defaultValue: null,
            },
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
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
        asAligned: {
            control: "select",
            options: ["left", "right", "center"],
            table: {
                category: "as-Flags",
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
        componentSubtitle: "Displays a TreeBarOpen for general-purpose use",
        a11y: { disable: true },
        // controls: { expanded: true }
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
let dataprops = {
    placeHolder: "Select courses here...",
    asFloated: "left",
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
        tgt: "SearchBar",
        dictionary: dictionary,
    },
}

const Template = (args) => <TreeItem {...args} />;
export const Default = Template.bind({});
Default.args = {
    pageHeader: "Courses",
    content: {
        TreeData: {
            id: "allArticles",
            parentId: null,
            name: "All Articles",
            description: "",
            children: [
                {
                    id: "category-0",
                    parentId: "allArticles",
                    name: "Article",
                    description: "",
                    children: [
                        {
                            published: true,
                            tags: [],
                            _id: "622eeb5ede595f24b7aadd6e",
                            name: "Sedding Dummy Test Article",
                            category: "article",
                            summary: "",
                            identifier: "2Dpr5SmeY",
                            owner: "622b36ff46e1c31a2e22c42e",
                            createdAt: "2022-03-14T07:14:38.348Z",
                            id: "622eeb5ede595f24b7aadd6e"
                        },
                        {
                            published: true,
                            tags: [],
                            _id: "622b4534a2d4393e6ce1c3ba",
                            name: "New Article",
                            category: "article",
                            summary: "",
                            identifier: "Yeb4B2_bn",
                            owner: "622b36ff46e1c31a2e22c42e",
                            createdAt: "2022-03-11T12:48:52.066Z",
                            id: "622b4534a2d4393e6ce1c3ba"
                        }
                    ]
                },
                {
                    id: "category-1",
                    parentId: "allArticles",
                    name: "News",
                    description: "",
                    children: [
                        {
                            published: true,
                            tags: [],
                            _id: "623da574187838221637bebe",
                            name: "Test News",
                            category: "news",
                            summary: "",
                            identifier: "RnQ5trn7T",
                            owner: "622b36ff46e1c31a2e22c42e",
                            createdAt: "2022-03-25T11:20:20.195Z",
                            id: "623da574187838221637bebe"
                        }
                    ]
                }
            ]
        },
        props: {
            ...dataprops
        }
    },
    asSize: "tiny",
    asFloated: "left",
    asAligned: "left",
    withAnimation: {
        animation: "",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isFluid: false,
    isHidden: false,
    withTranslation: {
        lang: "",
        tgt: "TreeBarOpen",
        dictionary: dictionary,
    },
};
Default.parameters = {
    docs: {
        source: {
            code: `<TreeItem {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

// -------------------------------------------------------------
// Translated TreeBar
// -------------------------------------------------------------
export const TranslatedTreeBar = Template.bind({});
TranslatedTreeBar.args = {
    ...Default.args,
    content: {
        TreeData: {
            id: "allArticles",
            parentId: null,
            name: "All Articles",
            description: "",
            children: [
                {
                    id: "category-0",
                    parentId: "allArticles",
                    name: "Article",
                    description: "",
                    children: [
                        {
                            published: true,
                            tags: [],
                            _id: "622eeb5ede595f24b7aadd6e",
                            name: "Sedding Dummy Test Article",
                            category: "article",
                            summary: "",
                            identifier: "2Dpr5SmeY",
                            owner: "622b36ff46e1c31a2e22c42e",
                            createdAt: "2022-03-14T07:14:38.348Z",
                            id: "622eeb5ede595f24b7aadd6e"
                        },
                        {
                            published: true,
                            tags: [],
                            _id: "622b4534a2d4393e6ce1c3ba",
                            name: "New Article",
                            category: "article",
                            summary: "",
                            identifier: "Yeb4B2_bn",
                            owner: "622b36ff46e1c31a2e22c42e",
                            createdAt: "2022-03-11T12:48:52.066Z",
                            id: "622b4534a2d4393e6ce1c3ba"
                        }
                    ]
                },
                {
                    id: "category-1",
                    parentId: "allArticles",
                    name: "News",
                    description: "",
                    children: [
                        {
                            published: true,
                            tags: [],
                            _id: "623da574187838221637bebe",
                            name: "Test News",
                            category: "news",
                            summary: "",
                            identifier: "RnQ5trn7T",
                            owner: "622b36ff46e1c31a2e22c42e",
                            createdAt: "2022-03-25T11:20:20.195Z",
                            id: "623da574187838221637bebe"
                        }
                    ]
                }
            ]
        },
        props: {
            placeHolder: "Select courses here...",
            asFloated: "left",
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
                lang: "hi",
                tgt: "SearchBar",
                dictionary: dictionary,
            },
        }
    },
    withTranslation: {
        lang: "hi",
        tgt: "TreeBarOpen",
        dictionary: dictionary,
    },
};
TranslatedTreeBar.parameters = {
    docs: {
        description: {
            story:
                "Use to change the language that the text appears in. To make this work for the TreebarBar:(pageHeader), add a SearchBar:{placeHolder} value to the dictionary.",
        },
        source: {
            code: `<TreeBarOpen {...${JSON.stringify(
                TranslatedTreeBar.args,
                null,
                2
            )}}/>`,
        },
    },
};
