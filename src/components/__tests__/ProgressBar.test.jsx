//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import ProgressBar from "../ProgressBar/ProgressBar.react";

describe("ProgressBar", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: ProgressBar,
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("sizes", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);

    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component;
    let increment = jest.fn();
    let decrement = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <ProgressBar
                leftIcon="fa fa-arrow-alt-circle-left"
                rightIcon="fa fa-arrow-alt-circle-right"
                count={5}
                asVariant="primary"
                asSize="normal"
                withColor={{
                    backgroundColor: "red",
                    accentColor: "blue",
                    textColor: "#b60d17",
                    lineColor: "#E82E19",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                isDisabled={false}
                isHidden={false}
            />
        );
    });
    it("should render correctly when clicked", () => {
        let component = shallow(<ProgressBar />);
        expect(component.find(".qui-progressbaricons").length).toBe(2);
    });
    it("should call decrement when click", () => {
        component = shallow(<ProgressBar
            leftIcon="fa fa-arrow-alt-circle-left"
            rightIcon="fa fa-arrow-alt-circle-right"
            count={5}
            onClick={decrement} />);
        let leftarrow = component.find(".qui-progressbaricons").at(1);
        leftarrow.simulate("click");
        leftarrow.simulate("click");
        component.find(".qui-progressbaricons").at(0).simulate("click");
    });
    it("should call decrement when click", () => {
        component = shallow(<ProgressBar
            leftIcon="fa fa-arrow-alt-circle-left"
            rightIcon="fa fa-arrow-alt-circle-right"
            count={5}
            onClick={decrement} />);
        component.find(".qui-progressbaricons").at(0).simulate("click");
    });
    it("should call increment when click", () => {
        component = shallow(<ProgressBar
            leftIcon="fa fa-arrow-alt-circle-left"
            rightIcon="fa fa-arrow-alt-circle-right"
            count={1}
            onClick={increment} />);
        component.find(".qui-progressbaricons").at(1).simulate("click");
    });
});
