//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';

//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import FlipConfirm from "../Buttons/FlipConfirm/FlipConfirm.react"

describe("FlipConfirm", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<FlipConfirm
            asEmphasis="contained"
            isCircular={false}
            asVariant="primary"
            asSize="normal"
            asPadded="normal"
            asFloated="none"
            asAligned="center"

            withConfirmation={null}
            withColor={null}
            withIcon={null}
            withLabel={null}
            withAnimation={null}
            withTranslation={null}
            isHidden={false}
            isDisabled={false}
            isFluid={false}
            isLoading={false}
            onClick={() => console.log("FlipConfirm testing")}
        />);
    })

    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
});