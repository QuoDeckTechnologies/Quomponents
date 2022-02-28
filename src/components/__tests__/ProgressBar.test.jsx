//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import ProgressBar from "../ProgressBar/ProgressBar.react";

describe("ProgressBar", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let increment = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ProgressBar
                content={{
                    lefticon: "fa fa-arrow-alt-circle-left",
                    righticon: "fa fa-arrow-alt-circle-right",
                    labelArray: ["step1", "step2", "step3", "step4", "step5"],
                }}
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
                onClick={() => console.log("ProgressBar testing")}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when clicked", () => {
        let component = shallow(<ProgressBar onClick={() => console.log()} />);
        expect(component.find(".icon").length).toBe(2);
    });
    it("should call select when click", () => {
        let component = shallow(<ProgressBar
            content={{
                lefticon: "fa fa-arrow-alt-circle-left",
                righticon: "fa fa-arrow-alt-circle-right",
                labelArray: ["step1", "step2", "step3", "step4", "step5"],
            }}
            onClick={increment} />);
        let leftarrow = component.find(".icon").at(1);
        leftarrow.simulate("click");
        expect(increment).toBeCalled();
    })
});
