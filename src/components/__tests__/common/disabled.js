import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Disabling", () => {
        it("should be unclickable when disabled", () => {
            component.setProps({ isDisabled: true });
            expect(component.find(".is-disabled").length).toBe(1);
        });
        it("should be clickable when not disabled", () => {
            component.setProps({ isDisabled: false });
            expect(component.find(".is-disabled").length).toBe(0);
        });
    });
};

module.exports = sharedSpecs;
