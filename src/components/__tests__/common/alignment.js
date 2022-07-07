import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Alignment", () => {
        it("should render correctly when left aligned", () => {
            component.setProps({ asAligned: "left" });
            expect(component.find(".left-aligned").length).toBe(1);
        });

        it("should render correctly when right aligned", () => {
            component.setProps({ asAligned: "right" });
            expect(component.find(".right-aligned").length).toBe(1);
        });
        it("should render correctly when center aligned", () => {
            component.setProps({ asAligned: "center" });
            expect(component.find(".center-aligned").length).toBe(1);
        });
    });
};

module.exports = sharedSpecs;
