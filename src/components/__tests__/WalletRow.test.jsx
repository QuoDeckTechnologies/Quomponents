//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import WalletRow from "../WalletRow/WalletRow.react";

describe("WalletRow", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <WalletRow
                content={{
                    date: '2016-01-04 10:34:23',
                    coins: 1000
                }}
                withAnimation={{
                    animation: "slideDown",
                    duration: 0.5,
                    delay: 0,
                }}
                withColor={null}
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
        }
        component.setProps({ withAnimation: animation })
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

    it("should render correct styling when passed withColor props", () => {
        component.setProps({
            withColor: {
                backgroundColor: '#FFBF00',
                textColor: '#000'
            }
        });
        expect(component.find(".qui-wallet-row-container").props().style).toStrictEqual({ "backgroundColor": "#FFBF00", "color": "#000" })
    });
});
