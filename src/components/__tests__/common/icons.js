import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Icons", () => {
        it("should render correctly when an icon is fully defined", () => {
            let icon = {
                icon: "fas fa-home",
                size: "1em",
                position: "left",
            };
            component.setProps({
                withIcon: icon,
            });
            expect(component.exists()).toBe(true);
            expect(component.find("i.qui-icon.fas.fa-home").length).toBe(1);
        });
        it("should render correctly when an icon is a blank object", () => {
            let icon = {};
            component.setProps({
                withIcon: icon,
            });
            expect(component.exists()).toBe(true);
        });

        it("should render an icon if just the icon name is specified", () => {
            let icon = {
                icon: "fas fa-home",
            };
            component.setProps({
                withIcon: icon,
            });
            expect(component.exists()).toBe(true);
            expect(component.find("i.qui-icon.fas.fa-home").length).toBe(1);
        });

        it("should not render an icon if the icon name is not specified", () => {
            let icon = {
                size: "1em",
                position: "left",
            };
            component.setProps({
                withIcon: icon,
            });
            expect(component.exists()).toBe(true);
            expect(component.find("i.qui-icon").length).toBe(0);
        });
    });
};

module.exports = sharedSpecs;
