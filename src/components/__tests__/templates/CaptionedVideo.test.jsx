import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import CaptionedVideo from "../../Templates/CaptionedVideo/CaptionedVideo.react"

describe("CaptionedVideo", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <CaptionedVideo
                data={{
                    title: "Neque porro quisquam est qui dolorem",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
                    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                    backgroundImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                    video: "https://www.youtube.com/watch?v=NpEaa2P7qZI",
                    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
                }}
                slideId={0}
                isPresenter={false}
                withColor={null}
                withAnimation={null}
                isHidden={false}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed data props", () => {
        let data = {
            title: "Neque porro quisquam est qui dolorem",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
            image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            backgroundImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            video: "https://www.youtube.com/watch?v=NpEaa2P7qZI",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when empty data props passed", () => {
        let data = {
            title: "",
            subTitle: "",
            image: "",
            backgroundImage: "",
            video: "",
            caption: ""
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#E8E8E8",
            slideHeaderTextColor: "#ffffff",
            slideHeaderBackgroundColor: "#ad292980",
            slideHeaderAccentColor: "#AD2929",
            textBockTextColor: "#ffffff",
            textBockBackgroundColor: "#ad292980",
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
