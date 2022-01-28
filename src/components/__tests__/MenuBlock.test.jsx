import React from 'react';
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
import MenuBlock from "../AppMenu/MenuBlock/MenuBlock.react"

describe("MenuBlock", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    const dictionary = JSON.stringify({
        en: {
            button: {
                text: "Button",
            },
        },
        hi: {
            button: { text: "होम", label: "होम" },
        },
    });
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <MenuBlock
                asEmphasis="contained"
                asVariant="primary"
                asSize="normal"
                asFloated="none"
                withColor={null}
                withIcon={null}
                withLabel={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
                onClick={() => console.log("MenuBlock testing")}

            />
        );
    });

    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with translation",
        () => {
            component.setProps({
                withTranslation: {
                    lang: "en",
                    tgt: "button:",
                    dictionary: dictionary,
                },
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

    it("should render correctly if translation object is not returned",
        () => {
            component.setProps({
                withColor: {
                    backgroundColor: "red",
                    textColor:"yellow",
                }
            });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if translation object is not returned",
        () => {
            component.setProps({
                withLabel:{
                    format: "caption",
                    content: "This is lable",
                    textColor: "red",
                }
            });
            expect(component.exists()).toBe(true);
        });

});
