import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Positioning", () => {
        it("should render correctly when floated left", () => {
            component.setProps({ asFloated: "left" });
            expect(component.find(".float-left").length).toBe(1);
        });

        it("should render correctly when floated right", () => {
            component.setProps({ asFloated: "right" });
            expect(component.find(".float-right").length).toBe(1);
        });

        it("should render correctly when displayed inline", () => {
            component.setProps({ asFloated: "inline" });
            expect(component.find(".float-inline").length).toBe(1);
        });

        it("should render correctly with no float", () => {
            component.setProps({ asFloated: "none" });
            expect(component.find(".float-none").length).toBe(1);
        });
    });
};

module.exports = sharedSpecs;
