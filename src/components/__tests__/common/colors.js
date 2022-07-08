import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Colors", () => {
        it("should render correctly when colors is a blank object", () => {
            let colors = {};
            component.setProps({ withColor: colors });
            expect(component.exists()).toBe(true);

            for (const key in colors) {
                component.setProps({ withColor: { [key]: colors[key] } });
                expect(component.exists()).toBe(true);
            }
        });
        it("should render correctly when fully or partially colored", () => {
            let colors = {
                backgroundColor: "#FF0000",
                accentColor: "#FF0000",
                textColor: "#FF0000",
                hoverBackgroundColor: "#FF0000",
                hoverTextColor: "#FF0000",
            };
            component.setProps({ withColor: colors });
            expect(component.exists()).toBe(true);

            for (const key in colors) {
                component.setProps({ withColor: { [key]: colors[key] } });
                expect(component.exists()).toBe(true);
            }
        });
    });
};

module.exports = sharedSpecs;
