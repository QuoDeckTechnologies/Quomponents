import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
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
            onClick: () => { },
        },
        translations: {
            tgt: "selectField",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    selectField: {
                        label: "पाठ्यक्रम श्रेणी",
                        placeholder: "चुनें..."
                    }
                },
                en: {
                    selectField: {
                        label: "Course Category",
                        placeholder: "",
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

    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------
    let component;
    let onClick = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SelectField
                label="Course Category"
                options={["Sales Training", "Tech Training", "HR Training", "Graphic Training"]}
                placeholder="Choose..."
                asPadded="normal"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                onClick={onClick}
            />
        );
    });

    it("it should pass the value to the SelectField", () => {
        component.find(Select).simulate('change', { target: { value: 'Sales Training' } })
        expect(component.find(Select).props().value).toEqual('Sales Training');
    })
});