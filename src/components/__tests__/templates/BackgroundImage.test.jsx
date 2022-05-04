//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import BackgroundImage from "../../Templates/BackgroundImage/BackgroundImage.react";

describe("BackgroundImage", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <BackgroundImage
                data={{
                    title: "This is Title",
                    paragraph: "this is paragraph",
                    backgroundImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                }}
                slideId={0}
                asVariant="primary"
                withColor={null}
                isHidden={false}
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
    it("should render correctly when passed withColor props if backgroundImage pass from data props", () => {
        let data = {
            title: "This is Title",
            paragraph: "this is paragraph",
            backgroundImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        }
        let colors = {
            backgroundColor: "",
            slideHeaderTextColor: "ff0000",
            slideHeaderAccentColor: "23ff00",
            slideHeaderBackgroundColor: "00ff00",
            captionTextColor: "ff0000",
            captionAccentColor: "23ff00",
            captionBackgroundColor: "00ff00",
        }
        component.setProps({ data: data })
        component.setProps({ withColor: colors, data: data })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed withColor props if backgroundImage removed from data props", () => {
        let data = {
            title: "This is Title",
            paragraph: "this is paragraph",
            backgroundImage: "",
        }
        let colors = {
            backgroundColor: "#F4BFCB",
            slideHeaderTextColor: "ff0000",
            slideHeaderAccentColor: "23ff00",
            slideHeaderBackgroundColor: "00ff00",
            captionTextColor: "ff0000",
            captionAccentColor: "23ff00",
            captionBackgroundColor: "00ff00",
        }
        component.setProps({ data: data })
        component.setProps({ withColor: colors, data: data })
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
    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed answer props as null", () => {
        component.setProps({ answer: null })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asVariant prop as primary", () => {
        component.setProps({ asVariant: "primary" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asVariant prop as secondary", () => {
        component.setProps({ asVariant: "secondary" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asVariant prop as warning", () => {
        component.setProps({ asVariant: "warning" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asVariant prop as error", () => {
        component.setProps({ asVariant: "error" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed image prop as null", () => {
        let data = {
            title: "This is Title",
            paragraph: "this is paragraph"
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    })
});
