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

    const dictionary = JSON.stringify({
        hi: {
            inputField: {
                label: "इनपुट नाम",
                placeholder: "विकल्प",
            }
        },
        en: {
            inputField: {
                label: "Input Name",
                placeholder: "Options",
            }
        }
    });
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component
    let onFocus = jest.fn();
    let onChange = jest.fn();
    let onBlur = jest.fn();
    let onSubmit = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(<InputField
            label="Input Name"
            value="Please input your text here"
            placeholder="Options"
            maxLength={30}
            type="text"
            multiline={true}
            name=""
            asEmphasis="filled"
            asFloated="none"
            withColor={{
                textColor: "",
                accentColor: "",
                backgroundColor: "",
                onSelectTextColor: "",
                onSelectAccentColor: "",
                onSelectBackgroundColor: "",
            }}
            withAnimation={null}
            isDisabled={false}
            isHidden={false}
            onFocus={onFocus}
            onChange={onChange}
            onBlur={onBlur}
            onSubmit={onSubmit}
        />);
    })

    it("it should render correctly without throwing an error", () => {
        expect(component.exists()).toBe(true);
    });

    it("it should render the class of character limit the input is under limit correctly when passed asEmphasis prop as charLimited", () => {
        component.setProps({
            label: "Input new Name",
            value: "text here",
            placeholder: "Options",
            maxLength: 0,
            type: "text",
            multiline: true,
            asEmphasis: "charLimited"
        })
        expect(component.exists()).toBe(true);
    });

    it("it should render the class of character limit the input is under limit correctly when passed asEmphasis prop as listInput", () => {
        component.setProps({
            label: "Input new Name",
            value: "text here",
            placeholder: "Options",
            maxLength: 0,
            type: "text",
            multiline: false,
            asEmphasis: "listInput"
        })
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
            textColor: "#666666",
            accentColor: "#ffab00",
            backgroundColor: "#ffab000d",
            onSelectTextColor: "#666666",
            onSelectAccentColor: "#ffab00",
            onSelectBackgroundColor: "#ffab000d",
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

    it("should render correctly if translation object is not defined", () => {
        component.setProps({
            withTranslation: {
                lang: "mr",
                tgt: "inputField",
                dictionary: dictionary,
            }
        });
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

    it("it should trigger the escape event when textarea contain some value", () => {
        let InputField = component.find('textarea').at(0);
        InputField.simulate('change', { target: { value: 'Please input your text here' } });
        component.find('textarea').at(0).simulate('change', { key: 'Enter' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when textarea contain empty value", () => {
        let InputField = component.find('textarea').at(0);
        InputField.simulate('change', { target: { value: '' } });
        component.find('textarea').at(0).simulate('change', { key: 'Escape' })
        expect(component.exists()).toBe(true);
    });

    it("it should pass the value to the InputField", () => {
        component.find('textarea').at(0).simulate('change', { target: { value: 'Please input your text here' } })
        expect(component.find('textarea').at(0).props().value).toEqual('Please input your text here');
    });

    it("it should render correct props when blur on InputField", () => {
        component.find('textarea').at(0).simulate('blur', { style: { backgroundColor: "#666666" } })
        expect(component.exists()).toBe(true);
    });

    it("it should render correct props when focus on InputField", () => {
        component.find('textarea').at(0).simulate('focus', { style: { accentColor: "#ffbf00" } })
        expect(component.exists()).toBe(true);
    });
});
