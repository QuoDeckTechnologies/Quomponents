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
import NuggetBlock from "../NuggetBlock/NuggetBlock.react";

import Nugget_Profiler from "../../assets/nuggets/nugget_profiler.png";
describe("NuggetBlock", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: NuggetBlock,
    };

    hasValid("defaults", args);

    hasValid("sizes", args);
    hasValid("positions", args);
    hasValid("padding", args);

    hasValid("animations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);

    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let mockFn = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <NuggetBlock
                image={Nugget_Profiler}
                status="published"
                asSize="normal"
                asPadded="normal"
                asFloated="inline"
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
                onClick={mockFn}
            />
        );
    });
    it("should render unpublished nugget block when passed status as unpublished", () => {
        component.setProps({ status: "unpublished" })
        expect(component.find("div").at(1).props().style.backgroundColor).toBe("#B2B4B3")
    });
    it("should not render status of nugget block when passed status as none", () => {
        component.setProps({ status: "none" })
        expect(component.find("div").at(1).props().style.display).toBe("none")
    });
    it("should call the function when clicked on nugget block", () => {
        let nuggetBlock = component.find("div").at(2);
        nuggetBlock.simulate('click')
        expect(mockFn).toBeCalled()
    });
});
