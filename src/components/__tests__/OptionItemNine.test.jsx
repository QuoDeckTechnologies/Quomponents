//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemNine from "../OptionItem/OptionItemNine/OptionItemNine.react";

describe("Option Item Two", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let onClick = jest.fn();
    let onShortFieldOneInput = jest.fn();
    let onShortFieldTwoInput = jest.fn();
    let onInput = jest.fn();
    let onClose = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <OptionItemNine
                content={{
                    targetNameShortFieldOne: "ShortFieldOne",
                    targetNameShortFieldTwo: "ShortFieldTwo",
                    targetName: "Target Name",
                    valueShortFieldOne: "0",
                    valueShortFieldTwo: "0",
                    value: "",
                    placeholder: "Message for Quiz Result",
                    maxLength: 300,
                }}
                withColor={null}
                withAnimation={null}
                isDisabled={false}
                isHidden={false}
                onClick={onClick}
                onShortFieldOneInput={onShortFieldOneInput}
                onShortFieldTwoInput={onShortFieldTwoInput}
                onInput={onInput}
                onClose={onClose}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly without throwing error when clicked on inputfield", () => {
        component.find("InputField").at(0).simulate("click");
        component.find("InputField").at(1).simulate("click");
        component.find("InputField").at(2).simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when clicked on close icon", () => {
        component
            .find(".fa-times")
            .simulate("click", { target: { dataset: { id: "name" } } });
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            accentColor: "#FF0000",
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    })
});
