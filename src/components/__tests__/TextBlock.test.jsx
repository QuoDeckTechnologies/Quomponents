//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import TextBlock from "../TextBlock/TextBlock.react";

describe("TextBlock", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: TextBlock,
    };

    hasValid("defaults", args);

    hasValid("sizes", args);
    hasValid("positions", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <TextBlock
                content="Neque porro quisquam est qui dolorem"
                position="left-top"
                conversation={true}
                asFloated={null}
                asSize={null}
                withColor={null}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
            />
        );
    });
    it("should render correctly with position is changed to left-top", () => {
        component.setProps({
            position: "left-top"
        })
    });
    it("should render correctly with position is changed to right-top", () => {
        component.setProps({
            position: "right-top"
        })
    });
    it("should render correctly with position is changed to right-bottom", () => {
        component.setProps({
            position: "right-bottom"
        })
    });
    it("should render correctly with position is changed to left-bottom", () => {
        component.setProps({
            position: "left-bottom"
        })
    });
});
