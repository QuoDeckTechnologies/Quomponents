//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemSeven from "../OptionItem/OptionItemSeven/OptionItemSeven.react";

describe("Option Item Seven", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    const pauseFor = (milliseconds) =>
        new Promise((resolve) => setTimeout(resolve, milliseconds));

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <OptionItemSeven
                content={{
                    targetName: "name",
                    value: "",
                    image: {},
                    placeholder: "placeholder",
                    checked: false,
                    maxLength:300,
                }}
                withColor={{
                    backgroundColor: "",
                    accentColor: "",
                    textColor: "",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                isDisabled={false}
                isHidden={false}
                onInput={() => { }}
                onSelect={() => { }}
                onUpload={() => { }}
                onClose={() => { }}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error", () => {
        let component = mount(
            <OptionItemSeven
                content={{
                    targetName: "name",
                    value: "",
                    placeholder: "placeholder",
                    checked: false,
                }}
                onInput={() => { }}
                onSelect={() => { }}
                onUpload={() => { }}
                onClose={() => { }}
            />
        );
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when wriiten in input field", () => {
        component.find("InputField").simulate("click");
    });

    it("should render correctly without throwing error when radio button is used", () => {
        component
            .find(".qui-option-item-radio")
            .simulate("change", { target: { checked: true } });
    });

    it("should render correctly without throwing error when clicked on close icon", () => {
        component
            .find(".fa-times")
            .simulate("click", { target: { dataset: { id: "name" } } });
    });
    it("should render correctly when file is uploaded", async () => {
        component
            .find("OptionalImageField")
            .simulate("click", {});
        await pauseFor(100);
        expect(component.exists()).toBe(true);
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
