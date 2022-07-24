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
import RewardBadge from "../RewardBadge/RewardBadge.react";

describe("RewardBadge", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: RewardBadge, required: { onClick: () => { } }
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("sizes", args);

    hasValid("colors", args);
    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component = shallow(<RewardBadge
        image=""
        onClick={() => { }}
    />);
    it("should show image when passed image", () => {
        component.setProps({
            withLabel: {
                format: "label",
                content: "test"
            }
        })
        component.find(".qui-reward-badge-container").simulate('click')
    });
});
