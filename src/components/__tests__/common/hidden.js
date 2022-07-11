import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Hidden", () => {
        it("should show up when not hidden", () => {
            component.setProps({ isHidden: false });
            expect(component.find(".is-hidden").length).toBe(0);
        });
        it("should not be seen when hidden", () => {
            component.setProps({ isHidden: true });
            expect(component.find(".is-hidden").length).toBe(1);
        });
    });
};

module.exports = sharedSpecs;
