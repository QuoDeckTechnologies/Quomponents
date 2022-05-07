import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import IconListTimeline from "../../Templates/IconListTimeline/IconListTimeline.react"

describe("IconListTimeline", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let imageClick = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <IconListTimeline
                data={{
                    title: "Lorem ipsum dolor sit amet",
                    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
                    image: { id: "header-image", extention: "" },
                    backgroundImage: { id: "background-image", extention: "" },
                    iconlist: [
                        {
                            image: { id: "iconlist-image-1", extention: "" },
                            text: "Neque porro quisquam est qui dolorem",
                        }
                    ],
                }}
                imageLibrary={[
                    {
                        id: "header-image",
                        image:
                            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                    },
                    {
                        id: "iconlist-image-1",
                        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
                    },
                    {
                        id: "background-image",
                        image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
                    }]}
                slideId={0}
                asFloated="left"
                withColor={null}
                withAnimation={null}
                isHidden={false}
                imageClick={imageClick}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when title and subtitle is not defined in data prop", () => {
        let data = {
            title: "",
            subtitle: "",
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when image is not defined in data prop", () => {
        let data = {
            title: "Neque porro quisquam est qui dolorem",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when clicked on image", () => {
        component.find(".qui-iconlisttime-image").simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" })
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

    it("should render correctly when passed asFloated prop as none", () => {
        component.setProps({ asFloated: "none" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            textColor: "#121212",
            backgroundColor: "#ffffff",
            accentColor: "#ad2929",
            slideHeaderTextColor: "#ffffff",
            slideHeaderAccentColor: "#AD2929",
            slideHeaderBackgroundColor: "#C98787",
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
