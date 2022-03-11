import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import AccentLine from "../AccentLine/AccentLine.react"

describe("AccentLine", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <AccentLine
                asSize="normal"
                asFloated="none"
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

    it("should render correctly if asFloated Props get selected to Inline",
        () => {
            component.setProps({ asFloated: "inline" });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if withColor set to any color props",
        () => {
            component.setProps({
                withColor: {
                    accentColor: "#AD2929"
                }
            });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if isHidden toggled as true",
        () => {
            component.setProps({ isHidden: true });
            expect(component.exists()).toBe(true);
        });
});