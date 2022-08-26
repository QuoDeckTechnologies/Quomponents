//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import Slider from "../Slider/Slider.react";

describe("Slider", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Slider,
    required: {
      onClick: () => { },
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("disabled", args);
  hasValid("hidden", args);
  hasValid("fluid", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(<Slider initialValue={null} onClick={() => { }} />);
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
