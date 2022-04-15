//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import RibbonMenu from "../RibbonMenu/RibbonMenu.react";
import RibbonDesignMenu from "../RibbonMenu/designMenu/RibbonDesignMenu.react";
import RibbonHomeMenu from "../RibbonMenu//homeMenu/RibbonHomeMenu.react";
import RibbonHtmlMenu from "../RibbonMenu/htmlMenu/RibbonHtmlMenu.react";
import RibbonToolMenu from "../RibbonMenu/toolsMenu/RibbonToolMenu.react"


describe("RibbonMenu", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <RibbonMenu
                asEmphasis="html"
                asPadded="normal"
                asFloated="inline"
                isHidden={false}
                isDisabled={false}
                onClick={() => { console.log("Testing RibbonMenu") }}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render HTML Menu when passed html in the tab props",()=>{
        expect(component.find(RibbonHtmlMenu).exists()).toBe(true)
    })
    it("should render Design Menu when passed design in the tab props",()=>{
        expect(component.find(RibbonDesignMenu).exists()).toBe(false)
        component.setProps({asEmphasis:"design"});
        expect(component.find(RibbonDesignMenu).exists()).toBe(true)
    })
    it("should render Tools Menu when passed tools in the tab props",()=>{
        expect(component.find(RibbonToolMenu).exists()).toBe(false)
        component.setProps({asEmphasis:"tools"})
        expect(component.find(RibbonToolMenu).exists()).toBe(true)
    })
    it("should render Home Menu when passed home in the tab props",()=>{
        expect(component.find(RibbonHomeMenu).exists()).toBe(false)
        component.setProps({asEmphasis:"home"})
        expect(component.find(RibbonHomeMenu).exists()).toBe(true)
    })
});