//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import Components
// -------------------------------------
import RankingOptions from "../../Templates/RankingOptions/RankingOptions.react";
import Button from "../../Buttons/Button/Button.react";
import OrderingList from "../../OrderingList/OrderingList/OrderingList.react"
import SlideHeader from "../../SlideHeader/SlideHeader.react";

describe("RankingOptions", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component, bullets;

    bullets = ["Item 1", "Item 2", "Item 3"];

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <RankingOptions
                data={{
                    backgroundImage: {
                        id: 'background-image',
                        extention: ""
                    },
                    question: "Question",
                    purpose: "quiz",
                    bullets: bullets
                }}
                imageLibrary={[{
                    id: 'background-image',
                    image: "test-image1.png"
                }, {
                    id: 'header-image',
                    image: "test-image2.png"
                }]}
                slideId={0}
                asVariant="primary"
                withColor={null}
                isHidden={false}
                isDisabled={false}
                onClick={jest.fn()}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            captionColor: "#ff0000",
            labelColor: "#000000",
            slideHeaderTextColor: "ff0000",
            slideHeaderAccentColor: "23ff00",
            slideHeaderBackgroundColor: "00ff00",
            buttonTextColor: "ff0023",
            buttonBackgroundColor: "ff0ff0",
            buttonHoverBackgroundColor: "ffff00",
            buttonHoverTextColor: "ff00ff",
            backgroundColor: "",
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

    it("should render correctly when passed answer props as null", () => {
        component.setProps({ answer: null })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as primary", () => {
        component.setProps({ asVariant: "primary" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as secondary", () => {
        component.setProps({ asVariant: "secondary" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as warning", () => {
        component.setProps({ asVariant: "warning" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as error", () => {
        component.setProps({ asVariant: "error" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed image prop as null", () => {
        let data = {
            title: "This is Title",
            subtitle: "This is Subtitle",
            question: "Question",
            purpose: "quiz",
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with withColor prop when hovered on Button", () => {
        const component = renderer.create(
            <Button
                withColor={{
                    buttonTextColor: "ff0023",
                    buttonBackgroundColor: "ff0ff0",
                    buttonHoverBackgroundColor: "ffff00",
                    buttonHoverTextColor: "ff00ff",
                }}
                onClick={jest.fn()}
            />
        );
        const tree = component.toJSON();
        act(() => {
            tree.props.onMouseEnter();
        });
    });

    it("should render correctly when passed backgroundImage prop as null and backgroundColor is passed", () => {
        let data = {
            title: "This is Title",
            subtitle: "This is Subtitle",
            question: "Question",
            purpose: "quiz",
        }
        let colors = {
            slideHeaderTextColor: "#FFFFFF",
            slideHeaderAccentColor: "#AD2929",
            slideHeaderBackgroundColor: "#ad292980",
            textBlockBackgroundColor: "#2d92a4",
            textBlockTextColor: "#fff",
            bulletBlockTextColor: "#ffffff",
            bulletBlockBackgroundColor: "#ad292980",
            backgroundColor: "#fff"
        }
        component.setProps({ data: data, withColor: colors })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed backgroundImage prop", () => {
        let data = {
            title: "This is Title",
            subtitle: "This is Subtitle",
            backgroundImage: {
                id: 'background-image',
                extention: ""
            },
            question: "Question",
            purpose: "quiz",
        }
        let imageLibrary = [{
            id: "background-image",
            image: 'test-image'
        }]
        let colors = {
            slideHeaderTextColor: "#FFFFFF",
            slideHeaderAccentColor: "#AD2929",
            slideHeaderBackgroundColor: "#ad292980",
            textBlockBackgroundColor: "#2d92a4",
            textBlockTextColor: "#fff",
            bulletBlockTextColor: "#ffffff",
            bulletBlockBackgroundColor: "#ad292980",
            backgroundColor: "#fff"
        }
        component.setProps({ data: data, withColor: colors, imageLibrary: imageLibrary })
        expect(component.exists()).toBe(true);
    });

    it("should render image instead of title and sutitle", () => {
        component.setProps({
            data: {
                title: "",
                subtitle: "",
                image: { id: "header-image", extension: "" },
            },
            imageLibrary: [{
                id: "header-image",
                image:
                    "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            }],
        });
        expect(component.find(".qui-ranking-options-image").props().src).toBe(
            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
        );
    });

    it("should render title and subtitle instead of image", () => {
        component.setProps({
            data: {
                title: "This is Title",
                subtitle: "This is Subtitle",
            },
        });
        expect(component.find(SlideHeader).exists()).toBe(true);
    });

    it("should pass the arranged array and return the arranged items with the function, when we click on submit button", () => {
        let trackInteraction = jest.fn();
        component.setProps({ onClick: jest.fn(), trackInteraction: trackInteraction })
        component.find(OrderingList).simulate('click', ["Item 2", "Item 3", "Item 1"]);
        expect(trackInteraction).toBeCalledWith(["Item 2", "Item 3", "Item 1"])
    })
});