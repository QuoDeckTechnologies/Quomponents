//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";

//--------------------------------------
// Import Components
// -------------------------------------
import DateField from "../DateField/DateField.react";

describe("DateField", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let onClick = jest.fn();
    let handleClickDatepickerIcon = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <DateField
                content="Start Date"
                asSize="normal"
                asPadded="normal"
                asFloated="none"
                asAligned="center"
                withColor={null}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
                onClick={onClick}
                handleClickDatepickerIcon={handleClickDatepickerIcon}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly without throwing error", () => {
        let test = component.find(".qui-date-field-input").children().at(0)
        test.simulate('click')

        expect(test.exists()).toBe(true);
    });
    it("should render correctly without throwing error", () => {
        let test = component.find(".qui-date-field-date-picker").children().at(0)
        test.simulate('change')

        expect(test.exists()).toBe(true);
    });

    // it('datepicker calls the onChange Event', done => {
    //     const DateComponent = mount(<DateField />),
    //         dateInput = DateComponent.find("input[type='text']");
    //     DateComponent.instance().handleChange = jest.fn();
    //     dateInput.simulate('change', { target: { value: "2018-01-04" } });
    //     done();
    //     expect(DateComponent.instance().handleChange.mock.calls.length).toBe(1);
    // });
});
