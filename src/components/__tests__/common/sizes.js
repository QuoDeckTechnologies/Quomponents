import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Sizes", () => {
        it("should render correctly when sized as tiny", () => {
            component.setProps({ asSize: "tiny" });
            expect(component.find(".size-tiny").length).toBe(1);
        });

        it("should render correctly when sized as small", () => {
            component.setProps({ asSize: "small" });
            expect(component.find(".size-small").length).toBe(1);
        });

        it("should render correctly when sized as normal", () => {
            component.setProps({ asSize: "normal" });
            expect(component.find(".size-normal").length).toBe(1);
        });

        it("should render correctly when sized as big", () => {
            component.setProps({ asSize: "big" });
            expect(component.find(".size-big").length).toBe(1);
        });

        it("should render correctly when sized as huge", () => {
            component.setProps({ asSize: "huge" });
            expect(component.find(".size-huge").length).toBe(1);
        });

        it("should render correctly when sized as massive", () => {
            component.setProps({ asSize: "massive" });
            expect(component.find(".size-massive").length).toBe(1);
        });
    });
};

module.exports = sharedSpecs;
