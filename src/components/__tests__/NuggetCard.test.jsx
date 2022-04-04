//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import NuggetCard from "../NuggetCard/NuggetCard.react";
import ArcMenu from "../ArcMenu/ArcMenu.react";
import IconBlock from "../IconBlock/IconBlock.react";
import BannerCard from "../Carousel/BannerCard/BannerCard.react";

Object.assign(navigator, {
    clipboard: {
        writeText: () => { },
    },
});

describe("NuggetCard", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component, content;
    content = {
        published: false,
        tags: [],
        category: "profiler",
        name: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job",
        image: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
        points: "200",
        identifier: "XrPmy_OAK",
        startDate: "26th Feb",
        endDate: "3rd May"
    };
    let mockFn = jest.fn();

    jest.spyOn(navigator.clipboard, "writeText");
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <NuggetCard
                content={content}
                status="published"
                asSize="normal"
                asPadded="normal"
                asFloated="inline"
                isHidden={false}
                isDisabled={false}
                onClick={mockFn}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as tiny", () => {
        component.setProps({ asSize: "tiny" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as small", () => {
        component.setProps({ asSize: "small" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as normal", () => {
        component.setProps({ asSize: "normal" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as big", () => {
        component.setProps({ asSize: "big" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as huge", () => {
        component.setProps({ asSize: "huge" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as massive", () => {
        component.setProps({ asSize: "massive" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asPadded prop as fitted", () => {
        component.setProps({ asPadded: "fitted" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asPadded prop as commpact", () => {
        component.setProps({ asPadded: "compact" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asPadded prop as normal", () => {
        component.setProps({ asPadded: "normal" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asPadded prop as relaxed", () => {
        component.setProps({ asPadded: "relaxed" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" })
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
    });

    it("should copy the link when clicked on copy icon", () => {
        component.setProps({ content: { category: "profiler", identifier: "XrPmy_MND" } })
        let iconBlock = component.find(IconBlock)
        iconBlock.simulate('click')
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith("https://www.quodeck.com/XrPmy_MND");
    });

    it("should simulate the ArcMenu on click", () => {
        let arcMenu = component.find(ArcMenu)
        arcMenu.simulate('click');
    })

    it("should show image when passed image", () => {
        let content = {
            category: "profiler",
            image: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg"
        }
        component.setProps({ content: content })
        expect(component.find(BannerCard).props().content.image).toBe("https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg")
    })

    it("should show default image when passed nothing in image", () => {
        let content = {
            category: "profiler",
            image: ""
        }
        component.setProps({ content: content })
        expect(component.find(BannerCard).props().content.image).toBe("default.jpeg")
    })

    it("should show nothing when passed nothing in category", () => {
        let content = {
            category: "",
        }
        component.setProps({ content: content })
    })
});
