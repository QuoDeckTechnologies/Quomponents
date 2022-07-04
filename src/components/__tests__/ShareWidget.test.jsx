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
            shareWidget: {
                label: "शेयर",
            },
        },
    });

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

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
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

    it("should render correctly when passed asSize prop as tiny", () => {
        component.setProps({ asSize: "tiny" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as small", () => {
        component.setProps({ asSize: "small" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as normal", () => {
        component.setProps({ asSize: "normal" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as big", () => {
        component.setProps({ asSize: "big" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as huge", () => {
        component.setProps({ asSize: "huge" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as massive", () => {
        component.setProps({ asSize: "massive" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as none", () => {
        component.setProps({ asFloated: "none" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when withTranslation props is passed", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "shareWidget",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when withTranslation props is passed and dictionary does not have target value", () => {
        const dictionary = JSON.stringify({
            hi: {
                shareWidget: {},
            },
        });
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "shareWidget",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    });
});
