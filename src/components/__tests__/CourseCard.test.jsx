//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import CourseCard from "../CourseCard/CourseCard.react";
import NuggetBlock from "../NuggetBlock/NuggetBlock.react";
import ArcMenu from "../ArcMenu/ArcMenu.react";
import IconBlock from "../IconBlock/IconBlock.react"

Object.assign(navigator, {
    clipboard: {
        writeText: () => { },
    },
});

describe("CourseCard", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component, content;
    content = {
        published: false,
        tags: [],
        courseType: "Gamified",
        courseName: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job",
        courseImage: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
        courseWrapperImage: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
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
            <CourseCard
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

    it("should simulate the NuggetBlock on click", () => {
        let nuggetBlock = component.find(NuggetBlock)
        nuggetBlock.simulate('click')
    })

    it("should simulate the ArcMenu on click", () => {
        let arcMenu = component.find(ArcMenu)
        arcMenu.simulate('click')
    })

    it("should copy the link when clicked on copy icon", () => {
        component.setProps({ content: { category: "Profiler", identifier: "XrPmy_MND" } })
        let iconBlock = component.find(IconBlock).at(1)
        iconBlock.simulate('click')
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith("https://www.quodeck.com/XrPmy_MND");
    });

    it("should show courseImage when passed courseImage in the Gamified Course Card", () => {
        let content = {
            courseType: "Gamified",
            courseImage: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg"
        }
        component.setProps({ content: content })
        expect(component.find(".qui-course-card-base-image").props().style.backgroundImage).toBe("url(https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg)")
    })

    it("should show courseWrapperImage when passed courseWrapperImage but not courseImage in the Gamified Course Card", () => {
        let content = {
            courseType: "Gamified",
            courseImage: "",
            courseWrapperImage: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg"
        }
        component.setProps({ content: content })
        expect(component.find(".qui-course-card-base-image").props().style.backgroundImage).toBe("url(https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg)")
    })

    it("should show default image when passed nothing in image in the Gamified Course Card", () => {
        let content = {
            courseType: "Gamified",
            courseImage: "",
            courseWrapperImage: ""
        }
        component.setProps({ content: content })
        expect(component.find(".qui-course-card-base-image").props().style.backgroundImage).toBe("url(default.jpeg)")
    })

    it("should show courseWrapperImage when passed courseWrapperImage but not courseImage in the Normal Course Card", () => {
        let content = {
            courseType: "Course",
            courseImage: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg"
        }
        component.setProps({ content: content })
        expect(component.find(".qui-course-card-base-image").props().style.backgroundImage).toBe("url(https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg)")
    })

    it("should show default image when passed nothing in image in the Nomal Course Card", () => {
        let content = {
            courseType: "Course",
            courseImage: ""
        }
        component.setProps({ content: content })
        expect(component.find(".qui-course-card-base-image").props().style.backgroundImage).toBe("url(default.jpeg)")
    })
});
