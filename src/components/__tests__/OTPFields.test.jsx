import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import OTPFields from "../OTPFields/OTPFields.react"
import TextField from '@mui/material/TextField';

describe("OTPFields", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let OnClick = jest.fn();
    let handleCondition = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <OTPFields
                asFloated="none"
                withColor={null}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
                OnClick={OnClick}
                handleCondition={handleCondition}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as none", () => {
        component.setProps({ asFloated: "none" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            accentColor: "#065254",
            backgroundColor: "#34e5eb"
        }
        component.setProps({ withColor: colors })
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
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    });



    it("it should trigger the escape event when textarea contain some value", () => {
        let InputField = component.find(TextField).at(0);
        InputField.simulate('change', { target: { value: 1 } });
        component.find(TextField).at(0).simulate('change', { key: 'Enter' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when textarea contain some value", () => {
        let InputField = component.find(TextField).at(1);
        InputField.simulate('change', { target: { value: 1 } });
        component.find(TextField).at(1).simulate('change', { key: 'Enter' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when textarea contain some value", () => {
        let InputField = component.find(TextField).at(2);
        InputField.simulate('change', { target: { value: 1 } });
        component.find(TextField).at(2).simulate('change', { key: 'Enter' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when textarea contain some value", () => {
        let InputField = component.find(TextField).at(3);
        InputField.simulate('change', { target: { value: 1 } });
        component.find(TextField).at(3).simulate('change', { key: 'Enter' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when textarea contain some value", () => {
        let InputField = component.find(TextField).at(4);
        InputField.simulate('change', { target: { value: 1 } });
        component.find(TextField).at(4).simulate('change', { key: 'Enter' })
        expect(component.exists()).toBe(true);
    });


    it("it should trigger the escape event when textarea contain some value", () => {
        let InputField = component.find(TextField).at(0);
        InputField.simulate('change', { target: { value: '' } });
        component.find('textarea').at(0).simulate('change', { key: 'Escape' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when textarea contain some value", () => {
        let InputField = component.find(TextField).at("");
        InputField.simulate('change', { target: { value: '' } });
        component.find('textarea').at(1).simulate('change', { key: 'Escape' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when textarea contain some value", () => {
        let InputField = component.find(TextField).at(2);
        InputField.simulate('change', { target: { value: '' } });
        component.find('textarea').at(2).simulate('change', { key: 'Escape' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when textarea contain some value", () => {
        let InputField = component.find(TextField).at(3);
        InputField.simulate('change', { target: { value: '' } });
        component.find('textarea').at(3).simulate('change', { key: 'Escape' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when textarea contain some value", () => {
        let InputField = component.find(TextField).at(4);
        InputField.simulate('change', { target: { value: '' } });
        component.find('textarea').at(4).simulate('change', { key: 'Escape' })
        expect(component.exists()).toBe(true);
    });










    // it("it should pass the value to the InputField", () => {
    //     component.find('textarea').at(0).simulate('change', { target: { value: 'Please input your text here' } })
    //     expect(component.find('textarea').at(0).props().value).toEqual('Please input your text here');
    // });

    // it("it should render correct props when blur on InputField", () => {
    //     component.find('textarea').at(0).simulate('blur', { style: { backgroundColor: "#666666" } })
    //     expect(component.exists()).toBe(true);
    // });

    // it("it should render correct props when focus on InputField", () => {
    //     component.find('textarea').at(0).simulate('focus', { style: { accentColor: "#ffbf00" } })
    //     expect(component.exists()).toBe(true);
    // });
});
