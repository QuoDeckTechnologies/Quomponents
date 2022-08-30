import React from "react";
import TreeBar from "../components/TreeBar/TreeBar.react";

const dictionary = JSON.stringify({
  hi: {
    TreeBar: {
      pageHeader: "पाठ्यक्रम",
    },
    searchBar: {
      placeHolder: "यहां पाठ्यक्रम चुनें...",
    },
  },
});

export default {
  title: "Design System/TreeBar",
  component: TreeBar,
  argTypes: {
    pageHeader: "Page Header",
    content: { treeData: {}, props: {} },
    asFloated: {
      control: "select",
      options: ["left", "right", "none", "inline"],
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
  parameters: {
    componentSubtitle: "Displays a TreeBar for general-purpose use",
    a11y: { disable: true },
    docs: {
      iframeHeight: 500,
    },
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
};

const Template = (args) => <TreeBar {...args} style={{ width: "30%" }} />;
export const Default = Template.bind({});
Default.args = {
  pageHeader: "Courses",
  content: {
    treeData: {
      id: "allArticles",
      parentId: null,
      name: "Courses",
      description: "",
      children: [
        {
          id: "category-0",
          parentId: "allArticles",
          name: "Public Library",
          description: "",
          children: [
            {
              published: true,
              tags: [],
              _id: "622eeb5ede595f24b7aadd6e",
              name: "Seeding Dummy Test Article",
              category: "article",
              summary: "",
              identifier: "2Dpr5SmeY",
              owner: "622b36ff46e1c31a2e22c42e",
              createdAt: "2022-03-14T07:14:38.348Z",
              id: "622eeb5ede595f24b7aadd6e",
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
              id: "622b4534a2d4393e6ce1c3ba",
            },
          ],
        },
        {
          id: "category-1",
          parentId: "allArticles",
          name: "Induction Program",
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
              id: "623da574187838221637bebe",
            },
            {
              published: true,
              tags: [],
              _id: "623da574187838221637bebe@",
              name: "Testing News",
              category: "news",
              summary: "",
              identifier: "RnQ5trn7T",
              owner: "622b36ff46e1c31a2e22c42e",
              createdAt: "2022-03-25T11:20:20.195Z",
              id: "623da574187838221637bebe@",
            },
          ],
        },
      ],
    },
    props: {
      ...dataprops,
    },
  },
  asFloated: "left",
  withAnimation: {
    animation: "",
    duration: 0.5,
    delay: 0,
  },
  isDisabled: false,
  isFluid: false,
  isHidden: false,
  withTranslation: {
    lang: "en",
    tgt: "TreeBar",
    dictionary: dictionary,
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<TreeBar
          pageHeader="Courses"
          content={{
            treeData: {
              id: "allArticles",
              parentId: null,
              name: "Courses",
              description: "",
              children: [
                {
                  id: "category-0",
                  parentId: "allArticles",
                  name: "Public Library",
                  description: "",
                  children: [
                    {
                      published: true,
                      tags: [],
                      _id: "622eeb5ede595f24b7aadd6e",
                      name: "Seeding Dummy Test Article",
                      category: "article",
                      summary: "",
                      identifier: "2Dpr5SmeY",
                      owner: "622b36ff46e1c31a2e22c42e",
                      createdAt: "2022-03-14T07:14:38.348Z",
                      id: "622eeb5ede595f24b7aadd6e",
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
                      id: "622b4534a2d4393e6ce1c3ba",
                    },
                  ],
                },
                {
                  id: "category-1",
                  parentId: "allArticles",
                  name: "Induction Program",
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
                      id: "623da574187838221637bebe",
                    },
                    {
                      published: true,
                      tags: [],
                      _id: "623da574187838221637bebe@",
                      name: "Testing News",
                      category: "news",
                      summary: "",
                      identifier: "RnQ5trn7T",
                      owner: "622b36ff46e1c31a2e22c42e",
                      createdAt: "2022-03-25T11:20:20.195Z",
                      id: "623da574187838221637bebe@",
                    },
                  ],
                },
              ],
            },
            props:{
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
            },
          }}
          asFloated="left"
          withAnimation={{
            animation: "",
            duration: 0.5,
            delay: 0,
          }}
          isDisabled={false}
          isFluid={false}
          isHidden={false}
          withTranslation={{
            lang: "en",
            tgt: "TreeBar",
            dictionary: ${JSON.stringify({
              hi: {
                TreeBar: {
                  pageHeader: "पाठ्यक्रम",
                },
                searchBar: {
                  placeHolder: "यहां पाठ्यक्रम चुनें...",
                },
              },
            })},
          }}
          onClick={()=>{}}
        />`,
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
    treeData: {
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
              name: "Seeding Dummy Test Article",
              category: "article",
              summary: "",
              identifier: "2Dpr5SmeY",
              owner: "622b36ff46e1c31a2e22c42e",
              createdAt: "2022-03-14T07:14:38.348Z",
              id: "622eeb5ede595f24b7aadd6e",
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
              id: "622b4534a2d4393e6ce1c3ba",
            },
          ],
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
              id: "623da574187838221637bebe",
            },
          ],
        },
      ],
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
    },
  },
  withTranslation: {
    lang: "hi",
    tgt: "TreeBar",
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
      code: `<TreeBar
          pageHeader="Courses"
          content={{
            treeData: {
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
                      name: "Seeding Dummy Test Article",
                      category: "article",
                      summary: "",
                      identifier: "2Dpr5SmeY",
                      owner: "622b36ff46e1c31a2e22c42e",
                      createdAt: "2022-03-14T07:14:38.348Z",
                      id: "622eeb5ede595f24b7aadd6e",
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
                      id: "622b4534a2d4393e6ce1c3ba",
                    },
                  ],
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
                      id: "623da574187838221637bebe",
                    },
                  ],
                },
              ],
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
            },
          }}
          asFloated="left"
          withAnimation={{
            animation: "",
            duration: 0.5,
            delay: 0,
          }}
          isDisabled={false}
          isFluid={false}
          isHidden={false}
          withTranslation={{
            lang: "hi",
            tgt: "TreeBar",
            dictionary: ${JSON.stringify({
              hi: {
                TreeBar: {
                  pageHeader: "पाठ्यक्रम",
                },
                searchBar: {
                  placeHolder: "यहां पाठ्यक्रम चुनें...",
                },
              },
            })},
          }}
          onClick={()=>{}}
        />`,
    },
  },
};

// -------------------------------------------------------------
// Without PageHeader
// -------------------------------------------------------------
export const WithoutPageHeader = Template.bind({});
WithoutPageHeader.args = {
  ...Default.args,
  pageHeader: "",
};
WithoutPageHeader.parameters = {
  docs: {
    description: {
      story: "Use to disable page header.",
    },
    source: {
      code: `<TreeBar
          pageHeader=""
          content={{
            treeData: {
              id: "allArticles",
              parentId: null,
              name: "Courses",
              description: "",
              children: [
                {
                  id: "category-0",
                  parentId: "allArticles",
                  name: "Public Library",
                  description: "",
                  children: [
                    {
                      published: true,
                      tags: [],
                      _id: "622eeb5ede595f24b7aadd6e",
                      name: "Seeding Dummy Test Article",
                      category: "article",
                      summary: "",
                      identifier: "2Dpr5SmeY",
                      owner: "622b36ff46e1c31a2e22c42e",
                      createdAt: "2022-03-14T07:14:38.348Z",
                      id: "622eeb5ede595f24b7aadd6e",
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
                      id: "622b4534a2d4393e6ce1c3ba",
                    },
                  ],
                },
                {
                  id: "category-1",
                  parentId: "allArticles",
                  name: "Induction Program",
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
                      id: "623da574187838221637bebe",
                    },
                    {
                      published: true,
                      tags: [],
                      _id: "623da574187838221637bebe@",
                      name: "Testing News",
                      category: "news",
                      summary: "",
                      identifier: "RnQ5trn7T",
                      owner: "622b36ff46e1c31a2e22c42e",
                      createdAt: "2022-03-25T11:20:20.195Z",
                      id: "623da574187838221637bebe@",
                    },
                  ],
                },
              ],
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
            },
          }}
          asFloated="left"
          withAnimation={{
            animation: "",
            duration: 0.5,
            delay: 0,
          }}
          isDisabled={false}
          isFluid={false}
          isHidden={false}
          withTranslation={{
            lang: "en",
            tgt: "TreeBar",
            dictionary: ${JSON.stringify({
              hi: {
                TreeBar: {
                  pageHeader: "पाठ्यक्रम",
                },
                searchBar: {
                  placeHolder: "यहां पाठ्यक्रम चुनें...",
                },
              },
            })},
          }}
          onClick={()=>{}}
        />`,
    },
  },
};

// -------------------------------------------------------------
// With Animation
// -------------------------------------------------------------
export const WithAnimation = Template.bind({});
WithAnimation.args = {
  ...Default.args,
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
};
WithAnimation.parameters = {
  docs: {
    description: {
      story: "Use to animate Treebar page.",
    },
    source: {
      code: `<TreeBar
          pageHeader="Courses"
          content={{
            treeData: {
              id: "allArticles",
              parentId: null,
              name: "Courses",
              description: "",
              children: [
                {
                  id: "category-0",
                  parentId: "allArticles",
                  name: "Public Library",
                  description: "",
                  children: [
                    {
                      published: true,
                      tags: [],
                      _id: "622eeb5ede595f24b7aadd6e",
                      name: "Seeding Dummy Test Article",
                      category: "article",
                      summary: "",
                      identifier: "2Dpr5SmeY",
                      owner: "622b36ff46e1c31a2e22c42e",
                      createdAt: "2022-03-14T07:14:38.348Z",
                      id: "622eeb5ede595f24b7aadd6e",
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
                      id: "622b4534a2d4393e6ce1c3ba",
                    },
                  ],
                },
                {
                  id: "category-1",
                  parentId: "allArticles",
                  name: "Induction Program",
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
                      id: "623da574187838221637bebe",
                    },
                    {
                      published: true,
                      tags: [],
                      _id: "623da574187838221637bebe@",
                      name: "Testing News",
                      category: "news",
                      summary: "",
                      identifier: "RnQ5trn7T",
                      owner: "622b36ff46e1c31a2e22c42e",
                      createdAt: "2022-03-25T11:20:20.195Z",
                      id: "623da574187838221637bebe@",
                    },
                  ],
                },
              ],
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
            },
          }}
          asFloated="left"
          withAnimation={{
            animation: "zoom",
            duration: 0.5,
            delay: 0,
          }}
          isDisabled={false}
          isFluid={false}
          isHidden={false}
          withTranslation={{
            lang: "en",
            tgt: "TreeBar",
            dictionary: ${JSON.stringify({
              hi: {
                TreeBar: {
                  pageHeader: "पाठ्यक्रम",
                },
                searchBar: {
                  placeHolder: "यहां पाठ्यक्रम चुनें...",
                },
              },
            })},
          }}
          onClick={()=>{}}
        />`,
    },
  },
};
