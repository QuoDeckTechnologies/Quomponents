import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Toggles", () => {
        it("should show up when not hidden", () => {
            component.setProps({ isHidden: false });
            expect(component.find(".is-hidden").length).toBe(0);
        });
        it("should not be seen when hidden", () => {
            component.setProps({ isHidden: true });
            expect(component.find(".is-hidden").length).toBe(1);
        });
        
        it("should be unclickable when disabled", () => {
            component.setProps({ isDisabled: true });
            expect(component.find(".is-disabled").length).toBe(1);
        });
        it("should be clickable when not disabled", () => {
            component.setProps({ isDisabled: false });
            expect(component.find(".is-disabled").length).toBe(0);
        });
        
        it("should be unclickable when loading", () => {
            component.setProps({ isLoading: true });
            expect(component.find(".is-loading").length).toBe(1);
        });
        it("should be clickable when not loading", () => {
            component.setProps({ isLoading: false });
            expect(component.find(".is-loading").length).toBe(0);
        });
        
        it("should be normal width when not fluid", () => {
            component.setProps({ isFluid: false });
            expect(component.find(".is-fluid").length).toBe(0);
        });
        it("should be full width when fluid", () => {
            component.setProps({ isFluid: true });
            expect(component.find(".is-fluid").length).toBeGreaterThan(1);
        });
    });
};

module.exports = sharedSpecs;
