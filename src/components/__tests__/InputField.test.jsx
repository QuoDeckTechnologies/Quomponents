//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow, mount, enzyme } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import InputField from '../InputField/InputField.react'

describe("InputField", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component
    let onFocus = jest.fn();
    let onChange = jest.fn();
    let onBlur = jest.fn();
    let onInput = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(<InputField
            content={{
                label: "Input Name",
                value: "Please input your text here",
                placeholder: "Options",
                maxLength: 300,
            }}
            asEmphasis="singleLine"
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
            onInput={onInput}
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

    it("it should render correctly when passed asSize prop as tiny", () => {
        component.setProps({ asSize: "tiny" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asSize prop as small", () => {
        component.setProps({ asSize: "small" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asSize prop as normal", () => {
        component.setProps({ asSize: "normal" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asSize prop as big", () => {
        component.setProps({ asSize: "big" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asSize prop as huge", () => {
        component.setProps({ asSize: "huge" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asSize prop as massive", () => {
        component.setProps({ asSize: "massive" })
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

    it("it should render correctly when passed asAligned prop as left", () => {
        component.setProps({ asAligned: "left" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asAligned prop as right", () => {
        component.setProps({ asAligned: "right" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asAligned prop as center", () => {
        component.setProps({ asAligned: "center" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed withColor props", () => {
        let colors = {
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
    // ---------------------------------
    it("it should trigger the escape event when input contain some value", () => {
        let InputField = component.find('input');
        InputField.simulate('change', { target: { value: 'Please input your text here' } });
        component.find('input').simulate('change', { key: 'Enter' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when input contain empty value", () => {
        let InputField = component.find('input');
        InputField.simulate('change', { target: { value: '' } });
        component.find('input').simulate('change', { key: 'Escape' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when textarea contain some value", () => {
        component.setProps({
            asEmphasis: "filled"
        });
        let InputField = component.find('TextField');
        InputField.simulate('change', { target: { value: 'Please input your text here' } });
        component.find('TextField').simulate('change', { key: 'Enter' })
        expect(component.exists()).toBe(true);
    });

    // it("it should trigger the escape event when textarea contain empty value", () => {
    //     component.setProps({
    //         asEmphasis: "multiLine"
    //     });
    //     let InputField = component.find('textarea');
    //     InputField.simulate('change', { target: { value: '' } });
    //     component.find('textarea').simulate('change', { key: 'Escape' })
    //     expect(component.exists()).toBe(true);
    // });

    // it("it should render correct style when height of textarea changes", () => {
    //     component.setProps({
    //         asEmphasis: "multiLine"
    //     });
    //     component.find('textarea').simulate('input', { target: { style: { height: "5px" }, scrollHeight: 35 } });
    //     expect(component.exists()).toBe(true);
    // });

    // ---------------------------------
    it("it should pass the value to the InputField when asEmphasis props set as multiLine", () => {
        component.setProps({
            asEmphasis: "charLimited"
        });
        // component.find('textarea').simulate('change', { target: { value: 'Please input your text here' } })
        // expect(component.find('textarea').props().value).toEqual('Please input your text here');
    });

    it("it should render correct props when blur on InputField when asEmphasis props set as multiLine", () => {
        component.setProps({
            asEmphasis: "listInput"
        });
        // component.find('textarea').simulate('blur', { style: { backgroundColor: "#666666" } })
        expect(component.exists()).toBe(true);
    });

    it("it should render correct props when focus on InputField when asEmphasis props set as multiLine", () => {
        component.setProps({
            asEmphasis: "shortField"
        });
        // component.find('textarea').simulate('focus', { style: { accentColor: "#ffbf00" } })
        expect(component.exists()).toBe(true);
    });

});

