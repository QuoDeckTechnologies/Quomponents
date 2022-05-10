//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import ZoomableImage from "../../Templates/ZoomableImage/ZoomableImage.react";
import SlideHeader from "../../SlideHeader/SlideHeader.react";

describe("ZoomableImage", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const pauseFor = (milliseconds) =>
        new Promise((resolve) => setTimeout(resolve, milliseconds));
    let toggleFullscreen = jest.fn()
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ZoomableImage
                data={{
                    title: "This is Title",
                    subtitle: "This is Subtitle",
                    image: {
                        extention: "",
                        id: "image-1",
                    },
                    zoomableImage: {
                        extention: "",
                        id: "header-image",
                    },
                    backgroundImage: {
                        extention: "",
                        id: "background-image",
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
                onClick={() => {
                    toggleFullscreen
                }}
            />
        );
    });
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should call toggleFullScreen when click", () => {
        component = shallow(<ZoomableImage
            data={{
                title: "This is Title",
                subtitle: "This is Subtitle",
                zoomableImage: {
                    extention: "",
                    id: "header-image",
                },
                presenter: {
                    extention: "",
                    id: "image",
                },
                imageLibrary: [{
                    id: "header-image",
                    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
                }, {
                    id: "image",
                    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
                }],
                caption: "caption",
            }}
            slideId={0}
            onClick={() => {
                toggleFullscreen
            }}
        />);
        component.find("Button").simulate("click");
        component.find("Button").simulate("click");
    });

    it("should call toggleFullScreen when click", async () => {
        component = shallow(<ZoomableImage
            data={{
                title: "This is Title",
                subtitle: "This is Subtitle",
                zoomableImage: {
                    extention: "",
                    id: "header-image",
                },
                imageLibrary: [{
                    id: "header-image",
                    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
                }, {
                    id: "image",
                    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
                }],
                caption: "caption",
            }}
            slideId={0}
            onClick={() => {
                toggleFullscreen
            }}
        />);
        component.find("Button").simulate("click");
        await pauseFor(2000);
        component.find("Button").simulate("click");
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
    it("should render correctly without throwing error when presenter id is given in imageLibrary array", () => {
        component.setProps({
            data: {
                title: "test title",
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
                { id: "background-image", image: "test2.png" }],
        });
        expect(component.exists()).toBe(true);
    });

    it('should render slideHeader component instead of  header image', () => {
        expect(component.find(SlideHeader).exists()).toBe(false)
        let data = {
            title: "This is Title",
            subtitle: "This is Subtitle",
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