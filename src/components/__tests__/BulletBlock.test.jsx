//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
import renderer, { act } from "react-test-renderer";

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
import BulletBlock from "../BulletBlock/BulletBlock.react";

describe("BulletBlock", () => {

    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: BulletBlock,
        required: {
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("sizes", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("hidden", args);
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <BulletBlock
                content={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    "Quisque sed turpis vel lectus suscipit auctor",
                    "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
                ]}
                let colors={{
                    backgroundColor: "red",
                    accentColor: "green",
                    textColor: "blue",
                }}
            />
        );
    });
    it("should render correctly with withColor prop ",
        () => {
            component = renderer.create(<BulletBlock
                withColor={{
                    backgroundColor: "#C9878",
                    accentColor: "#ffffff",
                    textColor: "#b60d17",
                }}
            />)
        });
});
