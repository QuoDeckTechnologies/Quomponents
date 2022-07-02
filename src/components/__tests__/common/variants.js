import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Variants", () => {
        it("should render correctly when primary variant used", () => {
            component.setProps({ asVariant: "primary" });
            expect(component.find(".variant-primary").length).toBe(1);
            expect(component.find(".variant-primary-text").length).toBe(1);
        });

        it("should render correctly when secondary variant used", () => {
            component.setProps({ asVariant: "secondary" });
            expect(component.find(".variant-secondary").length).toBe(1);
            expect(component.find(".variant-secondary-text").length).toBe(1);
        });

        it("should render correctly when warning variant used", () => {
            component.setProps({ asVariant: "warning" });
            expect(component.find(".variant-warning").length).toBe(1);
            expect(component.find(".variant-warning-text").length).toBe(1);
        });

        it("should render correctly when error variant used", () => {
            component.setProps({ asVariant: "error" });
            expect(component.find(".variant-error").length).toBe(1);
            expect(component.find(".variant-error-text").length).toBe(1);
        });

        it("should render correctly when success variant used", () => {
            component.setProps({ asVariant: "success" });
            expect(component.find(".variant-success").length).toBe(1);
            expect(component.find(".variant-success-text").length).toBe(1);
        });
    });
};

module.exports = sharedSpecs;
