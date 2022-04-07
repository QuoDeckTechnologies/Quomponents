//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
import { render, fireEvent } from "@testing-library/react";
//--------------------------------------
// Import Components
// -------------------------------------
import TreeBarOpen from '../TreeBarOpen/TreeBarOpen.react';
import { Treebeard, decorators } from "react-treebeard";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import SearchBar from "../SearchBar/SearchBar.react"

describe("TreeBarOpen", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        hi: {
            TreeBarOpen: {
                placeHolder: "खोजें...",
            }
        },
    });
    let content = {
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
    };

    let nodeData = {
        "id": "allArticles",
        "parentId": null,
        "name": "Courses",
        "description": "",
        "children": [
            {
                "id": "category-0",
                "parentId": "allArticles",
                "name": "Pulic Library",
                "description": "",
                "children": [
                    {
                        "published": true,
                        "tags": [],
                        "_id": "622eeb5ede595f24b7aadd6e",
                        "name": "Sedding Dummy Test Article",
                        "category": "article",
                        "summary": "",
                        "identifier": "2Dpr5SmeY",
                        "owner": "622b36ff46e1c31a2e22c42e",
                        "createdAt": "2022-03-14T07:14:38.348Z",
                        "id": "622eeb5ede595f24b7aadd6e"
                    },
                    {
                        "published": true,
                        "tags": [],
                        "_id": "622b4534a2d4393e6ce1c3ba",
                        "name": "New Article",
                        "category": "article",
                        "summary": "",
                        "identifier": "Yeb4B2_bn",
                        "owner": "622b36ff46e1c31a2e22c42e",
                        "createdAt": "2022-03-11T12:48:52.066Z",
                        "id": "622b4534a2d4393e6ce1c3ba"
                    }
                ]
            },
            {
                "id": "category-1",
                "parentId": "allArticles",
                "name": "Induction Program",
                "description": "",
                "children": [
                    {
                        "published": true,
                        "tags": [],
                        "_id": "623da574187838221637bebe",
                        "name": "Test News",
                        "category": "news",
                        "summary": "",
                        "identifier": "RnQ5trn7T",
                        "owner": "622b36ff46e1c31a2e22c42e",
                        "createdAt": "2022-03-25T11:20:20.195Z",
                        "id": "623da574187838221637bebe"
                    }
                ]
            }
        ],
        "active": true,
        "toggled": true
    }


    beforeEach(() => {
        jest.resetAllMocks();

        component = shallow(<TreeBarOpen
            content={content}
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
            onClick={() => console.log('test')}
            placeHolder="Search..."
        />);
    })

    it("should render correctly without throwing an error if icon props is false", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as tiny", () => {
        component.setProps({ asSize: "tiny" });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed asSize prop as small", () => {
        component.setProps({ asSize: "small" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as normal", () => {
        component.setProps({ asSize: "normal" });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed asSize prop as big", () => {
        component.setProps({ asSize: "big" });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed asSize prop as huge", () => {
        component.setProps({ asSize: "huge" });
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as massive", () => {
        component.setProps({ asSize: "massive" });
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

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withIcon props", () => {
        let icon = { icon: "fas fa-share" }
        component.setProps({ withIcon: icon })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
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
                tgt: "TreeBarOpen",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly if translation object is not returned",
        () => {
            component.setProps({
                withTranslation: {
                    lang: "",
                    tgt: "TreeBarOpen",
                    dictionary: dictionary,
                }
            });
            expect(component.exists()).toBe(true);
        });

    it('should render Treebar without throwing error', () => {
        let onToggle = jest.fn();
        const { getByText } = render(
            <Treebeard
                data={content.TreeData}
                onToggle={onToggle}
                decorators={decorators}
            />
        );
        expect(getByText('All Articles')).toBeInTheDocument();
    });

    it("should render tree bar when click on search", () => {
        let inputData = "Sedding Dummy Test Article";
        let filter = "Sedding Dummy Test Article";

        component.setProps({ filter: inputData })

        component.setProps({ content: content })
        component.setProps({ onClick: jest.fn() })
        let search = component.find(SearchBar);
        search.simulate('click', inputData);
    });

    it("should toggle the treebeard", () => {
        let toggled = false;
        let onSelectData = jest.fn();
        component.find(".qui-treebar-searchbar").children().simulate("click");
        component.setProps({ node: nodeData, toggled: toggled, onSelectData: onSelectData })
        component.setProps({ data: nodeData })
        let treeBeard = component.find(Treebeard);
        treeBeard.simulate('toggle', nodeData, toggled);
        expect(onSelectData).toHaveBeenCalledWith(nodeData);
    });
});