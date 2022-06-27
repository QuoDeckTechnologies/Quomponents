//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import ConfirmationOverlay from '../ConfirmationOverlay/ConfirmationOverlay.react';

describe("ConfirmationOverlay", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let mockFn = jest.fn();
    let component;

    const dictionary = JSON.stringify({
        en: {
            confirmationoverlay: {
                header: "Are you sure you want to do that?",
                yes: "Yes",
                no: "No",
            }
        },
        hi: {
            confirmationoverlay: {
                header: "क्या वाकई आपकी इसे करने की इच्छा है?",
                yes: "हां",
                no: "नहीं",
            }

        },
    });

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ConfirmationOverlay
                withConfirmation={{
                    header: "Are you sure you want to do that?",
                    yes: "Yes",
                    no: "No",
                }}
                withColor={{
                    backgroundColor: "",
                    textColor: "",
                    confirmBackgroundColor: "",
                    confirmTextColor: "",
                    cancelBackgroundColor: "",
                    cancelTextColor: "",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                withTranslation={{
                    lang: "en",
                    tgt: "confirmationoverlay",
                    dictionary: dictionary,
                }}
                isDisabled={false}
                isHidden={false}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        };
        component.setProps({ withAnimation: animation });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when withColor props is passed", () => {
        component.setProps({
            withColor: {
                backgroundColor: "#000000",
                textColor: "#ffffff",
                confirmBackgroundColor: "#ffbf00",
                confirmTextColor: "#000000",
                cancelBackgroundColor: "#ffbf00",
                cancelTextColor: "#000000",
            }
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when withColor props is undefined", () => {
        component.setProps({
            withColor: undefined
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when withTranslation props is passed", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "confirmationoverlay",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });


    it("should render correctly when withConfirmation props is not passed", () => {
        component.setProps({
            withConfirmation: null
        });
        expect(component.exists()).toBe(true);
    });

    it("on submit event should get called on confirm button click", () => {
        component.setProps({ onSubmit: mockFn });
        component.find('Button').at(0).simulate('click')
        expect(mockFn).toBeCalled();
    });

    it("on cancel event should get called on cancel button click", () => {
        component.setProps({ onCancel: mockFn });
        component.find('Button').at(1).simulate('click')
        expect(mockFn).toBeCalled();
    });
});

