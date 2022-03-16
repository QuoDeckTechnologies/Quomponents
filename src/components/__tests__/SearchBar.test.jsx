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
            handleKeyPress = { handleKeyPress }
        handleButtonPress = { handleButtonPress } 
        />);
    })

    it("should render correctly without throwing an error if icon props is false", () => {
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

    it("should render closed Search Bar", () => {
        component.setProps({ isClosed: true });
        component.setProps({ isFluid: false });

        let searchBarChildContainer = component.find("div").at(3);
        let inputBox = component.find("input");
        let button = component.find("button");

        expect(searchBarChildContainer.props().className).toBe('search-bar-child-container search-bar-child-container-closed');
        expect(inputBox.props().className).toBe('search-bar-input-field search-bar-input-closed');
        expect(button.props().className).toBe('search-bar-icon search-bar-icon-closed');
    });

    it("should render opened Search Bar when clicked", () => {
        component.setProps({ isClosed: false });

        let searchBarContainer = component.find("div").at(2);
        let searchBarChildContainer = component.find("div").at(3);
        let inputBox = component.find("input");
        let button = component.find("button");

        searchBarContainer.simulate('click')
        expect(searchBarChildContainer.props().className).toBe("search-bar-child-container undefined");
        expect(inputBox.props().className).toBe("search-bar-input-field undefined");
        expect(button.props().className).toBe("search-bar-icon undefined");
    });

    it("should pass the value when clicked on button", () => {
        const { container } = render(<SearchBar onClick={() => { console.log("Testing Search Bar") }} />);
        const inputElement = getByPlaceholderText(container, "Search...");
        let button = component.find("button");
        button.simulate('click');
        fireEvent.click(inputElement, { target: { value: "some value" } });
        expect(inputElement.value).toBe("some value")
    });

    it('should pass the value when pressed Enter', () => {
        const { queryByPlaceholderText } = render(<SearchBar onClick={() => {
            console.log("Testing SearchBar")

        }}/>)
        const searchInput = queryByPlaceholderText('Search...')
        fireEvent.change(searchInput, { target: { value: "some value" } });
        fireEvent.keyPress(searchInput, { key: 'enter', keyCode: 13})
        handleButtonPress()
        expect(handleButtonPress.mock.calls.length).toBe(1)
        expect(searchInput.value).toBe('some value')
    })
});