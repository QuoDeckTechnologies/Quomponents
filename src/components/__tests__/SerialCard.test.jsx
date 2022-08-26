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
import SerialCard from "../SerialCard/SerialCard.react";

describe("SerialCard", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: SerialCard,
        required: {
            content: {},
            onClick: () => { },
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("disabled", args);
    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SerialCard
                title="5th May 2022"
                description="What are Mutual Funds?"
                image="image"
                backImage="image"
                playerIcon="fa fa-users"
                playersValue={20539}
                iconOpt={[
                    {
                        icon: "fa fa-book",
                        func: () => { },
                    }]}
                asVariant="primary"
                asSize="normal"
                let colors={{
                    backgroundColor: "red",
                    accentColor: "green",
                    textColor: "blue",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                isDisabled={false}
                isHidden={false}
            />
        );
    });
    it("should call onMouseDown when click", () => {
        component.find(".qui-serialcard-icon").simulate("mousedown");
    });
});