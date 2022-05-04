import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import BulletList from "../../Templates/BulletList/BulletList.react"

describe("BulletList", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <BulletList
                data={null}
                slideId={0}
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

    it("should render correctly when data props passed with image", () => {
        let data = {
            title: "Neque porro quisquam est qui dolorem",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
            image: {},
            backgroundImage: {},
            bullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Quisque sed turpis vel lectus suscipit auctor",
                "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
            ],
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when data props passed with empty image", () => {
        let data = {
            title: "Neque porro quisquam est qui dolorem",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
            bullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Quisque sed turpis vel lectus suscipit auctor",
                "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
            ],
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#59e3de",
            slideHeaderTextColor: "#FFFF00",
            slideHeaderBackgroundColor: "#ad292980",
            slideHeaderAccentColor: "#f51d0a",
            bulletBockTextColor: "#FFFF00",
            bulletBockBackgroundColor: "#ad292980",
            bulletBockAccentColor: "#FFFFFF",
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
