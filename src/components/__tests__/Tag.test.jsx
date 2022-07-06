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
import Tag from "../Tag/Tag.react"

describe("Tag", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    
    const args = {
        target: Tag,
        required: {
            content: "test",
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("sizes", args);
    hasValid("positions", args);
    hasValid("padding", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("toggles", args);

    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Tag
                content=""
                asVariant="primary"
                asSize="normal"
                asPadded="normal"
                asFloated="none"
                withColor={null}
                withAnimation={null}
                isHidden={false}
            />
        );
    });

    it("should render correct content to Tag", () => {
        component.setProps({ content: "TAG" })
        expect(component.find('div').at(1).props().children).toEqual("TAG");
    });
});