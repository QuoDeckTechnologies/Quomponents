//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import ImageGrid from "../../Templates/ImageGrid/ImageGrid.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react"
import SlideHeader from "../../SlideHeader/SlideHeader.react"

describe("ImageGrid", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ImageGrid
                data={{
                    title: "This is Title",
                    subtitle: "This is Subtitle",
                    headerImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                    backgroundImage: "",
                    ImageGrid: [
                        "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                        "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
                    ],
                    presenterTitle: "",
                    presenterSubtitle: "",
                    presenterCaption: "",
                    presenterBackgroundImage: "",
                    presenterImage: "",
                    caption: "caption",
                }}
                isPresenter={false}
                slideId={0}
                asVariant="primary"
                withColor={null}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
                onClick={(e) => {
                    console.log(e);
                }}
            />
        );
    });
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with empty content", () => {
        component.setProps({
            data: {},
        });
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
    })
    it('should render slideHeader component instead of  header image', () => {
        expect(component.find(SlideHeader).exists()).toBe(false)
        let data = {
            title: "This is Title",
            subtitle: "This is Subtitle",
            headerImage: "",
        }
        component.setProps({ data: data })
        expect(component.find(SlideHeader).exists()).toBe(true)
    });
    it("should render correctly when passed withColor props", () => {
        let colors = {
            slideHeaderTextColor: "#FFFFFF",
            slideHeaderAccentColor: "#AD2929",
            slideHeaderBackgroundColor: "#ad292980",
            textBlockBackgroundColor: "#2d92a4",
            textBlockTextColor: "#fff",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed data as null", () => {
        component.setProps({ data: {} })
        expect(component.exists()).toBe(true);
    })
    it("should click on Clickable Image", () => {
      component.setProps({isPresenter:true})
      component.find(ClickableImage).simulate('click')
    })
    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    })
});