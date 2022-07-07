import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Padding", () => {
        it("should render correctly with compact padding", () => {
            component.setProps({ asPadded: "compact" });
            expect(component.find(".pad-compact").length).toBe(1);
        });
        it("should render correctly with normal padding", () => {
            component.setProps({ asPadded: "normal" });
            expect(component.find(".pad-normal").length).toBe(1);
        });
        it("should render correctly with fitted padding", () => {
            component.setProps({ asPadded: "fitted" });
            expect(component.find(".pad-fitted").length).toBe(1);
        });
        it("should render correctly with relaxed padding", () => {
            component.setProps({ asPadded: "relaxed" });
            expect(component.find(".pad-relaxed").length).toBe(1);
        });

        
    });
};

module.exports = sharedSpecs;
