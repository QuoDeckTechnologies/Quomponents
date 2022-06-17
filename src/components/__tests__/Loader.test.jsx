//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';

//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import Loader from '../Loaders/Loader/Loader.react';

describe("Loader", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component,
        onClick = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<Loader
            label="Loading"
            icon={false}
            color="primary"
        />);
    })

    it("it should render correctly without throwing an error if icon props is false",
        () => {
            component.setProps({ icon: false });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly without throwing an error if icon props is true",
        () => {
            component.setProps({ icon: true });
            expect(component.exists()).toBe(true);
        });


    it("should render correctly without throwing an error if color props is passed",
        () => {
            component.setProps({ color: "primary" });
            expect(component.exists()).toBe(true);
        });
});