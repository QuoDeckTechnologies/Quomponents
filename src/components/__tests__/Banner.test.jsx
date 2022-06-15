import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import Banner from "../Carousel/Banner/Banner.react"

describe("Banner", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let onClick = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Banner
                content={[]}
                asVariant="secondary"
                withColor={null}
                withAnimation={null}
                isDisabled={false}
                isHidden={false}
                onClick={onClick}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed Content props", () => {
        let data = [{
            image: "https://www.gannett-cdn.com/media/2019/01/18/USATODAY/usatsports/gettyimages-500740897.jpg?crop=1365,768,x0,y0&width=660&height=372&format=pjpg&auto=webp",
            header: "Welcome to the Learning Library",
            content: "There is always something new to learn here. Articles, games, the whole kitchen sink. Just click to enter and have fun...",
        },
        {
            image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            header: "What is Lorem Ipsum?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }]
        component.setProps({ content: data })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as primary", () => {
        component.setProps({ asVariant: "primary" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as secondary", () => {
        component.setProps({ asVariant: "secondary" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as warning", () => {
        component.setProps({ asVariant: "warning" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as error", () => {
        component.setProps({ asVariant: "error" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            accentColor: "#FF0000",
            backgroundColor: "#454545",
            textColor: "#FFFF",
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

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    });
});
