import { shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";

//--------------------------------------
// Import Components
// -------------------------------------
import LinkIcon from "../LinkIcon/LinkIcon.react";
describe("LinkIcon", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: LinkIcon,
        required: {
            label: "Home",
            icon: "fa fa-home",
            onClick: () => console.log("Button Testing"),
        },
        translations: {
            tgt: "icon",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                en: {
                    label: "Home",
                },
                hi: {
                    label: "होम",
                },
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("sizes", args);
    hasValid("positions", args);
    hasValid("padding", args);
    hasValid("alignment", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
});
