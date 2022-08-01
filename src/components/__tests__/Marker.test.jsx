//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';

//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";

//--------------------------------------
// Import Components
// -------------------------------------
import Marker from '../Marker/Marker.react'
describe("Marker", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: Marker,
        required: {
            content: "",
            onClick: () => { },
        },
    };

    hasValid("defaults", args);

    hasValid("sizes", args);

    hasValid("animations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);

    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Marker
                content={null}
                status="current"
                asSize="normal"
                isDisabled={false}
                isHidden={false}
                onClick={() => { }}
            />
        );
    });
    it("should render correctly when passed status prop as current", () => {
        component.setProps({ status: "current" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed status prop as complete", () => {
        component.setProps({ status: "complete" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed status prop as incomplete", () => {
        component.setProps({ status: "incomplete" })
        expect(component.exists()).toBe(true);
    })
});


