//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import CaptionedImage from "../../Templates/CaptionedImage/CaptionedImage.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react"
import SlideHeader from "../../SlideHeader/SlideHeader.react"

describe("CaptionedImage", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <CaptionedImage
                data={{
                    title: "This is Title",
                    subtitle: "This is Subtitle",
                    image: {
                        extention: "",
                        id: "header-image",
                    },
                    backgroundImage: {
                        extention: "",
                        id: "background-image",
                    },
                    data: {
                        caption: "caption",
                        image: {
                            extention: "",
                            id: "image-1",
                        }
                    },
                    imageLibrary: [{
                        id: "header-image",
                        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
                    }, {
                        id: "background-image",
                        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
                    }, {
                        id: "image-1",
                        image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
                    },],
                    caption: "caption",
                }}
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
    it('Test click event on first ClickableImage when passed presenter prop', () => {
        component.setProps({
            data: {
                data: {
                    caption: "caption",
                    image: {
                        id: 'image-1',
                        extention: 'png'
                    }
                },
                backgroundImage: {
                    extention: "",
                    id: "background-image"
                }
            },
            imageLibrary: [{ id: "background-image", image: "test.png" },
            { id: "image-1", image: "test.png" }],
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly without throwing error when CaptionedImage Images id is given in imageLibrary array", () => {
        component.setProps({
            data: {
                title: "test title",
                data: {
                    caption: "caption",
                    image: {
                        extention: "",
                        id: "image-1",
                    },
                },
            },
            imageLibrary: [
                { id: "image-1", image: "test.png" },
            ],
        });
        component.find(ClickableImage).simulate('click')
        expect(component.exists()).toBe(true);
    });
    it("should render correctly without throwing error when presenter id is given in imageLibrary array", () => {
        component.setProps({
            data: {
                title: "test title",
                data: {
                    caption: "caption",
                    image: {
                        extention: "",
                        id: "image-1",
                    },
                },
                presenter: {
                    extention: "",
                    id: "test",
                },
                backgroundImage: {
                    extention: "",
                    id: "background-image",
                }
            },
            imageLibrary: [
                { id: "test", image: "test.png" },
                { id: "background-image", image: "test2.png" },
                { id: "image-1", image: "test2.png" }],
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly without throwing error when presenter is passed and CaptionedImage Images id is given in imageLibrary array", () => {
        component.setProps({
            data: {
                presenter: {
                    extention: "",
                    id: "presenter-image"
                },
                data: {
                    caption: "caption",
                    image: {
                        extention: "",
                        id: "image-1",
                    },
                },
            },
            imageLibrary: [
                { id: "presenter-image", image: "test0.png" },
                { id: "image-1", image: "test.png" },],
        });
        component.find(ClickableImage).simulate('click')
        expect(component.exists()).toBe(true);
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
});
