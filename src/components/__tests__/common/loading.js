import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Loading", () => {
        it("should be unclickable when loading", () => {
            component.setProps({ isLoading: true });
            expect(component.find(".is-loading").length).toBe(1);
        });
        it("should be clickable when not loading", () => {
            component.setProps({ isLoading: false });
            expect(component.find(".is-loading").length).toBe(0);
        });
    });
};

module.exports = sharedSpecs;
