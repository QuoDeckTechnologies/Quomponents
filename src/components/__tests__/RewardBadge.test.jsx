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
    hasValid("labels", args);

    hasValid("colors", args);
    hasValid("disabled", args);
    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component = shallow(<RewardBadge
        image=""
        onClick={() => { }}
    />);
    it("should click on the badge container div", () => {
        component.setProps({
            image: "image.jpg",
            withLabel: {
                format: "popover",
                content: "test"
            }
        })
        component.find(".qui-reward-badge-container").simulate('click')
    });
});
