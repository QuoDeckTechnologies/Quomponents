import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Fluidity", () => {
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
