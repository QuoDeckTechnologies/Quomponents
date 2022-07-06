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
import CardTag from "../CardTag/CardTag.react"

describe("CardTag", () => {

    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: CardTag,
        required: {
            content: "Testing CardTag",
            onClick: () => { },
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("sizes", args);
    hasValid("positions", args);
    hasValid("padding", args);
    hasValid("alignment", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <CardTag
                content=""
                withColor={null}
                isActive={false}
                onClick={() => console.log("CardTag Testing")}
            />
        );
    });

    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });

    it("should render correct content to CardTag", () => {
        component.setProps({ content: "CardTag" })
        expect(component.find('div').at(1).props().children).toEqual("CardTag");
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed active props as true", () => {
        component.setProps({ isActive: true })
        expect(component.exists()).toBe(true);
    });
});