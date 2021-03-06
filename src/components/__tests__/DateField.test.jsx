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
            onClick: () => { },
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

    hasValid("padding", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let onClick = jest.fn();
    let handleClickDatepickerIcon = jest.fn();
    let preventDefault = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <DateField
                label="Start Date"
                asPadded="normal"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
                onClick={onClick}
                handleClickDatepickerIcon={handleClickDatepickerIcon}
                preventDefault={preventDefault}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
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
    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            accentColor: "#FF0000",
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })
});