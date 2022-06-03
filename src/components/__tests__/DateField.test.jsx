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
    let preventDefault = jest.fn();
    const dictionary = JSON.stringify({
        hi: {
            DateField: {
                label: "आरंभ करने की तिथि",
            }
        },
        en: {
            DateField: {
                label: "Start Date",
            }
        }
    });

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

    it("should render correctly when passed asPadded prop as fitted", () => {
        component.setProps({ asPadded: "fitted" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asPadded prop as commpact", () => {
        component.setProps({ asPadded: "compact" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asPadded prop as normal", () => {
        component.setProps({ asPadded: "normal" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asPadded prop as relaxed", () => {
        component.setProps({ asPadded: "relaxed" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            accentColor: "#FF0000",
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "DateField",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    })
});