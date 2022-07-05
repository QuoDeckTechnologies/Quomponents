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
import RewardCard from "../RewardCard/RewardCard.react"

describe("RewardCard", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: RewardCard,
        required: {
            content: {},
            onClick: () => console.log("Button Testing"),
        },
        translations: {
            tgt: "rewardCard",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    rewardCard: {
                        soldout: "बिक चुका है!",
                        left: "शेष"
                    }
                },
                en: {
                    rewardCard: {
                        soldout: "SOLD OUT!",
                        left: "left"
                    }
                }
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("positions", args);
   
    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("toggles", args);

    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component;
    let onClick = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <RewardCard
                content={{
                    id: "",
                    name: "",
                    image: "",
                    cost: 0,
                    stock: {},
                }}
                asEmphasis="default"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
                onClick={onClick}
            />
        );
    });


    it("should render correctly when passed content prop with values", () => {
        let value = {
            id: "",
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
            id: "",
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

   });

