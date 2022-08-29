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
        translations: {
            tgt: "cardTag",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    cardTag: { content: "विषय", loading: "लोड हो रहा है...", },
                },
            })
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
    hasValid("icons", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    hasValid("loading", args);
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
                isLeft={true}
                withIcon={{
                    icon: "fas fa-bullseye",
                    size: "1em",
                    position: "left"
                }}
                onClick={() => { }}
            />
        );
    });

    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
    it("should render correctly when passed active props as true", () => {
        component.setProps({ isActive: true })
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed left props as true", () => {
        component.setProps({ isLeft: true })
        expect(component.exists()).toBe(true);
    });
});