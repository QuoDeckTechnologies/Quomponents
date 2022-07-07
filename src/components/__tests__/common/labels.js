import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Labels", () => {
        it("should render correctly when a caption is fully defined", () => {
            let label = {
                format: "caption",
                content: "Test Content",
                textColor: "#000000",
            };
            component.setProps({
                withLabel: label,
            });
            expect(component.exists()).toBe(true);
            expect(component.find(".qui-caption").text()).toBe("Test Content");
        });
        it("should render correctly when a label is fully defined", () => {
            let label = {
                format: "label",
                content: "Test Content",
                textColor: "#000000",
            };
            component.setProps({
                withLabel: label,
            });
            expect(component.exists()).toBe(true);
            expect(component.find(".qui-label").text()).toBe("Test Content");
        });
        it("should render correctly when just caption content and format are defined", () => {
            let label = {
                format: "caption",
                content: "Test Content",
            };
            component.setProps({
                withLabel: label,
            });
            expect(component.exists()).toBe(true);
            expect(component.find(".qui-caption").text()).toBe("Test Content");
        });
        it("should render correctly when just label content and format are defined", () => {
            let label = {
                format: "label",
                content: "Test Content",
            };
            component.setProps({
                withLabel: label,
            });
            expect(component.exists()).toBe(true);
            expect(component.find(".qui-label").text()).toBe("Test Content");
        });
        it("should render nothing if label/caption content and format are not both defined", () => {
            let label = {
                content: "Test Content",
            };
            component.setProps({
                withLabel: label,
            });
            expect(component.exists()).toBe(true);
            expect(component.find(".qui-label").text()).toBe("");
            expect(component.find(".qui-caption").text()).toBe("");

            label = {
                format: "label",
            };
            component.setProps({
                withLabel: label,
            });
            expect(component.exists()).toBe(true);
            expect(component.find(".qui-label").text()).toBe("");
            expect(component.find(".qui-caption").text()).toBe("");
        });
    });
};

module.exports = sharedSpecs;
