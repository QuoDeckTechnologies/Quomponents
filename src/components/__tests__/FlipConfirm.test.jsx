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
import FlipConfirm from '../FlipConfirm/FlipConfirm.react';

describe("FlipConfirm", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component,
        onClick = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<FlipConfirm
            label="Delete"
            iconBtn={false}
        />);
    })

    it("it should render correctly without throwing an error if iconBtn props is false",
        () => {
            component.setProps({ iconBtn: false });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly without throwing an error if iconBtn props is true",
        () => {
            component.setProps({ iconBtn: true });
            expect(component.exists()).toBe(true);
        });
});