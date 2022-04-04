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
    component = shallow(<Slider onClick={(value) => console.log(value)} />);
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  
  it("should render correctly without throwing error when it is slided", () => {
    component.find("Slider").simulate("change", 20);
    expect(component.exists()).toBe(true);
  });
});
