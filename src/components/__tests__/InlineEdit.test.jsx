//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, enzyme } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import InlineEdit from '../InlineEdit/InlineEdit.react'

describe("InlineEdit", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component
    let onFocus = jest.fn();
    let onChange = jest.fn();
    let onBlur = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<InlineEdit
            content="Please input your text here"
            asSize="normal"
            asFloated="none"
            asAligned="center"
            withColor={null}
            withAnimation={null}
            isDisabled={false}
            isHidden={false}
            onFocus={onFocus}
            onChange={onChange}
            onBlur={onBlur}
        />);
    })

    it("it should render correctly without throwing an error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when withColor is provided",
        () => {
            component.setProps({
                withColor: {
                    accentColor: "#FFAB00",
                    backgroundColor: "#E5E5E5",
                }
            });
            expect(component.exists()).toBe(true);
        });
});