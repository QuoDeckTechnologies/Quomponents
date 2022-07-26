//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import TreeBar from "../TreeBar/TreeBar.react";
import { Treebeard, decorators } from "react-treebeard";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import SearchBar from "../SearchBar/SearchBar.react";

describe("TreeBar", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: SearchBar,
    required: {
      content: "Testing Button",
      onClick: () => console.log("Button Testing"),
    },
    translations: {
      tgt: "TreeBar",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          TreeBar: {
            placeHolder: "खोजें...",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("positions", args);
  hasValid("animations", args);
  hasValid("translations", args);
  hasValid("disabled", args);
  hasValid("hidden", args);
  hasValid("fluid", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    hi: {
      TreeBar: {
        placeHolder: "खोजें...",
      },
    },
  });
  let content = {
    treeData: {
      id: "allArticles",
      parentId: null,
      name: "All Articles",
      description: "",
      active: true,
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
      toggled: true,
    },
  };

  let nodeData = {
    id: "allArticles",
    parentId: null,
    name: "All Articles",
    description: "",
    active: true,
    children: [
      {
        id: "category-0",
        parentId: "allArticles",
        name: "Article",
        description: "",
        active: true,
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
        toggled: true,
      },
      {
        id: "category-1",
        parentId: "allArticles",
        name: "News",
        description: "",
        active: false,
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
        toggled: false,
      },
    ],
    toggled: true,
  };

  let onClick = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();

    component = shallow(
      <TreeBar
        content={content}
        cursor={true}
        asSize="normal"
        asFloated="inline"
        withColor={null}
        withIcon={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        isClosed={null}
        isFluid={null}
        placeHolder="Search..."
        onClick={onClick}
      />
    );
  });

  it("should render correctly without throwing an error if icon props is false", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated prop as left", () => {
    component.setProps({ asFloated: "left" });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed asFloated prop as right", () => {
    component.setProps({ asFloated: "right" });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed asFloated prop as inline", () => {
    component.setProps({ asFloated: "inline" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withAnimation props", () => {
    let animation = {
      animation: "zoom",
      duration: 0.5,
      delay: 0,
    };
    component.setProps({ withAnimation: animation });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props as false", () => {
    component.setProps({ isHidden: false });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed isHidden props as true", () => {
    component.setProps({ isHidden: true });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props as false", () => {
    component.setProps({ isDisabled: false });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isDisabled: true });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with withTranslation prop", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "TreeBar",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if translation object is not returned", () => {
    component.setProps({
      withTranslation: {
        lang: "",
        tgt: "TreeBar",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render Treebar without throwing error", () => {
    let onToggle = jest.fn();
    let onClick = jest.fn();
    const { getByText } = render(
      <Treebeard
        data={nodeData}
        onToggle={onToggle}
        decorators={decorators}
        onClick={onClick}
      />
    );
  });

  it("should render tree bar when click on search", () => {
    let inputData = "Seeding Dummy Test Article";
    component.setProps({ filter: inputData });
    component.setProps({ content: content, cursor: true });
    component.setProps({ onClick: jest.fn() });
    let search = component.find(SearchBar);
    search.simulate("click", inputData);
  });

  it("should render tree bar when click on search", () => {
    component
      .find(".qui-treebar-container")
      .children(0)
      .simulate("toggle", { content: { treeData: {} } });
    component.setProps({ content: { treeData: {} } });
  });

  it("should toggle the treebeard", () => {
    let toggled = false;
    let onClick = jest.fn();
    component.find(".qui-treebar-searchbar").children().simulate("click");
    component.setProps({
      node: nodeData,
      toggled: toggled,
      onClick: onClick,
    });
    component.setProps({ data: nodeData });
    let treeBeard = component.find(Treebeard);
    treeBeard.simulate("toggle", nodeData, toggled);
    expect(onClick).toHaveBeenCalledWith(nodeData);
  });
});
