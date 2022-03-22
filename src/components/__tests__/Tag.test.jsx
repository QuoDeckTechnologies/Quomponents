import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import Tag from "../Tag/Tag.react"

describe("Tag", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Tag
                content=""
                asSize="normal"
                asPadded="normal"
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

    it("it should render correct content to Tag", () => {
        component.setProps({ content: "TAG" })
        console.log(component.find('div').at(1).props().children)
        expect(component.find('div').at(1).props().children).toEqual("TAG");
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

    it("should render correctly when passed asPadded prop as fitted", () => {
        component.setProps({ asPadded: "fitted" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asPadded prop as commpact", () => {
        component.setProps({ asPadded: "compact" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asPadded prop as normal", () => {
        component.setProps({ asPadded: "normal" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asPadded prop as relaxed", () => {
        component.setProps({ asPadded: "relaxed" })
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
            backgroundColor: "#fff",
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

    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    });
});