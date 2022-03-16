//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import IconLink from "../Buttons/IconLink/IconLink.react";
//--------------------------------------
// Import Components
// -------------------------------------
import RibbonHomeMenu from "../RibbonMenu/RibbonHomeMenu.react";



describe("RibbonMenu", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component, toggleBackChecked,toggleNextChecked;
    toggleBackChecked =jest.fn();
    toggleNextChecked = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <RibbonHomeMenu
            toggleBackChecked={toggleBackChecked}
            toggleNextChecked={toggleNextChecked}
            onClick={()=>{console.log("Testing RibbonHomeMenu")}}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should call function of Enable Back Arrow",()=>{
        let backArrowText = component.find(IconLink).at(8)
        let backArrowIcon = component.find("div").at(32)
        console.log(backArrowIcon)
        backArrowText.simulate('click');
        backArrowIcon.simulate('click')
        toggleBackChecked()
        expect(toggleBackChecked).toBeCalled()
    })

});