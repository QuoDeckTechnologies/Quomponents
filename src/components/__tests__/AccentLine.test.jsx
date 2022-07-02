import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
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
    // Run common tests
    // -------------------------------------

    const args = { target: AccentLine, required: {}, translations: {} };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("sizes", args);
    hasValid("positions", args);
    hasValid("padding", args);
    // hasValid("alignment", args);

    hasValid("colors", args);
    // hasValid("labels", args);
    hasValid("animations", args);
    // hasValid("icons", args);
    // hasValid("translations", args);

    hasValid("toggles", args);

    // -------------------------------------
    // Run component specific tests
    // -------------------------------------
});
