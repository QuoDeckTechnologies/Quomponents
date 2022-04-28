import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import IconBulletlist from "../../Templates/IconBulletlist/IconBulletlist.react"

describe("IconBulletlist", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <IconBulletlist
                data={{
                    title: "Neque porro quisquam est qui dolorem",
                    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
                    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                    backgroundImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                    iconlist: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "Quisque sed turpis vel lectus suscipit auctor",
                        "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
                    ],
                }}
                slideId={0}
                asVariant="warning"
                withColor={null}
                withAnimation={null}
                isHidden={false}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed data prop as null", () => {
        component.setProps({ data: null })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when data prop passed image as null", () => {
        let data = {
            title: "Neque porro quisquam est qui dolorem",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
            image: "",
            backgroundImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            iconlist: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Quisque sed turpis vel lectus suscipit auctor",
                "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
            ],
        }
        component.setProps({ data: data })
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
            backgroundColor: "#ffffff",
            slideHeaderTextColor: "#ffffff",
            slideHeaderBackgroundColor: "#ad292980",
            slideHeaderAccentColor: "#AD2929",
            iconListItemTextColor: "#ffffff",
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
