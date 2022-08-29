//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import Badges from '../Badges/Badges.react';

describe("Badge", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Badges
                number={5}
                max={99}
                color="success"
                alignvertical="top"
                alignhorizontal="right"
                content="Notifications"
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly if alignvertical is 'top' and alignhorizontal is 'right' ", () => {
        component.setProps({
            alignvertical: "top",
            alignhorizontal: "right"
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly if alignvertical is 'bottom' and alignhorizontal is 'right' ", () => {
        component.setProps({
            alignvertical: "bottom",
            alignhorizontal: "right"
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly if alignvertical is 'top' and alignhorizontal is 'left' ", () => {
        component.setProps({
            alignvertical: "top",
            alignhorizontal: "left"
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly if alignvertical is 'bottom' and alignhorizontal is 'left' ", () => {
        component.setProps({
            alignvertical: "bottom",
            alignhorizontal: "left"
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly if content is passed as text ",
        () => {
            component.setProps({ content: "Notifications" });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if content is passed as html  ",
        () => {
            component.setProps({ content: <b>Notifications</b> });
            expect(component.exists()).toBe(true);
        });

});
