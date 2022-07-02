import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Animations", () => {
        it("should render correctly when animation is a blank object", () => {
            let animation = {};
            component.setProps({ withAnimation: animation });
            expect(component.exists()).toBe(true);
        });
        it("should render correctly when animation is fully or partially defined", () => {
            let animation = {
                animation: "zoom",
                duration: 0.5,
                delay: 0,
            };
            component.setProps({ withAnimation: animation });
            expect(component.exists()).toBe(true);

            for (const key in animation) {
                component.setProps({
                    withAnimation: { animation: "zoom", [key]: animation[key] },
                });
                expect(component.exists()).toBe(true);
            }
        });
    });
};

module.exports = sharedSpecs;
