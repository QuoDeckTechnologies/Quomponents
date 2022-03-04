//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import ButtonBank from '../ButtonBank/ButtonBank.react'

describe("ButtonBank", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ButtonBank 
                content = {[
                    "Primary Button",
                    "Primary Button",
                    "Primary Button",
                    "Primary Button",
                ]}
                isCircular = {false}
                asVariant = "primary"
                asSize = "normal"
                asFloated = "none"
                withColor = {null}
                withLabel = {null}
                withAnimation = {null}
                isHidden = {null}
                isDisabled = {false}
                onClick = {() => {}}
            />
        );
    });
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
})
