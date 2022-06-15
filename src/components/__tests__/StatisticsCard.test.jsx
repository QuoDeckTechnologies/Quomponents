//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

//--------------------------------------
// Import Components
// -------------------------------------
import StatisticsCard from "../StatisticsCard/StatisticsCard.react";

describe("StatisticsCard", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <StatisticsCard
                content={{
                    label: "play",
                    icon: "fa fa-home",
                    value: "2222"
                }}
                isCircular={false}
                asPadded="normal"
                asFloated="none"
                withColor={null}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
            ></StatisticsCard>
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated props is none", () => {
        component.setProps({
            asFloated: "none",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated props is left", () => {
        component.setProps({
            asFloated: "left",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated props is right", () => {
        component.setProps({
            asFloated: "right",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated props is inline", () => {
        component.setProps({
            asFloated: "inline",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asPadded props is fitted", () => {
        component.setProps({
            asPadded: "fitted",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asPadded props is compact", () => {
        component.setProps({
            asPadded: "compact",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asPadded props is normal", () => {
        component.setProps({
            asPadded: "normal",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asPadded props is relaxed", () => {
        component.setProps({
            asPadded: "relaxed",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        component.setProps({
            withColor: {
                backgroundColor: "pink",
                accentClor: "",
                textColor: "",
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withAnimation props", () => {
        component.setProps({
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 0,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isCircular props is true", () => {
        component.setProps({
            isCircular: true,
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isCircular props is false", () => {
        component.setProps({
            isCircular: false,
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props is true", () => {
        component.setProps({
            isHidden: true,
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props is false", () => {
        component.setProps({
            isHidden: false,
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when set value and label in content props properly",
        () => {
            const component = renderer.create(<StatisticsCard
                content={{
                    value: "202,0202",
                    label: "playersIcon"
                }}
            />)
        });
});

