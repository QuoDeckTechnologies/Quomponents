import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import AccentLine from "../AccentLine/AccentLine.react";

describe("AccentLine", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------

    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<AccentLine />);
    });

    const args = { target: AccentLine };

    hasValid("existence", args);
    hasValid("variants", args);
    hasValid("sizes", args);
    hasValid("positions", args);
    hasValid("toggles", args);
    hasValid("modifiers", args);
});
