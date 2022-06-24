//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import Slider from "../Slider/Slider.react";

describe("Slider", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(<Slider initialValue={null} onClick={() => {}} />);
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isCircular props is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props is false", () => {
    component.setProps({
      isDisabled: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props is true", () => {
    component.setProps({
      isDisabled: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when it is slided", () => {
    component.setProps({
      initialValue: 20,
    });
    component
      .find(".qui-slider-container")
      .children(0)
      .simulate("change", { target: { value: 30 } });
    expect(component.exists()).toBe(true);
  });
});
