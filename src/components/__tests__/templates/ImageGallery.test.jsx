//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import ImageGallery from "../../Templates/ImageGallery/ImageGallery.react"

describe("ImageGallery", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let onClick = jest.fn();
    let prevSlide = jest.fn();
    let nextSlide = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ImageGallery
                data={{
                    title: "Neque porro quisquam est qui dolorem",
                    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
                    image: {
                        id: "header-image",
                        extention: "",
                    },
                    backgroundImage: {
                        id: "background-image",
                        extention: "",
                    },
                    cards: [
                        {
                            image: { id: "text-image-1", extention: "" },
                            text: "one porro quisquam est qui dolorem",
                        }
                    ]
                }}
                imageLibrary={
                    [
                        {
                            id: "header-image",
                            image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                        },
                        {
                            id: "background-image",
                            image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                        },
                        {
                            id: "text-image-1",
                            image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                        },
                    ]}
                slideId={0}
                withColor={null}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
                onClick={onClick}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
            />
        );
    });
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when clicked on prev vector icon", () => {
        component.find(".qui-image-gallery-prev").simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when clicked on next vector icon", () => {
        component.find(".qui-image-gallery-next").simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when clicked on next vector icon 1", () => {
        component.find(".qui-image-gallery-next").simulate("click");
        component.find(".qui-image-gallery-prev").simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#f5efef",
            slideHeaderTextColor: "#ffffff",
            slideHeaderAccentColor: "#AD2929",
            slideHeaderBackgroundColor: "#AD292980",
            textBlockTextColor: "#454545",
            textBlockBackgroundColor: "#FFFF",
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

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    });
});