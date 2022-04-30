//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
<<<<<<< HEAD:src/components/__tests__/templates/PictureSingleSelect.test.jsx
import PictureSingleSelect from "../../Templates/PictureSingleSelect/PictureSingleSelect.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react"
describe("PictureSingleSelect", () => {
=======
import ExternalLink from "../../Templates/ExternalLink/ExternalLink.react";
import Button from "../../Buttons/Button/Button.react";

describe("ExternalLink", () => {
>>>>>>> c6f72b42c8f27efe95a4a3fdf6e3d50178a528ad:src/components/__tests__/templates/ExternalLink.test.jsx
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
<<<<<<< HEAD:src/components/__tests__/templates/PictureSingleSelect.test.jsx
            <PictureSingleSelect
=======
            <ExternalLink
>>>>>>> c6f72b42c8f27efe95a4a3fdf6e3d50178a528ad:src/components/__tests__/templates/ExternalLink.test.jsx
                data={{
                    title: "This is Title",
                    subtitle: "This is Subtitle",
                    question: "This is Question",
                    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
<<<<<<< HEAD:src/components/__tests__/templates/PictureSingleSelect.test.jsx
                    imageOpts: [
                        "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                        "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
                    ],
=======
                    paragraph: "this is paragraph",
>>>>>>> c6f72b42c8f27efe95a4a3fdf6e3d50178a528ad:src/components/__tests__/templates/ExternalLink.test.jsx
                    backgroundImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                }}
                slideId={0}
                asVariant="primary"
                asFloated="left"
                withColor={null}
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
    it('should render correctly when click ClickableImage', () => {
        component.find(ClickableImage).at(0).simulate('click');
        component.find(ClickableImage).at(1).simulate('click');
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
            subtitle: "This is Subtitle",
<<<<<<< HEAD:src/components/__tests__/templates/PictureSingleSelect.test.jsx
            imageOpts: [
                "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
            ],
            image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            question: "this is question",
=======
            link:"https/github.com",
            image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            paragraph: "this is paragraph",
>>>>>>> c6f72b42c8f27efe95a4a3fdf6e3d50178a528ad:src/components/__tests__/templates/ExternalLink.test.jsx
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
            subtitle: "This is Subtitle",
            image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
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
    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
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
            subtitle: "This is Subtitle",
            image: "",
            paragraph: "this is paragraph"
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    })
});
