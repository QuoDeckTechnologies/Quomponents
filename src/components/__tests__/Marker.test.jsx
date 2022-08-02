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
            content: {},
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
    let handleSelect = jest.fn();
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Marker
                content={{
                    wrapper: "carnival",
                    inset: 1,
                    completion: 100,
                    node: {
                        _id: "",
                        name: "First Topic",
                        description: "This is first new topic of this course",
                        contentList: [{
                            _id: "",
                            name: "Assesment format",
                            readerType: "quiz",
                            sequence: 0,
                        }],
                        sequence: 0,
                    }
                }}
                sequential={true}
                status="current"

                asSize="normal"
                isDisabled={false}
                isHidden={false}
                onClick={() => { handleSelect }}
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

    it("should call handleSelect when click", () => {
        component = shallow(<Marker
            status="current"
            onClick={() => { }} />);
        component.find(".qui-marker-img").simulate("click");
        expect(component.exists()).toBe(true);
    });
    it("should call handleSelect when click", () => {
        component = shallow(<Marker
            status="complete"
            onClick={() => { }} />);
        component.find(".qui-marker-img").simulate("click");
        expect(component.exists()).toBe(true);
    });
});


