//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow, mount } from 'enzyme';
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";

//--------------------------------------
// Import Components
// -------------------------------------
import InlineEdit from '../InlineEdit/InlineEdit.react'

describe("InlineEdit", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: InlineEdit,
        required: {
            value: "Testing InlineEdit",
            name: "Testing",
            onSubmit: () => {},
        },
    };

    hasValid("defaults", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component
    let onFocus = jest.fn();
    let onChange = jest.fn();
    let onBlur = jest.fn();
    let onInput = jest.fn();
    let onSubmit = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(<InlineEdit
            value="Please input your text here"
            name="testing_id"
            asEmphasis="singleLine"
            onFocus={onFocus}
            onChange={onChange}
            onBlur={onBlur}
            onInput={onInput}
            onSubmit={onSubmit}
        />);
    })

    it("it should render correctly without throwing an error", () => {
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asEmphasis prop as singleLine", () => {
        component.setProps({ asEmphasis: "singleLine" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asEmphasis prop as multiLine", () => {
        component.setProps({ asEmphasis: "multiLine" })
        expect(component.exists()).toBe(true);
    });

    it("it should pass the value to the InlineEdit", () => {
        component.find('input').simulate('change', { target: { value: 'Please input your text here' } })
        expect(component.find('input').props().value).toEqual('Please input your text here');
    });

    it("it should render correct props when blur on InlineEdit", () => {
        component.find('input').simulate('blur', { style: { backgroundColor: "#666666" } })
        expect(component.exists()).toBe(true);
    });

    it("it should render correct props when focus on InlineEdit", () => {
        component.find('input').simulate('focus', { style: { accentColor: "#ffbf00" } })
        expect(component.exists()).toBe(true);
    });

    it("it should pass the value to the InlineEdit when asEmphasis props set as multiLine", () => {
        component.setProps({
            asEmphasis: "multiLine"
        });
        component.find('textarea').simulate('change', { target: { value: 'Please input your text here' } })
        expect(component.find('textarea').props().value).toEqual('Please input your text here');
    });

    it("it should render correct props when blur on InlineEdit when asEmphasis props set as multiLine", () => {
        component.setProps({
            asEmphasis: "multiLine"
        });
        component.find('textarea').simulate('blur', { style: { backgroundColor: "#666666" } })
        expect(component.exists()).toBe(true);
    });

    it("it should render correct props when focus on InlineEdit when asEmphasis props set as multiLine", () => {
        component.setProps({
            asEmphasis: "multiLine"
        });
        component.find('textarea').simulate('focus', { style: { accentColor: "#ffbf00" } })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when input contain some value", () => {
        let InlineEdit = component.find('input');
        InlineEdit.simulate('change', { target: { value: 'Please input your text here' } });
        component.find('input').simulate('change', { key: 'Enter' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when input contain empty value", () => {
        let InlineEdit = component.find('input');
        InlineEdit.simulate('change', { target: { value: '' } });
        component.find('input').simulate('change', { key: 'Escape' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when textarea contain some value", () => {
        component.setProps({
            asEmphasis: "multiLine"
        });
        let InlineEdit = component.find('textarea');
        InlineEdit.simulate('change', { target: { value: 'Please input your text here' } });
        component.find('textarea').simulate('change', { key: 'Enter' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when textarea contain empty value", () => {
        component.setProps({
            asEmphasis: "multiLine"
        });
        let InlineEdit = component.find('textarea');
        InlineEdit.simulate('change', { target: { value: '' } });
        component.find('textarea').simulate('change', { key: 'Escape' })
        expect(component.exists()).toBe(true);
    });

    it("it should render correct style when height of textarea changes", () => {
        component.setProps({
            asEmphasis: "multiLine"
        });
        component.find('textarea').simulate('input', { target: { style: { height: "5px" }, scrollHeight: 35 } });
        expect(component.exists()).toBe(true);
    });
});


