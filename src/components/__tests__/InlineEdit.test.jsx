//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow, mount, enzyme } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import InlineEdit from '../InlineEdit/InlineEdit.react'

describe("InlineEdit", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component
    let onFocus = jest.fn();
    let onChange = jest.fn();
    let onBlur = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(<InlineEdit
            content="Please input your text here"
            asSize="normal"
            asFloated="none"
            asAligned="center"
            withColor={null}
            withAnimation={null}
            isDisabled={false}
            isHidden={false}
            onFocus={onFocus}
            onChange={onChange}
            onBlur={onBlur}
        />);
    })

    it("it should render correctly without throwing an error", () => {
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when withColor Props is pass with the values",
        () => {
            component.setProps({
                withColor: {
                    accentColor: "#FFAB00",
                    backgroundColor: "#E5E5E5",
                }
            });
            expect(component.exists()).toBe(true);
        });

    it("it should pass the value to the InlineEdit", () => {
        component.find('input').simulate('change', { target: { value: 'Please input your text here' } })
        expect(component.find('input').props().value).toEqual('Please input your text here');
    });

    it("it should render correct props when blur on input", () => {
        component.find('input').simulate('blur', { style: { backgroundColor: "#666666" } })
        expect(component.exists()).toBe(true);
    });

    it("it should render correct props when focus on input", () => {
        component.find('input').simulate('focus', { style: { accentColor: "#ffbf00" } })
        expect(component.exists()).toBe(true);
    });
});