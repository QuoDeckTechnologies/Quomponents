import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import CategoryCard from "../CategoryCard/CategoryCard.react";

describe("CategoryCard", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: CategoryCard,
        required: {
            content: {
                id: "categorycard",
                name: "Regulatory",
                image: { id: "categorycard-image", extention: "" },
                viewedPercentage: 80,
            },
            onClick: () => { },
        },
    };

    hasValid("defaults", args);

    hasValid("sizes", args);
    hasValid("positions", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("disabled", args);
    hasValid("hidden", args);
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let onClick = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <CategoryCard
                content={null}
                imageLibrary={[
                    {
                        id: "categorycard-image",
                        image: "categorycard-image.png",
                    },
                ]}
                asSize="normal"
                asFloated="none"
                withColor={null}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
                onClick={onClick}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed content prop contain value", () => {
        let contentData = {
            id: "categorycard",
            name: "Regulatory",
            image: { id: "categorycard-image", extention: "" },
            viewedPercentage: 80,
        };
        component.setProps({ content: contentData });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed content prop is null", () => {
        let contentData = {};
        component.setProps({ content: contentData });
        expect(component.exists()).toBe(true);
    });
});
