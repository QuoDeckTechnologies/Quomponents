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
import ConfirmationOverlay from '../ConfirmationOverlay/ConfirmationOverlay.react';

describe("ConfirmationOverlay", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: ConfirmationOverlay,
        required: {
        },
        translations: {
            tgt: "confirmationoverlay",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    confirmationoverlay: {
                        header: "क्या वाकई आपकी इसे करने की इच्छा है?",
                        yes: "हां",
                        no: "नहीं",
                    }
                },
            })
        },
    };

    hasValid("defaults", args);
    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let mockFn = jest.fn();
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ConfirmationOverlay
                withConfirmation={{
                    header: "Are you sure you want to do that?",
                    yes: "Yes",
                    no: "No",
                }}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when withConfirmation props is not passed", () => {
        component.setProps({
            withConfirmation: null
        });
        expect(component.exists()).toBe(true);
    });

    it("on submit event should get called on confirm button click", () => {
        component.setProps({ onConfirm: mockFn });
        component.find('Button').at(0).simulate('click')
        expect(mockFn).toBeCalled();
    });

    it("on cancel event should get called on cancel button click", () => {
        component.setProps({ onCancel: mockFn });
        component.find('Button').at(1).simulate('click')
        expect(mockFn).toBeCalled();
    });
});

