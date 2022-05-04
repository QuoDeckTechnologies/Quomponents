//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import ImageGrid from "../../Templates/ImageGrid/ImageGrid.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react"

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
                    backgroundImage: {
                        extention: "",
                        id: "background-image",
                    },
                    gridImages: [{
                        extention: "",
                        id: "image-1",
                    }
                    ],
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
    it("should render correctly with empty content", () => {
        component.setProps({
            data: {},
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with presenter is passed", () => {
        component.setProps({
            data: {
                presenter: {
                    id: "presenter",
                    extention: ""
                }
            },
            imageLibrary: [{
                id: "presenter",
                image: "test.png"
            }]
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with image prop is passed", () => {
        component.setProps({
            data: {
                image: {
                    extention: "",
                    id: "header-image",
                },
            },
            imageLibrary: [{
                id: "header-image",
                image: "test.png"
            }]
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with presenter is passed and click on ImageGrid", () => {
        component.setProps({
            data: {
                presenter: {
                    id: "presenter-image",
                    extention: "",
                },
                backgroundImage: {
                    id: "background-image",
                    extention: "",
                },
                gridImages: [
                    {
                        extention: "",
                        id: "image-1",
                    },
                    {
                        extention: "",
                        id: "image-2",
                    }, {
                        extention: "",
                        id: "image-3",
                    },
                    {
                        extention: "",
                        id: "image-4",
                    },
                ],
            },
            imageLibrary: [{
                id: "background-image",
                image: "test1.png"
            }, {
                id: "image-1",
                image: "test1.png"
            }, {
                id: "image-2",
                image: "image1.png"
            }, {
                id: "image-3",
                image: "image2.png"
            }, {
                id: "image-4",
                image: "imag3.png"
            }, {
                id: "presenter-image",
                image: "test2.png"
            }]
        });
        component.find(ClickableImage).at(1).simulate('click')
    });
    it("should render correctly with presenter is null and click on ImageGrid", () => {
        component.setProps({
            data: {
                gridImages: [
                    {
                        extention: "",
                        id: "image-1",
                    },
                    {
                        extention: "",
                        id: "image-2",
                    }, {
                        extention: "",
                        id: "image-3",
                    },
                    {
                        extention: "",
                        id: "image-4",
                    },
                ],
            },
            imageLibrary: [{
                id: "image-1",
                image: "test1.png"
            }, {
                id: "image-2",
                image: "image1.png"
            }, {
                id: "image-3",
                image: "image2.png"
            }, {
                id: "image-4",
                image: "imag3.png"
            },]
        });
        component.find(ClickableImage).at(0).simulate('click')
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
    it('should render when passed presenter prop', () => {
        component.setProps({
            data: {
                presenter: {
                    id: "presenter-image",
                    extention: "",
                },
                backgroundImage: {
                    id: "background-image",
                    extention: "",
                }
            },
            imageLibrary: [{
                id: "presenter-image",
                image: "test-1.png"
            }, {
                id: "background-image",
                image: "test-2.png"
            }]
        })
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