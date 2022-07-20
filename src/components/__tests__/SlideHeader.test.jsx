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
import SlideHeader from "../SlideHeader/SlideHeader.react"

describe("SlideHeader", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: SlideHeader,
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("positions", args);
    hasValid("padding", args);
    hasValid("alignment", args);

    hasValid("colors", args);

    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SlideHeader
                title="Neque porro quisquam est qui dolorem"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem"
                asVariant="primary"
                asPadded="normal"
                asFloated="none"
                asAligned="center"
                withColor={null}
                isHidden={false}
            />
        );
    });
});