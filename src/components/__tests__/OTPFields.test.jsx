import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import OTPFields from "../OTPFields/OTPFields.react"

describe("OTPFields", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let OnClick = jest.fn();
    let handleCondition = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <OTPFields
                numFields={5}
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

    // it("it should pass the value to the OTPField", () => {
    //     component.find('input').at(0).simulate('change', { target: { value: 1 } })
    //     expect(component.find('input').props().value).toEqual(1);
    // });

    it("it should trigger the enter event when input contain some value", () => {
        let OTPField = component.find("input").at(0);
        OTPField.simulate('change', { target: { value: 1 } });
        component.find("input").at(0).simulate('change', { key: 'Enter' })
        expect(component.exists()).toBe(true);
    });

    it("it should trigger the escape event when input contain some value", () => {
        let OTPField = component.find("input").at(0);
        OTPField.simulate('change', { target: { value: '' } });
        component.find('input').at(0).simulate('change', { key: 'Escape' })
        expect(component.exists()).toBe(true);
    });

    // it("it should trigger the escape event when input contain some value", () => {
    //     let OTPField = component.find("input").at(0);
    //     OTPField.simulate('change', { target: { value: '1' } });
    //     component.find('input').at(0).simulate('change', { key: 'Escape' })
    //     expect(component.exists()).toBe(true);
    // });

    it("it should render correct props when blur on OTPField", () => {
        component.find('input').at(0).simulate('blur', { style: { backgroundColor: "#666666" } })
        expect(component.exists()).toBe(true);
    });

    it("it should render correct props when focus on OTPField", () => {
        component.find('input').at(0).simulate('focus', { style: { accentColor: "#ffbf00" } })
        expect(component.exists()).toBe(true);
    });
});
