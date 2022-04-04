//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from 'enzyme';
import { render, fireEvent, getByPlaceholderText } from "@testing-library/react";
//--------------------------------------
// Import Components
// -------------------------------------
import SearchBar from '../SearchBar/SearchBar.react';

describe("SearchBar", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let handleButtonPress, handleKeyPress;
    handleKeyPress = jest.fn();
    handleButtonPress = jest.fn();
    const dictionary = JSON.stringify({
        hi: {
            SearchBar: {
                placeHolder: "खोजें...",
            }
        },
    });

    beforeEach(() => {
        jest.resetAllMocks();

        component = mount(<SearchBar
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
            handleKeyPress={handleKeyPress}
            handleButtonPress={handleButtonPress}
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
        let icon = { name: "fas fa-share" }
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

    it("should render correctly when passed withTranslation Props", () => {
        expect(component.find("input").props().placeholder).toBe("Search...")
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "SearchBar",
                dictionary: dictionary,
            },
        });
        expect(component.find("input").props().placeholder).toBe("खोजें...");
    });

    it("should render closed Search Bar with closed SearchBar css classes", () => {
        component.setProps({ isClosed: true });
        component.setProps({ isFluid: false });

        let searchBarChildContainer = component.find("div").at(3);
        let inputBox = component.find("input");
        let button = component.find("button");

        expect(searchBarChildContainer.props().className).toBe('qui-search-bar-child-container qui-search-bar-child-container-closed');
        expect(inputBox.props().className).toBe('qui-search-bar-input-field qui-search-bar-input-closed');
        expect(button.props().className).toBe('qui-search-bar-icon qui-search-bar-icon-closed');
    });

    it("should render opened Search Bar with the opened searchbar css classes", () => {
        component.setProps({ isClosed: false });

        let searchBarContainer = component.find("div").at(2);
        let searchBarChildContainer = component.find("div").at(3);
        let inputBox = component.find("input");
        let button = component.find("button");

        searchBarContainer.simulate('click');
        expect(searchBarChildContainer.props().className).toBe("qui-search-bar-child-container undefined");
        expect(inputBox.props().className).toBe("qui-search-bar-input-field undefined");
        expect(button.props().className).toBe("qui-search-bar-icon undefined");
    });

    it("should pass the value when clicked on button", () => {
        const { container } = render(<SearchBar onClick={() => { console.log("Testing Search Bar") }} />);
        const inputElement = getByPlaceholderText(container, "Search...");
        let button = component.find("button");
        button.simulate('click');
        fireEvent.click(inputElement, { target: { value: "some value" } });
        expect(inputElement.value).toBe("some value");
    });

    it('should pass the value when pressed Enter', () => {
        const { queryByPlaceholderText } = render(<SearchBar onClick={() => {
            console.log("Testing SearchBar")
            handleKeyPress = { handleKeyPress }
            handleButtonPress = { handleButtonPress }
        }} />);
        const searchInput = queryByPlaceholderText('Search...');
        fireEvent.change(searchInput, { target: { value: "some value" } });
        fireEvent.keyPress(searchInput, { key: 'Enter', keyCode: 13 });
        expect(searchInput.value).toBe('some value');
    });

    it('should pass the value when pressed enter', () => {
        const { queryByPlaceholderText } = render(<SearchBar onClick={() => {
            console.log("Testing SearchBar")
            handleKeyPress = { handleKeyPress }
            handleButtonPress = { handleButtonPress }
        }} />);
        const searchInput = queryByPlaceholderText('Search...');
        fireEvent.change(searchInput, { target: { value: "some value" } });
        fireEvent.keyPress(searchInput, { key: 'enter', keyCode: 13 });
        expect(searchInput.value).toBe('some value');
    });

    it('should open the closed SearchBar', () => {
        component.setProps({ isClosed: true, isFluid: false, expandable: false });
        let searchBar = component.find(".qui-search-bar-container");
        searchBar.simulate('click');
    });

    it('should close the opened SearchBar when clicked outside', () => {
        component.setProps({ isClosed: true, isFluid: false, expandable: false });
        let searchBar = component.find(".qui-search-bar-container");
        searchBar.simulate('click');
        fireEvent.click(document.body)
    });

    it("should render search icon when passed nothing with withIcon props", () => {
        let icon = { name: "" }
        component.setProps({ withIcon: icon })
        expect(component.find("i").props().className).toBe("fas fa-search")
    })
});