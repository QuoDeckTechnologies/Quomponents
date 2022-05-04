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
import Grid from "@mui/material/Grid"

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
                    image: {
                        extention: "",
                        id: "header-image",
                    },
                    backgroundImage: {
                        extention: "",
                        id: "background-image",
                    },
                    diptych: [{
                        image: {
                            extention: "",
                            id: "image-1",
                        }
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
    it("should render correctly with presenter is true", () => {
        // component.setProps({
        //     data: {
        //         presenter: {
        //             id: "presenter-image",
        //             extention: "",
        //         },
        //         backgroundImage: {
        //             id: "background-image",
        //             extention: "",
        //         },
        //         imageLibrary: [{
        //             id: "background-image",
        //             image: "test1.png"
        //         }, {
        //             id: "presenter-image",
        //             image: "test2.png"
        //         }]
        //     },
        // });
        console.log(component.find(Grid))
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
    it('should click on Clickable Image', () => {
        console.log(component.find(Grid).children())
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