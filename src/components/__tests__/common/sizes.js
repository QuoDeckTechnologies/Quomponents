import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(<args.target {...args.required} />);
    });

    describe("Valid Sizes", () => {
        it("should render correctly when sized as tiny", () => {
            component.setProps({ asSize: "tiny" });
            expect(component.find(".size-tiny").length).toBeGreaterThanOrEqual(1);
        });

        it("should render correctly when sized as small", () => {
            component.setProps({ asSize: "small" });
            expect(component.find(".size-small").length).toBeGreaterThanOrEqual(1);
        });

        it("should render correctly when sized as normal", () => {
            component.setProps({ asSize: "normal" });
            expect(component.find(".size-normal").length).toBeGreaterThanOrEqual(1);
        });

        it("should render correctly when sized as big", () => {
            component.setProps({ asSize: "big" });
            expect(component.find(".size-big").length).toBeGreaterThanOrEqual(1);
        });

        it("should render correctly when sized as huge", () => {
            component.setProps({ asSize: "huge" });
            expect(component.find(".size-huge").length).toBeGreaterThanOrEqual(1);
        });

        it("should render correctly when sized as massive", () => {
            component.setProps({ asSize: "massive" });
            expect(component.find(".size-massive").length).toBeGreaterThanOrEqual(1);
        });
    });
};

module.exports = sharedSpecs;
