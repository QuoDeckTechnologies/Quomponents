import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Defaults", () => {
        it("should render correctly without props", () => {
            expect(component.exists()).toBe(true);
        });
    });
};

module.exports = sharedSpecs;
