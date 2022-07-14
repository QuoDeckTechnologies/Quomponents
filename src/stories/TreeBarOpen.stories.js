import React from "react";
import TreeBarOpen from "../components/TreeBarOpen/TreeBarOpen.react";

const dictionary = JSON.stringify({
  hi: {
    treeBarOpen: {
      header: "पाठ्यक्रम",
    },
    searchBar: {
      placeholder: "यहां पाठ्यक्रम चुनें...",
    },
  },
});

export default {
  title: "Design System/TreeBar/TreeBarOpen",
  component: TreeBarOpen,
  argTypes: {
    header: "Page Header",
    treeData: {},
    placeholder: "",
    asFloated: {
      control: "select",
      options: ["left", "right", "none", "inline"],
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
          hoverBackgroundColor: "",
          hoverTextColor: "",
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
    docs: {
      iframeHeight: 500,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <TreeBarOpen {...args} style={{ width: "30%" }} />;
export const Default = Template.bind({});
Default.args = {
  header: "Courses",
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
  placeholder: "Select courses here...",
  asFloated: "left",
  withColor: {
    backgroundColor: "",
    textColor: "",
    accentColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
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
    tgt: "treeBarOpen",
    dictionary: dictionary,
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<TreeBarOpen {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// Translated TreeBar
// -------------------------------------------------------------
export const TranslatedTreeBar = Template.bind({});
TranslatedTreeBar.args = {
  ...Default.args,
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
  withTranslation: {
    lang: "hi",
    tgt: "treeBarOpen",
    dictionary: dictionary,
  },
};
TranslatedTreeBar.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the TreebarBar:(header), add a SearchBar:{placeholder} value to the dictionary.",
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

// -------------------------------------------------------------
// Without header
// -------------------------------------------------------------
export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  ...Default.args,
  header: "",
};
WithoutHeader.parameters = {
  docs: {
    description: {
      story: "Use to disable page header.",
    },
    source: {
      code: `<TreeBarOpen {...${JSON.stringify(
        WithoutHeader.args,
        null,
        2
      )}}/>`,
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
      code: `<TreeBarOpen {...${JSON.stringify(
        WithAnimation.args,
        null,
        2
      )}}/>`,
    },
  },
};
