//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";

//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";

//--------------------------------------
// Import Components
// -------------------------------------
import DateField from "../DateField/DateField.react";

describe("DateField", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: DateField,
        required: {
            onChange: () => { },
        },
        translations: {
            tgt: "dateField",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    dateField: {
                        label: "आरंभ करने की तिथि",
                    }
                },
                en: {
                    dateField: {
                        label: "Start Date",
                    }
                }
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("sizes", args);
    hasValid("positions", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    hasValid("fluid", args);
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let onChange = jest.fn();
    let handleClickDatepickerIcon = jest.fn();
    let preventDefault = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <DateField
                asSize="normal"
                asFloated="none"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
                isFluid={false}
                onChange={onChange}
                handleClickDatepickerIcon={handleClickDatepickerIcon}
                preventDefault={preventDefault}
            />
        );
    });

    it("should open Calender card correctly without throwing error", () => {
        let calenderCard = component.find(".qui-calendar-icon").at(0)
        calenderCard.simulate('click')
        expect(calenderCard.exists()).toBe(true);
    });

    it("should pass the value to the DatePicker", () => {
        component.find(".qui-date-field-date-picker").at(1).simulate('change')
        expect(component.exists()).toBe(true);
    });

    it("should prevent Default action when click on DatePicker", () => {
        let e = {
            preventDefault: jest.fn()
        }
        component.find('.qui-date-field-date-picker').at(1).props().onKeyDown(e)
        expect(component.exists()).toBe(true);
    });
});