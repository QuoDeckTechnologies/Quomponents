//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";

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
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
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

    it("should render correctly when passed asVariant prop as primary", () => {
        component.setProps({ asVariant: "primary" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as secondary", () => {
        component.setProps({ asVariant: "secondary" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as warning", () => {
        component.setProps({ asVariant: "warning" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as error", () => {
        component.setProps({ asVariant: "error" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as tiny", () => {
        component.setProps({ asSize: "tiny" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as small", () => {
        component.setProps({ asSize: "small" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as normal", () => {
        component.setProps({ asSize: "normal" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as big", () => {
        component.setProps({ asSize: "big" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as huge", () => {
        component.setProps({ asSize: "huge" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asSize prop as massive", () => {
        component.setProps({ asSize: "massive" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            accentColor: "#FF0000",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    });

});
