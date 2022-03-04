import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import SlideHeader from "../SlideHeader/SlideHeader.react"

describe("SlideHeader", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SlideHeader
                content={null}
                asPadded="normal"
                asFloated="none"
                asAligned="center"
                withColor={null}
                withAnimation={null}
                isHidden={false}
            />
        );
    });

    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if asFloatedProp get selected to Inline",
        () => {
            component.setProps({ asFloated: "inline" });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if withColor set to any color prop",
        () => {
            component.setProps({ withColor: { backgroundColor: "purple" } });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if withColor set to any color prop",
        () => {
            component.setProps({ withColor: { textColor: "red" } });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if isHidden toggled as true",
        () => {
            component.setProps({ isHidden: true });
            expect(component.exists()).toBe(true);
        });
});