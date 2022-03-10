import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import ShareWidget from "../ShareWidget/ShareWidget.react"

describe("ShareWidget", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        hi: {
            ShareWidget: {
                label: "शेयर",
            },
        },
    });

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ShareWidget
                content={null}
                asFloated="none"
                withColor={null}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
                withIcon={null}
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

    it("should render correctly if Content set Value",
        () => {
            component.setProps({
                content: {
                    label: "Share",
                    circular: true,
                    url: "www.quodeck.com",
                },
            });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if isDisabled toggled as true",
        () => {
            component.setProps({ isDisabled: true });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if isHidden toggled as true",
        () => {
            component.setProps({ isHidden: true });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly with translation",
        () => {
            component.setProps({
                withTranslation: {
                    lang: "hi",
                    tgt: "ShareWidget",
                    dictionary: dictionary,
                }
            });
            expect(component.exists()).toBe(true);
        });
    it("should render correctly if translation object is not returned",
        () => {
            component.setProps({
                withTranslation: {
                    lang: "hi",
                    tgt: "",
                    dictionary: dictionary,
                }
            });
            expect(component.exists()).toBe(true);
        });
});