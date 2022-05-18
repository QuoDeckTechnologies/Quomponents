//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import SerialPlayerAnalyticsTableRow from "../../Templates/SerialPlayerAnalyticsTableRow/SerialPlayerAnalyticsTableRow.react";
import Button from "../../Buttons/Button/Button.react";

describe("SerialPlayerAnalyticsTableRow", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SerialPlayerAnalyticsTableRow
                content={{
                    name: "Kardin Herwitz",
                    id: "12",
                    contact: "0000000000",
                    company: "Unilever",
                    points: "53000"
                }}
                withColor={null}
                isHidden={false}
            />
        );
    });
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with empty content", () => {
        component.setProps({
            content: {},
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed withColor props", () => {
        let colors = {
            textColor: "#fff"
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
});
