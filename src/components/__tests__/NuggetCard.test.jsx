//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import NuggetCard from "../NuggetCard/NuggetCard.react";
import NuggetBlock from "../NuggetBlock/NuggetBlock.react";
import ArcMenu from "../ArcMenu/ArcMenu.react";
import IconBlock from "../IconBlock/IconBlock.react"

Object.assign(navigator, {
    clipboard: {
      writeText: () => {},
    },
  });

describe("NuggetCard", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component, content;
    content= {
        title: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job... ",
        baseImage: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
        tag: ["Tag1","Tag2"],
        nuggetName:"Profiler",
        nuggetStatu:"none",
        rewardPoint:"200",
        link:"https://www.quodeck.com"
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
                withAnimation={null}
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
    });

    it("should render call a function when clicked on NuggetBlock",()=>{
        let nuggetBlock = component.find(NuggetBlock)
        nuggetBlock.simulate('click')
    })  

    it("should render call a function when clicked on ArcMenu",()=>{
        let arcMenu = component.find(ArcMenu)
        arcMenu.simulate('click')
    })
  
    it("should call clipboard.writeText", () => {
        let iconBlock = component.find(IconBlock)
        iconBlock.simulate('click')
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith("https://www.quodeck.com");
      });

      it("should show default image when passed nothing in baseImage",()=>{
          let content ={
            baseImage:""
          }
          component.setProps({content:content})
      })
});
