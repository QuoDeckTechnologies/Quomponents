import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import RewardCard from "../RewardCard/RewardCard.react"

describe("RewardCard", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        hi: {
            RewardCard: {
                name: "ब्रांडेड पेन",
                soldout: "बिक चुका है!",
                left: "शेष"
            }
        },
        en: {
            RewardCard: {
                name: "Branded Pen",
                soldout: "SOLD OUT!",
                left: "left"
            }
        }
    });
    let onClick = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <RewardCard
                content={{
                    name: "",
                    image: "",
                    cost: 0,
                    stock: {},
                }}
                asEmphasis="default"
                asFloated="none"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
                onClick={onClick}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed content prop with values", () => {
        let value = {
            name: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
            cost: 1000000,
            stock: {
                left: 1000000,
                total: 1000000
            }
        }
        component.setProps({ content: value })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed content prop with values if asEmphasis as soldout", () => {
        component.setProps({ asEmphasis: "soldout" })
        let value = {
            name: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
            cost: 1000000,
            stock: {
                left: 1000000,
                total: 1000000
            }
        }
        component.setProps({ content: value })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asEmphasis prop as default", () => {
        component.setProps({ asEmphasis: "default" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asEmphasis prop as blank", () => {
        component.setProps({ asEmphasis: "blank" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asEmphasis prop as soldout", () => {
        component.setProps({ asEmphasis: "soldout" })
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
            textColor: "#FFFF",
            accentColor: "#AD2929",
            backgroundColor: "#121212",
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

    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "RewardCard",
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

