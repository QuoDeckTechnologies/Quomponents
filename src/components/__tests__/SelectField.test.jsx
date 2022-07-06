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
import SelectField from "../SelectField/SelectField.react"
import { Select } from "@mui/material";

describe("SelectField", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: SelectField,
        required: {
            content: {},
            onClick: () => { },
        },
        translations: {
            tgt: "selectField",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    selectField: {
                        label: "पाठ्यक्रम श्रेणी",
                        placeHolder: "चुनें..."
                    }
                },
                en: {
                    selectField: {
                        label: "Course Category",
                        placeHolder: "",
                    }
                }
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("padding", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("toggles", args);

    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component;
    let onClick = jest.fn();
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

    it("it should pass the value to the SelectField", () => {
        component.find(Select).simulate('change', { target: { value: 'Sales Training' } })
        expect(component.find(Select).props().value).toEqual('Sales Training');
    })
});