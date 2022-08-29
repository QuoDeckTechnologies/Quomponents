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
  hasValid("padding", args);
  hasValid("positions", args);

  hasValid("colors", args);

  hasValid("hidden", args);
  hasValid("disabled", args);
  hasValid("fluid", args);
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
        totalSlides={5}
        activeSlide={1}
        enableLeftNavigation={false}
        enableRightNavigation={false}
        asVariant="primary"
        asPadded="normal"
        asFloated="none"
        withColor={null}
        isFluid={false}
        isDisabled={false}
        isHidden={false}
        increment={increment}
        decrement={decrement}
      />
    );
  });

  it("should render correctly when clicked", () => {
    let component = shallow(<ProgressBar />);
    expect(component.find(".qui-progressbaricons").length).toBe(2);
  });

  it("should call decrement when click", () => {
    component = shallow(
      <ProgressBar
        leftIcon="fa fa-arrow-alt-circle-left"
        rightIcon="fa fa-arrow-alt-circle-right"
        totalSlides={5}
        onClick={decrement}
      />
    );
    let leftarrow = component.find(".qui-progressbaricons").at(1);
    leftarrow.simulate("click");
    leftarrow.simulate("click");
    component.find(".qui-progressbaricons").at(0).simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should call decrement when click", () => {
    component = shallow(
      <ProgressBar
        leftIcon="fa fa-arrow-alt-circle-left"
        rightIcon="fa fa-arrow-alt-circle-right"
        totalSlides={5}
        onClick={decrement}
      />
    );
    component.find(".qui-progressbaricons").at(0).simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should call increment when click", () => {
    component = shallow(
      <ProgressBar
        leftIcon="fa fa-arrow-alt-circle-left"
        rightIcon="fa fa-arrow-alt-circle-right"
        totalSlides={1}
        onClick={increment}
      />
    );
    component.find(".qui-progressbaricons").at(1).simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when enableRightNavigation is true and activeSlide is equal to totalSlides passed", () => {
    component.setProps({
      enableRightNavigation: true,
      totalSlides: 4,
      activeSlide: 4,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when enableLeftNavigation is true and activeSlide is equal to 1 passed", () => {
    component.setProps({
      enableLeftNavigation: true,
      activeSlide: 1,
    });
    expect(component.exists()).toBe(true);
  });
});
