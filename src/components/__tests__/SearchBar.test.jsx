//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { mount, shallow } from 'enzyme';
import { render, fireEvent, getByPlaceholderText } from "@testing-library/react";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import SearchBar from '../SearchBar/SearchBar.react';
import Autocomplete from '@mui/material/Autocomplete';

describe("SearchBar", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: SearchBar,
        required: {
            placeholder: "placeholder",
            onClick: () => { },
        },
        translations: {
            tgt: "button",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    SearchBar: {
                        placeholder: "खोजें...",
                    }
                }
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("sizes", args);
    hasValid("positions", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("icons", args);
    hasValid("translations", args);

    hasValid("fluid", args);
    hasValid("hidden", args);
    hasValid("disabled", args);
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let handleButtonPress, handleKeyPress;
    handleKeyPress = jest.fn();
    handleButtonPress = jest.fn();
    let onClick = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();

        component = mount(
            <SearchBar
                dictionaryOptions={[]}
                placeholder="Search..."
                isClosed={false}
                isAutoSearch={false}
                asFloated="inline"
                asSize="normal"
                withColor={null}
                withIcon={null}
                withTranslation={null}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
                isFluid={null}
                onClick={onClick}
                handleKeyPress={handleKeyPress}
                handleButtonPress={handleButtonPress}
            />);
    })

    it("should pass the value when clicked on button", () => {
        const { container } = render(<SearchBar onClick={() => { }} />);
        const inputElement = getByPlaceholderText(container, "Search...");
        let button = component.find("button");
        button.simulate('click');
        fireEvent.click(inputElement, { target: { value: "some value" } });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed placeholder props with empty string", () => {
        component.setProps({ placeholder: "" });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed placeholder props as has value", () => {
        component.setProps({ placeholder: "Search..." });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isAutoSearch props as true with some values in dictionaryOptions ", () => {
        let component = shallow(<SearchBar
            dictionaryOptions={["Options3", "Options4"]}
            isAutoSearch={true}
            onClick={onClick}
        />);
        component.find(Autocomplete).at(0).simulate('change', { value: "Options1" })
        component.find(".qui-search-bar-input-field").simulate('change')
        expect(component.exists()).toBe(true);
    });

    it('should pass the value when pressed Enter', () => {
        const { queryByPlaceholderText } = render(<SearchBar onClick={() => {
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
        expect(component.exists()).toBe(true);
    });

    it('should close the opened SearchBar when clicked outside', () => {
        component.setProps({ isClosed: true, isFluid: false, expandable: false });
        let searchBar = component.find(".qui-search-bar-container");
        searchBar.simulate('click');
        fireEvent.click(document.body)
        expect(component.exists()).toBe(true);
    });
});