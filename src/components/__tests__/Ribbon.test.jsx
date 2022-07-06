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
import Ribbon from "../Ribbons/Ribbon/Ribbon.react";

describe("Ribbon", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: Ribbon,
        translations: {
            tgt: "ribbon",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    ribbon: {
                        new: "नया",
                        restricted: "प्रतिबंधित",
                        premium: "अधिमूल्य",
                        free: "नि: शुल्क"
                    }
                },
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("positions", args);

    hasValid("colors", args);
    hasValid("translations", args);

    hasValid("toggles", args);

    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Ribbon
                asEmphasis="new"
                asFloated="left"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
            />
        );
    });
});
