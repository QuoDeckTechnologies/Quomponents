//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';

//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import AppMenu from '../AppMenu/AppMenu/AppMenu.react';

describe("AppMenu", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component,
        onClick = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<AppMenu
            label="AppMenu"
            asVariant="primary"
            asSize= "normal"
            asFloated= "none"
            withColor= {null}
            withIcon= {null}
            isHidden= {false}
            isDisabled= {false}
            withUser = {""}
            onClick ={onClick}
        />);
    });


    it("should render correctly without throwing an error",
        () => {
            component.setProps({ icon: true });
            expect(component.exists()).toBe(true);
        });

        it("should render correctly without throwing an error if color props is passed",
        () => {
            component.setProps({ color: "primary" });
            expect(component.exists()).toBe(true);
        });
        it("should render correctly without throwing an error withLabel props is passed",
        () => {
            component.setProps({ withLabel: {
                content: "Catalog",
                textColor: "#000000",
            }, });
            expect(component.exists()).toBe(true);
        });
        it("should render correctly without throwing an error if AsSize props is passed",
        () => {
            component.setProps({ asSize: "huge" });
            expect(component.exists()).toBe(true);
        });
    });