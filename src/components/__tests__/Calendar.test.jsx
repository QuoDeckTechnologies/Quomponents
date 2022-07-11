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
import Calendar from "../Calendar/Calendar.react";

describe("Calendar", () => {

    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: Calendar,
        required: {
            onClick: () => { },
        },
    };

    hasValid("defaults", args);

    hasValid("positions", args);
    hasValid("padding", args);
    
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
            <Calendar
                onClick={() => { }}
            />
        );
    });
});
