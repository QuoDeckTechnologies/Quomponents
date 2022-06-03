import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import SelectField from "../SelectField/SelectField.react"
import { Select } from "@mui/material";

describe("SelectField", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let onClick = jest.fn();
    const dictionary = JSON.stringify({
        hi: {
            SelectField: {
                label: "पाठ्यक्रम श्रेणी",
                placeHolder: "चुनें..."
            }
        },
        en: {
            SelectField: {
                label: "Course Category",
                placeHolder: "",
            }
        }
    });

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SelectField
                content={{
                    label: "Course Category",
                    categoryOptions: ["Sales Training", "Tech Training", "HR Training", "Graphic Training"],
                    placeHolder: "Choose...",
                }}
                asPadded="normal"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
                onClick={onClick}
            />
        );
    });

    it("it should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    })

    it("it should render correctly when passed asPadded prop as fitted", () => {
        component.setProps({ asPadded: "fitted" })
        expect(component.exists()).toBe(true);
    })

    it("it should render correctly when passed asPadded prop as commpact", () => {
        component.setProps({ asPadded: "compact" })
        expect(component.exists()).toBe(true);
    })

    it("it should render correctly when passed asPadded prop as normal", () => {
        component.setProps({ asPadded: "normal" })
        expect(component.exists()).toBe(true);
    })

    it("it should render correctly when passed asPadded prop as relaxed", () => {
        component.setProps({ asPadded: "relaxed" })
        expect(component.exists()).toBe(true);
    })

    it("it should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            accentColor: "#FF0000",
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })

    it("it should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "SelectField",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })

    it("it should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })

    it("it should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    })
    it("it should pass the value to the SelectField", () => {
        component.find(Select).simulate('change', { target: { value: 'Sales Training' } })
        expect(component.find(Select).props().value).toEqual('Sales Training');
    })
});