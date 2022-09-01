//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
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
      content: {},
      onClick: () => {},
    },
    translations: {
      tgt: "TreeBar",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          TreeBar: {
            pageHeader: "पाठ्यक्रम",
          },
          searchBar: {
            placeHolder: "यहां पाठ्यक्रम चुनें...",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("positions", args);
  hasValid("colors", args);
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
  let nodeData = {
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
  };
  let nodeDataNull = {
    id: "allArticles",
    parentId: null,
    name: "Courses",
    description: "",
    children: null,
  };

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

  let onClick = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();

    component = shallow(
      <TreeBar
        content={{
          treeData: {
            ...nodeData,
          },
          props: {
            ...dataprops,
          },
        }}
        placeHolder="Search..."
        asFloated="left"
        withColor={{
          backgroundColor: "#fff",
          textColor: "#fff",
          accentColor: "#fff",
          hoverBackgroundColor: "#fff",
          hoverTextColor: "#fff",
        }}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        isFluid={null}
        onClick={onClick}
      />
    );
  });

  it("should render correctly if translation object is not returned", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
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
    component.setProps({ onClick: jest.fn() });
    let search = component.find(SearchBar);
    search.simulate("click", inputData);
    expect(component.exists()).toBe(true);
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

  it("should toggle the treebeard with node null", () => {
    let toggled = false;
    let onClick = jest.fn();
    component.find(".qui-treebar-searchbar").children().simulate("click");
    component.setProps({
      node: nodeDataNull,
      toggled: toggled,
      onClick: onClick,
    });
    component.setProps({ data: nodeDataNull });
    let treeBeard = component.find(Treebeard);
    treeBeard.simulate("toggle", nodeDataNull, toggled);
    expect(onClick).toHaveBeenCalledWith(nodeDataNull);
  });

  it("should render correctly when mount and nodeData is not null", () => {
    let onToggle = jest.fn();
    let onClick = jest.fn();
    component = mount(
      <Treebeard
        data={nodeData}
        onToggle={onToggle}
        decorators={decorators}
        onClick={onClick}
      />
    );
  });
  it("should render correctly when mount and nodeData is null", () => {
    let onToggle = jest.fn();
    let onClick = jest.fn();
    component = mount(
      <Treebeard
        data={nodeDataNull}
        onToggle={onToggle}
        decorators={decorators}
        onClick={onClick}
      />
    );
  });
});
