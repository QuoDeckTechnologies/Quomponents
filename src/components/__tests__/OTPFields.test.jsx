import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import OTPFields from "../OTPFields/OTPFields.react"

describe("OTPFields", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: OTPFields,
        required: {
            numInputs: 5,
            onClick: () => { },
        }
    };

    hasValid("defaults", args);

    hasValid("sizes", args);
    hasValid("positions", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    hasValid("fluid", args);
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let onClick = jest.fn();
    let changeFocus = jest.fn();
    let changeBlur = jest.fn();
    let handleChange = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <OTPFields
                numInputs={3}
                asSize="normal"
                asFloated="none"
                withColor={null}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
                onClick={onClick}
                handleChange={handleChange}
                changeFocus={changeFocus}
                changeBlur={changeBlur}
            />
        );
    });

    it("it should pass the value to the OtpField", () => {
        component.find('input').at(1).simulate('change')
        component.find('input').at(1).simulate('change', { target: { value: '12345' } })
        expect(component.exists()).toBe(true);
    });

    it("it should render correct props when click on OTPField", () => {
        component.find('input').at(0).simulate('change', { target: { value: 0 } })
        component.find('input').at(0).simulate('blur')
        component.find('input').at(0).simulate('click')

        component.find('input').at(1).simulate('change', { target: { value: 1 } })
        component.find('input').at(1).simulate('blur')
        component.find('input').at(1).simulate('click')

        component.find('input').at(2).simulate('change', { target: { value: 2 } })
        component.find('input').at(2).simulate('blur')
        component.find('input').at(2).simulate('click')
        expect(component.exists()).toBe(true);
    });

    it("it should render correct props when focus on OTPField", () => {
        component.find('input').at(1).simulate('focus')
        expect(component.exists()).toBe(true);
    });

    it("it should render correct props when blur on OTPField", () => {
        component.find('input').at(1).simulate('blur')
        expect(component.exists()).toBe(true);
    });

});
