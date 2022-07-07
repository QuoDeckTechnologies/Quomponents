//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import NavBar from "../NavBar/NavBar/NavBar.react";

describe("NavBar", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: NavBar,
        required: {
            content: {
                title: "earn",
                logoimg: "logo",
                iconlink: [{
                    icon: "fas fa-angle-left",
                    link: "https://www.google.com/",
                }],
            },
            onClick: () => { },
        },
        translations: {
            tgt: "navBar",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    navBar: {
                        title: "कमाये",
                        content: "कॅटलॉग",
                    },
                },
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component, ShortLogo;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <NavBar
                content={{
                    title: "earn",
                    logoimg: "logo",
                    iconlink: [{
                        icon: "fas fa-angle-left",
                        link: "https://www.google.com/",
                    }],
                }}
                asVariant="primary"
                asSize="normal"
                withColor={{
                    backgroundColor: "",
                    accentColor: "",
                    textColor: "#b60d17",
                }}
                onClick={() => console.log("NavBar testing")}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
});
