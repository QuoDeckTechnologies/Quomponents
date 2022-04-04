//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import Slider from "../Slider/Slider.react";

describe("Upload", () => {
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
  it("should render correctly without throwing error", () => {
    component.find("Slider").simulate("change", 20);
    expect(component.exists()).toBe(true);
  });
});
