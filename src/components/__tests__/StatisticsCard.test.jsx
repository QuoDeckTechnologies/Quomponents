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

    hasValid("variants", args);
    hasValid("positions", args);
    hasValid("padding", args);
    hasValid("alignment", args);

    hasValid("colors", args);
    hasValid("labels", args);
    hasValid("icons", args);

    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <StatisticsCard
                value="2222"
                isCircular={false}
                asFloated="none"
                withColor={null}
                withIcon={null}
                withLabel={null}
                isHidden={false}
            ></StatisticsCard>
        );
    });
});

