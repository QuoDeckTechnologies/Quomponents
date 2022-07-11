import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Popover", () => {
        it("should render correctly when a popover is fully defined", () => {
            let label = {
                format: "popover",
                content: "Test Content",
                textColor: "#000000",
            };
            component.setProps({
                withLabel: label,
            });
            expect(component.exists()).toBe(true);
            expect(component.find(".qui-popover").text()).toBe("Test Content");
        });
        
        it("should render correctly when just popover content and format are defined", () => {
            let label = {
                format: "popover",
                content: "Test Content",
            };
            component.setProps({
                withLabel: label,
            });
            expect(component.exists()).toBe(true);
            expect(component.find(".qui-popover").text()).toBe("Test Content");
        });
        it("should render nothing if popover content and format are not both defined", () => {
            let label = {
                content: "Test Content",
            };
            component.setProps({
                withLabel: label,
            });
            expect(component.exists()).toBe(true);
            expect(component.find(".qui-popover").text()).toBe("");

            label = {
                format: "popover",
            };
            component.setProps({
                withLabel: label,
            });
            expect(component.exists()).toBe(true);
            expect(component.find(".qui-popover").text()).toBe("");
        });
    });
};

module.exports = sharedSpecs;
