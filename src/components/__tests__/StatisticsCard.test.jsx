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
import StatisticsCard from "../StatisticsCard/StatisticsCard.react";

describe("StatisticsCard", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: StatisticsCard,
        required: {
            content: {},
        },
    };

    hasValid("defaults", args);

    hasValid("positions", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
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
                asFloated="none"
                withColor={null}
                withAnimation={null}
                isHidden={false}
            ></StatisticsCard>
        );
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
});

