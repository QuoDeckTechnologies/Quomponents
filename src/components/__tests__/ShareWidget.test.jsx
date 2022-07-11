import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import ShareWidget from "../ShareWidget/ShareWidget.react"

describe("ShareWidget", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: ShareWidget,
        translations: {
            tgt: "shareWidget",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    shareWidget: {
                        label: "शेयर",
                    },
                },
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("sizes", args);
    hasValid("positions", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("disabled", args);
    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ShareWidget
                label=""
                url=""
                asSize="normal"
                asFloated="none"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
            />
        );
    });

    it("should render correctly if label & url has some value", () => {
        component.setProps({
            label: "Share",
            url: "www.quodeck.com",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly if label & url has empty value", () => {
        component.setProps({
            label: "",
            url: "",
        });
        expect(component.exists()).toBe(true);
    });
});
