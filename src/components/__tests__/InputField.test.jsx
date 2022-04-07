//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow, mount, enzyme } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import InputField from '../InputField/InputField.react'
import TextField from '@mui/material/TextField';

describe("InputField", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component
    let onFocus = jest.fn();
    let onChange = jest.fn();
    let onBlur = jest.fn();
    let onClick = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(<InputField
            content={{
                label: "Input Name",
                value: "Please input your text here",
                placeholder: "Options",
                maxLength: 300,
            }}
            name=""
            asEmphasis="filled"
            asFloated="none"
            withColor={{
                textColor: "#666666",
                accentColor: "#ffab00",
                backgroundColor: "#ffab000d",
            }}
            withAnimation={null}
            isDisabled={false}
            isHidden={false}
            onFocus={onFocus}
            onChange={onChange}
            onBlur={onBlur}
            onClick={onClick}
        />);
    })

    it("it should render correctly without throwing an error", () => {
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asEmphasis prop as filled", () => {
        component.setProps({ asEmphasis: "filled" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asEmphasis prop as charLimited", () => {
        component.setProps({ asEmphasis: "charLimited" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asEmphasis prop as listInput", () => {
        component.setProps({ asEmphasis: "listInput" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asEmphasis prop as shortField", () => {
        component.setProps({ asEmphasis: "shortField" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asFloated prop as none", () => {
        component.setProps({ asFloated: "none" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed withColor props", () => {
        let colors = {
            textColor: "#fff",
            backgroundColor: "#fff",
            accentColor: "#FF0000",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    });
    // ------------------------------
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
    // --------------------------

    // ---------------------------------
    it("it should pass the value to the InputField", () => {
        component.find('input').simulate('change', { target: { value: 'Please input your text here' } })
        expect(component.find('input').props().value).toEqual('Please input your text here');
    });

    it("it should render correct props when blur on InputField", () => {
        component.find('input').simulate('blur', { style: { backgroundColor: "#666666" } })
        expect(component.exists()).toBe(true);
    });

    it("it should render correct props when focus on InputField", () => {
        component.find('input').simulate('focus', { style: { accentColor: "#ffbf00" } })
        expect(component.exists()).toBe(true);
    });

    it("it should render correct props when focus on InputField when asEmphasis props set as charLimited", () => {
        component.setProps({ asEmphasis: "charLimited" })
        console.log(component.find(TextField).at(1).props)
        component.find('TextField').simulate('focus', { style: { accentColor: "#ffbf00" } })
        expect(component.exists()).toBe(true);
    });

});

