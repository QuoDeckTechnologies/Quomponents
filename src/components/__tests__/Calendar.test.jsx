//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import Calendar from "../Calendar/Calendar.react";

describe("Calendar", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let handelevent = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Calendar
                asFloated="left"
                withAnimation={null}
                isDisabled={false}
                isHidden={false}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asFloated prop as none", () => {
        component.setProps({ asFloated: "none" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        };
        component.setProps({ withAnimation: animation });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false });
        expect(component.exists()).toBe(true);
    });
});
